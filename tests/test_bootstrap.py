import json
from pathlib import Path
import re
import shutil
import subprocess
import sys
import tempfile
import unittest


CLI = Path(__file__).resolve().parents[1] / 'ai-kit/scripts/bootstrap.py'


class CliFixture:
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.addCleanup(self.temp.cleanup)
        self.dest = Path(self.temp.name) / 'projeto com espaços'

    def run_cli(self, *args):
        return subprocess.run([sys.executable, str(CLI), *map(str, args)],
                              capture_output=True, text=True, encoding='utf-8')

    def init(self, *args):
        return self.run_cli('init', self.dest, '--name', 'Projeto Ágil', '--without-matt', *args)

    def snapshot(self):
        return {p.relative_to(self.dest).as_posix(): p.read_bytes()
                for p in self.dest.rglob('*') if p.is_file() and '__pycache__' not in p.parts}

    def assert_ci_runs_installed_cli(self):
        workflow = (self.dest / '.github/workflows/ai-continuity.yml').read_text(encoding='utf-8')
        cli = re.search(r'python (\S+) validate', workflow).group(1)
        self.assertTrue((self.dest / cli).is_file(), cli)


class BootstrapTests(CliFixture, unittest.TestCase):
    def test_new_project_is_valid_and_runtime_survives_relocation(self):
        result = self.init()
        self.assertEqual(result.returncode, 0, result.stderr)
        self.assertIn('Projeto Ágil', (self.dest / 'README.md').read_text(encoding='utf-8'))
        result = self.run_cli('validate', self.dest)
        self.assertEqual(result.returncode, 0, result.stdout + result.stderr)
        self.assert_ci_runs_installed_cli()
        local = self.dest / 'tools/ai-kit/scripts/bootstrap.py'
        result = subprocess.run([sys.executable, str(local), 'validate', str(self.dest)],
                                capture_output=True, text=True, encoding='utf-8')
        self.assertEqual(result.returncode, 0, result.stdout + result.stderr)

    def test_dry_run_creates_nothing(self):
        result = self.init('--dry-run')
        self.assertEqual(result.returncode, 0, result.stderr)
        self.assertFalse(self.dest.exists())

    def test_rerun_is_byte_for_byte_idempotent(self):
        self.assertEqual(self.init().returncode, 0)
        before = self.snapshot()
        self.assertEqual(self.init().returncode, 0)
        self.assertEqual(self.snapshot(), before)

    def test_existing_instructions_are_preserved_and_conflict_is_explicit(self):
        self.dest.mkdir()
        (self.dest / 'AGENTS.md').write_bytes(b'Custom rules\n')
        result = self.init()
        self.assertNotEqual(result.returncode, 0)
        self.assertEqual(self.snapshot(), {'AGENTS.md': b'Custom rules\n'})
        self.assertIn('AGENTS.md', result.stderr)

    def test_self_hosted_runtime_is_neither_copied_nor_frozen(self):
        kit = self.dest / 'ai-kit'
        shutil.copytree(CLI.parents[1], kit)
        result = subprocess.run([sys.executable, str(kit / 'scripts/bootstrap.py'), 'init',
                                 str(self.dest), '--name', 'Kit', '--without-matt'],
                                capture_output=True, text=True, encoding='utf-8')
        self.assertEqual(result.returncode, 0, result.stderr)
        self.assertFalse((self.dest / 'tools').exists())
        self.assert_ci_runs_installed_cli()
        manifest = json.loads((self.dest / '.ai-kit.json').read_text(encoding='utf-8'))
        self.assertEqual([p for p in manifest['files'] if p.startswith('ai-kit/')], [])
        (kit / 'SKILL.md').write_bytes(b'Documentacao revisada\n')
        self.assertEqual(self.run_cli('validate', self.dest).returncode, 0)

    def test_global_bootstrap_is_self_contained_and_repeatable(self):
        home = Path(self.temp.name) / 'home'
        first = self.run_cli('install-global', '--home', home)
        self.assertEqual(first.returncode, 0, first.stderr)
        cli = home / '.agents/skills/project-bootstrap/scripts/bootstrap.py'
        result = subprocess.run([sys.executable, str(cli), 'init', str(self.dest),
                                 '--name', 'Novo', '--without-matt'], capture_output=True)
        self.assertEqual(result.returncode, 0, result.stderr)
        self.assertEqual(self.run_cli('install-global', '--home', home).returncode, 0)


if __name__ == '__main__':
    unittest.main()
