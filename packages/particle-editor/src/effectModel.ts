import { ParticleEffectModelJson } from 'three-particles'

export const effectModel: ParticleEffectModelJson & { materials: any } = {
    version: '0.3.0',
    materials: {
        points: {
            type: 'PointsMaterial',
            size: 6,
            sizeAttenuation: true,
            transparent: true,
            map: 'radial',
            blending: 2,
            alphaTest: 0.01,
            depthWrite: false,
            vertexColors: true,
        },
    },
    emitters: [
        {
            uuid: 'flame',
            enabled: true,
            material: 'points',
            loops: true,
            spawn: {
                type: 'ellipsoid',
                w: 2,
                h: 0,
                d: 2,
            },
            duration: {
                duration: {
                    min: 4,
                    max: 6.5,
                    ease: 'linear',
                },
                delayBefore: {
                    min: 0,
                    max: 0,
                    ease: 'linear',
                },
                delayAfter: {
                    min: 0,
                    max: 0,
                    ease: 'linear',
                },
            },
            count: 200,
            emissionRate: {
                low: {
                    min: 75,
                    max: 75,
                    ease: 'linear',
                },
                high: {
                    min: -20,
                    max: 15,
                    ease: 'linear',
                },
                property: 'emissionRate',
                relative: true,
                timeline: [0, 0, 0.4804574251174927, 1, 1, 0],
            },
            particleLifeExpectancy: {
                low: {
                    min: 1.5999999046325684,
                    max: 2,
                    ease: 'linear',
                },
                high: {
                    min: 0.7999999523162842,
                    max: 1.5999999046325684,
                    ease: 'linear',
                },
                property: 'particleLifeExpectancy',
                relative: false,
                timeline: [0.699999988079071, 0.20000000298023224, 1, 1],
            },
            orientToForwardDirection: false,
            propertyTimelines: [
                {
                    low: {
                        min: 0,
                        max: 0,
                        ease: 'linear',
                    },
                    high: {
                        min: 1,
                        max: 1,
                        ease: 'linear',
                    },
                    property: 'scaleX',
                    relative: false,
                    timeline: [0.4880269765853882, 1, 1, 0.47185540199279785],
                },
                {
                    low: {
                        min: 0,
                        max: 0,
                        ease: 'linear',
                    },
                    high: {
                        min: 1,
                        max: 1,
                        ease: 'linear',
                    },
                    property: 'scaleY',
                    relative: false,
                    timeline: [0.507415235042572, 1, 1, 0.49997979402542114],
                },
                {
                    low: {
                        min: 2.3561947345733643,
                        max: 0.7853981852531433,
                        ease: 'linear',
                    },
                    high: {
                        min: 1.5707963705062866,
                        max: 1.5707963705062866,
                        ease: 'linear',
                    },
                    property: 'forwardDirectionZ',
                    relative: false,
                    timeline: [0, 0, 0.40866684913635254, 1],
                },
                {
                    low: {
                        min: 0,
                        max: 0,
                        ease: 'linear',
                    },
                    high: {
                        min: 0.2,
                        max: 0.2,
                        ease: 'linear',
                    },
                    property: 'forwardVelocity',
                    relative: false,
                    timeline: [0, 1],
                },
                {
                    low: {
                        min: 0,
                        max: 0,
                        ease: 'linear',
                    },
                    high: {
                        min: 1,
                        max: 1,
                        ease: 'linear',
                    },
                    property: 'colorA',
                    relative: false,
                    timeline: [
                        0, 0, 0.17129509150981903, 1, 0.8015885949134827, 1, 1,
                        0,
                    ],
                },
                {
                    property: 'color',
                    timeline: [
                        0, 0.9399999976158142, 0.16497163474559784,
                        0.028199970722198486, 0.9600865840911865,
                        0.5099999904632568, 0.09180060774087906, 0,
                    ],
                },
            ],
        },
    ],
}
