import {
    parseParticleEffect,
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
            const parsed = parseParticleEffect(effect, {})
            expect(parsed.version).toBeDefined()
        })

        it('should not override set values', () => {
            const effect = { version: 'v1' }
            const parsed = parseParticleEffect(effect, {})
            expect(parsed.version).toBe('v1')
        })
    })

    describe('particleEffectModelToJson', () => {
        it('should omit defaults', () => {
            const parsed = parseParticleEffect({}, {})
            const json = particleEffectModelToJson(parsed)
            expect(json).toEqual({ version: '1.0' })
        })

        it('should include non-default version, emitter json, and materials serialized via toJSON', () => {
            const emitter = parseEmitter({ name: 'E', count: 2 }, {})
            const mat = new PointsMaterial()
            const effect = {
                version: '2.0',
                emitters: [emitter],
                materials: { a: mat },
            }
            const json = particleEffectModelToJson(effect)
            expect(json.version).toBe('2.0')
            expect(Array.isArray(json.emitters)).toBe(true)
            expect(json.emitters!.length).toBe(1)
            expect(json.emitters![0]).toEqual(
                particleEmitterModelToJson(emitter, { a: mat }),
            )
            expect(json.materials).toBeDefined()
            expect(typeof json.materials!.a).toBe('object')
            // Three.js should produce a type for material JSON
            expect(json.materials?.a.type).toBe('PointsMaterial')
        })
    })
})
