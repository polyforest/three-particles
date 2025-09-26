/**
 * @file Data descriptors for a particle effect (TypeScript version).
 */

import { isNonNil } from '../util'
import { RangeModel } from './RangeModel'
import {
    ParticleEmitterModel,
    ParticleEmitterModelJson,
    particleEmitterModelToJson,
    parseEmitter,
} from './ParticleEmitterModel'
import { PartialDeep } from 'type-fest'
import { Material } from 'three'

/**
 * A model describing the duration and delay padding for an emitter.
 */
export interface EmitterDurationModel {
    /**
     * The number of seconds this emitter will create particles.
     */
    duration: RangeModel

    /**
     * The time, in seconds, before the emitter begins.
     */
    delayBefore: RangeModel

    /**
     * The time, in seconds, after completion before restarting.
     */
    delayAfter: RangeModel
}

/**
 * Parameters for creating a new particle effect.
 */
export interface ParticleEffectModel {
    version: string
    emitters: ParticleEmitterModel[]
    materials: Record<string, Material>
}

/**
 * Default ParticleEffectModel values.
 */
export const particleEffectDefaults = {
    version: '1.0',
    emitters: [],
    materials: {},
} as const satisfies ParticleEffectModel

export type ParticleEffectModelJson = Omit<
    PartialDeep<ParticleEffectModel, { recurseIntoArrays: true }>,
    'emitters'
> & {
    emitters?: ParticleEmitterModelJson[]
    materials?: Record<string, any>
}

/**
 * Returns a new ParticleEffectModel with defaults applied.
 */
export function parseParticleEffect(
    effect: ParticleEffectModelJson,
    materials: Record<string, Material>,
): ParticleEffectModel {
    const emitters = (effect.emitters ?? [])
        .filter(isNonNil)
        .map((emitter) => parseEmitter(emitter, materials))

    return {
        version: effect.version ?? particleEffectDefaults.version,
        emitters,
        materials,
    }
}

/**
 * Returns a compact representation of a ParticleEffectModel with default values removed.
 */
export function particleEffectModelToJson(
    effect: ParticleEffectModel,
): ParticleEffectModelJson {
    const out: ParticleEffectModelJson = {}
    out.version = effect.version
    if (effect.emitters.length)
        out.emitters = effect.emitters.map((e) =>
            particleEmitterModelToJson(e, effect.materials),
        )

    const materialEntries = Object.entries(effect.materials)
    if (materialEntries.length) {
        const materials: Record<string, any> = {}
        for (const [id, mat] of materialEntries) {
            // Use three.js Material.toJSON to serialize material
            materials[id] = mat.toJSON()
        }
        if (Object.keys(materials).length) out.materials = materials
    }

    return out
}
