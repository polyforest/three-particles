import { Vector3 } from 'three'
import { clamp } from 'lodash'
import { ParticleEmitterModel, randomFromZone, TimelineModel } from '../model'
import { PropertyValue } from './PropertyValue'
import { getTimelineValues, HALF_PI } from '../util'

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
    readonly position: Vector3
    readonly velocity: Vector3
    readonly scale: Vector3
    readonly rotation: Vector3
    readonly rotationalVelocity: Vector3
    readonly forwardDirection: Vector3
    readonly forwardDirectionVelocity: Vector3
    forwardVelocity: number
    readonly tint: RgbaColor
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
    readonly rotationalVelocity = new Vector3()
    readonly forwardDirection = new Vector3()
    readonly forwardDirectionVelocity = new Vector3()
    forwardVelocity = 0
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

        this.position.add(this.velocity)
        this.rotation.add(this.rotationalVelocity)
        this.forwardDirection.add(this.forwardDirectionVelocity)
        if (this.forwardVelocity !== 0) {
            if (
                this.forwardDirection.y !== 0 ||
                this.forwardDirection.x !== 0
            ) {
                // TODO: 3D forward direction.
            } else if (this.forwardDirection.z !== 0) {
                const theta = this.forwardDirection.z
                this.position.x += Math.cos(theta) * this.forwardVelocity
                this.position.y += Math.sin(theta) * this.forwardVelocity
            }
        }

        if (this.model.orientToForwardDirection) {
            this.rotationFinal.copy(this.rotation).add(this.forwardDirection)
            this.rotationFinal.z += HALF_PI
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
        this.rotationalVelocity.set(0, 0, 0)
        this.forwardDirection.set(0, 0, 0)
        this.forwardDirectionVelocity.set(0, 0, 0)
        this.forwardVelocity = 0
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
        const prop = timeline.property
        if (
            !(prop in particlePropertyUpdaters) &&
            !missingPropertiesWarned.has(prop)
        ) {
            missingPropertiesWarned.add(prop)
            console.warn(
                `Could not find property updater with the name ${prop}`,
            )
        }
        this.updater = particlePropertyUpdaters[prop] ?? (() => {})
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
            throw new Error('invalid color timeline, expected stride to be 4')
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
export const particlePropertyUpdaters: Record<
    string,
    ParticlePropertyUpdater | undefined
> = {
    x: (target, value) => (target.position.x = value),
    y: (target, value) => (target.position.y = value),
    z: (target, value) => (target.position.z = value),

    velocityX: (target, value) => (target.velocity.x = value),
    velocityY: (target, value) => (target.velocity.y = value),
    velocityZ: (target, value) => (target.velocity.z = value),

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

    rotationalVelocityX: (target, value) =>
        (target.rotationalVelocity.x = value),
    rotationalVelocityY: (target, value) =>
        (target.rotationalVelocity.y = value),
    rotationalVelocityZ: (target, value) =>
        (target.rotationalVelocity.z = value),

    forwardDirectionX: (target, value) => (target.forwardDirection.x = value),
    forwardDirectionY: (target, value) => (target.forwardDirection.y = value),
    forwardDirectionZ: (target, value) => (target.forwardDirection.z = value),

    forwardDirectionVelocityZ: (target, value) =>
        (target.forwardDirectionVelocity.z = value),

    forwardVelocity: (target, value) => (target.forwardVelocity = value),

    colorR: (target, value) => (target.tint.r = value),
    colorG: (target, value) => (target.tint.g = value),
    colorB: (target, value) => (target.tint.b = value),
    colorA: (target, value) => (target.tint.a = value),

    // imageIndex: (target, value) => (target.imageIndex += Math.round(delta)),
}
