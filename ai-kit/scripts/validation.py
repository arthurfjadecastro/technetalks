"""Validate the deliberately small Markdown continuity contract and asset inventory."""
from datetime import datetime
import hashlib
import json
from pathlib import Path
import re

STATUSES = {'NOT_STARTED': ' ', 'IN_PROGRESS': '~', 'BLOCKED': '?', 'READY_FOR_REVIEW': 'R', 'DONE': 'x'}
REQUIRED = ('README.md', 'DECISIONS.md', 'CURRENT_STATE.md', 'BACKLOG.md', 'HANDOFF.md',
            'WORKLOG.md', 'CHANGELOG.md', 'AGENTS.md', 'CLAUDE.md', '.github/copilot-instructions.md')


def field(text, name):
    match = re.search(r'^- ' + re.escape(name) + r': (.+)$', text, re.M)
    return match.group(1).strip() if match else ''


def validate(root: Path) -> list[str]:
    errors = []
    documents = {}
    for name in REQUIRED:
        path = root / name
        if not path.is_file():
            errors.append(f'Arquivo obrigatório ausente: {name}')
        else:
            documents[name] = path.read_text(encoding='utf-8')
    if errors:
        return errors
    tasks = {}
    for match in re.finditer(r'^## \[([ ~?Rx])\] ([A-Z][A-Z0-9]*-\d+) — ([^\n]+)\n(.*?)(?=^## |\Z)', documents['BACKLOG.md'], re.M | re.S):
        marker, task, title, body = match.groups()
        status = field(body, 'Status')
        if task in tasks:
            errors.append(f'ID duplicado: {task}')
        tasks[task] = status
        if status not in STATUSES or STATUSES[status] != marker:
            errors.append(f'Status/checkbox inválido no backlog: {task}')
    if not tasks:
        errors.append('Backlog sem tarefas no formato documentado')
    state = documents['CURRENT_STATE.md']
    task = field(state, 'Tarefa').split(' — ')[0]
    status = field(state, 'Status')
    if task not in tasks:
        errors.append(f'Tarefa atual ausente do backlog: {task}')
    elif tasks[task] != status:
        errors.append(f'Status divergente entre estado e backlog: {task}')
    if status not in STATUSES:
        errors.append('Status inválido no estado')
    for name in ('Agente', 'Autorização', 'Arquivos em edição', 'Próxima ação'):
        if not field(state, name):
            errors.append(f'Campo ausente no estado: {name}')
    try:
        if datetime.fromisoformat(field(state, 'Atualizado em')).utcoffset() is None:
            raise ValueError('sem fuso')
    except ValueError:
        errors.append('Data/hora do estado deve incluir fuso ISO 8601')
    if status != 'IN_PROGRESS' and field(state, 'Arquivos em edição') != 'nenhum':
        errors.append('Estado sem trabalho ativo deve liberar arquivos em edição')
    if status == 'BLOCKED' and not field(state, 'Bloqueio'):
        errors.append('BLOCKED exige motivo e condição de desbloqueio no campo Bloqueio')
    if task not in documents['HANDOFF.md']:
        errors.append('HANDOFF não referencia a tarefa atual')
    entries = re.findall(r'^## .*?\| ([A-Z][A-Z0-9]*-\d+) \|', documents['WORKLOG.md'], re.M)
    headings = re.findall(r'^## (.+)$', documents['WORKLOG.md'], re.M)
    if len(entries) != len(headings):
        errors.append('Toda entrada de WORKLOG deve conter horário | ID | descrição')
    for heading in headings:
        try:
            if datetime.fromisoformat(heading.split(' | ')[0]).utcoffset() is None:
                raise ValueError('sem fuso')
        except ValueError:
            errors.append('WORKLOG deve usar horário ISO 8601 com fuso')
    if not entries:
        errors.append('WORKLOG sem entradas com ID')
    for ref in entries:
        if ref not in tasks:
            errors.append(f'WORKLOG referencia ID desconhecido: {ref}')
    manifest_path = root / '.ai-kit.json'
    if not manifest_path.is_file():
        errors.append('Manifesto .ai-kit.json ausente')
        return errors
    try:
        manifest = json.loads(manifest_path.read_text(encoding='utf-8'))
        required = {'schema_version', 'kit_version', 'project_name', 'created_at', 'mattpocock', 'files'}
        if not isinstance(manifest, dict) or set(manifest) != required:
            raise ValueError('campos obrigatórios/desconhecidos')
        for name in ('kit_version', 'project_name', 'created_at'):
            if not isinstance(manifest[name], str) or not manifest[name].strip():
                raise ValueError(f'{name} deve ser texto não vazio')
        if datetime.fromisoformat(manifest['created_at']).utcoffset() is None:
            raise ValueError('created_at deve conter fuso')
        if manifest['mattpocock'] is not None and not isinstance(manifest['mattpocock'], dict):
            raise ValueError('mattpocock deve ser objeto ou null')
        if manifest.get('schema_version') != 1 or not isinstance(manifest.get('files'), dict) or not manifest['files']:
            raise ValueError('schema/inventário inválido')
        for relative, expected in manifest['files'].items():
            if not isinstance(expected, str) or not re.fullmatch('[0-9a-f]{64}', expected):
                errors.append(f'Checksum inválido no manifesto: {relative}')
                continue
            path = root / relative
            if Path(relative).is_absolute() or '..' in Path(relative).parts or not path.resolve().is_relative_to(root.resolve()):
                errors.append(f'Caminho inválido no manifesto: {relative}')
                continue
            if not path.is_file() or hashlib.sha256(path.read_bytes()).hexdigest() != expected:
                errors.append(f'Recurso ausente ou alterado: {relative}')
    except (ValueError, TypeError, OSError) as exc:
        errors.append(f'Manifesto inválido: {exc}')
    return errors
