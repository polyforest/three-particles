/**
 * @file Data descriptors for a particle effect (TypeScript version).
 */

import { isNonNil } from '../util'
import { RangeModel } from './RangeModel'
import {
    parseEmitter,
    ParticleEmitterModel,
    ParticleEmitterModelJson,
    particleEmitterModelToJson,
} from './ParticleEmitterModel'
import { PartialDeep } from 'type-fest'
import { Material, MaterialJSON, Texture, TextureJSON } from 'three'

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
    textures: Record<string, Texture>
    toJSON(): ParticleEffectModelJson
}

/**
 * Default ParticleEffectModel values.
 */
export const particleEffectDefaults = {
    version: '1.0',
    emitters: [],
} as const

export type ParticleEffectModelJson = Omit<
    PartialDeep<ParticleEffectModel, { recurseIntoArrays: true }>,
    'emitters' | 'materials'
> & {
    emitters?: ParticleEmitterModelJson[]
    materials?: Record<string, MaterialJSON>
    textures?: Record<string, TextureJSON>
}

/**
 * Returns a new ParticleEffectModel with defaults applied.
 */
export function parseParticleEffect(
    effectJson: ParticleEffectModelJson,
    bundledMaterials: Record<string, Material>,
    externalMaterials: Record<string, Material>,
    bundledTextures: Record<string, Texture>,
    externalTextures: Record<string, Texture>,
): ParticleEffectModel {
    const allMaterials = {
        ...externalMaterials,
        ...bundledMaterials,
    }
    const emitters = (effectJson.emitters ?? [])
        .filter(isNonNil)
        .map((emitter) => parseEmitter(emitter, allMaterials))

    return {
        version: effectJson.version ?? particleEffectDefaults.version,
        emitters,
        materials: bundledMaterials,
        textures: bundledTextures,
        toJSON: function (this: ParticleEffectModel) {
            return particleEffectModelToJson(
                this,
                externalMaterials,
                externalTextures,
            )
        },
    }
}

/**
 * Returns a compact representation of a ParticleEffectModel with default values removed.
 */
export function particleEffectModelToJson(
    effect: ParticleEffectModel,
    externalMaterials: Record<string, Material>,
    externalTextures: Record<string, Texture>,
): ParticleEffectModelJson {
    const out: ParticleEffectModelJson = {}
    const allMaterials = {
        ...externalMaterials,
        ...effect.materials,
    }
    out.version = effect.version
    if (effect.emitters.length)
        out.emitters = effect.emitters.map((e) =>
            particleEmitterModelToJson(e, allMaterials),
        )

    const materialEntries = Object.entries(effect.materials)
    if (materialEntries.length) {
        const materialsJson: Record<string, MaterialJSON> = {}
        const textureUuidMap = createTextureUuidMap(externalTextures)
        for (const [id, mat] of materialEntries) {
            materialsJson[id] = materialToJson(mat, textureUuidMap)
        }
        if (Object.keys(materialsJson).length) out.materials = materialsJson
    }

    return out
}

function createTextureUuidMap(
    textures: Record<string, Texture>,
): Record<string, string> {
    // Build a lookup from texture UUID to the provided key so we can map
    // serialized texture references (uuids) back to keys used by MaterialLoader.
    const uuidToKey: Record<string, string> = {}
    for (const [key, tex] of Object.entries(textures)) {
        uuidToKey[tex.uuid] = key
    }
    return uuidToKey
}

/**
 * Returns a compact representation of a material with default values removed.
 */
function materialToJson(
    material: Material,
    textureUuidToKeyMap: Record<string, string>,
): MaterialJSON {
    // Use three.js Material.toJSON to serialize material
    const matJson: MaterialJSON = material.toJSON()
    delete matJson.textures
    delete matJson.images
    return replaceTextureUuids(matJson, textureUuidToKeyMap)
}

/**
 * Replace any texture UUID references with their corresponding keys
 */
function replaceTextureUuids(
    val: any,
    textureUuidToKeyMap: Record<string, string>,
): any {
    if (Array.isArray(val))
        return val.map((element) =>
            replaceTextureUuids(element, textureUuidToKeyMap),
        )
    if (val && typeof val === 'object') {
        const outObj: any = {}
        for (const [k, v] of Object.entries(val)) {
            outObj[k] = replaceTextureUuids(v, textureUuidToKeyMap)
        }
        return outObj
    }
    if (typeof val === 'string' && textureUuidToKeyMap[val])
        return textureUuidToKeyMap[val]
    return val
}
