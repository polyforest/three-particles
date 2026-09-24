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
})
