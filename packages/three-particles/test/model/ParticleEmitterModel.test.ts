import { sanitizeEmitter } from '../../src/model/ParticleEmitterModel'

describe('ParticleEmitterModel', () => {
    describe('sanitizeEmitter', () => {
        it('should set count', () => {
            const emitter = {}
            sanitizeEmitter(emitter)
            expect(emitter.count).toBeDefined()
        })

        it('should sanitize child objects', () => {
            const emitter = {
                count: 12,
                emissionRate: {},
                propertyTimelines: [{}],
            }
            sanitizeEmitter(emitter)
            expect(emitter.emissionRate.high).toBeDefined()
            expect(emitter.emissionRate.low).toBeDefined()
            expect(emitter.emissionRate.high.ease).toBeDefined()
            expect(emitter.emissionRate.high.min).toBeDefined()
            expect(emitter.emissionRate.high.max).toBeDefined()
            expect(emitter.propertyTimelines[0].timeline).toBeDefined()
        })
    })
})
