import * as model from '../src/model.js';
import assert from 'assert';

describe('model', () => {
  describe('randomFromRange', () => {
    const range1 = /** @type {model.RangeVo} */ {min: 23, max: 43};
    it('randomFromRange should return min when rng() provides 0.0', () => {
      assert.strictEqual(model.randomFromRange(range1, ()=>0), 23);
    });
    it('randomFromRange should return max when rng() provides 1.0', () => {
      assert.strictEqual(model.randomFromRange(range1, ()=>1), 43);
    });
  });
});
