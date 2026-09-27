import { RgbaColor, ParticleState } from './ParticleState'
import { ParticleEmitterModel, SubEmitterModel, valueFromRange } from '../model'
import { PropertyValue } from './PropertyValue'
import { arrayOf } from '../util'
import { clamp } from 'lodash'
import { Vector3 } from 'three'

/**
 * Receives sub-emitter triggers from an emitter state. Implemented by the
 * effect's sub-emitter system (see object/SubEmitterSystem.ts).
 */
export interface SubEmitterSink {
    /** Starts `sub`'s template at `particle`, emitted by `source`. */
    spawn(
        sub: SubEmitterModel,
        particle: ParticleState,
        source: ParticleEmitterState,
    ): void
    /** Converts an effect-local position to world space, in place. */
    localToWorld(position: Vector3): Vector3
}

export interface ParticleEmitterStateOptions {
    /**
     * Run a single cycle even if the model loops. Sub-emitter instances use
     * this: an instance plays its template's duration once, then completes.
     */
    once?: boolean
}

const tmpPosition = new Vector3()

export class ParticleEmitterState {
    readonly particles: readonly ParticleState[]

    /** Current number of active particles. */
    private _activeCount = 0
    private delayBefore: number = 0
    private delayAfter: number = 0
    private time: number = 0
    private duration: number = 0
    private durationInv = 0
    private endTime = 0
    private _isComplete = false
    private loops = false
    private accumulator = 0
    private _alpha = 0

    private readonly emissionRateValue: PropertyValue
    private readonly particleLifeExpectancyValue: PropertyValue
    private readonly once: boolean

    /**
     * Where this state's particles sit in the effect's local space. Zero for
     * root emitters; a sub-emitter instance's spawn point otherwise.
     */
    readonly offset = new Vector3()

    /**
     * Color multiplier for rendering this state's particles (a sub-emitter
     * instance inheriting its parent's color), or null for none.
     */
    tintMultiplier: RgbaColor | null = null

    /** Velocity given to every particle this state spawns (inherited). */
    readonly spawnVelocity = new Vector3()

    /** Where sub-emitter triggers go; set by ParticleEffect. */
    subEmitterSink: SubEmitterSink | null = null

    // Age/position triggers checked each frame, with their index in
    // model.subEmitters (the particle's fired-bit).
    private readonly frameTriggers: readonly {
        sub: SubEmitterModel
        bit: number
    }[]
    private readonly birthTriggers: readonly SubEmitterModel[]
    private readonly deathTriggers: readonly SubEmitterModel[]

    get activeCount(): number {
        return this._activeCount
    }

    /**
     * Total time, in seconds the emitter runs before looping or ending.
     */
    get totalTime(): number {
        return this.delayBefore + this.duration + this.delayAfter
    }

    /**
     * Current percent progress of this emitter.
     */
    get progress(): number {
        if (this.totalTime <= 0) return 1
        return (this.time + this.delayBefore) / this.totalTime
    }

    /**
     * The emitter's progress through its duration at the last update,
     * clamped to 0..1 (the emitter alpha timelines sample at).
     */
    get alpha(): number {
        return this._alpha
    }

    get isComplete(): boolean {
        return this._isComplete
    }

    constructor(
        readonly model: ParticleEmitterModel,
        options: ParticleEmitterStateOptions = {},
    ) {
        this.once = options.once ?? false
        this.particles = arrayOf(model.count, () => new ParticleState(model))
        this.emissionRateValue = new PropertyValue(model.emissionRate)
        this.particleLifeExpectancyValue = new PropertyValue(
            model.particleLifeExpectancy,
        )
        const subs = model.subEmitters
        this.birthTriggers = subs.filter((s) => s.trigger.type === 'birth')
        this.deathTriggers = subs.filter((s) => s.trigger.type === 'death')
        this.frameTriggers = subs
            .map((sub, i) => ({ sub, bit: 1 << i }))
            .filter(
                ({ sub }) =>
                    sub.trigger.type === 'age' ||
                    sub.trigger.type === 'position',
            )
        this.rewind()
    }

    private get hasSubEmitters(): boolean {
        return this.subEmitterSink !== null
    }

    private fire(sub: SubEmitterModel, particle: ParticleState): void {
        // Only a probability below 1 draws a random number, so effects
        // that always fire keep the same random sequence.
        if (sub.probability < 1 && Math.random() >= sub.probability) return
        this.subEmitterSink!.spawn(sub, particle, this)
    }

    /**
     * Checks age/position triggers for an active particle after its update.
     * Returns true if a firing trigger killed the particle.
     */
    private checkFrameTriggers(particle: ParticleState): boolean {
        for (const { sub, bit } of this.frameTriggers) {
            if (particle.subEmitterFired & bit) continue
            const t = sub.trigger
            let hit = false
            if (t.type === 'age') {
                const age =
                    t.unit === 'seconds'
                        ? particle.life
                        : particle.lifeExpectancy > 0
                          ? particle.life / particle.lifeExpectancy
                          : 0
                hit = age >= t.at
            } else if (t.type === 'position') {
                const p = tmpPosition.copy(particle.position).add(this.offset)
                if (t.space === 'world') this.subEmitterSink!.localToWorld(p)
                const v = p[t.axis]
                hit = t.op === '<' ? v < t.value : v > t.value
            }
            if (!hit) continue
            particle.subEmitterFired |= bit
            this.fire(sub, particle)
            if (sub.killParticle) return true
        }
        return false
    }

    update(dT: number): void {
        if (this._isComplete || !this.model.enabled) return

        this.time += dT

        if (this.time >= this.endTime) {
            if (this.loops) {
                const remainder = this.time - this.endTime
                this.rewind()
                this.time += remainder
            } else if (this._activeCount === 0) {
                this._isComplete = true
                this.accumulator = 0
                return
            }
        }

        const emitterAlpha = this.time * this.durationInv
        const alphaClamped = clamp(emitterAlpha, 0, 1)
        this._alpha = alphaClamped
        this.emissionRateValue.setTime(emitterAlpha)
        this.particleLifeExpectancyValue.setTime(emitterAlpha)

        if (this.time < this.duration && this.time > 0) {
            const accumRate = this.emissionRateValue.current
            this.accumulator += accumRate * dT
            const accumRateInv = 1 / accumRate

            if (this.accumulator > 1) {
                let timeOffset = 0
                for (const particle of this.particles) {
                    if (!particle.active) {
                        // Spawn-time emitter alpha: single-keyframe SET
                        // timelines (isSpawnTimeline) sample once, here.
                        particle.reset(alphaClamped)
                        particle.life += timeOffset
                        timeOffset -= accumRateInv
                        particle.active = true
                        particle.lifeExpectancy =
                            this.particleLifeExpectancyValue.current
                        particle.inheritedVelocity.copy(this.spawnVelocity)
                        this._activeCount++
                        this.accumulator--
                        if (this.hasSubEmitters) {
                            for (const sub of this.birthTriggers)
                                this.fire(sub, particle)
                        }
                    }
                    if (this._activeCount >= this.model.count)
                        this.accumulator = 0
                    if (this.accumulator < 1) break
                }
            }
        }

        const triggers = this.hasSubEmitters
        for (const particle of this.particles) {
            if (particle.active) {
                particle.update(dT, alphaClamped)
                if (particle.life > particle.lifeExpectancy) {
                    if (triggers) {
                        for (const sub of this.deathTriggers)
                            this.fire(sub, particle)
                    }
                    particle.active = false
                    this._activeCount--
                } else if (
                    triggers &&
                    this.frameTriggers.length > 0 &&
                    this.checkFrameTriggers(particle)
                ) {
                    particle.active = false
                    this._activeCount--
                }
            }
        }
    }

    clearParticles(): void {
        for (const particle of this.particles) {
            particle.active = false
        }
        this._activeCount = 0
        this.accumulator = 0
    }

    reset(): void {
        this.clearParticles()
        this.rewind()
    }

    /**
     * Sets the current time to the end and stops looping.
     * Rewind will start the emission again.
     *
     * @param allowCompletion If true (default), the currently active particles will
     * be allowed to finish.
     */
    stop(allowCompletion: boolean = true): void {
        this.loops = false
        this.time = this.endTime
        if (!allowCompletion) {
            this.clearParticles()
            this._isComplete = true
        }
    }

    /**
     * Rewinds to the beginning without affecting currently active particles.
     */
    rewind(): void {
        const e = this.model
        this._isComplete = false
        this.loops = e.loops && !this.once
        this.delayBefore = valueFromRange(e.duration.delayBefore)
        this.delayAfter = valueFromRange(e.duration.delayAfter)
        this.time = -this.delayBefore
        this.duration = valueFromRange(e.duration.duration)
        this.durationInv = 1 / this.duration
        this.endTime = this.duration + this.delayAfter

        this.emissionRateValue.reset()
        this.particleLifeExpectancyValue.reset()
    }
}
