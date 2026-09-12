import hashlib
import importlib.util
import json
from pathlib import Path
import sys
import tempfile
import unittest

VENDOR = Path(__file__).resolve().parents[1] / 'ai-kit/scripts/vendor.py'


class VendorTests(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.addCleanup(self.temp.cleanup)
        self.base = Path(self.temp.name)
        self.kit = self.base / 'kit'
        self.source = self.base / 'upstream'
        self.kit.mkdir()
        files = {'LICENSE': b'MIT license', 'skills/engineering/demo/SKILL.md': b'---\nname: demo\ndescription: Example\n---\n',
                 'skills/engineering/demo/references/guide.md': b'needed resource'}
        for relative, data in files.items():
            path = self.source / relative
            path.parent.mkdir(parents=True, exist_ok=True)
            path.write_bytes(data)
        lock = {'repository': 'https://github.com/mattpocock/skills', 'commit': 'a' * 40, 'version': 'test',
                'skills': ['demo'], 'files': {p: hashlib.sha256(d).hexdigest() for p, d in files.items()}}
        (self.kit / 'mattpocock.lock.json').write_text(json.dumps(lock), encoding='utf-8')

    def module(self):
        self.assertTrue(VENDOR.is_file(), 'Matt Pocock import is not implemented')
        spec = importlib.util.spec_from_file_location('kit_vendor', VENDOR)
        module = importlib.util.module_from_spec(spec)
        spec.loader.exec_module(module)
        return module

    def test_installs_skill_resources_and_license(self):
        files, metadata = self.module().matt_files(self.kit, str(self.source))
        self.assertEqual(files['.agents/skills/demo/references/guide.md'], b'needed resource')
        self.assertEqual(files['.agents/skills/MATTPOCOCK-LICENSE'], b'MIT license')
        self.assertEqual(metadata['commit'], 'a' * 40)

    def test_rejects_modified_snapshot(self):
        (self.source / 'LICENSE').write_bytes(b'changed')
        with self.assertRaisesRegex(ValueError, 'checksum'):
            self.module().matt_files(self.kit, str(self.source))


if __name__ == '__main__':
    unittest.main()
