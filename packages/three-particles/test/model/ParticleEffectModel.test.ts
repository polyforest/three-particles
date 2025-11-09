import {
    parseParticleEffect,
    ParticleEffectModel,
    ParticleEffectModelJson,
    particleEffectModelToJson,
} from '../../src/model/ParticleEffectModel'
import {
    particleEmitterModelToJson,
    parseEmitter,
} from '../../src/model/ParticleEmitterModel'
import { PointsMaterial } from 'three'

describe('ParticleEffectModel', () => {
    describe('parseParticleEffect', () => {
        it('should set defaults', () => {
            const effect = {}
            const parsed = parseParticleEffect({
                effectJson: effect,
                bundledMaterials: {},
                externalMaterials: {},
                bundledTextures: {},
                externalTextures: {},
                bundledGeometries: {},
                externalGeometries: {},
            })
            expect(parsed.version).toBeDefined()
        })

        it('should not override set values', () => {
            const effect = { version: 'v1' }
            const parsed = parseParticleEffect({
                effectJson: effect,
                bundledMaterials: {},
                externalMaterials: {},
                bundledTextures: {},
                externalTextures: {},
                bundledGeometries: {},
                externalGeometries: {},
            })
            expect(parsed.version).toBe('v1')
        })
    })

    describe('particleEffectModelToJson', () => {
        it('should omit defaults', () => {
            const parsed = parseParticleEffect({
                effectJson: {},
                bundledMaterials: {},
                externalMaterials: {},
                bundledTextures: {},
                externalTextures: {},
                bundledGeometries: {},
                externalGeometries: {},
            })
            const json = particleEffectModelToJson({
                effect: parsed,
                externalMaterials: {},
                externalTextures: {},
                externalGeometries: {},
            })
            expect(json).toEqual({ version: '1.0' })
        })

        it('should include non-default version, emitter json, and materials serialized via toJSON', () => {
            const emitter = parseEmitter({
                emitterJson: { name: 'E', count: 2 },
                materials: {},
            })
            const mat = new PointsMaterial()
            const effect: ParticleEffectModel = {
                version: '2.0',
                emitters: [emitter],
                materials: { a: mat },
                textures: {},
                geometries: {},
                toJSON(): ParticleEffectModelJson {
                    return {}
                },
            }
            // Pass materials map so emitter/materials serialization can use it
            const json = particleEffectModelToJson({
                effect: effect,
                externalMaterials: { a: mat },
                externalTextures: {},
                externalGeometries: {},
            })
            expect(json.version).toBe('2.0')
            expect(Array.isArray(json.emitters)).toBe(true)
            expect(json.emitters!.length).toBe(1)
            expect(json.emitters![0]).toEqual(
                particleEmitterModelToJson(emitter, { a: mat }),
            )
            expect(json.materials).toBeDefined()
            expect(typeof json.materials!.a).toBe('object')
            // Three.js should produce a type for material JSON.
            // Depending on three.js version, this may be top-level or nested under materials[0].
            const matJson: any = json.materials?.a
            const type = matJson?.type ?? matJson?.materials?.[0]?.type
            expect(type).toBe('PointsMaterial')
        })
    })
})

// Added test to ensure toJSON works when spreading a model
describe('ParticleEffectModel spread toJSON', () => {
    it('works when creating a new model using spread', () => {
        const base = parseParticleEffect({
            effectJson: {},
            bundledMaterials: {},
            externalMaterials: {},
            bundledTextures: {},
            externalTextures: {},
            bundledGeometries: {},
            externalGeometries: {},
        })
        const spread: ParticleEffectModel = { ...base, version: '2.0' }
        const json = spread.toJSON()
        expect(json.version).toBe('2.0')
    })
})
