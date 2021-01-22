import {ParticleEmitter} from './particle-emitter.js';
import {Group} from 'three';
import {removeElement} from './util/array-utils.js';

/** @typedef {import('./model').ParticleEffectVo} ParticleEffectVo */

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
     */
    this._emitters = [];
    for (let i = 0; i < data.emitters.length; i++) {
      const emitter = new ParticleEmitter(data.emitters[i]);
      this.add(emitter);
      this._emitters.push(emitter);
    }
  }

  /**
   * The emitters this particle effect controls.
   * @readonly
   * @type {ReadonlyArray<ParticleEmitter>}
   */
  get emitters() {
    return this._emitters;
  }

  /**
   * Adds an emitter.
   * @param {ParticleEmitter} emitter The emitter to add to this group and
   * emitters array.
   */
  addEmitter(emitter) {
    this.add(emitter);
    this._emitters.push(emitter);
  }

  /**
   * Adds an emitter.
   * @param {ParticleEmitter} emitter The emitter to add to this group and
   * emitters array.
   */
  removeEmitter(emitter) {
    this.remove(emitter);
    removeElement(this._emitters, emitter);
  }

  /**
   * Updates all emitter geometries.
   * @param {number} dT The number of seconds to progress.
   */
  update(dT) {
    for (const emitter of this._emitters) {
      emitter.update(dT);
    }
  }

}
