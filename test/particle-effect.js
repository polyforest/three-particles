import assert from 'assert';
import {ParticleEffect} from '../src/particle-effect.js';

describe('ParticleEffect', () => {
  describe('constructor', () => {
    it('Constructor should accept an emitters list.', () => {
      const pE = new ParticleEffect({
        emitters: [
          {},
          {},
          {},
        ],
      });
      assert.strictEqual(pE.children.length, 3);
    });
  });
});
