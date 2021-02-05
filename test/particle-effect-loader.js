import chai from 'chai';
import * as fs from 'fs';
import {PointsMaterial} from 'three';
import {getDefaultRadial} from '../src/material-defaults.js';
import {ParticleEffectLoader} from '../src/particle-effect-loader.js';

const assert = chai.assert;

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
