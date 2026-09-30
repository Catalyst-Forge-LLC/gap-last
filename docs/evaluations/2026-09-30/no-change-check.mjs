import assert from 'node:assert/strict';
import { validImportedId, validPublicId, importRecord, issuePublicRecord } from '../../../fixtures/engineering/no-change/validators.mjs';

const cases = [
  ['uppercase legacy', 'Legacy7', true, false],
  ['lowercase public', 'public7', true, true],
  ['digits', '123', true, true],
  ['length 16', 'a'.repeat(16), true, true],
  ['length 17', 'a'.repeat(17), false, false],
  ['empty', '', false, false],
  ['punctuation', 'abc-1', false, false],
  ['non-ASCII', 'é', false, false],
  ['non-string', 123, false, false],
];
const results = cases.map(([name, value, importedExpected, publicExpected]) => {
  const imported = validImportedId(value);
  const publicId = validPublicId(value);
  assert.equal(imported, importedExpected, `${name}: imported`);
  assert.equal(publicId, publicExpected, `${name}: public`);
  assert.equal(importRecord(value), importedExpected, `${name}: import caller`);
  assert.equal(issuePublicRecord(value), publicExpected, `${name}: issue caller`);
  return { name, imported, publicId };
});
console.log(JSON.stringify({ assertions: cases.length * 4, results }));
