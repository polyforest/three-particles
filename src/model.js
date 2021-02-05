/**
 * @file Data descriptors for a particle effect.
 */

/** @module threeParticles */

import {MathUtils} from 'three';
import * as easing from './easing.js';
import {getDefaultMaterial} from './material-defaults.js';
import {VERSION} from './build.js';
import {defaults} from './util/object-utils.js';
import {RNG} from './util/random.js';

/**
 * @typedef {import('type-fest').PartialDeep<T>} PartialDeep
 * @template T
 */

/**
 * Parameters for creating a new particle effect.
 *
 * @typedef {object} ParticleEffectVo
 *
 * @property {string} version A version string, potentially used for
 * backwards compatibility. This should be the version of three-particles the
 * effect was built for. If null, no migration checks will be done.
 * @property {ParticleEmitterVo[]} emitters A list of emitter models.
 */

/**
 * Data for a particle emitter.
 *
 * @typedef {object} ParticleEmitterVo
 *
 * @property {string} id The id of the emitter.
 *
 * @property {boolean} enabled True if the emitter is enabled.
 *
 * @property {boolean} loops If true, this emitter will loop after the total
 * duration.
 *
 * @property {EmitterDurationVo} duration Represents when and how long this
 * emitter will be active (in seconds).
 *
 * @property {number} count The maximum number of particles to create.
 *
 * @property {PropertyTimelineVo} emissionRate The rate of emissions, in
 * particles per second.
 *
 * @property {PropertyTimelineVo} particleLifeExpectancy Calculates the
 * life of a newly created particle.
 *
 * @property {boolean} orientToForwardDirection If true, the forward direction
 * affects the rotation.
 *
 * @property {PropertyTimelineVo[]} propertyTimelines Timelines relative
 * to the particle life.
 *
 * @property {import('three').Material} material The THREE Material to render.
 */

/**
 * A model describing the duration and delay padding for an emitter.
 *
 * @typedef {object} EmitterDurationVo
 *
 * @property {RangeVo} duration The number of seconds this emitter will create
 * particles.
 *
 * @property {RangeVo} delayBefore The time, in seconds, before the emitter
 * begins.
 *
 * @property {RangeVo} delayAfter The time, in seconds, after completion
 * before restarting.
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
 * relative to the emitter's duration, if false, relative to the particle's
 * lifespan.
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
 * @property {number} max The maximum value. Defaults to `min`.
 * @property {easing.EaseType} ease The interpolation from min to max.
 */

/**
 * @type {RangeVo}
 */
export const rangeDefaults = {
  min: 0,
  max: 0,
  ease: 'linear',
};

/**
 * @type {PropertyTimelineVo}
 */
export const timelineDefaults = {
  property: '',
  timeline: [],
  numComponents: 0,
  useEmitterDuration: false,
  relative: false,
  low: {
    min: 0,
    max: 0,
    ease: 'linear',
  },
  high: {
    min: 1,
    max: 1,
    ease: 'linear',
  },
};

/**
 * @type {ParticleEmitterVo}
 */
export const emitterDefaults = {
  id: '',
  enabled: true,
  count: 100,
  loops: true,
  duration: {
    duration: range(10),
    delayBefore: rangeDefaults,
    delayAfter: rangeDefaults,
  },
  emissionRate: sanitizeTimeline({
    property: 'emissionRate',
    useEmitterDuration: true,
    low: range(10),
  }),
  particleLifeExpectancy: sanitizeTimeline({
    property: 'particleLifeExpectancy',
    useEmitterDuration: true,
    low: range(2),
  }),
  orientToForwardDirection: false,
  propertyTimelines: [],
  material: getDefaultMaterial(),
};

/**
 * @type {ParticleEffectVo}
 */
export const particleEffectDefaults = {
  version: VERSION,
  emitters: [sanitizeEmitter({})],
};

/**
 * Sets defaults on the particle effect data object.
 *
 * @param {PartialDeep<ParticleEffectVo>} effect The particle effect to
 * sanitize.
 * @returns {ParticleEffectVo} The input, now safely type cast to a
 * `ParticleEffectVo`
 */
export function sanitizeParticleEffect(effect) {
  defaults(effect, particleEffectDefaults);
  effect.emitters.forEach((emitter) => {
    sanitizeEmitter(emitter);
  });
  return /** @type {ParticleEffectVo} */ (effect);
}


/**
 * Sets any defaults for unset properties on a timeline.
 *
 * @param {PartialDeep<PropertyTimelineVo>} timeline The timeline to sanitize.
 * @returns {PropertyTimelineVo} The input, now safely type cast.
 * Note: This method mutates emitter.
 */
export function sanitizeTimeline(timeline) {
  defaults(timeline, {high: timeline.low || timelineDefaults.high},
    timelineDefaults);
  sanitizeRange(timeline.low);
  sanitizeRange(timeline.high);
  return /** @type {PropertyTimelineVo} */ (timeline);
}

/**
 * Sets any defaults for unset properties on an emitter.
 *
 * @param {PartialDeep<ParticleEmitterVo>} emitter The emitter to sanitize.
 * @returns {ParticleEmitterVo} The input, now safely type cast.
 * Note: This method mutates emitter.
 */
export function sanitizeEmitter(emitter) {
  defaults(emitter, {id: MathUtils.generateUUID()}, emitterDefaults);

  sanitizeRange(emitter.duration.duration);
  sanitizeRange(emitter.duration.delayBefore);
  sanitizeRange(emitter.duration.delayAfter);
  sanitizeTimeline(emitter.emissionRate);
  sanitizeTimeline(emitter.particleLifeExpectancy);

  emitter.propertyTimelines.forEach((timeline) => {
    sanitizeTimeline(timeline);
  });
  return /** @type {ParticleEmitterVo} */ (emitter);
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
 * Populates a `RangeVo` with defaults.
 *
 * @param {Partial<RangeVo>} range The range to sanitize.
 * @returns {RangeVo} The input range, populated with defaults.
 * Note: This method mutates range.
 */
export function sanitizeRange(range) {
  defaults(range, {max: range.min || 0}, rangeDefaults);
  return /** @type {RangeVo} */ (range);
}

/**
 * Constructs an object implementing RangeVo.
 *
 * @param {number} min The minimum value.
 * @param {number} max The maximum value (default is min)
 * @param {easing.EaseType} ease The interpolation between min and max.
 * @returns {RangeVo} The new range.
 */
export function range(min, max = min, ease = 'linear') {
  return {min: min, max: max, ease: ease};
}

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
  const ease = easing.getEase(range.ease);
  return ease(rng()) * (range.max - range.min) +
    range.min;
}
