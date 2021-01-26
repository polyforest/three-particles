import {ParticleEmitter} from './particle-emitter.js';
import {Group} from 'three';
import {removeElement} from './util/array-utils.js';
import './model.js';

import './util/array-utils.js';


/** @module particle */

/** @typedef {import('./model').ParticleEffectVo} ParticleEffectVo */

/**
 * A Particle effect
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
     * @type {ParticleEmitter[]}
     * @private
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
   * This should not be edited.
   *
   * @see addEmitter
   * @see removeEmitter
   * @readonly
   * @type {ParticleEmitter[]}
   */
  get emitters() {
    return this._emitters;
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
