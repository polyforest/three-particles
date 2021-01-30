import * as model from '../src/model.js';
import assert from 'assert';
import {range} from '../dist/three-particles.esm.js';

describe('model', () => {
  describe('sanitizeParticleEffect', () => {
    const sanitized = model.sanitizeParticleEffect({});
    it('Should set version', () => {
      assert.notStrictEqual(sanitized.version, null);
    });
  });

  describe('randomFromRange-linear', () => {
    const r = /** @type {model.RangeVo} */ range(23, 43);
    it('Should return min when rng() provides 0.0', () => {
      assert.strictEqual(model.randomFromRange(r, () => 0), 23);
    });
    it('Should return max when rng() provides 1.0', () => {
      assert.strictEqual(model.randomFromRange(r, () => 1), 43);
    });
    it('Should return mid when rng() provides 0.5', () => {
      assert.strictEqual(model.randomFromRange(r, () => 0.5), 33);
    });
  });
  describe('randomFromRange-pow2In', () => {
    const r = range(23, 63, 'pow2In');
    it('Should return min when rng() provides 0.0', () => {
      assert.strictEqual(model.randomFromRange(r, () => 0), 23);
    });
    it('Should return max when rng() provides 1.0', () => {
      assert.strictEqual(model.randomFromRange(r, () => 1), 63);
    });
    it('Should return mid when rng() provides 0.5', () => {
      // 23 + (63 - 23) * (0.5 * 0.5)
      assert.strictEqual(model.randomFromRange(r, () => 0.5), 33);
    });
  });
});
