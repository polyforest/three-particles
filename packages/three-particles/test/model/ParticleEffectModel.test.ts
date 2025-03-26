import { sanitizeParticleEffect } from '../../src/model/ParticleEffectModel'

describe('ParticleEffectModel', () => {
    describe('sanitizeParticleEffect', () => {
        it('should set defaults', () => {
            const effect = {}
            sanitizeParticleEffect(effect)
            expect(effect.version).toBeDefined()
        })

        it('should not override set values', () => {
            const effect = { version: 'v1' }
            sanitizeParticleEffect(effect)
            expect(effect.version).toBe('v1')
        })
    })
})
