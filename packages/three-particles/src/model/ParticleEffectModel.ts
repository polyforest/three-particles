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

/**
 * Parameters for creating a new particle effect.
 */
export interface ParticleEffectModel {
    version: string
    emitters: ParticleEmitterModel[]
    materials: Record<string, Material>
    textures: Record<string, Texture>
    geometries: Record<string, BufferGeometry>
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
    externalTextures,
    bundledGeometries,
    externalGeometries,
}: {
    effectJson: ParticleEffectModelJson
    bundledMaterials: Record<string, Material>
    externalMaterials: Record<string, Material>
    bundledTextures: Record<string, Texture>
    externalTextures: Record<string, Texture>
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
        toJSON: function (this: ParticleEffectModel) {
            return particleEffectModelToJson({
                effect: this,
                externalMaterials,
                externalTextures,
                externalGeometries,
            })
        },
    }
}

/**
 * Returns a compact representation of a ParticleEffectModel with default values removed.
 */
export function particleEffectModelToJson({
    effect,
    externalMaterials,
    externalTextures,
    externalGeometries,
}: {
    effect: ParticleEffectModel
    externalMaterials: Record<string, Material>
    externalTextures: Record<string, Texture>
    externalGeometries: Record<string, BufferGeometry>
}): ParticleEffectModelJson {
    const out: ParticleEffectModelJson = {}
    const allMaterials = {
        ...externalMaterials,
        ...effect.materials,
    }
    const allGeometries = {
        ...externalGeometries,
        ...effect.geometries,
    }
    out.version = effect.version
    if (effect.emitters.length)
        out.emitters = effect.emitters.map((e) =>
            particleEmitterModelToJson(e, allMaterials, allGeometries),
        )

    // Build a texture UUID map from both external and bundled textures so
    // material JSON can replace UUID references with texture keys.
    const textureUuidMap = createTextureUuidMap({
        ...externalTextures,
        ...effect.textures,
    })

    const materialEntries = Object.entries(effect.materials)
    if (materialEntries.length) {
        const materialsJson: Record<string, MaterialJSON> = {}
        for (const [id, mat] of materialEntries) {
            materialsJson[id] = materialToJson(mat, textureUuidMap)
        }
        out.materials = materialsJson
    }

    // Serialize bundled textures (do not include external textures)
    const textureEntries = Object.entries(effect.textures)
    if (textureEntries.length) {
        const texturesJson: Record<string, Partial<TextureJSON>> = {}
        for (const [id, tex] of textureEntries) {
            texturesJson[id] = tex.toJSON()
        }
        out.textures = texturesJson
    }

    // Serialize bundled geometries (do not include external geometries)
    const geometryEntries = Object.entries(effect.geometries)
    if (geometryEntries.length) {
        const geometriesJson: Record<string, BufferGeometryJSON> = {}
        for (const [id, geom] of geometryEntries) {
            // Use three.js BufferGeometry.toJSON to serialize
            geometriesJson[id] = geom.toJSON()
        }
        out.geometries = geometriesJson
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
