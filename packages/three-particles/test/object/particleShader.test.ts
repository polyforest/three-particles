import fs from 'node:fs'
import path from 'node:path'
import {
    AdditiveBlending,
    BufferGeometry,
    Color,
    InstancedBufferAttribute,
    MeshBasicMaterial,
    NormalBlending,
    PointsMaterial,
    ShaderMaterial,
    Texture,
    Vector2,
    WebGLProgramParametersWithUniforms,
} from 'three'
import {
    parseEmitter,
    type ParticleEmitterModelJson,
} from '../../src/model/ParticleEmitterModel'
import { ParticleEffectLoader } from '../../src/ParticleEffectLoader'
import { ParticleEffect } from '../../src/object/ParticleEffect'
import { ParticleEmitterPoints } from '../../src/object/ParticleEmitterPoints'
import { ParticleEmitterInstancedMesh } from '../../src/object/ParticleEmitterInstancedMesh'
import {
    buildParticleShaderSources,
    getParticleShaderSettings,
    PARTICLE_MESH_VERTEX_SHADER,
    PARTICLE_POINTS_VERTEX_SHADER,
    PARTICLE_SHADER_CONTRACT,
    particleFragmentPrefixLines,
} from '../../src/object/particleShader'
import type { ParticleEffectModelJson } from '../../src/model'

const FRAGMENT = 'void main() { gl_FragColor = vColor; }'

function shaderMaterial(particleShader?: Record<string, unknown>) {
    const material = new ShaderMaterial({ fragmentShader: FRAGMENT })
    if (particleShader) material.userData.particleShader = particleShader
    return material
}

function emitterJson(count = 4): Partial<ParticleEmitterModelJson> {
    return {
        uuid: 'e',
        name: 'e',
        enabled: true,
        loops: true,
        count,
        duration: { duration: { min: 2, max: 2, ease: 'linear' } },
        emissionRate: {
            property: 'emissionRate',
            useEmitterDuration: true,
            low: { min: 100, max: 100, ease: 'linear' },
            high: { min: 100, max: 100, ease: 'linear' },
        },
        particleLifeExpectancy: {
            property: 'particleLifeExpectancy',
            useEmitterDuration: true,
            low: { min: 1, max: 1, ease: 'linear' },
            high: { min: 1, max: 1, ease: 'linear' },
        },
        spawn: {
            type: 'point',
            x: 0,
            y: 0,
            z: 0,
            w: 0,
            h: 0,
            d: 0,
            ease: 'linear',
        },
        propertyTimelines: [
            {
                property: 'scaleX',
                timeline: [0, 1],
                low: { min: 2, max: 2, ease: 'linear' },
                high: { min: 2, max: 2, ease: 'linear' },
            },
            {
                property: 'colorA',
                timeline: [0, 1],
                low: { min: 0.5, max: 0.5, ease: 'linear' },
                high: { min: 0.5, max: 0.5, ease: 'linear' },
            },
        ],
        material: 'm',
        geometry: null,
    }
}

function emitterWith(material: ShaderMaterial | PointsMaterial, count = 4) {
    return parseEmitter({
        emitterJson: emitterJson(count),
        materials: { m: material },
    })
}

const fakeRenderer = {
    getDrawingBufferSize(target: Vector2) {
        return target.set(800, 600)
    },
}

function compileSources(material: ShaderMaterial, vertexShader = '') {
    const shader = {
        vertexShader,
        fragmentShader: material.fragmentShader,
        uniforms: material.uniforms,
    } as unknown as WebGLProgramParametersWithUniforms
    material.onBeforeCompile(shader, undefined as never)
    return shader
}

describe('getParticleShaderSettings', () => {
    it('is null for non-shader materials', () => {
        expect(getParticleShaderSettings(new PointsMaterial())).toBeNull()
        expect(getParticleShaderSettings(new MeshBasicMaterial())).toBeNull()
        expect(getParticleShaderSettings(null)).toBeNull()
    })

    it('treats a ShaderMaterial without a particleShader block as a full shader on the mesh path', () => {
        expect(getParticleShaderSettings(shaderMaterial())).toEqual({
            mode: 'full',
            render: 'mesh',
            size: 1,
        })
    })

    it('defaults a particleShader block to fragment mode on points', () => {
        expect(getParticleShaderSettings(shaderMaterial({}))).toEqual({
            mode: 'fragment',
            render: 'points',
            size: 1,
        })
    })

    it('reads explicit settings, including library provenance', () => {
        const library = { id: 'shd_1', revision: 3 }
        expect(
            getParticleShaderSettings(
                shaderMaterial({
                    mode: 'full',
                    render: 'mesh',
                    size: 0.5,
                    library,
                }),
            ),
        ).toEqual({ mode: 'full', render: 'mesh', size: 0.5, library })
    })
})

describe('buildParticleShaderSources', () => {
    it('fragment mode supplies the vertex shader and a contract prefix per path', () => {
        const points = buildParticleShaderSources(
            { mode: 'fragment', render: 'points' },
            { vertexShader: 'ignored', fragmentShader: FRAGMENT },
        )
        expect(points.vertexShader).toBe(PARTICLE_POINTS_VERTEX_SHADER)
        expect(points.fragmentShader.endsWith(FRAGMENT)).toBe(true)
        expect(points.fragmentShader).toContain('#define PARTICLE_POINTS')
        expect(points.fragmentShader).toContain('#define vUv particleUv()')
        expect(points.fragmentShader).toContain('uniform float uTime;')

        const mesh = buildParticleShaderSources(
            { mode: 'fragment', render: 'mesh' },
            { vertexShader: 'ignored', fragmentShader: FRAGMENT },
        )
        expect(mesh.vertexShader).toBe(PARTICLE_MESH_VERTEX_SHADER)
        expect(mesh.vertexShader).toContain('instanceMatrix')
        expect(mesh.fragmentShader).toContain('varying vec2 vUv;')
    })

    it('full mode only adds the render define to the authored sources', () => {
        const sources = buildParticleShaderSources(
            { mode: 'full', render: 'mesh' },
            { vertexShader: 'VS', fragmentShader: 'FS' },
        )
        expect(sources).toEqual({
            vertexShader: '#define PARTICLE_MESH\nVS',
            fragmentShader: '#define PARTICLE_MESH\nFS',
        })
    })

    it('reports how many lines precede the authored fragment source', () => {
        const settings = { mode: 'fragment', render: 'points' } as const
        const lines = particleFragmentPrefixLines(settings)
        const built = buildParticleShaderSources(settings, {
            vertexShader: '',
            fragmentShader: 'AUTHORED',
        })
        expect(built.fragmentShader.split('\n')[lines]).toBe('AUTHORED')
        expect(
            particleFragmentPrefixLines({ mode: 'full', render: 'mesh' }),
        ).toBe(1)
    })

    it('documents every contract name', () => {
        const names = PARTICLE_SHADER_CONTRACT.map((entry) => entry.name)
        for (const name of [
            'particleColor',
            'particleAge',
            'particleLife',
            'particleSeed',
            'particleSize',
            'particleRotation',
            'uTime',
            'uEmitterAlpha',
            'uResolution',
            'vUv',
            'vColor',
            'vAge',
            'vLife',
            'vSeed',
        ]) {
            expect(names).toContain(name)
        }
    })
})

describe('ParticleEffectLoader and shader materials', () => {
    const shaderJson = (extra: Record<string, unknown> = {}) =>
        ({
            emitters: [{ ...emitterJson(), material: 'glow' }],
            materials: {
                glow: {
                    metadata: {
                        version: 4.7,
                        type: 'Material',
                        generator: 'test',
                    },
                    uuid: 'glow-uuid',
                    type: 'ShaderMaterial',
                    uniforms: {
                        uHot: { type: 'c', value: 0xff0000 },
                        uNoise: { type: 't', value: 'noiseTex' },
                        uSpeed: { type: 'f', value: 1.5 },
                    },
                    fragmentShader: FRAGMENT,
                    userData: {
                        particleShader: { mode: 'fragment', render: 'points' },
                    },
                    ...extra,
                },
            },
        }) as unknown as ParticleEffectModelJson

    async function parse(json: ParticleEffectModelJson) {
        const loader = new ParticleEffectLoader()
        const noise = new Texture()
        loader.setTextures({ ...loader.textures, noiseTex: noise })
        const model = await loader.parseAsync(json)
        return {
            material: model.emitters[0].material as ShaderMaterial,
            noise,
        }
    }

    it('round-trips uniforms (texture keys included) and the particleShader block', async () => {
        const { material, noise } = await parse(shaderJson())
        expect(material.isShaderMaterial).toBe(true)
        expect((material.uniforms.uHot.value as Color).getHex()).toBe(0xff0000)
        expect(material.uniforms.uNoise.value).toBe(noise)
        expect(material.uniforms.uSpeed.value).toBe(1.5)
        const json = material.toJSON() as unknown as {
            userData: unknown
            fragmentShader: string
        }
        expect(json.userData).toEqual({
            particleShader: { mode: 'fragment', render: 'points' },
        })
        expect(json.fragmentShader).toBe(FRAGMENT)
    })

    it('defaults shader materials to transparent, additive and no depth writes', async () => {
        const { material } = await parse(shaderJson())
        expect(material.transparent).toBe(true)
        expect(material.blending).toBe(AdditiveBlending)
        expect(material.depthWrite).toBe(false)
    })

    it('keeps blending, transparency and depthWrite the JSON sets', async () => {
        const { material } = await parse(
            shaderJson({
                transparent: false,
                blending: NormalBlending,
                depthWrite: true,
            }),
        )
        expect(material.transparent).toBe(false)
        expect(material.blending).toBe(NormalBlending)
        expect(material.depthWrite).toBe(true)
    })

    it('parses and runs the example fragment-mode effect', async () => {
        const json = JSON.parse(
            fs.readFileSync(
                path.join(__dirname, '../../../example/resources/shader.json'),
                'utf8',
            ),
        )
        const loader = new ParticleEffectLoader()
        const effect = new ParticleEffect(await loader.parseAsync(json))
        for (let i = 0; i < 30; i++) effect.update(1 / 60)
        const emitter = effect.children[0] as ParticleEmitterPoints
        expect(emitter).toBeInstanceOf(ParticleEmitterPoints)
        expect(emitter.geometry.attributes.particleAge).toBeDefined()
        expect(emitter.geometry.drawRange.count).toBeGreaterThan(0)
    })
})

describe('renderer selection', () => {
    function rendererFor(material: ShaderMaterial | PointsMaterial) {
        const effect = new ParticleEffect({
            emitters: [emitterWith(material)],
        } as never)
        effect.update(0)
        return effect.children[0]
    }

    it('honors particleShader.render', () => {
        expect(
            rendererFor(shaderMaterial({ render: 'points' })),
        ).toBeInstanceOf(ParticleEmitterPoints)
        expect(rendererFor(shaderMaterial({ render: 'mesh' }))).toBeInstanceOf(
            ParticleEmitterInstancedMesh,
        )
    })

    it('keeps the existing choice for other materials', () => {
        expect(rendererFor(new PointsMaterial())).toBeInstanceOf(
            ParticleEmitterPoints,
        )
        expect(rendererFor(shaderMaterial())).toBeInstanceOf(
            ParticleEmitterInstancedMesh,
        )
    })
})

describe('shader emitters on the points path', () => {
    it('does not add contract attributes for a standard PointsMaterial', () => {
        const points = new ParticleEmitterPoints(
            emitterWith(new PointsMaterial()),
        )
        expect(points.geometry.attributes.particleColor).toBeUndefined()
        expect(points.material).toBeInstanceOf(PointsMaterial)
    })

    it('fills the per-particle contract attributes', () => {
        const material = shaderMaterial({ size: 0.25 })
        const points = new ParticleEmitterPoints(emitterWith(material))
        for (let i = 0; i < 20; i++) points.update(0.01)
        const a = points.geometry.attributes
        const live = points.geometry.drawRange.count
        expect(live).toBeGreaterThan(0)
        for (let i = 0; i < live; i++) {
            expect(a.particleColor.getW(i)).toBeCloseTo(0.5)
            expect(a.particleSize.getX(i)).toBeCloseTo(2 * 0.25)
            const life = a.particleLife.getX(i)
            expect(life).toBeGreaterThan(0)
            expect(a.particleAge.getX(i)).toBeCloseTo(life / 1, 5)
            const seed = a.particleSeed.getX(i)
            expect(seed).toBeGreaterThanOrEqual(0)
            expect(seed).toBeLessThan(1)
        }
        // Seeds differ between particles.
        const seeds = new Set(
            Array.from({ length: live }, (_, i) => a.particleSeed.getX(i)),
        )
        expect(seeds.size).toBe(live)
    })

    it('keeps a particle seed stable across frames', () => {
        const points = new ParticleEmitterPoints(
            emitterWith(shaderMaterial({}), 1),
        )
        points.update(0.05)
        const first = points.geometry.attributes.particleSeed.getX(0)
        points.update(0.05)
        expect(points.geometry.attributes.particleSeed.getX(0)).toBe(first)
    })

    it('builds fragment-mode sources at compile time without touching the authored shader', () => {
        const material = shaderMaterial({})
        new ParticleEmitterPoints(emitterWith(material))
        const compiled = compileSources(material)
        expect(compiled.vertexShader).toBe(PARTICLE_POINTS_VERTEX_SHADER)
        expect(compiled.fragmentShader.endsWith(FRAGMENT)).toBe(true)
        expect(material.fragmentShader).toBe(FRAGMENT)
        expect(material.customProgramCacheKey()).toBe(
            'particleShader:fragment:points',
        )
    })

    it('sets the contract uniforms per emitter before each draw', () => {
        const material = shaderMaterial({})
        const a = new ParticleEmitterPoints(emitterWith(material))
        const b = new ParticleEmitterPoints(emitterWith(material))
        a.update(0.5)
        b.update(0.25)
        const draw = (points: ParticleEmitterPoints) =>
            points.onBeforeRender(
                fakeRenderer as never,
                undefined as never,
                undefined as never,
                points.geometry,
                material,
                undefined as never,
            )

        draw(a)
        expect(material.uniforms.uTime.value).toBeCloseTo(0.5)
        expect(material.uniforms.uEmitterAlpha.value).toBeCloseTo(0.25)
        expect(
            (material.uniforms.uResolution.value as Vector2).toArray(),
        ).toEqual([800, 600])
        expect(material.uniformsNeedUpdate).toBe(true)

        draw(b)
        expect(material.uniforms.uTime.value).toBeCloseTo(0.25)
        expect(material.uniforms.uEmitterAlpha.value).toBeCloseTo(0.125)
    })

    it('restarts uTime on reset', () => {
        const material = shaderMaterial({})
        const points = new ParticleEmitterPoints(emitterWith(material))
        points.update(0.5)
        points.reset()
        points.onBeforeRender(
            fakeRenderer as never,
            undefined as never,
            undefined as never,
            points.geometry,
            material,
            undefined as never,
        )
        expect(material.uniforms.uTime.value).toBe(0)
    })
})

describe('shader emitters on the mesh path', () => {
    it('fills per-instance contract attributes, including alpha', () => {
        const material = shaderMaterial({ render: 'mesh' })
        const mesh = new ParticleEmitterInstancedMesh(emitterWith(material))
        for (let i = 0; i < 20; i++) mesh.update(0.01)
        const a = mesh.geometry.attributes
        expect(a.particleColor).toBeInstanceOf(InstancedBufferAttribute)
        expect(mesh.count).toBeGreaterThan(0)
        for (let i = 0; i < mesh.count; i++) {
            expect(a.particleColor.getW(i)).toBeCloseTo(0.5)
            expect(a.particleAge.getX(i)).toBeGreaterThan(0)
        }
        expect(compileSources(material).vertexShader).toBe(
            PARTICLE_MESH_VERTEX_SHADER,
        )
    })

    it('clones a shared geometry only for shader emitters', () => {
        const shared = emitterWith(shaderMaterial({ render: 'mesh' }))
        const standard = parseEmitter({
            emitterJson: emitterJson(),
            materials: { m: new MeshBasicMaterial() },
        })
        const geometry = new BufferGeometry()
        const withShader = new ParticleEmitterInstancedMesh({
            ...shared,
            geometry,
        })
        const withStandard = new ParticleEmitterInstancedMesh({
            ...standard,
            geometry,
        })
        expect(withShader.geometry).not.toBe(geometry)
        expect(geometry.attributes.particleColor).toBeUndefined()
        expect(withStandard.geometry).toBe(geometry)
    })
})
