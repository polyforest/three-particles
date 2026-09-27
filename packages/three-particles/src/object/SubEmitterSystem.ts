import { Object3D, Vector3 } from 'three'
import {
    ParticleEffectModel,
    ParticleEmitterModel,
    SubEmitterModel,
    subEmitterTemplateIds,
} from '../model'
import {
    ParticleEmitterState,
    ParticleState,
    RgbaColor,
    SubEmitterSink,
} from '../state'

const tmpVelocity = new Vector3()
const tmpPosition = new Vector3()

/**
 * Upper bound on particles reserved by all live sub-emitter instances of one
 * effect (each instance reserves its template's `count`). Spawns that would
 * exceed it are dropped, so a runaway chain can't allocate without limit.
 */
export const MAX_SUB_EMITTER_PARTICLES = 20000

/**
 * The instances of one template emitter. Instances are emitter states that
 * play the template once at a spawn point; finished instances return to
 * the pool for reuse. When `subEmitterMaxInstances` are live, new spawns are
 * dropped (existing instances always finish; nothing is cut short).
 */
export class SubEmitterPool {
    private readonly states: ParticleEmitterState[] = []
    private readonly free: ParticleEmitterState[] = []
    private readonly live: ParticleEmitterState[] = []

    constructor(
        readonly template: ParticleEmitterModel,
        private readonly system: SubEmitterSystem,
    ) {}

    get maxInstances(): number {
        return this.template.subEmitterMaxInstances
    }

    /** Particles this pool can render at once (every instance at full count). */
    get capacity(): number {
        return this.template.count * this.maxInstances
    }

    /** Live instances, in spawn order. */
    get activeStates(): readonly ParticleEmitterState[] {
        return this.live
    }

    /** Emission progress of the newest instance (for the shader uniform). */
    get alpha(): number {
        return this.live.length > 0 ? this.live[this.live.length - 1].alpha : 0
    }

    /**
     * Starts an instance at `position` (effect-local). Returns false when the
     * pool or the effect-wide particle budget is full, or the template is
     * disabled.
     */
    spawn(
        position: Vector3,
        velocity: Vector3 | null,
        tint: RgbaColor | null,
    ): boolean {
        if (!this.template.enabled) return false
        if (this.live.length >= this.maxInstances) return false
        if (!this.system.reserve(this.template.count)) return false
        let state = this.free.pop()
        if (!state) {
            state = new ParticleEmitterState(this.template, { once: true })
            if (this.template.subEmitters.length > 0)
                state.subEmitterSink = this.system
            this.states.push(state)
        }
        state.reset()
        state.offset.copy(position)
        if (velocity) state.spawnVelocity.copy(velocity)
        else state.spawnVelocity.set(0, 0, 0)
        if (tint) {
            state.tintMultiplier ??= new RgbaColor(1, 1, 1, 1)
            state.tintMultiplier.set(tint.r, tint.g, tint.b, tint.a)
        } else {
            state.tintMultiplier = null
        }
        this.live.push(state)
        return true
    }

    update(dT: number): void {
        // Instances spawned during this loop (a template that sub-emits
        // itself is rejected at parse time, so none are added to this pool
        // mid-iteration) update from their spawn frame on.
        for (let i = 0; i < this.live.length; i++) {
            const state = this.live[i]
            state.update(dT)
            if (state.isComplete) {
                this.live.splice(i--, 1)
                this.free.push(state)
                this.system.release(this.template.count)
            }
        }
    }

    /** Ends every instance immediately. */
    reset(): void {
        for (const state of this.live) {
            state.clearParticles()
            this.free.push(state)
            this.system.release(this.template.count)
        }
        this.live.length = 0
    }

    /** Drops all pooled states. */
    dispose(): void {
        this.reset()
        this.states.length = 0
        this.free.length = 0
    }
}

/**
 * Routes sub-emitter triggers from an effect's emitters to the template
 * pools. One per ParticleEffect with sub-emitters.
 */
export class SubEmitterSystem implements SubEmitterSink {
    readonly pools = new Map<string, SubEmitterPool>()
    private reserved = 0

    constructor(
        model: ParticleEffectModel,
        private readonly effect: Object3D,
    ) {
        const templates = subEmitterTemplateIds(model.emitters)
        for (const emitter of model.emitters) {
            if (templates.has(emitter.uuid))
                this.pools.set(emitter.uuid, new SubEmitterPool(emitter, this))
        }
    }

    /**
     * Pools ordered so a parent template updates before the templates it
     * spawns (children spawned this frame then also simulate this frame).
     */
    orderedPools(model: ParticleEffectModel): SubEmitterPool[] {
        const depth = new Map<string, number>()
        const byId = new Map(model.emitters.map((e) => [e.uuid, e]))
        const roots = model.emitters.filter((e) => !this.pools.has(e.uuid))
        const walk = (id: string, d: number) => {
            for (const sub of byId.get(id)?.subEmitters ?? []) {
                if ((depth.get(sub.emitter) ?? 0) < d + 1) {
                    depth.set(sub.emitter, d + 1)
                    walk(sub.emitter, d + 1)
                }
            }
        }
        for (const root of roots) walk(root.uuid, 0)
        return [...this.pools.values()].sort(
            (a, b) =>
                (depth.get(a.template.uuid) ?? 0) -
                (depth.get(b.template.uuid) ?? 0),
        )
    }

    reserve(count: number): boolean {
        if (this.reserved + count > MAX_SUB_EMITTER_PARTICLES) return false
        this.reserved += count
        return true
    }

    release(count: number): void {
        this.reserved = Math.max(0, this.reserved - count)
    }

    /** Particles currently reserved by live instances. */
    get reservedParticles(): number {
        return this.reserved
    }

    spawn(
        sub: SubEmitterModel,
        particle: ParticleState,
        source: ParticleEmitterState,
    ): void {
        const pool = this.pools.get(sub.emitter)
        if (!pool) return
        const position = tmpPosition.copy(particle.position).add(source.offset)

        let velocity: Vector3 | null = null
        if (sub.inheritVelocity > 0) {
            // The particle's full motion: timeline velocity, forward motion
            // along its orientation, and anything it inherited itself.
            velocity = tmpVelocity
                .set(0, 1, 0)
                .applyEuler(particle.orientation)
                .multiplyScalar(particle.forwardVel)
                .add(particle.velocity)
                .add(particle.inheritedVelocity)
                .multiplyScalar(sub.inheritVelocity)
        }

        let tint: RgbaColor | null = null
        if (sub.inheritColor) {
            const t = particle.tint
            const m = source.tintMultiplier
            tint = new RgbaColor(
                t.r * (m?.r ?? 1),
                t.g * (m?.g ?? 1),
                t.b * (m?.b ?? 1),
                t.a * (m?.a ?? 1),
            )
        }
        pool.spawn(position, velocity, tint)
    }

    localToWorld(position: Vector3): Vector3 {
        return position.applyMatrix4(this.effect.matrixWorld)
    }

    reset(): void {
        for (const pool of this.pools.values()) pool.reset()
    }

    dispose(): void {
        for (const pool of this.pools.values()) pool.dispose()
        this.reserved = 0
    }
}
