import assert from 'assert';
import * as fs from 'fs';
import {PointsMaterial} from 'three';
import {ParticleEffectLoader} from '../src/particle-effect-loader.js';
import {getDefaultRadial} from '../src/textures/radial-texture.js';

PointsMaterial;

describe('ParticleEffectLoader', () => {
  describe('#parse', () => {
    const json = JSON.parse(
      fs.readFileSync('./test-resources/effects/fire.json').toString());
    const loader = new ParticleEffectLoader();
    const effect = loader.parse(json);

    it('Adds emitters.', () => {
      assert.strictEqual(effect.emitters.length, 2);
      assert.strictEqual(effect.emitters[0].type, 'Points');
    });

    it('Sets a default radial texture.', () => {
      const pointsMaterial = /** @type {PointsMaterial} */
        (effect.emitters[0].material);
      assert.strictEqual(pointsMaterial.map, getDefaultRadial());
    });
  });
});
