import {ParticleEmitter} from './particle-emitter.js';
import {Group} from 'three';

/**
 * A Particle effect.
 */
export class ParticleEffect extends Group {

  /**
   * @param {ParticleEffectVo} data
   */
  constructor(data) {
    super();
    /**
     * @type {ParticleEmitter[]}
     * @private
     */
    this.emitters = [];
    for (let i = 0; i < data.emitters.length; i++) {
      const emitter = new ParticleEmitter(data.emitters[i]);
      this.add(emitter);
      this.emitters.push(emitter);
    }
  }

  /**
   * Updates all emitter geometries.
   * @param {number} dT The number of seconds to progress.
   */
  update(dT) {
    for (let i = 0; i < this.emitters.length; i++) {
      this.emitters[i].update(dT);
    }
  }

}
