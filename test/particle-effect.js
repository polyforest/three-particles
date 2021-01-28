import assert from 'assert';
import {ParticleEffect} from '../src/particle-effect.js';
import {AdditiveBlending} from 'three';
import {sanitizeParticleEffect} from '../src/model.js';

describe('ParticleEffect', () => {
  describe('constructor', () => {
    it('Constructor should accept an emitters list.', () => {
      console.log(AdditiveBlending);
      const pE = new ParticleEffect(sanitizeParticleEffect({
        emitters: [
          {},
          {},
          {},
        ],
      }));
      assert.strictEqual(pE.children.length, 3);
    });
  });
});
