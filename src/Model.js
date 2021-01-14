/**
 * Function representing an interpolation.
 * @typedef {function} Ease
 * @param {number} alpha A number with range 0-1
 * @return {number} The alpha after easing.
 */

/**
 *
 * @typedef {Object} ParticleEmitterVo
 *
 * @property {string} id The id of the emitter.
 *
 * @property {boolean} enabled True if the emitter is enabled. (default is true)
 *
 * @property {boolean} loops If true, this emitter will loop after the total duration. (default is true)
 *
 * @property {EmitterDurationVo} duration Represents when and how long this emitter will be active.
 *
 * @property {number} count The maximum number of particles to create.
 *
 * @property {PropertyTimelineVo} emissionRate The rate of emissions, in particles per second.
 *
 * @property {PropertyTimelineVo} particleLifeExpectancy Calculates the life of a newly created particle.
 *
 * @property {boolean} orientToForwardDirection If true, the forward direction affects the rotation.
 *
 * @property {PropertyTimelineVo[]} propertyTimelines Timelines relative to the particle life.
 *
 */

/**
 *
 * @typedef {Object} EmitterDurationVo
 *
 */

/**
 * @typedef {Object} PropertyTimelineVo
 *
 * @property {string} property The name of the property this timeline controls.
 *
 * @property {number[]} timeline A list of [time, value0, value1, valueN, ... ]
 * Where each set starts with a time (in seconds) followed by [numComponent] values.
 *
 * @property {number} numComponents The number of values for each set in the timeline.
 *
 * @property {boolean} useEmitterDuration If true, relative to the particle's lifespan, if false, relative to the
 * emitter duration.
 *
 */

// val id: Int = nextId(),
//
//     /**
//      * The name of the property this timeline controls.
//      */
//     val property: String,
//
//     /**
//      * A list of `[time, value0, value1, valueN, ... ]`
//      */
//     val timeline: FloatArray = floatArrayOf(),
//
//     /**
//      * The number of values for each set in the timeline.
//      */
//     val numComponents: Int = 1,
//
//     /**
//      * If true, relative to the particle's lifespan, if false, relative to the emitter duration.
//      */
//     val useEmitterDuration: Boolean = false,
//
//     /**
//      * If true, the final value will not be the high value, but the high + low.
//      */
//     val relative: Boolean = false,
//
//     /**
//      * When the values are initialized / reset for a new particle, this will be the low range.
//      */
//     val low: FloatRange = FloatRange(0f),
//
// /**
//  * When the values are initialized / reset for a new particle, this will be the high range.
//  */
// val high: FloatRange = FloatRange(0f)