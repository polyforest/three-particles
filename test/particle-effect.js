import assert from 'assert';
import {ParticleEffect} from '../src/particle-effect.js';
import {sanitizeEmitter, sanitizeParticleEffect} from '../src/model.js';

describe('ParticleEffect', () => {
  describe('constructor', () => {
    it('Constructor should accept an emitters list.', () => {
      const pE = new ParticleEffect(sanitizeParticleEffect({
        emitters: [
          sanitizeEmitter({}),
          sanitizeEmitter({}),
          sanitizeEmitter({}),
        ],
      }));
      assert.strictEqual(pE.children.length, 3);
    });
  });
});
