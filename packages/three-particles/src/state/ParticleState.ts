import { Euler, Vector3 } from 'three'
import { clamp } from 'lodash'
import {
    isSpawnTimeline,
    ParticleEmitterModel,
    randomFromZone,
    TimelineModel,
} from '../model'
import { PropertyValue } from './PropertyValue'
import { closeTo, getTimelineValues } from '../util'

const tmpVec = new Vector3()

/**
 * Updates the particle state.
 */
export type ParticlePropertyUpdater = (
    state: ParticleProperties,
    value: number,
) => void

/**
 * Properties of a particle that may be updated.
 */
export interface ParticleProperties {
    /**
     * Current position of the particle in 3D space.
     */
    readonly position: Vector3

    /**
     * Velocity, in units per second.
     */
    readonly velocity: Vector3

    /**
     * Scale factor applied to the particle size in X, Y, and Z dimensions.
     * A value of 1 represents the original size, values greater than 1 increase size,
     * and values less than 1 decrease size.
     */
    readonly scale: Vector3

    /**
     * Rotation around each axis in radians. Positive values rotate clockwise when looking
     * along the axis toward the origin.
     * - X: Pitch (rotation around X axis)
     * - Y: Yaw (rotation around Y axis)
     * - Z: Roll (rotation around Z axis)
     */
    readonly rotation: Euler

    /**
     * Rotational velocity, in radians per second.
     */
    readonly rotationVel: Vector3

    /**
     * Orientation angles in radians around each axis.
     * Used for determining particle-facing direction.
     *
     * `forwardVel` will affect movement in this direction.
     * This will affect rotation if rotateToOrientation is enabled on the emitter.
     */
    readonly orientation: Euler

    /**
     * Rate of change for orientation in radians per second.
     */
    readonly orientationVel: Vector3

    /**
     * Velocity in the direction the particle is facing, in units per second.
     */
    forwardVel: number

    /**
     * Color and opacity of the particle.
     */
    readonly tint: RgbaColor

    /**
     * Reference point for particle transformations, typically in normalized coordinates (0-1).
     */
    readonly origin: Vector3
}

export class RgbaColor {
    constructor(
        public r: number,
        public g: number,
        public b: number,
        public a: number,
    ) {}

    set(r: number, g: number, b: number, a: number) {
        this.r = r
        this.g = g
        this.b = b
        this.a = a
    }
}

export class ParticleState implements ParticleProperties {
    active = false
    life = 0

    private _lifeExpectancy = 0
    private lifeExpectancyInv = 0

    readonly position = new Vector3()
    readonly velocity = new Vector3()
    readonly scale = new Vector3(1, 1, 1)
    readonly rotation = new Euler()
    readonly rotationVel = new Vector3()

    /**
     * The particle's orientation, represented as an Euler object representing
     * rotations around each axis, in radians.
     */
    readonly orientation = new Euler()

    /**
     * The rate of change for orientation. In radians per second.
     */
    readonly orientationVel = new Vector3()

    /**
     * The forward velocity in the orientation direction, in meters per second.
     */
    forwardVel = 0
    readonly tint: RgbaColor = new RgbaColor(1, 1, 1, 1)
    readonly origin = new Vector3(0.5, 0.5, 0.5)

    /**
     * The final rotation to apply to the rendered particle.
     * If rotateToOrientation is true on the emitter, this is rotation + orientation;
     * otherwise equals rotation.
     */
    readonly rotationFinal = new Euler()

    imageIndex = 0

    private readonly propertyStates: readonly ParticlePropertyState[]

    get lifeExpectancy(): number {
        return this._lifeExpectancy
    }

    set lifeExpectancy(value: number) {
        this._lifeExpectancy = value
        this.lifeExpectancyInv = 1 / value
    }

    constructor(private readonly model: ParticleEmitterModel) {
        this.propertyStates = createPropertyStates(
            this,
            model.propertyTimelines,
        )
    }

    update(tickTime: number, emitterAlpha: number): void {
        this.life += tickTime
        const alpha = this.life * this.lifeExpectancyInv
        const alphaClamped = clamp(alpha, 0, 1)

        for (const prop of this.propertyStates) {
            // Spawn timelines (single-keyframe SETs) were applied once in
            // reset(); re-applying them here would re-pin the property every
            // frame and cancel the velocity integrations that follow.
            if (prop.spawnOnly) continue
            prop.apply(alphaClamped, emitterAlpha)
        }

        // Scale velocities by tickTime
        if (isVec3NotZero(this.velocity)) {
            this.position.add(
                tmpVec.copy(this.velocity).multiplyScalar(tickTime),
            )
        }

        if (isVec3NotZero(this.rotationVel)) {
            this.rotation.x += this.rotationVel.x * tickTime
            this.rotation.y += this.rotationVel.y * tickTime
            this.rotation.z += this.rotationVel.z * tickTime
        }

        if (isVec3NotZero(this.orientationVel)) {
            // Integrate orientation (Euler angles) by adding scaled angular velocity per axis.
            this.orientation.x += this.orientationVel.x * tickTime
            this.orientation.y += this.orientationVel.y * tickTime
            this.orientation.z += this.orientationVel.z * tickTime
        }

        if (!closeTo(this.forwardVel, 0)) {
            // Move the particle forward along its orientation by forwardVel per second.
            // Compute forward dir by rotating +Y with the current orientation Euler (XYZ order).
            tmpVec.set(0, 1, 0).applyEuler(this.orientation)
            this.position.addScaledVector(tmpVec, this.forwardVel * tickTime)
        }

        if (this.model.rotateToOrientation) {
            this.rotationFinal.x = this.rotation.x + this.orientation.x
            this.rotationFinal.y = this.rotation.y + this.orientation.y
            this.rotationFinal.z = this.rotation.z + this.orientation.z
        } else {
            this.rotationFinal.copy(this.rotation)
        }
    }

    reset(emitterAlpha = 1): void {
        this.active = false
        this.life = 0
        this._lifeExpectancy = 0
        this.lifeExpectancyInv = 0
        randomFromZone(this.model.spawn, this.position)
        this.velocity.set(0, 0, 0)
        this.scale.set(1, 1, 1)
        this.rotation.set(0, 0, 0)
        this.rotationVel.set(0, 0, 0)
        this.orientation.set(0, 0, 0)
        this.orientationVel.set(0, 0, 0)
        this.forwardVel = 0
        this.tint.set(1, 1, 1, 1)
        this.origin.set(0.5, 0.5, 0.5)
        this.imageIndex = 0

        for (const prop of this.propertyStates) {
            prop.reset(emitterAlpha)
        }
    }
}

export interface ParticlePropertyState {
    apply(particleAlpha: number, emitterAlpha: number): void

    /**
     * Re-samples the state's per-leaf low/high draws. States holding spawn
     * timelines (`isSpawnTimeline`) also apply them here, exactly once —
     * `emitterAlpha` is the emitter's progress at spawn (defaults to 1 for
     * manual resets).
     */
    reset(emitterAlpha?: number): void

    /**
     * True when every timeline in this state is a spawn timeline: `ParticleState`
     * skips it in the per-frame pass (it was applied once in `reset()`).
     */
    readonly spawnOnly?: boolean
}

/**
 * Builds one property state per SET timeline (in author order, preserving the
 * pre-additive behavior exactly), and — for each property that has one or more
 * `mode: "add"` timelines — a single `AdditiveFloatPropertyState` covering all
 * of that property's timelines, placed at its first occurrence.
 */
function createPropertyStates(
    particleProps: ParticleProperties,
    timelines: readonly TimelineModel[],
): readonly ParticlePropertyState[] {
    const additiveProperties = new Set(
        timelines
            .filter((timeline) => timeline.mode === 'add')
            .map((timeline) => timeline.property),
    )
    const states: ParticlePropertyState[] = []
    const compositeStarted = new Set<string>()
    for (const timeline of timelines) {
        if (additiveProperties.has(timeline.property)) {
            if (compositeStarted.has(timeline.property)) continue
            compositeStarted.add(timeline.property)
            states.push(
                new AdditiveFloatPropertyState(
                    particleProps,
                    timelines.filter((t) => t.property === timeline.property),
                    getParticlePropertyUpdater(timeline.property),
                ),
            )
            continue
        }
        states.push(createParticlePropertyState(particleProps, timeline))
    }
    return states
}

export function createParticlePropertyState(
    particleProps: ParticleProperties,
    timeline: TimelineModel,
): ParticlePropertyState {
    return timeline.property === 'color'
        ? new ColorPropertyState(particleProps.tint, timeline)
        : timeline.mode === 'add'
          ? new AdditiveFloatPropertyState(
                particleProps,
                [timeline],
                getParticlePropertyUpdater(timeline.property),
            )
          : new FloatPropertyState(
                particleProps,
                timeline,
                getParticlePropertyUpdater(timeline.property),
            )
}

class FloatPropertyState implements ParticlePropertyState {
    private readonly value: PropertyValue
    private readonly updater: ParticlePropertyUpdater
    readonly spawnOnly: boolean

    constructor(
        private readonly particleProps: ParticleProperties,
        private readonly timeline: TimelineModel,
        updater: ParticlePropertyUpdater,
    ) {
        this.value = new PropertyValue(timeline)
        this.updater = updater
        this.spawnOnly = isSpawnTimeline(timeline)
    }

    apply(particleAlphaClamped: number, emitterAlphaClamped: number): void {
        if (this.timeline.timeline.length === 0) return
        const time = this.timeline.useEmitterDuration
            ? emitterAlphaClamped
            : particleAlphaClamped
        this.value.setTime(time)
        this.updater(this.particleProps, this.value.current)
    }

    reset(emitterAlpha = 1): void {
        this.value.reset()
        // A spawn-only timeline lands its particle-time-0 sample on the
        // property exactly here, and never again (update skips this state).
        if (this.spawnOnly) this.apply(0, emitterAlpha)
    }
}

/**
 * State for a property that has one or more `mode: "add"` timelines.
 *
 * Mirrors the legacy engine's timeline accumulation (FloatTimelineInstance.apply,
 * acornui-game.js:2291-2296): the property receives the SET timeline's tracked
 * value (if any — the last non-empty one wins, matching per-frame assignment
 * order) plus the SUM of every additive timeline's tracked value at time t. Each
 * additive timeline tracks its own curve — it contributes the interpolated value
 * at t, never its integral — and keeps its own per-leaf low/high draw.
 *
 * The total is computed here and assigned once through the ordinary (SET)
 * updater, so nothing accumulates across frames.
 */
class AdditiveFloatPropertyState implements ParticlePropertyState {
    private readonly entries: readonly {
        readonly value: PropertyValue
        readonly timeline: TimelineModel
        readonly isAdd: boolean
        readonly spawnOnly: boolean
    }[]
    private readonly updater: ParticlePropertyUpdater

    /**
     * True when every timeline of the property is spawn-only: the whole state
     * is skipped by the per-frame pass.
     */
    readonly spawnOnly: boolean

    private readonly hasSpawnOnlyEntries: boolean

    constructor(
        private readonly particleProps: ParticleProperties,
        timelines: readonly TimelineModel[],
        updater: ParticlePropertyUpdater,
    ) {
        // One PropertyValue per timeline of the property, in author order, so
        // the per-leaf draws happen exactly as they would as individual states.
        this.entries = timelines.map((timeline) => ({
            value: new PropertyValue(timeline),
            timeline,
            isAdd: timeline.mode === 'add',
            spawnOnly: isSpawnTimeline(timeline),
        }))
        this.updater = updater
        this.spawnOnly = this.entries.every((entry) => entry.spawnOnly)
        this.hasSpawnOnlyEntries = this.entries.some((entry) => entry.spawnOnly)
    }

    apply(particleAlphaClamped: number, emitterAlphaClamped: number): void {
        let base: number | null = null
        let sum = 0
        for (const entry of this.entries) {
            // An empty timeline contributes nothing and does not win the SET
            // base — the legacy engine skipped empty timelines the same way.
            if (entry.timeline.timeline.length === 0) continue
            if (entry.spawnOnly) {
                // Sampled once at reset: a spawn SET keeps its spawn value as
                // the base so per-frame additive contributions ride on top.
                base = entry.value.current
                continue
            }
            const time = entry.timeline.useEmitterDuration
                ? emitterAlphaClamped
                : particleAlphaClamped
            entry.value.setTime(time)
            if (entry.isAdd) sum += entry.value.current
            else base = entry.value.current
        }
        this.updater(this.particleProps, (base ?? 0) + sum)
    }

    reset(emitterAlpha = 1): void {
        for (const entry of this.entries) {
            entry.value.reset()
        }
        if (!this.hasSpawnOnlyEntries) return
        // Land the spawn SET on the property once, at particle-time 0. ADD
        // entries are never spawn timelines, so a state with any ADD also
        // runs per frame and re-uses this value as its base.
        let base: number | null = null
        for (const entry of this.entries) {
            if (!entry.spawnOnly) continue
            entry.value.setTime(
                entry.timeline.useEmitterDuration ? emitterAlpha : 0,
            )
            base = entry.value.current
        }
        if (base !== null) this.updater(this.particleProps, base)
    }
}

class ColorPropertyState implements ParticlePropertyState {
    private readonly previous = new Float32Array(3)
    private readonly value = new Float32Array(3)
    readonly spawnOnly: boolean

    constructor(
        private readonly color: RgbaColor,
        private readonly timeline: TimelineModel,
    ) {
        if (timeline.timeline.length % 4 !== 0)
            throw new Error(
                `invalid color timeline, expected stride to be 4, was length ${timeline.timeline.length}`,
            )
        this.spawnOnly = isSpawnTimeline(timeline)
    }

    apply(particleAlpha: number, emitterAlpha: number): void {
        // Mirror FloatPropertyState: an empty timeline must not zero-fill the
        // tint to black every frame.
        if (this.timeline.timeline.length === 0) return
        this.previous.set(this.value)
        const time = this.timeline.useEmitterDuration
            ? emitterAlpha
            : particleAlpha
        getTimelineValues(this.timeline.timeline, 3, time, this.value)
        const color = this.color
        color.r = this.value[0]
        color.g = this.value[1]
        color.b = this.value[2]
    }

    reset(emitterAlpha = 1): void {
        getTimelineValues(this.timeline.timeline, 3, 0, this.value)
        this.previous.set(this.value)
        // A spawn-only color timeline lands its spawn sample on the tint
        // exactly here; the per-frame pass skips this state entirely.
        if (this.spawnOnly && this.timeline.timeline.length > 0) {
            const time = this.timeline.useEmitterDuration ? emitterAlpha : 0
            getTimelineValues(this.timeline.timeline, 3, time, this.value)
            this.color.r = this.value[0]
            this.color.g = this.value[1]
            this.color.b = this.value[2]
            this.previous.set(this.value)
        }
    }
}

// noinspection JSUnusedGlobalSymbols

/**
 * A registry of timeline property keys (`TimelineModel.property`) to their respective update
 * functions.
 */
export const particlePropertyUpdaters = {
    x: (target, value) => (target.position.x = value),
    y: (target, value) => (target.position.y = value),
    z: (target, value) => (target.position.z = value),

    xVel: (target, value) => (target.velocity.x = value),
    yVel: (target, value) => (target.velocity.y = value),
    zVel: (target, value) => (target.velocity.z = value),

    originX: (target, value) => (target.origin.x = value),
    originY: (target, value) => (target.origin.y = value),
    originZ: (target, value) => (target.origin.z = value),

    scale: (target, value) => {
        target.scale.x = value
        target.scale.y = value
        target.scale.z = value
    },
    scaleX: (target, value) => (target.scale.x = value),
    scaleY: (target, value) => (target.scale.y = value),
    scaleZ: (target, value) => (target.scale.z = value),

    rotationX: (target, value) => (target.rotation.x = value),
    rotationY: (target, value) => (target.rotation.y = value),
    rotationZ: (target, value) => (target.rotation.z = value),

    rotationXVel: (target, value) => (target.rotationVel.x = value),
    rotationYVel: (target, value) => (target.rotationVel.y = value),
    rotationZVel: (target, value) => (target.rotationVel.z = value),

    orientationX: (target, value) => (target.orientation.x = value),
    orientationY: (target, value) => (target.orientation.y = value),
    orientationZ: (target, value) => (target.orientation.z = value),

    orientationXVel: (target, value) => (target.orientationVel.x = value),
    orientationYVel: (target, value) => (target.orientationVel.y = value),
    orientationZVel: (target, value) => (target.orientationVel.z = value),

    forwardVel: (target, value) => (target.forwardVel = value),

    colorR: (target, value) => (target.tint.r = value),
    colorG: (target, value) => (target.tint.g = value),
    colorB: (target, value) => (target.tint.b = value),
    colorA: (target, value) => (target.tint.a = value),

    // imageIndex: (target, value) => (target.imageIndex += Math.round(delta)),
} as const satisfies Record<string, ParticlePropertyUpdater | undefined>

export type ParticlePropertyKey = keyof typeof particlePropertyUpdaters

const missingPropertiesWarned = new Set<string>()

export function getParticlePropertyUpdater(
    propertyKey: string,
): ParticlePropertyUpdater {
    const prop = propertyKey as ParticlePropertyKey
    // Own-property check: an `in` check lets prototype keys like 'valueOf' or
    // 'toString' resolve to Object.prototype members instead of warning as
    // unknown properties.
    if (!Object.prototype.hasOwnProperty.call(particlePropertyUpdaters, prop)) {
        if (!missingPropertiesWarned.has(prop)) {
            missingPropertiesWarned.add(prop)
            console.warn(
                `Could not find property updater with the name ${prop}`,
            )
        }
        return () => {}
    }
    return particlePropertyUpdaters[prop]
}

/**
 * Returns true if the given vector is not close to 0.
 */
function isVec3NotZero(vec: Vector3): boolean {
    return vec.lengthSq() > Number.EPSILON
}
