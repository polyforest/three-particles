import { ParticleEmitterPoints } from './ParticleEmitterPoints'
import { ParticleEmitterInstancedMesh } from './ParticleEmitterInstancedMesh'
import { Group, PointsMaterial } from 'three'
import { firstMaterial, getParticleShaderSettings } from './particleShader'
import {
    isParticleEmitterObject,
    ParticleEmitterObject,
} from './ParticleEmitterObject'
import { ParticleEffectModel, ParticleEmitterModel } from '../model'
import { SubEmitterPool, SubEmitterSystem } from './SubEmitterSystem'

/**
 * A Particle effect. This is a group of particle emitters with properties
 * and methods to update all emitters.
 */
export class ParticleEffect extends Group {
    /**
     * Set to true if the emitter list changes. Next update or next
     * `updateEmitters` call the emitter list will be synchronized
     * to the data model.
     */
    public emittersNeedUpdate: boolean = true

    /** Present when any emitter has sub-emitters (chained effects). */
    private subEmitters: SubEmitterSystem | null = null

    /**
     * Constructs a new ParticleEffect from the given data.
     */
    constructor(readonly model: ParticleEffectModel) {
        super()
    }

    /**
     * The effect's sub-emitter pools (live instances per template), or null
     * when no emitter has sub-emitters.
     */
    get subEmitterSystem(): SubEmitterSystem | null {
        if (this.emittersNeedUpdate) this.refreshEmitters()
        return this.subEmitters
    }

    private forEachEmitter(cb: (emitter: ParticleEmitterObject) => void) {
        if (this.emittersNeedUpdate) {
            this.refreshEmitters()
        }

        for (const child of this.children) {
            if (isParticleEmitterObject(child)) {
                cb(child)
            }
        }
    }

    private refreshEmitters() {
        this.emittersNeedUpdate = false
        // TODO: smart recycle
        this.disposeEmitters()

        const hasSubEmitters = this.model.emitters.some(
            (e) => e.subEmitters.length > 0,
        )
        const system = hasSubEmitters
            ? new SubEmitterSystem(this.model, this)
            : null
        this.subEmitters = system

        // Root emitters first, then template pools parent-before-child, so a
        // trigger fired this frame starts an instance that also runs this
        // frame. Templates never emit on their own.
        for (const emitter of this.model.emitters) {
            if (system?.pools.has(emitter.uuid)) continue
            const instance = createEmitterObject(emitter)
            instance.setSubEmitterSink(system)
            this.add(instance)
        }
        if (system) {
            for (const pool of system.orderedPools(this.model)) {
                this.add(createEmitterObject(pool.template, pool))
            }
        }
    }

    private disposeEmitters() {
        for (const child of [...this.children]) {
            if (isParticleEmitterObject(child)) child.dispose()
        }
        this.subEmitters?.dispose()
        this.subEmitters = null
        this.clear()
    }

    /**
     * Releases the emitters' buffers and sub-emitter pools. The effect can
     * be updated again afterwards; emitters are rebuilt on demand.
     */
    dispose(): void {
        this.disposeEmitters()
        this.emittersNeedUpdate = true
    }

    /**
     * Progresses all emitters.
     */
    update(dT: number): void {
        this.forEachEmitter((instance) => {
            instance.update(dT)
        })
    }

    /**
     * Rewinds all emitters.
     */
    rewind(): void {
        this.forEachEmitter((instance) => instance.rewind())
    }

    /**
     * Stops all emitters
     */
    stop(allowCompletion: boolean): void {
        this.forEachEmitter((instance) => instance.stop(allowCompletion))
    }

    /**
     * Resets all emitters.
     */
    reset(): void {
        this.forEachEmitter((instance) => instance.reset())
    }

    clone(): this {
        return new ParticleEffect(this.model) as this
    }
}

function createEmitterObject(
    emitter: ParticleEmitterModel,
    pool?: SubEmitterPool,
): ParticleEmitterObject & Group['children'][number] {
    const mat = firstMaterial(emitter.material)
    // Particle shaders pick their renderer explicitly; standard
    // materials render as points only for PointsMaterial.
    const shader = getParticleShaderSettings(mat)
    const usePoints = shader
        ? shader.render === 'points'
        : mat instanceof PointsMaterial
    return usePoints
        ? new ParticleEmitterPoints(emitter, pool)
        : new ParticleEmitterInstancedMesh(emitter, pool)
}
