import * as model from '../src/model.js';
import assert from 'assert';

describe('model', () => {
  describe('randomFromRange-linear', () => {
    const range = /** @type {model.RangeVo} */ {min: 23, max: 43};
    it('randomFromRange should return min when rng() provides 0.0', () => {
      assert.strictEqual(model.randomFromRange(range, () => 0), 23);
    });
    it('randomFromRange should return max when rng() provides 1.0', () => {
      assert.strictEqual(model.randomFromRange(range, () => 1), 43);
    });
    it('randomFromRange should return mid when rng() provides 0.5', () => {
      assert.strictEqual(model.randomFromRange(range, () => 0.5), 33);
    });
  });
  describe('randomFromRange-pow2In', () => {
    const range = /** @type {model.RangeVo} */ ({
      min: 23,
      max: 63,
      ease: 'pow2In',
    });
    it('randomFromRange should return min when rng() provides 0.0', () => {
      assert.strictEqual(model.randomFromRange(range, () => 0), 23);
    });
    it('randomFromRange should return max when rng() provides 1.0', () => {
      assert.strictEqual(model.randomFromRange(range, () => 1), 63);
    });
    it('randomFromRange should return mid when rng() provides 0.5', () => {
      // 23 + (63 - 23) * (0.5 * 0.5)
      assert.strictEqual(model.randomFromRange(range, () => 0.5), 33);
    });
  });
});
