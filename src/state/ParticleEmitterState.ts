import { ParticleState } from './ParticleState'
import { ParticleEmitterModel, valueFromRange } from '../model'
import { PropertyValue } from './PropertyValue'
import { arrayOf } from '../util'
import { clamp } from 'lodash'

export class ParticleEmitterState {
    readonly maxParticlesScale: number
    readonly particles: readonly ParticleState[]

    /** Maximum number of particles. */
    readonly count: number
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

    private readonly emissionRateValue: PropertyValue
    private readonly particleLifeExpectancyValue: PropertyValue

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

    get isComplete(): boolean {
        return this._isComplete
    }

    constructor(
        readonly model: ParticleEmitterModel,
        maxParticlesScale: number = 1,
    ) {
        this.maxParticlesScale = maxParticlesScale
        this.count = Math.ceil(model.count * maxParticlesScale)
        this.particles = arrayOf(this.count, () => new ParticleState(model))
        this.emissionRateValue = new PropertyValue(model.emissionRate)
        this.particleLifeExpectancyValue = new PropertyValue(
            model.particleLifeExpectancy,
        )
        this.rewind()
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
        this.emissionRateValue.setTime(emitterAlpha)
        this.particleLifeExpectancyValue.setTime(emitterAlpha)

        if (this.time < this.duration && this.time > 0) {
            const accumRate =
                this.emissionRateValue.current * this.maxParticlesScale
            this.accumulator += accumRate * dT
            const accumRateInv = 1 / accumRate

            if (this.accumulator > 1) {
                let timeOffset = 0
                for (const particle of this.particles) {
                    if (!particle.active) {
                        particle.reset()
                        particle.life += timeOffset
                        timeOffset -= accumRateInv
                        particle.active = true
                        particle.lifeExpectancy =
                            this.particleLifeExpectancyValue.current
                        this._activeCount++
                        this.accumulator--
                    }
                    if (this._activeCount >= this.count) this.accumulator = 0
                    if (this.accumulator < 1) break
                }
            }
        }

        const alphaClamped = clamp(emitterAlpha, 0, 1)
        for (const particle of this.particles) {
            if (particle.active) {
                particle.update(dT, alphaClamped)
                if (particle.life > particle.lifeExpectancy) {
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
        this.loops = e.loops
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
