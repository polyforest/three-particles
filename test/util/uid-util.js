import * as uid from '../../src/util/uid.js';
import assert from 'assert';

describe('createUid', () => {
  it('Should generate unique ids.', () => {
    const set = new Set();
    for (let i = 0; i < 10000; i++) {
      const newId = uid.createUid();
      if (set.has(newId)) {
        assert.fail('createUid is not unique.');
      } else {
        set.add(newId);
      }
    }
  });
});

describe('createShortUid', () => {
  it('Should generate unique ids.', () => {
    const set = new Set();
    for (let i = 0; i < 10000; i++) {
      const newId = uid.createShortUid();
      if (set.has(newId)) {
        assert.fail('createShortUid is not unique.');
      } else {
        set.add(newId);
      }
    }
  });
});
