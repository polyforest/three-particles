import * as model from '../src/model.js';
import chai from 'chai';

const assert = chai.assert;

describe('model', () => {
  describe('sanitizeParticleEffect', () => {
    const effect = model.sanitizeParticleEffect({});
    it('Should set version if not set', () => {
      assert.notStrictEqual(effect.version, null);
    });
    it('Should not set version if set', () => {
      const s2 = model.sanitizeParticleEffect({version: 'v1'});
      assert.strictEqual(s2.version, 'v1');
    });
  });
  describe('sanitizeEmitter', () => {
    const emitter = model.sanitizeEmitter({});
    it('Should set count', () => {
      assert.isNotNull(emitter.count);
    });
  });

  describe('randomFromRange-linear', () => {
    const r = /** @type {model.RangeVo} */ model.range(23, 43);
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
    const r = model.range(23, 63, 'pow2In');
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
