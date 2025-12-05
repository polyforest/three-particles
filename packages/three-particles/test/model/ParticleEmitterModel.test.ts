import {
    parseEmitter,
    particleEmitterModelDefaults,
} from '../../src/model/ParticleEmitterModel'

describe('ParticleEmitterModel', () => {
    describe('parseEmitter', () => {
        it('should set count', () => {
            const emitter = parseEmitter({
                emitterJson: {},
                materials: {},
                geometries: {},
            })
            expect(emitter.count).toBeDefined()
        })

        it('should parse child objects', () => {
            const parsed = parseEmitter({
                emitterJson: {
                    count: 12,
                    emissionRate: {},
                    propertyTimelines: [{}],
                },
                materials: {},
                geometries: {},
            })
            expect(parsed.emissionRate.high).toBeDefined()
            expect(parsed.emissionRate.low).toBeDefined()
            expect(parsed.emissionRate.high.ease).toBeDefined()
            expect(parsed.emissionRate.high.min).toBeDefined()
            expect(parsed.emissionRate.high.max).toBeDefined()
            expect(parsed.propertyTimelines[0].timeline).toBeDefined()
            expect(parsed.propertyTimelines[0].low.min).toBeDefined()
        })
    })
})

describe('parseEmitter defaults deep clone', () => {
    it('should deep clone emissionRate and particleLifeExpectancy when using defaults', () => {
        const a = parseEmitter({
            emitterJson: {},
            materials: {},
            geometries: {},
        })
        const b = parseEmitter({
            emitterJson: {},
            materials: {},
            geometries: {},
        })
        // Top-level objects should not be the same as defaults or each other
        expect(a.emissionRate).not.toBe(
            particleEmitterModelDefaults.emissionRate,
        )
        expect(b.emissionRate).not.toBe(
            particleEmitterModelDefaults.emissionRate,
        )
        expect(a.emissionRate).not.toBe(b.emissionRate)

        expect(a.particleLifeExpectancy).not.toBe(
            particleEmitterModelDefaults.particleLifeExpectancy,
        )
        expect(b.particleLifeExpectancy).not.toBe(
            particleEmitterModelDefaults.particleLifeExpectancy,
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
        const a = parseEmitter({
            emitterJson: {},
            materials: {},
            geometries: {},
        })
        const b = parseEmitter({
            emitterJson: {},
            materials: {},
            geometries: {},
        })

        expect(a.duration).not.toBe(particleEmitterModelDefaults.duration)
        expect(b.duration).not.toBe(particleEmitterModelDefaults.duration)
        expect(a.duration).not.toBe(b.duration)

        expect(a.duration.duration).not.toBe(b.duration.duration)
        expect(a.duration.delayBefore).not.toBe(b.duration.delayBefore)
        expect(a.duration.delayAfter).not.toBe(b.duration.delayAfter)

        a.duration.delayAfter.max = 999
        expect(b.duration.delayAfter.max).not.toBe(999)
    })

    it('should deep clone spawn when using defaults', () => {
        const a = parseEmitter({
            emitterJson: {},
            materials: {},
            geometries: {},
        })
        const b = parseEmitter({
            emitterJson: {},
            materials: {},
            geometries: {},
        })
        expect(a.spawn).not.toBe(b.spawn)
    })
})
