import {ParticleEffectLoader} from '../src/particle-effect-loader.js';
import * as fs from 'fs';

describe('ParticleEffectLoader', () => {
  describe('load', () => {
    it('', () => {
      const json = JSON.parse(
          fs.readFileSync('./test-resources/effects/fire.json').toString());
      const loader = new ParticleEffectLoader();
      const o = loader.parse(json);
      console.log(o);
    });
  });
});
