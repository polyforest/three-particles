import chai from 'chai'
import { sanitizeParticleEffect } from '../src/ParticleEffectModel.ts'
import { ParticleEffect } from '../src/particle-effect.js'

const assert = chai.assert

describe('ParticleEffect', () => {
    describe('constructor', () => {
        it('Constructor should accept an emitters list.', () => {
            const pE = new ParticleEffect(
                sanitizeParticleEffect({
                    emitters: [{}, {}, {}],
                }),
            )
            pE.updateEmitters()
            assert.strictEqual(pE.children.length, 3)
        })
    })
})
