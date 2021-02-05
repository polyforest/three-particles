import {ParticleEmitter} from './particle-emitter.js';
import {Group, Vector3} from 'three';
import {removeElement} from './util/array-utils.js';

import './util/array-utils.js';

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
     * The data passed to the constructor.
     *
     * @type {ParticleEffectVo}
     */
    this.data = data;

    /**
     * A translation vector that affects all child particle emitters.
     */
    this.spawnPosition = new Vector3();

    /**
     * @type {ParticleEmitter[]}
     */
    this._emitters = [];
    for (let i = 0; i < data.emitters.length; i++) {
      this.addEmitter(new ParticleEmitter(data.emitters[i]));
    }
  }

  /**
   * The emitters this particle effect controls.
   * This should not be edited.
   *
   * @see addEmitter
   * @see removeEmitter
   * @readonly
   * @type {ReadonlyArray<ParticleEmitter>}
   */
  get emitters() {
    return /** @type {ReadonlyArray<ParticleEmitter>} */ (this._emitters);
  }

  /**
   * Adds an emitter.
   *
   * @param {ParticleEmitter} emitter The emitter to add to this group and
   * emitters array.
   */
  addEmitter(emitter) {
    this.add(emitter);
    this._emitters.push(emitter);
  }

  /**
   * Removes an emitter.
   *
   * @param {ParticleEmitter} emitter The emitter to add to this group and
   * emitters array.
   */
  removeEmitter(emitter) {
    this.remove(emitter);
    removeElement(this._emitters, emitter);
  }

  /**
   * Updates all emitter geometries.
   *
   * @param {number} dT The number of seconds to progress.
   */
  update(dT) {
    for (const emitter of this._emitters) {
      emitter.update(dT);
    }
  }

}
