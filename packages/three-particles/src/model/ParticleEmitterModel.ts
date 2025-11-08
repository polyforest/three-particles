import { EmitterDurationModel } from './ParticleEffectModel'
import { Material, MathUtils } from 'three'
import {
    parseTimeline,
    timelineDefaults,
    TimelineModel,
    TimelineModelJson,
    timelineModelToJson,
} from './TimelineModel'
import { rangeDefaults, rangeModelToJson, parseRange } from './RangeModel'
import cloneDeep from 'lodash/cloneDeep'
import { PartialDeep } from 'type-fest'
import { isNonNil } from '../util/object'
import { Maybe } from '../util/type'
import { parseZone, Zone, zoneDefaults, zoneToJson } from './Zone'

/**
 * Data for a particle emitter.
 */
export interface ParticleEmitterModel {
    uuid: string

    /**
     * The friendly name of the emitter.
     */
    name: string

    /**
     * True if the emitter should be used.
     */
    enabled: boolean

    /**
     * If false, this emitter will not loop after the total duration.
     */
    loops: boolean

    /**
     * Represents when and how long this emitter will be active.
     */
    duration: EmitterDurationModel

    /**
     * The maximum number of particles to create.
     */
    count: number

    /**
     * The rate of emissions, in particles per second.
     */
    emissionRate: TimelineModel

    /**
     * Calculates the life of a newly created particle.
     */
    particleLifeExpectancy: TimelineModel

    /**
     * The spawn location.
     */
    spawn: Zone

    /**
     * If true, the orientation affects the rotation.
     */
    rotateToOrientation: boolean


    /**
     * Timelines relative to the particle life.
     */
    propertyTimelines: TimelineModel[]

    /**
     * The material(s) to use for this emitter.
     */
    material: Material | Material[] | null
}

/**
 * A loose definition of ParticleEmitterModel that may be parsed by
 * parseEmitter
 */
export type ParticleEmitterModelJson = Omit<
    PartialDeep<ParticleEmitterModel, { recurseIntoArrays: true }>,
    'material' | 'propertyTimelines' | 'emissionRate' | 'particleLifeExpectancy'
> & {
    emissionRate?: TimelineModelJson
    particleLifeExpectancy?: TimelineModelJson
    material?:
        | string
        | string[]
        | Material
        | Material[]
        | (string | Material)[]
        | null
    propertyTimelines?: TimelineModelJson[]
}

/**
 * Default ParticleEmitterModel values.
 */
export const particleEmitterDefaults = {
    uuid: '',
    name: '',
    enabled: true,
    count: 100,
    loops: true,
    duration: {
        duration: {
            min: 10,
            max: 10,
            ease: 'linear',
        },
        delayBefore: rangeDefaults,
        delayAfter: rangeDefaults,
    },
    emissionRate: {
        ...timelineDefaults,
        property: 'emissionRate',
        useEmitterDuration: true,
        low: {
            min: 10,
            max: 10,
            ease: 'linear',
        },
        high: {
            min: 10,
            max: 10,
            ease: 'linear',
        },
    },
    particleLifeExpectancy: {
        ...timelineDefaults,
        property: 'particleLifeExpectancy',
        useEmitterDuration: true,
        low: {
            min: 2,
            max: 2,
            ease: 'linear',
        },
        high: {
            min: 2,
            max: 2,
            ease: 'linear',
        },
    },
    spawn: zoneDefaults,
    rotateToOrientation: false,
    propertyTimelines: [],
    material: null,
} as const satisfies ParticleEmitterModel

/**
 * Returns a new ParticleEmitterModel with defaults applied.
 */
export function parseEmitter(
    emitterJson: ParticleEmitterModelJson,
    materials: Record<string, Material>,
): ParticleEmitterModel {
    const id = emitterJson.uuid ?? MathUtils.generateUUID()
    const spawn = parseZone(
        emitterJson.spawn ?? (cloneDeep(zoneDefaults) as Zone),
    )
    const duration = parseEmitterDuration(
        emitterJson.duration ?? cloneDeep(particleEmitterDefaults.duration),
    )
    const emissionRate = parseTimeline(
        emitterJson.emissionRate ??
            cloneDeep(particleEmitterDefaults.emissionRate),
    )
    const particleLifeExpectancy = parseTimeline(
        emitterJson.particleLifeExpectancy ??
            cloneDeep(particleEmitterDefaults.particleLifeExpectancy),
    )
    const propertyTimelines = (emitterJson.propertyTimelines ?? [])
        .filter(isNonNil)
        .map((t) => parseTimeline(t))

    const material = toMaterials(emitterJson.material, materials)

    return {
        uuid: id,
        name: emitterJson.name ?? particleEmitterDefaults.name,
        enabled: emitterJson.enabled ?? particleEmitterDefaults.enabled,
        loops: emitterJson.loops ?? particleEmitterDefaults.loops,
        duration,
        count: emitterJson.count ?? particleEmitterDefaults.count,
        emissionRate,
        particleLifeExpectancy,
        spawn,
        rotateToOrientation:
            emitterJson.rotateToOrientation ??
            particleEmitterDefaults.rotateToOrientation,
        propertyTimelines,
        material,
    }
}

export function parseEmitterDuration(
    durationJson: Maybe<PartialDeep<EmitterDurationModel>>,
): EmitterDurationModel {
    const d = durationJson ?? {}
    return {
        duration: parseRange(
            d.duration ?? cloneDeep(particleEmitterDefaults.duration.duration),
        ),
        delayBefore: parseRange(
            d.delayBefore ??
                cloneDeep(particleEmitterDefaults.duration.delayBefore),
        ),
        delayAfter: parseRange(
            d.delayAfter ??
                cloneDeep(particleEmitterDefaults.duration.delayAfter),
        ),
    }
}

export function particleEmitterModelToJson(
    emitter: ParticleEmitterModel,
    materials: Record<string, Material | undefined>,
): Partial<ParticleEmitterModelJson> {
    const out: ParticleEmitterModelJson = {
        uuid: emitter.uuid,
    }
    if (emitter.name !== particleEmitterDefaults.name) out.name = emitter.name
    if (emitter.enabled !== particleEmitterDefaults.enabled)
        out.enabled = emitter.enabled
    if (emitter.loops !== particleEmitterDefaults.loops)
        out.loops = emitter.loops

    const duration = durationToJson(emitter.duration)
    if (Object.keys(duration).length) out.duration = duration

    if (emitter.count !== particleEmitterDefaults.count)
        out.count = emitter.count

    const emissionRate = timelineModelToJson(emitter.emissionRate)
    if (Object.keys(emissionRate).length) out.emissionRate = emissionRate

    const life = timelineModelToJson(emitter.particleLifeExpectancy)
    if (Object.keys(life).length) out.particleLifeExpectancy = life

    const spawn = zoneToJson(emitter.spawn)
    if (Object.keys(spawn).length) out.spawn = spawn

    if (
        emitter.rotateToOrientation !==
        particleEmitterDefaults.rotateToOrientation
    )
        out.rotateToOrientation = emitter.rotateToOrientation

    if (emitter.propertyTimelines.length)
        out.propertyTimelines = emitter.propertyTimelines.map((t) =>
            timelineModelToJson(t),
        )

    if (emitter.material != null) {
        const mat = toMaterialIds(emitter.material, materials)
        if (mat != null && (!Array.isArray(mat) || mat.length > 0)) {
            out.material = mat
        }
    }

    return out
}

export function durationToJson(
    duration: EmitterDurationModel,
): Partial<EmitterDurationModel> {
    const out: any = {}
    const dur = rangeModelToJson(duration.duration)
    if (Object.keys(dur).length) out.duration = dur
    const before = rangeModelToJson(duration.delayBefore)
    if (Object.keys(before).length) out.delayBefore = before
    const after = rangeModelToJson(duration.delayAfter)
    if (Object.keys(after).length) out.delayAfter = after
    return out
}

/**
 * Maps material id(s) to their respective materials.
 * Keeps Material objects as is.
 */
export function toMaterials(
    materialIds: Maybe<
        Material | Material[] | string | string[] | (string | Material)[]
    >,
    materials: Record<string, Material | undefined>,
): Material[] | Material | null {
    if (!materialIds) return null
    if (Array.isArray(materialIds)) {
        return materialIds.map((m) => toMaterial(m, materials)).filter(isNonNil)
    } else {
        return toMaterial(materialIds, materials)
    }
}

/**
 * Maps a material id to ots respective material.
 * If the material id is a Material, returns as is.
 */
export function toMaterial(
    materialId: Maybe<Material | string>,
    materials: Record<string, Material | undefined>,
): Material | null {
    if (typeof materialId === 'string') {
        const material = materials[materialId]
        if (!material) {
            console.warn(`Missing material: ${materialId}`)
            return null
        }
        return material
    }
    return materialId ?? null
}

/**
 * Reverse of toMaterials: maps Material object(s) to their id(s).
 * Keeps string id(s) as-is.
 */
export function toMaterialIds(
    mats: Maybe<Material | Material[] | string | string[]>,
    materials: Record<string, Material | undefined>,
): string | string[] | null {
    if (!mats) return null
    if (Array.isArray(mats)) {
        const out: string[] = []
        for (const m of mats) {
            const id = toMaterialId(m, materials)
            if (id != null) out.push(id)
        }
        return out
    } else {
        return toMaterialId(mats, materials)
    }
}

export function toMaterialId(
    mat: Maybe<Material | string>,
    materials: Record<string, Material | undefined>,
): string | null {
    if (mat == null) return null
    if (typeof mat === 'string') return mat
    // find key whose value strictly equals the material
    for (const [id, material] of Object.entries(materials)) {
        if (material === mat) return id
    }
    console.warn('Missing material id for provided Material')
    return null
}
