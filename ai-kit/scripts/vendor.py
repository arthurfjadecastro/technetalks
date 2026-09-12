"""Read a pinned Matt Pocock snapshot; never execute downloaded content."""
import hashlib
import io
import json
from pathlib import Path, PurePosixPath
import re
from urllib.request import Request, urlopen
import zipfile

MAX_ARCHIVE = 32 * 1024 * 1024


def matt_files(kit: Path, source: str | None):
    lock = json.loads((kit / 'mattpocock.lock.json').read_text(encoding='utf-8'))
    sha = lock['commit']
    if not re.fullmatch('[0-9a-f]{40}', sha):
        raise ValueError('Commit Matt Pocock inválido')
    archive = None
    if source is None:
        request = Request(f'https://codeload.github.com/mattpocock/skills/zip/{sha}',
                          headers={'User-Agent': 'portable-ai-project-kit/1.0'})
        with urlopen(request, timeout=45) as response:
            data = response.read(MAX_ARCHIVE + 1)
        if len(data) > MAX_ARCHIVE:
            raise ValueError('Snapshot excede limite de download')
        archive = zipfile.ZipFile(io.BytesIO(data))
    result = {}
    try:
        for relative, expected in lock['files'].items():
            path = PurePosixPath(relative)
            if path.is_absolute() or '..' in path.parts or '\\' in relative:
                raise ValueError(f'Caminho inválido no lock: {relative}')
            if source is not None:
                source_root = Path(source).resolve()
                full = source_root / relative
                if not full.resolve().is_relative_to(source_root):
                    raise ValueError(f'Caminho fora da origem: {relative}')
                data = full.read_bytes()
            else:
                info = archive.getinfo(f'skills-{sha}/{relative}')
                if info.file_size > MAX_ARCHIVE:
                    raise ValueError(f'Recurso excede limite: {relative}')
                data = archive.read(info)
            # Git checkouts on Windows may use CRLF. Only accept normalization
            # when the resulting bytes match the exact pinned upstream checksum.
            if source is not None and hashlib.sha256(data).hexdigest() != expected:
                data = data.replace(b'\r\n', b'\n')
            if hashlib.sha256(data).hexdigest() != expected:
                raise ValueError(f'Matt Pocock checksum divergente: {relative}')
            if relative == 'LICENSE':
                target = '.agents/skills/MATTPOCOCK-LICENSE'
            elif len(path.parts) >= 4 and path.parts[0] == 'skills' and path.parts[1] in {'engineering', 'productivity'}:
                target = '.agents/skills/' + '/'.join(path.parts[2:])
            else:
                raise ValueError(f'Recurso fora do perfil: {relative}')
            if target in result:
                raise ValueError(f'Skill duplicada: {target}')
            result[target] = data
    finally:
        if archive:
            archive.close()
    return result, {k: lock[k] for k in ('repository', 'commit', 'version', 'skills')}
