"""Portable AI project bootstrap. Python 3.10+, no runtime dependencies."""
from __future__ import annotations

import argparse
from datetime import datetime
import hashlib
import json
from pathlib import Path
import re
import shutil
import sys

from validation import validate

KIT = Path(__file__).resolve().parents[1]
VERSION = '1.1.0'
RECORDS = {'README.md', 'AGENTS.md', 'CLAUDE.md', 'DECISIONS.md', 'CURRENT_STATE.md',
           'BACKLOG.md', 'HANDOFF.md', 'WORKLOG.md', 'CHANGELOG.md', 'CONTEXT.md',
           '.github/copilot-instructions.md'}


def digest(data: bytes) -> str:
    return hashlib.sha256(data).hexdigest()


def tree(source: Path, prefix: str = '') -> dict[str, bytes]:
    result = {}
    for path in sorted(source.rglob('*')):
        if any(part in {'__pycache__', '.git'} for part in path.relative_to(source).parts):
            continue
        if path.is_symlink():
            raise ValueError(f'Symlink na origem: {path}')
        if path.is_file():
            result[(Path(prefix) / path.relative_to(source)).as_posix()] = path.read_bytes()
    return result


def safe_path(root: Path, relative: str) -> Path:
    path = root / relative
    if Path(relative).is_absolute() or '..' in Path(relative).parts or path == root:
        raise ValueError(f'Caminho inválido: {relative}')
    if not path.resolve().is_relative_to(root.resolve()):
        raise ValueError(f'Caminho fora do destino: {relative}')
    # Reject links even when they point within the root: ownership is ambiguous.
    for parent in [path, *path.parents]:
        if parent == root.parent:
            break
        if parent.is_symlink() or (hasattr(parent, 'is_junction') and parent.is_junction()):
            raise ValueError(f'Link no destino: {relative}')
    return path


def load_manifest(dest: Path) -> dict:
    path = safe_path(dest, '.ai-kit.json')
    if not path.exists():
        return {}
    value = json.loads(path.read_text(encoding='utf-8'))
    if value.get('schema_version') != 1 or not isinstance(value.get('files'), dict):
        raise ValueError('Manifesto .ai-kit.json inválido')
    return value


def preflight(dest: Path, files: dict[str, bytes], preserved: set[str]) -> list[str]:
    conflicts = []
    for relative, content in files.items():
        path = safe_path(dest, relative)
        if path.exists() and (not path.is_file() or
                              (relative not in preserved and path.read_bytes() != content)):
            conflicts.append(relative)
        for parent in path.parents:
            if parent == dest.parent:
                break
            if parent.exists() and not parent.is_dir():
                conflicts.append(relative)
    if conflicts:
        raise ValueError('Conflitos; nenhum arquivo foi escrito: ' + ', '.join(sorted(set(conflicts))))
    return [name for name in files if not (dest / name).exists()]


def write_new(dest: Path, files: dict[str, bytes], names: list[str]) -> None:
    for name in names:
        path = safe_path(dest, name)
        path.parent.mkdir(parents=True, exist_ok=True)
        # Exclusive create also protects against a race after preflight.
        with path.open('xb') as handle:
            handle.write(files[name])


def claude_adapter(name: str, description: str) -> bytes:
    return (f'---\nname: {name}-claude\ndescription: {description}\n---\n\n'
            f'Leia e aplique [a skill canônica](../../../.agents/skills/{name}/SKILL.md). '
            'Resolva scripts e referências a partir da pasta canônica.\n').encode('utf-8')


def render_templates(name: str, timestamp: str, runtime: str) -> dict[str, bytes]:
    values = {'PROJECT_NAME': name, 'TIMESTAMP': timestamp, 'TASK_ID': 'AI-000', 'RUNTIME': runtime}
    result = {}
    for path, data in tree(KIT / 'assets/templates').items():
        text = data.decode('utf-8')
        for key, value in values.items():
            text = text.replace('{{' + key + '}}', value)
        result[path.removesuffix('.tmpl')] = text.encode('utf-8')
    return result


def init_project(args) -> int:
    dest = Path(args.destination).expanduser().resolve()
    if not args.name.strip() or any(c in args.name for c in '\r\n'):
        raise ValueError('Nome deve ser uma linha não vazia')
    old = load_manifest(dest)
    timestamp = old.get('created_at', datetime.now().astimezone().isoformat(timespec='seconds'))
    if old and old.get('project_name') != args.name:
        raise ValueError('Nome difere da instalação existente; preserve o nome registrado')
    runtime = KIT.relative_to(dest).as_posix() if KIT.is_relative_to(dest) else 'tools/ai-kit'
    files = render_templates(args.name, timestamp, runtime)
    files.update(tree(KIT, runtime))
    files.update(tree(KIT / 'assets/skills', '.agents/skills'))
    files['.claude/skills/project-continuity-claude/SKILL.md'] = claude_adapter(
        'project-continuity', 'Retomar ou encerrar o trabalho usando o estado persistido deste projeto.')
    matt = None
    if not args.without_matt:
        from vendor import matt_files
        upstream, matt = matt_files(KIT, args.matt_source)
        files.update(upstream)
    if old and old.get('mattpocock') != matt:
        raise ValueError('Perfil Matt Pocock difere da instalação existente; não altere implicitamente')
    preserved = (RECORDS | {p for p in files if p.startswith('docs/') or p.startswith('.scratch/')}) if (old or args.adopt_records) else set()
    if KIT.is_relative_to(dest):
        # Self-hosted: the runtime is this repository's own source, so it stays
        # editable instead of being frozen by the inventory it generates.
        preserved |= {p for p in files if p == runtime or p.startswith(runtime + '/')}
    new_names = preflight(dest, files, preserved)
    if old:
        # Fail on removed/modified installed static assets before attempting repairs.
        errors = validate(dest)
        if errors:
            raise ValueError('Instalação existente inconsistente: ' + '; '.join(errors))
    manifest = {'schema_version': 1, 'kit_version': VERSION, 'project_name': args.name,
                'created_at': timestamp, 'mattpocock': matt,
                'files': {p: digest(data) for p, data in files.items() if p not in preserved and p not in RECORDS
                          and not p.startswith(('docs/', '.scratch/'))}}
    if old and old != manifest:
        raise ValueError('Runtime ou inventário mudou; compare a atualização em um destino vazio')
    print(f'{"PREVIEW" if args.dry_run else "INIT"}: {dest}; {len(new_names)} arquivos novos')
    if args.dry_run:
        print('\n'.join(new_names))
        return 0
    if not new_names and old:
        print('Instalação já atualizada; nenhuma alteração.')
        return 0
    initial = [n for n in ('CURRENT_STATE.md', 'BACKLOG.md') if n in new_names]
    write_new(dest, files, initial)
    write_new(dest, files, [n for n in new_names if n not in initial])
    if not old:
        write_new(dest, {'.ai-kit.json': (json.dumps(manifest, indent=2, ensure_ascii=False) + '\n').encode()}, ['.ai-kit.json'])
    errors = validate(dest)
    if errors:
        raise ValueError('Arquivos criados; validação pendente (consulte estado IN_PROGRESS): ' + '; '.join(errors))
    if 'CURRENT_STATE.md' in initial and 'BACKLOG.md' in initial:
        for relative in initial:
            path = dest / relative
            content = path.read_text(encoding='utf-8').replace('IN_PROGRESS', 'DONE').replace('[~]', '[x]')
            if relative == 'CURRENT_STATE.md':
                content = re.sub(r'^- Arquivos em edição:.*$', '- Arquivos em edição: nenhum', content, flags=re.M)
            path.write_bytes(content.encode('utf-8'))
        with (dest / 'WORKLOG.md').open('ab') as handle:
            handle.write((f'\n## {timestamp} | AI-000 | Bootstrap validado\n\n'
                          'Validação estrutural e integridade executadas com sucesso. '
                          'Escopo de produto e publicação aguardam autorização própria.\n').encode('utf-8'))
    errors = validate(dest)
    if errors:
        raise ValueError('; '.join(errors))
    print('Validação concluída. Git/commit/push não executados pelo instalador.')
    return 0


def install_global(args) -> int:
    dest = Path(args.home).expanduser().resolve()
    files = tree(KIT, '.agents/skills/project-bootstrap')
    files['.claude/skills/project-bootstrap-claude/SKILL.md'] = claude_adapter(
        'project-bootstrap', 'Preparar novos projetos com o kit reutilizável e Matt Pocock por padrão.')
    names = preflight(dest, files, set())
    print(f'{"PREVIEW" if args.dry_run else "GLOBAL"}: {dest}; {len(names)} arquivos novos')
    if not args.dry_run:
        write_new(dest, files, names)
    return 0


def main(argv=None) -> int:
    # Pipe encoding on Windows otherwise depends on the user's console locale.
    for stream in (sys.stdout, sys.stderr):
        if hasattr(stream, 'reconfigure'):
            stream.reconfigure(encoding='utf-8')
    parser = argparse.ArgumentParser(description=__doc__)
    commands = parser.add_subparsers(dest='command', required=True)
    init = commands.add_parser('init', help='Criar padrões preservando configurações existentes')
    init.add_argument('destination')
    init.add_argument('--name', required=True)
    init.add_argument('--without-matt', action='store_true', help='Optar por kit mínimo sem Matt Pocock')
    init.add_argument('--matt-source', help='Checkout local que corresponda ao lock')
    init.add_argument('--adopt-records', action='store_true', help='Preservar registros já reconciliados manualmente')
    init.add_argument('--dry-run', action='store_true')
    personal = commands.add_parser('install-global', help='Instalar bootstrap pessoal, sem substituir divergências')
    personal.add_argument('--home', default=str(Path.home()))
    personal.add_argument('--dry-run', action='store_true')
    for action in ('validate', 'doctor'):
        sub = commands.add_parser(action)
        sub.add_argument('destination', nargs='?', default='.')
    args = parser.parse_args(argv)
    try:
        if args.command == 'init':
            return init_project(args)
        if args.command == 'install-global':
            return install_global(args)
        dest = Path(args.destination).resolve()
        errors = validate(dest)
        if args.command == 'doctor':
            print('Ferramentas:', json.dumps({x: shutil.which(x) for x in ('python', 'git', 'codex', 'claude', 'copilot', 'gh')}))
            print('Skills locais:', ', '.join(sorted(p.parent.name for p in (dest / '.agents/skills').glob('*/SKILL.md'))))
            print('Descoberta no cliente não foi exercitada; confira o seletor de skills.')
        for error in errors:
            print('ERRO:', error)
        if not errors:
            print('OK: registros e inventário válidos.')
        return 1 if errors else 0
    except (OSError, ValueError, KeyError) as exc:
        print(str(exc), file=sys.stderr)
        return 1


if __name__ == '__main__':
    raise SystemExit(main())
