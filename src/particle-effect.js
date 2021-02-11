import {ParticleEmitter} from './particle-emitter.js';
import {Group, Vector3} from 'three';

import './util/array-utils.js';
import {removeAllChildren} from './util/three-utils.js';

/** @module threeParticles */

/**
 * @typedef {import('./model').ParticleEffectVo} ParticleEffectVo
 */

/**
 * A Particle effect. This is a group of particle emitters with properties and
 * methods to update all emitters.
 */
export class ParticleEffect extends Group {

  /**
   * @param {ParticleEffectVo} data The model used to
   * construct this particle effect.
   */
  constructor(data) {
    super();

    /**
     * The model data for the particle effect.
     * This may be mutated, but if the emitters list changes, 
     * then `emittersNeedUpdate` will need to be set to true.
     * 
     * Certain properties on the emitter models will require `needsUpdate` set
     * to true on the respective emitter.
     *
     * @type {ParticleEffectVo}
     */
    this.data = data;

    /**
     * Set to true if the emitter list changes. Next update or next
     * `updateEmitters` the emitter list will be synchronized to the data model.
     */
    this.emittersNeedUpdate = true;

    /**
     * A translation vector that affects all child particle emitters.
     */
    this.spawnPosition = new Vector3();

    /**
     * @type {ParticleEmitter[]}
     */
    this.emitters = [];
  }

  /**
   * Updates the emitter objects.
   *
   * @param {boolean} force If true, the emitters will be updated even if 
   * `emittersNeedUpdate` is false.
   */
  updateEmitters(force = false) {
    if (!force && !this.emittersNeedUpdate) return;
    this.emittersNeedUpdate = false;
    removeAllChildren(this);
    this.emitters = [];
    this.data.emitters.forEach((emitterVo) => {
      const emitter = new ParticleEmitter(emitterVo);
      this.emitters.push(emitter);
      this.add(emitter);
    });
  }

  /**
   * Updates all emitter geometries.
   *
   * @param {number} dT The number of seconds to progress.
   */
  update(dT) {
    if (this.emittersNeedUpdate) this.updateEmitters();
    for (const emitter of this.emitters) {
      emitter.update(dT);
    }
  }

}
