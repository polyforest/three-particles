import {easing, getEase} from '../src/easing.js';
import assert from 'assert';

describe('model', () => {
  describe('easing', () => {
    it('getEase should return the correct easer', () => {
      assert.strictEqual(getEase('linear'), easing.linear);
    });
  });

  describe('#randomFromRange()', () => {
    it('should return min when ', () => {
      assert.strictEqual([1, 2, 3].indexOf(4), -1);
    });
  });
});
