import { Euler, Vector3 } from 'three'
import { clamp } from 'lodash'
import { ParticleEmitterModel, randomFromZone, TimelineModel } from '../model'
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
    readonly rotation: Vector3

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
    readonly rotation = new Vector3()
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
     * If orientToForwardDirection is true, the final rotation will be rotation forwardDirection
     */
    readonly rotationFinal = new Vector3()

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
        this.propertyStates = model.propertyTimelines.map((timeline) =>
            createParticlePropertyState(this, timeline),
        )
    }

    update(tickTime: number, emitterAlpha: number): void {
        this.life += tickTime
        const alpha = this.life * this.lifeExpectancyInv
        const alphaClamped = clamp(alpha, 0, 1)

        for (const prop of this.propertyStates) {
            prop.apply(alphaClamped, emitterAlpha)
        }

        // Scale velocities by tickTime
        if (isVec3NotZero(this.velocity)) {
            this.position.add(
                tmpVec.copy(this.velocity).multiplyScalar(tickTime),
            )
        }

        if (isVec3NotZero(this.rotation)) {
            this.rotation.add(
                tmpVec.copy(this.rotationVel).multiplyScalar(tickTime),
            )
        }

        if (isVec3NotZero(this.orientationVel)) {
            // Integrate orientation (Euler angles) by adding scaled angular velocity per axis.
            this.orientation.x += this.orientationVel.x * tickTime
            this.orientation.y += this.orientationVel.y * tickTime
            this.orientation.z += this.orientationVel.z * tickTime
        }

        if (!closeTo(this.forwardVel, 0)) {
            // Move the particle forward along its orientation by forwardVel per second.
            // Compute forward dir by rotating +Z with the current orientation Euler (XYZ order).
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

    reset(): void {
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
            prop.reset()
        }
    }
}

export interface ParticlePropertyState {
    apply(particleAlpha: number, emitterAlpha: number): void

    reset(): void
}

export function createParticlePropertyState(
    particleProps: ParticleProperties,
    timeline: TimelineModel,
): ParticlePropertyState {
    return timeline.property === 'color'
        ? new ColorPropertyState(particleProps.tint, timeline)
        : new FloatPropertyState(particleProps, timeline)
}

const missingPropertiesWarned = new Set<string>()

class FloatPropertyState implements ParticlePropertyState {
    private readonly value: PropertyValue
    private readonly updater: ParticlePropertyUpdater

    constructor(
        private readonly particleProps: ParticleProperties,
        private readonly timeline: TimelineModel,
    ) {
        this.value = new PropertyValue(timeline)
        const prop = timeline.property as ParticlePropertyKey
        if (!(prop in particlePropertyUpdaters)) {
            if (!missingPropertiesWarned.has(prop)) {
                missingPropertiesWarned.add(prop)
                console.warn(
                    `Could not find property updater with the name ${prop}`,
                )
            }
            this.updater = () => {}
        } else {
            this.updater = particlePropertyUpdaters[prop]
        }
    }

    apply(particleAlphaClamped: number, emitterAlphaClamped: number): void {
        if (this.timeline.timeline.length === 0) return
        const time = this.timeline.useEmitterDuration
            ? emitterAlphaClamped
            : particleAlphaClamped
        this.value.setTime(time)
        this.updater(this.particleProps, this.value.current)
    }

    reset(): void {
        this.value.reset()
    }
}

class ColorPropertyState implements ParticlePropertyState {
    private readonly previous = new Float32Array(3)
    private readonly value = new Float32Array(3)

    constructor(
        private readonly color: RgbaColor,
        private readonly timeline: TimelineModel,
    ) {
        if (timeline.timeline.length % 4 !== 0)
            throw new Error(
                `invalid color timeline, expected stride to be 4, was length ${timeline.timeline.length}`,
            )
    }

    apply(particleAlpha: number, emitterAlpha: number): void {
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

    reset(): void {
        getTimelineValues(this.timeline.timeline, 3, 0, this.value)
        this.previous.set(this.value)
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

/**
 * Returns true if the given vector is not close to 0.
 */
function isVec3NotZero(vec: Vector3): boolean {
    return vec.lengthSq() <= Number.EPSILON
}
