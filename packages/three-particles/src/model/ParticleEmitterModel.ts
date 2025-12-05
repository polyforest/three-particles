import {
    EmitterDurationModel,
    EmitterDurationModelJson,
} from './ParticleEffectModel'
import { BufferGeometry, Material, MathUtils } from 'three'
import {
    parseTimeline,
    timelineDefaults,
    TimelineModel,
    TimelineModelJson,
} from './TimelineModel'
import { parseRange, rangeDefaults } from './RangeModel'
import cloneDeep from 'lodash/cloneDeep'
import { PartialDeep, ReadonlyDeep } from 'type-fest'
import { isNonNil } from '../util/object'
import { Maybe, MaybeArray } from '../util/type'
import { parseZone, Zone, zoneDefaults, ZoneJson } from './Zone'

/**
 * Data for a particle emitter.
 */
export interface ParticleEmitterModel {
    uuid: string

    /**
     * The friendly name of the emitter.
     */
    name: string | null

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
     * The Geometry to use for this emitter.
     */
    geometry: BufferGeometry | null

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
    Partial<ParticleEmitterModel>,
    | 'duration'
    | 'emissionRate'
    | 'particleLifeExpectancy'
    | 'spawn'
    | 'propertyTimelines'
    | 'geometry'
    | 'material'
> & {
    duration?: EmitterDurationModelJson
    emissionRate?: TimelineModelJson
    particleLifeExpectancy?: TimelineModelJson
    spawn?: ZoneJson
    propertyTimelines?: TimelineModelJson[]
    geometry?: string | null
    material?: MaybeArray<string> | null
}

/**
 * Default ParticleEmitterModel values.
 */
export const particleEmitterModelDefaults = {
    uuid: '',
    name: null,
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
} as const satisfies ParticleEmitterModelJson

/**
 * Returns a new ParticleEmitterModel with defaults applied.
 */
export function parseEmitter({
    emitterJson,
    materials,
    geometries,
}: {
    emitterJson: ReadonlyDeep<ParticleEmitterModelJson>
    materials?: Record<string, Material>
    geometries?: Record<string, BufferGeometry>
}): ParticleEmitterModel {
    const id = emitterJson.uuid ?? MathUtils.generateUUID()
    const spawn = parseZone(
        emitterJson.spawn ?? (cloneDeep(zoneDefaults) as Zone),
    )
    const duration = parseEmitterDuration(
        emitterJson.duration ??
            cloneDeep(particleEmitterModelDefaults.duration),
    )
    const emissionRate = parseTimeline(
        emitterJson.emissionRate ??
            cloneDeep(particleEmitterModelDefaults.emissionRate),
    )
    const particleLifeExpectancy = parseTimeline(
        emitterJson.particleLifeExpectancy ??
            cloneDeep(particleEmitterModelDefaults.particleLifeExpectancy),
    )
    const propertyTimelines = (emitterJson.propertyTimelines ?? [])
        .filter(isNonNil)
        .map((t) => parseTimeline(t))

    const material = toMaterials(emitterJson.material, materials ?? {})
    const geometry = toGeometry(emitterJson.geometry, geometries ?? {})

    return {
        uuid: id,
        name: emitterJson.name ?? particleEmitterModelDefaults.name,
        enabled: emitterJson.enabled ?? particleEmitterModelDefaults.enabled,
        loops: emitterJson.loops ?? particleEmitterModelDefaults.loops,
        duration,
        count: emitterJson.count ?? particleEmitterModelDefaults.count,
        emissionRate,
        particleLifeExpectancy,
        spawn,
        rotateToOrientation:
            emitterJson.rotateToOrientation ??
            particleEmitterModelDefaults.rotateToOrientation,
        propertyTimelines,
        material,
        geometry,
    }
}

export function parseEmitterDuration(
    durationJson: Maybe<PartialDeep<EmitterDurationModel>>,
): EmitterDurationModel {
    const d = durationJson ?? {}
    return {
        duration: parseRange(
            d.duration ??
                cloneDeep(particleEmitterModelDefaults.duration.duration),
        ),
        delayBefore: parseRange(
            d.delayBefore ??
                cloneDeep(particleEmitterModelDefaults.duration.delayBefore),
        ),
        delayAfter: parseRange(
            d.delayAfter ??
                cloneDeep(particleEmitterModelDefaults.duration.delayAfter),
        ),
    }
}

/**
 * Maps material id(s) to their respective materials.
 * Keeps Material objects as is.
 */
export function toMaterials(
    materialIds: Maybe<string | readonly string[]>,
    materials: Record<string, Material | undefined>,
): Material[] | Material | null {
    if (!materialIds) return null
    if (typeof materialIds === 'string') {
        return materials[materialIds] ?? null
    } else {
        return materialIds
            .map((materialId) => materials[materialId])
            .filter(isNonNil)
    }
}

/**
 * Converts an input identifier or geometry object into a BufferGeometry instance.
 */
export function toGeometry(
    geometryId: Maybe<string>,
    geometries: Record<string, BufferGeometry | undefined>,
): BufferGeometry | null {
    if (!geometryId) return null
    const geom = geometries[geometryId] ?? null
    if (!geom) {
        console.warn(`Missing geometry: ${geometryId}`)
        return null
    }
    return geom
}
