import { parseParticleEffect } from '../../src/model/ParticleEffectModel'
import { parseEmitter } from '../../src/model/ParticleEmitterModel'
import {
    DEFAULT_SUB_EMITTER_MAX_INSTANCES,
    parseSubEmitter,
    subEmitterTemplateIds,
    type SubEmitterModelJson,
} from '../../src/model/SubEmitterModel'

function effect(
    emitters: { uuid: string; subEmitters?: SubEmitterModelJson[] }[],
) {
    return parseParticleEffect({
        effectJson: { emitters },
        bundledMaterials: {},
        externalMaterials: {},
        bundledTextures: {},
        bundledGeometries: {},
        externalGeometries: {},
    })
}

const death = { type: 'death' } as const

describe('parseSubEmitter', () => {
    it('applies defaults', () => {
        expect(parseSubEmitter({ emitter: 'b', trigger: death }, 'a')).toEqual({
            emitter: 'b',
            trigger: { type: 'death' },
            probability: 1,
            inheritVelocity: 0,
            inheritColor: false,
            killParticle: false,
        })
    })

    it('defaults age triggers to fractions and position triggers to local space', () => {
        expect(
            parseSubEmitter(
                { emitter: 'b', trigger: { type: 'age', at: 0.5 } },
                'a',
            ).trigger,
        ).toEqual({ type: 'age', at: 0.5, unit: 'fraction' })
        expect(
            parseSubEmitter(
                {
                    emitter: 'b',
                    trigger: { type: 'position', axis: 'y', op: '<', value: 0 },
                },
                'a',
            ).trigger,
        ).toEqual({
            type: 'position',
            axis: 'y',
            op: '<',
            value: 0,
            space: 'local',
        })
    })

    it.each([
        [{ emitter: '', trigger: death }, /`emitter`/],
        [{ emitter: 'b', trigger: { type: 'nope' } }, /unknown trigger type/],
        [{ emitter: 'b', trigger: { type: 'age', at: 2 } }, /fraction, 0-1/],
        [
            { emitter: 'b', trigger: { type: 'age', at: -1, unit: 'seconds' } },
            />= 0/,
        ],
        [
            {
                emitter: 'b',
                trigger: { type: 'position', axis: 'w', op: '<', value: 0 },
            },
            /axis/,
        ],
        [
            {
                emitter: 'b',
                trigger: { type: 'position', axis: 'y', op: '=', value: 0 },
            },
            /op/,
        ],
        [{ emitter: 'b', trigger: death, probability: 1.5 }, /probability/],
        [
            { emitter: 'b', trigger: death, inheritVelocity: -1 },
            /inheritVelocity/,
        ],
        [
            { emitter: 'b', trigger: { type: 'birth' }, killParticle: true },
            /killParticle/,
        ],
    ])('rejects %j', (json, message) => {
        expect(() =>
            parseSubEmitter(json as unknown as SubEmitterModelJson, 'a'),
        ).toThrow(message)
    })

    it('defaults and validates subEmitterMaxInstances on the emitter', () => {
        expect(
            parseEmitter({ emitterJson: { uuid: 'a' } }).subEmitterMaxInstances,
        ).toBe(DEFAULT_SUB_EMITTER_MAX_INSTANCES)
        expect(() =>
            parseEmitter({
                emitterJson: { uuid: 'a', subEmitterMaxInstances: 0 },
            }),
        ).toThrow(/subEmitterMaxInstances/)
    })
})

describe('sub-emitter graph validation', () => {
    it('accepts a chain up to the maximum depth and finds the templates', () => {
        const parsed = effect([
            { uuid: 'a', subEmitters: [{ emitter: 'b', trigger: death }] },
            { uuid: 'b', subEmitters: [{ emitter: 'c', trigger: death }] },
            { uuid: 'c', subEmitters: [{ emitter: 'd', trigger: death }] },
            { uuid: 'd' },
        ])
        expect([...subEmitterTemplateIds(parsed.emitters)].sort()).toEqual([
            'b',
            'c',
            'd',
        ])
    })

    it('rejects chains deeper than the maximum', () => {
        expect(() =>
            effect([
                { uuid: 'a', subEmitters: [{ emitter: 'b', trigger: death }] },
                { uuid: 'b', subEmitters: [{ emitter: 'c', trigger: death }] },
                { uuid: 'c', subEmitters: [{ emitter: 'd', trigger: death }] },
                { uuid: 'd', subEmitters: [{ emitter: 'e', trigger: death }] },
                { uuid: 'e' },
            ]),
        ).toThrow(/4 levels deep; the maximum is 3/)
    })

    it('rejects unknown emitters', () => {
        expect(() =>
            effect([
                { uuid: 'a', subEmitters: [{ emitter: 'zz', trigger: death }] },
            ]),
        ).toThrow(/unknown emitter 'zz'/)
    })

    it('rejects self references and cycles', () => {
        expect(() =>
            effect([
                { uuid: 'a', subEmitters: [{ emitter: 'a', trigger: death }] },
            ]),
        ).toThrow(/its own sub-emitter/)
        expect(() =>
            effect([
                { uuid: 'a', subEmitters: [{ emitter: 'b', trigger: death }] },
                { uuid: 'b', subEmitters: [{ emitter: 'a', trigger: death }] },
            ]),
        ).toThrow(/cycle/)
    })
})
