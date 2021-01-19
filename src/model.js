/**
 * @fileoverview Data descriptors for a particle effect.
 */

import {RNG} from './random.js';
import {easing} from './easing';

/**
 * Parameters for creating a new particle effect.
 * @typedef {object} ParticleEffectVo
 *
 * @property {string} [version] A version string, potentially used for backwards
 * compatibility.
 * @property {ParticleEmitterVo[]} emitters
 */

/**
 * Data for a particle emitter.
 *
 * @typedef {object} ParticleEmitterVo
 *
 * @property {string} [id] The id of the emitter.
 *
 * @property {boolean} [enabled] True if the emitter is enabled. (default is
 * true)
 *
 * @property {boolean} [loops] If true, this emitter will loop after the total
 * duration. (default is true)
 *
 * @property {EmitterDurationVo} [duration] Represents when and how long this
 * emitter will be active.
 *
 * @property {number} [count] The maximum number of particles to create.
 *
 * @property {PropertyTimelineVo} [emissionRate] The rate of emissions, in
 * particles per second.
 *
 * @property {PropertyTimelineVo} [particleLifeExpectancy] Calculates the
 * life of a newly created particle.
 *
 * @property {boolean} [orientToForwardDirection] (Default false) If true, the
 * forward direction affects the rotation.
 *
 * @property {PropertyTimelineVo[]} [propertyTimelines] Timelines relative
 * to the particle life.
 *
 * @property {THREE.PointsMaterialParameters} [material]
 */

/**
 * A model describing the duration and delay padding for an emitter.
 * @typedef {object} EmitterDurationVo
 *
 * @property {RangeVo} duration The number of seconds this emitter will create
 * particles.
 *
 * @property {RangeVo} delayBefore The time, in seconds, before the emitter
 * begins.
 *
 * @property {RangeVo} delayAfter The time, in seconds, after completion before
 * restarting.
 */

/**
 * @typedef {object} PropertyTimelineVo
 *
 * @property {string} property The name of the property this timeline controls.
 *
 * @property {number[]} timeline A list of [time, value0, value1, valueN, ... ]
 *     Where each set starts with a time (in seconds) followed by [numComponent]
 *     values.
 *
 * @property {number} numComponents The number of values for each set in the
 *     timeline.
 *
 * @property {boolean} useEmitterDuration If true, relative to the particle's
 *     lifespan, if false, relative to the emitter duration.
 *
 * @property {boolean} relative If true, the final value will not be the high
 *     value, but the high + low.
 *
 * @property {RangeVo} low When the values are initialized / reset for a new
 *     particle, this will be the low range.
 *
 * @property {RangeVo} high When the values are initialized / reset for a new
 *     particle, this will be the high range.
 */

/**
 * A number range with easing.
 * @typedef {object} RangeVo
 * @property {number} min The minimum value.
 * @property {number} max The maximum value.
 * @property {EaseType} ease The interpolation from min to max.
 */

/**
 * Generates a number between 0 and 1 (exclusive).
 * @callback numberGen
 * @return {number}
 */

/**
 * Generates a random number within the given range, interpolated by its easing.
 * @param {RangeVo} range
 * @param {numberGen} rng
 * @return {number}
 */
export function randomFromRange(range, rng = RNG.nextFloat) {
  const ease = easing[range.ease];
  return ease(rng()) * (range.max - range.min) +
    range.min;
}
