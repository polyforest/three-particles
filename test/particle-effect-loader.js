import chai from 'chai';
import * as fs from 'fs';
import {PointsMaterial} from 'three';
import {ParticleEffectLoader} from '../src/particle-effect-loader.js';
import {ParticlesMaterial} from '../src/particles-material.js';
import {getDefaultRadial} from '../src/textures.js';

const assert = chai.assert;

PointsMaterial;

describe('ParticleEffectLoader', () => {
  const loader = new ParticleEffectLoader();
  describe('#parse', () => {
    it('Can parse sample fire effect', () => {
      const json = JSON.parse(
        fs.readFileSync('./test-resources/effects/fire.json').toString());
      const fireEffect = loader.parse(json);
      fireEffect.updateEmitters();
      assert.strictEqual(fireEffect.emitters.length, 2);
      assert.strictEqual(fireEffect.emitters[0].type, 'Points');
      const flameEmitterVo = fireEffect.emitters[0].data;
      assert.strictEqual(flameEmitterVo.count, 200);
      assert.strictEqual(flameEmitterVo.duration.duration.min, 4);
      assert.strictEqual(flameEmitterVo.duration.duration.max, 6.5);
      assert.strictEqual(flameEmitterVo.duration.duration.ease, 'linear');
    });

    it('Adds emitters', () => {
      const effect = loader.parse({emitters: [{}, {}, {}]});
      assert.strictEqual(effect.emitters.length, 3);
      assert.strictEqual(effect.emitters[0].type, 'Points');
    });

    it('Sets a default radial texture', () => {
      const effect = loader.parse({emitters: [{}]});
      const pointsMaterial = /** @type {ParticlesMaterial} */
        (effect.emitters[0].material);
      assert.strictEqual(pointsMaterial.map, getDefaultRadial());
    });
  });
});
