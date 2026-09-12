from pathlib import Path
import sys
import unittest

from test_bootstrap import CliFixture

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / 'ai-kit/scripts'))
from validation import validate


class ValidationTests(CliFixture, unittest.TestCase):
    def change(self, relative, old, new):
        path = self.dest / relative
        path.write_bytes(path.read_text(encoding='utf-8').replace(old, new).encode('utf-8'))

    def test_status_mismatch_is_rejected(self):
        self.assertEqual(self.init().returncode, 0)
        self.change('CURRENT_STATE.md', '- Status: DONE', '- Status: READY_FOR_REVIEW')
        self.assertTrue(any('divergente' in e for e in validate(self.dest)))

    def test_unknown_worklog_task_is_rejected(self):
        self.assertEqual(self.init().returncode, 0)
        self.change('WORKLOG.md', '| AI-000 |', '| AI-999 |')
        self.assertTrue(any('desconhecido' in e for e in validate(self.dest)))

    def test_tampered_resource_is_not_overwritten(self):
        self.assertEqual(self.init().returncode, 0)
        path = self.dest / '.agents/skills/project-continuity/SKILL.md'
        path.write_bytes(b'local changes')
        before = self.snapshot()
        self.assertNotEqual(self.init().returncode, 0)
        self.assertEqual(before, self.snapshot())
        self.assertTrue(any('Recurso ausente ou alterado' in e for e in validate(self.dest)))

    def test_every_worklog_entry_requires_known_id(self):
        self.assertEqual(self.init().returncode, 0)
        path = self.dest / 'WORKLOG.md'
        with path.open('ab') as handle:
            handle.write(b'\n## Unlinked delivery\n\nChanged something.\n')
        self.assertTrue(any('WORKLOG' in e for e in validate(self.dest)))

    def test_schema_missing_metadata_is_rejected(self):
        self.assertEqual(self.init().returncode, 0)
        import json
        path = self.dest / '.ai-kit.json'
        data = json.loads(path.read_text(encoding='utf-8'))
        del data['kit_version']
        path.write_text(json.dumps(data), encoding='utf-8')
        self.assertTrue(any('Manifesto' in e for e in validate(self.dest)))


if __name__ == '__main__':
    unittest.main()
