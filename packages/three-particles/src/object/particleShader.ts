import {
    AdditiveBlending,
    Material,
    ShaderMaterial,
    Vector2,
    WebGLProgramParametersWithUniforms,
} from 'three'

/**
 * How a particle ShaderMaterial is authored.
 * - `'fragment'`: the library supplies the vertex shader for the render path
 *   and the contract's varyings; the author writes only the fragment shader.
 * - `'full'`: the author writes both shaders. The contract's attributes and
 *   uniforms are still provided; the author declares the ones they use.
 */
export type ParticleShaderMode = 'fragment' | 'full'

/** Which renderer draws the emitter: point sprites or an instanced mesh. */
export type ParticleShaderRender = 'points' | 'mesh'

/**
 * The `userData.particleShader` block of a particle ShaderMaterial.
 */
export interface ParticleShaderSettings {
    mode: ParticleShaderMode
    render: ParticleShaderRender
    /**
     * Points only: world-space point size at `scale.x = 1`. The per-particle
     * `particleSize` attribute is `scale.x * size`. Default 1.
     */
    size: number
    /** Where the shader came from, for editors that keep a shader library. */
    library?: { id: string; revision: number }
}

type ShaderUserData = Partial<ParticleShaderSettings> | undefined

/**
 * Particle shader settings for a material, or null when the material is not a
 * ShaderMaterial.
 *
 * A ShaderMaterial without a `userData.particleShader` block keeps the
 * pre-contract behavior: it is treated as a `'full'` shader on the instanced
 * mesh path. With a block, `mode` defaults to `'fragment'` and `render` to
 * `'points'`.
 */
export function getParticleShaderSettings(
    material: Material | null | undefined,
): ParticleShaderSettings | null {
    if (!(material as ShaderMaterial | undefined)?.isShaderMaterial) return null
    const block = material!.userData.particleShader as ShaderUserData
    if (!block) return { mode: 'full', render: 'mesh', size: 1 }
    return {
        mode: block.mode === 'full' ? 'full' : 'fragment',
        render: block.render === 'mesh' ? 'mesh' : 'points',
        size: typeof block.size === 'number' ? block.size : 1,
        ...(block.library ? { library: block.library } : {}),
    }
}

/** True when the material is a ShaderMaterial rendered through the contract. */
export function isParticleShader(
    material: Material | null | undefined,
): boolean {
    return getParticleShaderSettings(material) !== null
}

export interface ParticleShaderContractEntry {
    name: string
    kind: 'attribute' | 'uniform' | 'varying' | 'define'
    type: string
    render: ParticleShaderRender[]
    /** Available in which authoring modes. */
    modes: ParticleShaderMode[]
    description: string
}

/**
 * Every name the library provides to particle shaders. Editors can show this
 * as reference documentation.
 */
export const PARTICLE_SHADER_CONTRACT: readonly ParticleShaderContractEntry[] =
    [
        {
            name: 'particleColor',
            kind: 'attribute',
            type: 'vec4',
            render: ['points', 'mesh'],
            modes: ['full'],
            description: 'Particle tint and alpha (colorR/G/B/A timelines).',
        },
        {
            name: 'particleAge',
            kind: 'attribute',
            type: 'float',
            render: ['points', 'mesh'],
            modes: ['full'],
            description:
                'Normalized age: life / life expectancy, 0 at spawn to 1 at death.',
        },
        {
            name: 'particleLife',
            kind: 'attribute',
            type: 'float',
            render: ['points', 'mesh'],
            modes: ['full'],
            description: 'Seconds since the particle spawned.',
        },
        {
            name: 'particleSeed',
            kind: 'attribute',
            type: 'float',
            render: ['points', 'mesh'],
            modes: ['full'],
            description:
                'A random value in [0, 1), stable for the life of the particle.',
        },
        {
            name: 'particleSize',
            kind: 'attribute',
            type: 'float',
            render: ['points'],
            modes: ['full'],
            description:
                'World-space point size: scale.x * userData.particleShader.size.',
        },
        {
            name: 'particleRotation',
            kind: 'attribute',
            type: 'float',
            render: ['points'],
            modes: ['full'],
            description: 'Sprite rotation around the view axis, in radians.',
        },
        {
            name: 'uTime',
            kind: 'uniform',
            type: 'float',
            render: ['points', 'mesh'],
            modes: ['fragment', 'full'],
            description:
                'Seconds the emitter has been updated since it was created or reset.',
        },
        {
            name: 'uEmitterAlpha',
            kind: 'uniform',
            type: 'float',
            render: ['points', 'mesh'],
            modes: ['fragment', 'full'],
            description: "The emitter's progress through its duration, 0 to 1.",
        },
        {
            name: 'uResolution',
            kind: 'uniform',
            type: 'vec2',
            render: ['points', 'mesh'],
            modes: ['fragment', 'full'],
            description: 'Drawing buffer size in device pixels.',
        },
        {
            name: 'vUv',
            kind: 'varying',
            type: 'vec2',
            render: ['points', 'mesh'],
            modes: ['fragment'],
            description:
                'Texture coordinate: the rotated point coordinate on points, the geometry uv on meshes.',
        },
        {
            name: 'vColor',
            kind: 'varying',
            type: 'vec4',
            render: ['points', 'mesh'],
            modes: ['fragment'],
            description: 'particleColor.',
        },
        {
            name: 'vAge',
            kind: 'varying',
            type: 'float',
            render: ['points', 'mesh'],
            modes: ['fragment'],
            description: 'particleAge.',
        },
        {
            name: 'vLife',
            kind: 'varying',
            type: 'float',
            render: ['points', 'mesh'],
            modes: ['fragment'],
            description: 'particleLife.',
        },
        {
            name: 'vSeed',
            kind: 'varying',
            type: 'float',
            render: ['points', 'mesh'],
            modes: ['fragment'],
            description: 'particleSeed.',
        },
        {
            name: 'PARTICLE_POINTS',
            kind: 'define',
            type: '',
            render: ['points'],
            modes: ['fragment', 'full'],
            description: 'Defined when the emitter renders point sprites.',
        },
        {
            name: 'PARTICLE_MESH',
            kind: 'define',
            type: '',
            render: ['mesh'],
            modes: ['fragment', 'full'],
            description: 'Defined when the emitter renders an instanced mesh.',
        },
    ]

const CONTRACT_UNIFORMS = /* glsl */ `
uniform float uTime;
uniform float uEmitterAlpha;
uniform vec2 uResolution;
`

const SHARED_VARYINGS = /* glsl */ `
varying vec4 vColor;
varying float vAge;
varying float vLife;
varying float vSeed;
`

/** Vertex shader the library supplies for fragment-mode shaders on points. */
export const PARTICLE_POINTS_VERTEX_SHADER = /* glsl */ `#define PARTICLE_POINTS
attribute vec4 particleColor;
attribute float particleAge;
attribute float particleLife;
attribute float particleSeed;
attribute float particleSize;
attribute float particleRotation;
${CONTRACT_UNIFORMS}${SHARED_VARYINGS}varying float vParticleRotation;

void main() {
    vColor = particleColor;
    vAge = particleAge;
    vLife = particleLife;
    vSeed = particleSeed;
    vParticleRotation = particleRotation;
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    // Same attenuation as PointsMaterial: world size * (half the buffer
    // height) / view depth.
    gl_PointSize = particleSize * (uResolution.y * 0.5) / -mvPosition.z;
    gl_Position = projectionMatrix * mvPosition;
}
`

/** Vertex shader the library supplies for fragment-mode shaders on meshes. */
export const PARTICLE_MESH_VERTEX_SHADER = /* glsl */ `#define PARTICLE_MESH
attribute vec4 particleColor;
attribute float particleAge;
attribute float particleLife;
attribute float particleSeed;
${CONTRACT_UNIFORMS}${SHARED_VARYINGS}varying vec2 vUv;

void main() {
    vColor = particleColor;
    vAge = particleAge;
    vLife = particleLife;
    vSeed = particleSeed;
    vUv = uv;
    vec4 mvPosition = modelViewMatrix * instanceMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mvPosition;
}
`

// Points: vUv is the sprite coordinate rotated like the PointsMaterial patch,
// so textures line up with the standard point renderer.
const POINTS_FRAGMENT_PREFIX = /* glsl */ `#define PARTICLE_POINTS
${CONTRACT_UNIFORMS}${SHARED_VARYINGS}varying float vParticleRotation;
vec2 particleUv() {
    vec2 uv = gl_PointCoord - 0.5;
    float s = sin(vParticleRotation);
    float c = cos(vParticleRotation);
    return mat2(c, -s, s, c) * uv + 0.5;
}
#define vUv particleUv()
`

const MESH_FRAGMENT_PREFIX = /* glsl */ `#define PARTICLE_MESH
${CONTRACT_UNIFORMS}${SHARED_VARYINGS}varying vec2 vUv;
`

export interface ParticleShaderSources {
    vertexShader: string
    fragmentShader: string
}

/**
 * The vertex and fragment sources the library hands to three for a particle
 * shader. Three prepends its own prelude, so these are what a compile check
 * should use (and what shader error line numbers refer to, after three's
 * prelude). In fragment mode the author's vertex shader is ignored.
 */
export function buildParticleShaderSources(
    settings: Pick<ParticleShaderSettings, 'mode' | 'render'>,
    authored: ParticleShaderSources,
): ParticleShaderSources {
    const points = settings.render === 'points'
    if (settings.mode === 'fragment') {
        return {
            vertexShader: points
                ? PARTICLE_POINTS_VERTEX_SHADER
                : PARTICLE_MESH_VERTEX_SHADER,
            fragmentShader:
                (points ? POINTS_FRAGMENT_PREFIX : MESH_FRAGMENT_PREFIX) +
                authored.fragmentShader,
        }
    }
    const define = points
        ? '#define PARTICLE_POINTS\n'
        : '#define PARTICLE_MESH\n'
    return {
        vertexShader: define + authored.vertexShader,
        fragmentShader: define + authored.fragmentShader,
    }
}

/** Lines the library prepends to the author's fragment shader in `mode`. */
export function particleFragmentPrefixLines(
    settings: Pick<ParticleShaderSettings, 'mode' | 'render'>,
): number {
    const sources = buildParticleShaderSources(settings, {
        vertexShader: '',
        fragmentShader: '',
    })
    return sources.fragmentShader.split('\n').length - 1
}

const prepared = new WeakSet<Material>()

/**
 * Wires a particle ShaderMaterial into the contract: builds the final sources
 * at compile time (leaving the authored sources untouched, so the material
 * still serializes as authored) and makes sure the contract uniforms exist.
 * Idempotent; safe on materials shared by several emitters.
 */
export function prepareParticleShaderMaterial(
    material: ShaderMaterial,
    settings: ParticleShaderSettings,
): void {
    if (prepared.has(material)) return
    prepared.add(material)
    // The uniform map is typed as always populated, so test membership.
    const uniforms = material.uniforms
    if (!('uTime' in uniforms)) uniforms.uTime = { value: 0 }
    if (!('uEmitterAlpha' in uniforms)) uniforms.uEmitterAlpha = { value: 0 }
    if (!('uResolution' in uniforms)) {
        uniforms.uResolution = { value: new Vector2(1, 1) }
    }
    material.onBeforeCompile = (shader: WebGLProgramParametersWithUniforms) => {
        const sources = buildParticleShaderSources(settings, {
            vertexShader: shader.vertexShader,
            fragmentShader: shader.fragmentShader,
        })
        shader.vertexShader = sources.vertexShader
        shader.fragmentShader = sources.fragmentShader
    }
    material.customProgramCacheKey = () =>
        `particleShader:${settings.mode}:${settings.render}`
}

/**
 * Applies particle-shader defaults to a freshly parsed material for any
 * property its JSON left unset: transparent, additive blending, no depth
 * writes. Only materials with a `userData.particleShader` block are changed.
 */
export function applyParticleShaderDefaults(
    material: Material,
    json: Record<string, unknown>,
): void {
    if (!(material as ShaderMaterial).isShaderMaterial) return
    const userData = json.userData as { particleShader?: unknown } | undefined
    if (!userData?.particleShader) return
    if (json.transparent === undefined) material.transparent = true
    if (json.blending === undefined) material.blending = AdditiveBlending
    if (json.depthWrite === undefined) material.depthWrite = false
}

/**
 * Sets the contract uniforms for one emitter's draw. Called from the emitter
 * object's onBeforeRender, so a material shared by several emitters still
 * gets each emitter's own time and alpha (uniformsNeedUpdate forces three to
 * upload them even when consecutive draws share the program and material).
 */
export function updateParticleShaderUniforms(
    material: Material,
    renderer: { getDrawingBufferSize(target: Vector2): Vector2 },
    time: number,
    emitterAlpha: number,
): void {
    const shader = material as ShaderMaterial
    if (!shader.isShaderMaterial) return
    const uniforms = shader.uniforms
    if ('uTime' in uniforms) uniforms.uTime.value = time
    if ('uEmitterAlpha' in uniforms) uniforms.uEmitterAlpha.value = emitterAlpha
    if ('uResolution' in uniforms) {
        const resolution = uniforms.uResolution.value as Vector2 | null
        if (resolution?.isVector2) renderer.getDrawingBufferSize(resolution)
    }
    shader.uniformsNeedUpdate = true
}

/** The first material of an emitter's material slot. */
export function firstMaterial(
    material: Material | Material[] | null | undefined,
): Material | null {
    if (!material) return null
    return Array.isArray(material) ? (material[0] ?? null) : material
}
