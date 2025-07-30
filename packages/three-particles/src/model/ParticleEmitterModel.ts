import { EmitterDurationModel } from './ParticleEffectModel'
import { Material, MathUtils } from 'three'
import {
    sanitizeTimeline,
    timelineDefaults,
    TimelineModel,
    TimelineModelJson,
} from './TimelineModel'
import { rangeDefaults, sanitizeRange } from './RangeModel'
import { PartialDeep, WritableDeep } from 'type-fest'
import { cloneDeep, defaults } from 'lodash'
import { isNonNil, Maybe } from '../util'
import { sanitizeZone, Zone, zoneDefaults } from './Zone'

/**
 * Data for a particle emitter.
 */
export interface ParticleEmitterModel {
    uuid: string

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
     * If true, the forward direction affects the rotation.
     */
    orientToForwardDirection: boolean

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
 * A loose definition of ParticleEmitterModel that may be sanitized by
 * sanitizeEmitter
 */
export type ParticleEmitterModelJson = Omit<
    PartialDeep<ParticleEmitterModel, { recurseIntoArrays: true }>,
    'material' | 'propertyTimelines' | 'emissionRate' | 'particleLifeExpectancy'
> & {
    emissionRate?: TimelineModelJson
    particleLifeExpectancy?: TimelineModelJson
    material?: string | string[] | Material | Material[] | null
    propertyTimelines?: TimelineModelJson[]
}

/**
 * Default ParticleEmitterModel values.
 */
export const particleEmitterDefaults = {
    uuid: '',
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
    orientToForwardDirection: false,
    propertyTimelines: [],
    material: null,
} as const satisfies ParticleEmitterModel

/**
 * Sets any defaults for unset properties on an emitter.
 * Mutates the passed-in `emitter`.
 */
export function sanitizeEmitter(
    emitter: ParticleEmitterModelJson,
    materials: Record<string, Material>,
): asserts emitter is ParticleEmitterModel {
    defaults(
        emitter,
        { id: MathUtils.generateUUID() },
        cloneDeep(
            particleEmitterDefaults,
        ) as WritableDeep<ParticleEmitterModel>,
    )
    sanitizeZone(emitter.spawn)
    sanitizeEmitterDuration(emitter.duration)
    sanitizeTimeline(emitter.emissionRate)
    sanitizeTimeline(emitter.particleLifeExpectancy)
    emitter.propertyTimelines.filter(isNonNil).forEach(sanitizeTimeline)

    emitter.material = toMaterials(emitter.material, materials)
}

export function sanitizeEmitterDuration(
    duration: PartialDeep<EmitterDurationModel>,
): asserts duration is EmitterDurationModel {
    defaults(duration, cloneDeep(particleEmitterDefaults.duration))
    sanitizeRange(duration.duration)
    sanitizeRange(duration.delayBefore)
    sanitizeRange(duration.delayAfter)
}

/**
 * Maps material id(s) to their respective materials.
 * Keeps Material objects as is.
 */
export function toMaterials(
    materialIds: Maybe<Material | Material[] | string | string[]>,
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
