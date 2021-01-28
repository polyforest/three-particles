/**
 * @file Data descriptors for a particle effect.
 */

/** @module */

import * as easing from './easing.js';
import {RNG} from './util/random.js';
import {createShortUid} from './util/uid.js';

/**
 * Parameters for creating a new particle effect.
 *
 * @typedef {object} ParticleEffectVo
 *
 * @property {?string} [version] A version string, potentially used for
 * backwards compatibility. This should be the version of three-particles the
 * effect was built for. If null, no migration checks will be done.
 * @property {ParticleEmitterVo[]} emitters A list of emitter models.
 */

/**
 * Sets defaults on the particle effect data object.
 *
 * @param {any} effect The particle effect to sanitize.
 * @returns {ParticleEffectVo} The input, now safely type cast to a
 * `ParticleEffectVo`
 */
export function sanitizeParticleEffect(effect) {
  if (effect.emitters === undefined) effect.emitters = [];
  effect.emitters.forEach((emitter) => {
    sanitizeEmitter(emitter);
  });
  return effect;
}

/**
 * Data for a particle emitter.
 *
 * @typedef {object} ParticleEmitterVo
 *
 * @property {string} id The id of the emitter. Default is a unique
 * identifier.
 *
 * @property {boolean} [enabled] True if the emitter is enabled. Default is
 * true.
 *
 * @property {boolean} [loops] If true, this emitter will loop after the total
 * duration. (default is true)
 *
 * @property {EmitterDurationVo} [duration] Represents when and how long this
 * emitter will be active (in seconds). Default is `{duration:{min:10}}`.
 *
 * @property {number} [count] The maximum number of particles to create.
 * Default is 100.
 *
 * @property {PropertyTimelineVo} [emissionRate] The rate of emissions, in
 * particles per second. Default is `{}`
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
 * @property {import('three').Material} [material] The THREE Material to render.
 */

/**
 * Sets any defaults for unset properties on an emitter.
 *
 * @param {any} emitter The emitter to sanitize.
 * @returns {ParticleEmitterVo} The input, now safely type cast to a
 * `ParticleEmitterVo`
 */
export function sanitizeEmitter(emitter) {
  if (emitter.id === undefined) emitter.id = createShortUid();
  if (emitter.count === undefined) emitter.count = 100;
  return emitter;
}

/**
 * Multiplies the emitter's count and emission rates by a given factor.
 *
 * @param {ParticleEmitterVo} emitter The emitter to adjust.
 * @param {number} factor The scale factor.
 */
export function scaleEmitter(emitter, factor) {
  emitter.count *= factor;
}

/**
 * A model describing the duration and delay padding for an emitter.
 *
 * @typedef {object} EmitterDurationVo
 *
 * @property {RangeVo} duration The number of seconds this emitter will create
 * particles.
 *
 * @property {RangeVo} [delayBefore] The time, in seconds, before the emitter
 * begins. Default is `{min:0}`
 *
 * @property {RangeVo} [delayAfter] The time, in seconds, after completion
 * before restarting. Default is `{min:0}`
 */

/**
 * @typedef {object} PropertyTimelineVo
 *
 * @property {string} property The name of the property this timeline controls.
 *
 * @property {number[]} timeline A list of [time, value0, value1, valueN, ... ]
 * Where each set starts with a time (in percent) followed by [numComponent]
 * values.
 *
 * @property {number} numComponents The number of values for each set in the
 * timeline.
 *
 * @property {boolean} useEmitterDuration If true, time percent is
 * relative to the particle's lifespan, if false, relative to the emitter
 * duration.
 *
 * @property {boolean} relative If true, the final value will not be the high
 * value, but the high + low.
 *
 * @property {RangeVo} low When the values are initialized / reset for a new
 * particle, this will be the low range.
 *
 * @property {RangeVo} high When the values are initialized / reset for a new
 * particle, this will be the high range.
 */

/**
 * A number range with easing.
 *
 * @typedef {object} RangeVo
 * @property {number} min The minimum value.
 * @property {number} [max] The maximum value. Defaults to `min`.
 * @property {?easing.EaseType} [ease] The interpolation from min to max.
 * Undefined will be considered `linear`.
 */

/**
 * Generates a number between 0 and 1 (exclusive).
 *
 * @callback numberGen
 * @returns {number}
 */

/**
 * Generates a random number within the given range, interpolated by its easing.
 *
 * @param {RangeVo} range The minimum, maximum, and interpolation.
 * @param {numberGen} rng A number generator that provides a float between
 * 0 (inclusive) and 1 (exclusive).
 * @returns {number} Returns the new random number.
 */
export function randomFromRange(range, rng = RNG.nextFloat) {
  const ease = easing.getEase(range.ease || 'linear');
  return ease(rng()) * (range.max - range.min) +
    range.min;
}
