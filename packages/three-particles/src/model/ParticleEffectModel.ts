/**
 * @file Data descriptors for a particle effect (TypeScript version).
 */

import { isNonNil } from '../util'
import { RangeModel } from './RangeModel'
import {
    parseEmitter,
    ParticleEmitterModel,
    ParticleEmitterModelJson,
} from './ParticleEmitterModel'
import { PartialDeep, ReadonlyDeep } from 'type-fest'
import {
    BufferGeometry,
    BufferGeometryJSON,
    Material,
    MaterialJSON,
    Texture,
    TextureJSON,
} from 'three'

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

export type EmitterDurationModelJson = PartialDeep<EmitterDurationModel>

/**
 * Parameters for creating a new particle effect.
 */
export interface ParticleEffectModel {
    version: string
    emitters: ParticleEmitterModel[]
    materials: Record<string, Material>
    textures: Record<string, Texture>
    geometries: Record<string, BufferGeometry>
}

/**
 * Default ParticleEffectModel values.
 */
export const particleEffectDefaults = {
    version: '1.0',
    emitters: [],
} as const

export type ParticleEffectModelJson = Omit<
    PartialDeep<ParticleEffectModel>,
    'emitters' | 'materials' | 'geometries' | 'textures'
> & {
    emitters?: ParticleEmitterModelJson[]

    /**
     * Optional materials bundled with this effect.
     * Allow either MaterialJSON blobs or string URLs.
     * External materials can be set on the ParticleEffectLoader.
     */
    materials?: Record<string, MaterialJSON | string>

    /**
     * Optional Textures bundled with this effect.
     * Allow either TextureJSON blobs or string URLs.
     * External textures can be set on the ParticleEffectLoader.
     */
    textures?: Record<string, Partial<TextureJSON> | string>

    /**
     * Optional geometries bundled with this effect.
     * Values may be URLs or simple shape descriptors.
     * Allow either BufferGeometryJSON blobs or string URLs.
     * External geometries can be set on the ParticleEffectLoader.
     */
    geometries?: Record<string, BufferGeometryJSON | string>
}

/**
 * Returns a new ParticleEffectModel with defaults applied.
 */
export function parseParticleEffect({
    effectJson,
    bundledMaterials,
    externalMaterials,
    bundledTextures,
    bundledGeometries,
    externalGeometries,
}: {
    effectJson: ReadonlyDeep<ParticleEffectModelJson>
    bundledMaterials: Record<string, Material>
    externalMaterials: Record<string, Material>
    bundledTextures: Record<string, Texture>
    bundledGeometries: Record<string, BufferGeometry>
    externalGeometries: Record<string, BufferGeometry>
}): ParticleEffectModel {
    const allMaterials = {
        ...externalMaterials,
        ...bundledMaterials,
    }
    const allGeometries = {
        ...externalGeometries,
        ...bundledGeometries,
    }
    const emitters = (effectJson.emitters ?? [])
        .filter(isNonNil)
        .map((emitter) =>
            parseEmitter({
                emitterJson: emitter,
                materials: allMaterials,
                geometries: allGeometries,
            }),
        )
    return {
        version: effectJson.version ?? particleEffectDefaults.version,
        emitters,
        materials: bundledMaterials,
        textures: bundledTextures,
        geometries: bundledGeometries,
    }
}
