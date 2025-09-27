import { PointsMaterial } from 'three'
import {
    parseEmitter,
    particleEmitterModelToJson,
    particleEmitterDefaults,
} from '../../src/model/ParticleEmitterModel'

describe('ParticleEmitterModel', () => {
    describe('parseEmitter', () => {
        it('should set count', () => {
            const emitter = parseEmitter({}, {})
            expect(emitter.count).toBeDefined()
        })

        it('should parse child objects', () => {
            const emitter = {
                count: 12,
                emissionRate: {},
                propertyTimelines: [{}],
            }
            const parsed = parseEmitter(emitter, {})
            expect(parsed.emissionRate.high).toBeDefined()
            expect(parsed.emissionRate.low).toBeDefined()
            expect(parsed.emissionRate.high.ease).toBeDefined()
            expect(parsed.emissionRate.high.min).toBeDefined()
            expect(parsed.emissionRate.high.max).toBeDefined()
            expect(parsed.propertyTimelines[0].timeline).toBeDefined()
            expect(parsed.propertyTimelines[0].low.min).toBeDefined()
        })
    })

    describe('particleEmitterModelToJson', () => {
        it('should omit top-level defaults', () => {
            const emitter = parseEmitter({}, {})
            const json = particleEmitterModelToJson(emitter, {})
            expect(json.name).toBeUndefined()
            expect(json.enabled).toBeUndefined()
            expect(json.loops).toBeUndefined()
            expect(json.count).toBeUndefined()
        })

        it('should include non-default fields', () => {
            const emitter = parseEmitter(
                {
                    name: 'Test',
                    enabled: false,
                    loops: false,
                    count: 5,
                    spawn: { type: 'box', w: 1, h: 2, d: 3 },
                    orientToForwardDirection: true,
                },
                {},
            )
            const json = particleEmitterModelToJson(emitter, {})
            expect(json.name).toBe('Test')
            expect(json.enabled).toBe(false)
            expect(json.loops).toBe(false)
            expect(json.count).toBe(5)
            expect(json.spawn).toBeDefined()
            expect(json.orientToForwardDirection).toBe(true)
        })

        it('should convert material object to its id using provided materials record', () => {
            const matA = new PointsMaterial()
            const matB = new PointsMaterial()
            const materials = { a: matA, b: matB }
            const emitter = parseEmitter({ material: matA }, materials)
            const json = particleEmitterModelToJson(emitter, materials)
            expect(json.material).toBe('a')
        })

        it('should convert array of materials/ids to array of ids', () => {
            const matA = new PointsMaterial()
            const matB = new PointsMaterial()
            const materials = { a: matA, b: matB }
            const emitter = parseEmitter({ material: [matA, 'b'] }, materials)
            const json = particleEmitterModelToJson(emitter, materials)
            expect(Array.isArray(json.material)).toBe(true)
            expect(json.material).toEqual(['a', 'b'])
        })

        describe('when no id is found for the provided Material', () => {
            beforeEach(() => {
                jest.spyOn(console, 'warn').mockImplementation(() => {})
            })

            afterEach(() => {
                jest.restoreAllMocks()
            })

            it('should omit material and warn', () => {
                const mat = new PointsMaterial()
                const emitter = parseEmitter({ material: mat }, {})
                const json = particleEmitterModelToJson(emitter, {})
                expect(json.material).toBeUndefined()
                expect(console.warn).toHaveBeenCalled()
            })
        })
    })
})

describe('parseEmitter defaults deep clone', () => {
    it('should deep clone emissionRate and particleLifeExpectancy when using defaults', () => {
        const a = parseEmitter({}, {})
        const b = parseEmitter({}, {})
        // Top-level objects should not be the same as defaults or each other
        expect(a.emissionRate).not.toBe(particleEmitterDefaults.emissionRate)
        expect(b.emissionRate).not.toBe(particleEmitterDefaults.emissionRate)
        expect(a.emissionRate).not.toBe(b.emissionRate)

        expect(a.particleLifeExpectancy).not.toBe(
            particleEmitterDefaults.particleLifeExpectancy,
        )
        expect(b.particleLifeExpectancy).not.toBe(
            particleEmitterDefaults.particleLifeExpectancy,
        )
        expect(a.particleLifeExpectancy).not.toBe(b.particleLifeExpectancy)

        // Nested ranges should also be different instances
        expect(a.emissionRate.low).not.toBe(b.emissionRate.low)
        expect(a.emissionRate.high).not.toBe(b.emissionRate.high)

        // Mutating one should not affect the other
        a.emissionRate.low.min = 123
        expect(b.emissionRate.low.min).not.toBe(123)
    })

    it('should deep clone duration segments when using defaults', () => {
        const a = parseEmitter({}, {})
        const b = parseEmitter({}, {})

        expect(a.duration).not.toBe(particleEmitterDefaults.duration)
        expect(b.duration).not.toBe(particleEmitterDefaults.duration)
        expect(a.duration).not.toBe(b.duration)

        expect(a.duration.duration).not.toBe(b.duration.duration)
        expect(a.duration.delayBefore).not.toBe(b.duration.delayBefore)
        expect(a.duration.delayAfter).not.toBe(b.duration.delayAfter)

        a.duration.delayAfter.max = 999
        expect(b.duration.delayAfter.max).not.toBe(999)
    })

    it('should deep clone spawn when using defaults', () => {
        const a = parseEmitter({}, {})
        const b = parseEmitter({}, {})
        expect(a.spawn).not.toBe(b.spawn)
    })
})
