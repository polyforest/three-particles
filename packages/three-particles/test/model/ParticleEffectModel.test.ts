import { parseParticleEffect } from '../../src/model/ParticleEffectModel'

describe('ParticleEffectModel', () => {
    describe('parseParticleEffect', () => {
        it('should set defaults', () => {
            const effect = {}
            const parsed = parseParticleEffect({
                effectJson: effect,
                bundledMaterials: {},
                externalMaterials: {},
                bundledTextures: {},
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
                bundledGeometries: {},
                externalGeometries: {},
            })
            expect(parsed.version).toBe('v1')
        })
    })
})
