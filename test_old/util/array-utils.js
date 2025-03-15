import * as arrayUtils from '../../src/util/array-utils.js';
import chai from 'chai';

const assert = chai.assert;

describe('array-utils', () => {
  describe('removeElement', () => {
    it('Should remove an element if found and return true', () => {
      const arr = [1, 2, 3, 4, 5];
      assert.strictEqual(arrayUtils.removeElement(arr, 3), true);
      assert.deepStrictEqual(arr, [1, 2, 4, 5]);
    });
    it('Should return false and not modify if not found', () => {
      const arr = [1, 2, 3, 4, 5];
      assert.strictEqual(arrayUtils.removeElement(arr, -1), false);
      assert.deepStrictEqual(arr, [1, 2, 3, 4, 5]);
    });
  });
});
