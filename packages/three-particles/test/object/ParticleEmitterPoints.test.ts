import { BufferAttribute, BufferGeometry } from 'three'
import {
    parseEmitter,
    type ParticleEmitterModelJson,
} from '../../src/model/ParticleEmitterModel'
import { ParticleEmitterPoints } from '../../src/object/ParticleEmitterPoints'

function emitterJson(): Partial<ParticleEmitterModelJson> {
    return {
        uuid: 'test-points',
        name: 'e',
        enabled: true,
        loops: true,
        count: 1,
        duration: { duration: { min: 1, max: 1, ease: 'linear' } },
        emissionRate: {
            property: 'emissionRate',
            useEmitterDuration: true,
            low: { min: 1, max: 1, ease: 'linear' },
            high: { min: 1, max: 1, ease: 'linear' },
        },
        particleLifeExpectancy: {
            property: 'particleLifeExpectancy',
            useEmitterDuration: true,
            low: { min: 1, max: 1, ease: 'linear' },
            high: { min: 1, max: 1, ease: 'linear' },
        },
        spawn: {
            type: 'point',
            x: 0,
            y: 0,
            z: 0,
            w: 0,
            h: 0,
            d: 0,
            ease: 'linear',
        },
        propertyTimelines: [],
        material: null,
        geometry: null,
    }
}

describe('ParticleEmitterPoints', () => {
    it('disables frustum culling so live particles render when the origin is offscreen (TP-1)', () => {
        const emitter = parseEmitter({
            emitterJson: emitterJson(),
            materials: {},
        })

        const points = new ParticleEmitterPoints(emitter)

        // The emitter never updates its geometry's degenerate bounding sphere,
        // so default culling would drop the whole object from the render pass
        // whenever the origin sits offscreen. Mirrors the InstancedMesh decision.
        expect(points.frustumCulled).toBe(false)
    })

    it('clones a shared registry geometry so two emitters get independent buffers and drawRanges (TP-4)', () => {
        const sharedGeometry = new BufferGeometry()

        // Emitter A emits its single particle at (1, 0, 0) within 0.5s
        // (emissionRate 10/s); emitter B keeps the base fixture (rate 1/s) and
        // emits nothing in the same window.
        const emitterA = parseEmitter({
            emitterJson: {
                ...emitterJson(),
                geometry: 'shared',
                spawn: {
                    type: 'point',
                    x: 1,
                    y: 0,
                    z: 0,
                    w: 0,
                    h: 0,
                    d: 0,
                    ease: 'linear',
                },
                emissionRate: {
                    property: 'emissionRate',
                    useEmitterDuration: true,
                    low: { min: 10, max: 10, ease: 'linear' },
                    high: { min: 10, max: 10, ease: 'linear' },
                },
            },
            materials: {},
            geometries: { shared: sharedGeometry },
        })
        const emitterB = parseEmitter({
            emitterJson: { ...emitterJson(), geometry: 'shared' },
            materials: {},
            geometries: { shared: sharedGeometry },
        })

        const pointsA = new ParticleEmitterPoints(emitterA)
        const pointsB = new ParticleEmitterPoints(emitterB)

        // Pre-fix, both constructors wrapped the same registry geometry, and
        // the second constructor's setAttribute calls replaced the first
        // emitter's arrays.
        expect(pointsA.geometry).not.toBe(pointsB.geometry)
        expect(pointsA.geometry).not.toBe(sharedGeometry)
        expect(pointsB.geometry).not.toBe(sharedGeometry)

        // The registry geometry must not receive the engine's particle buffers.
        expect(sharedGeometry.getAttribute('position')).toBeUndefined()
        expect(sharedGeometry.getAttribute('color')).toBeUndefined()
        expect(sharedGeometry.getAttribute('rotation')).toBeUndefined()

        // Updating both emitters must stamp each own drawRange and leave the
        // other emitter's buffers untouched.
        pointsA.update(0.5)
        pointsB.update(0.5)
        expect(pointsA.geometry.drawRange).toEqual({ start: 0, count: 1 })
        expect(pointsB.geometry.drawRange).toEqual({ start: 0, count: 0 })

        const posA = pointsA.geometry.getAttribute('position')
            .array as Float32Array
        const posB = pointsB.geometry.getAttribute('position')
            .array as Float32Array
        expect(posA).not.toBe(posB)
        expect(posA[0]).toBe(1) // emitter A's particle spawned at x=1
        expect(Array.from(posB).every((v) => v === 0)).toBe(true)
    })
})
