/* eslint-disable max-len */
import {
  Color,
  Matrix3,
  Matrix4,
  ShaderMaterial,
  UniformsLib,
  Vector2,
  Vector3,
  Vector4,
} from 'three';
import pointsFrag from './shaders/points_frag.glsl.js';
import pointsVert from './shaders/points_vert.glsl.js';
import {getDefaultRadial} from './textures.js';

/**
 * @typedef {import('three').ShaderMaterialParameters &
 * import('three').PointsMaterialParameters} ParticlesMaterialParams
 */

/**
 * @type {import('./particles-material.js').ParticlesMaterialParams}
 */
export const particlesMaterialParamDefaults = {
  uniforms: {
    ...UniformsLib.points,
    ...UniformsLib.fog,
  },
  vertexShader: pointsVert,
  fragmentShader: pointsFrag,
  depthTest: true,
  depthWrite: false,
  alphaTest: 0,
  transparent: true,
  fog: true,
  map: getDefaultRadial(),
  size: 20,
  sizeAttenuation: true,
};

/**
 * The material used for drawing particles.
 */
export class ParticlesMaterial extends ShaderMaterial {

  /**
   * Constructor
   *
   * @param {ParticlesMaterialParams} params The material parameters.
   */
  constructor(params) {
    super();
    this.isPointsMaterial = true;
    this.type = 'ParticlesMaterial';
    this.color = new Color(0xffffff);
    this.map = null;
    this.alphaMap = null;
    this.size = 1;
    this.sizeAttenuation = true;
    this.morphTargets = false;
    this.setValues(params);
  }

  /**
   * Copies the properties from the passed material.
   *
   * @param {ParticlesMaterial} source The source material to copy from.
   * @returns {this} Returns this.
   * @override
   */
  copy(source) {
    ShaderMaterial.prototype.copy.call(this, source);
    this.color.copy(source.color);
    this.map = source.map;
    this.alphaMap = source.alphaMap;
    this.size = source.size;
    this.sizeAttenuation = source.sizeAttenuation;
    this.morphTargets = source.morphTargets;
    return this;
  }

}

/**
 * Parses a data object, returning a new ParticlesMaterialParams instance.
 *
 * @param {any} json A parsed JSON
 * object.
 * @param {Object<string,import('three').Texture>} textures The string to 
 * textures map.
 * @returns {ParticlesMaterialParams} The newly created parameters.
 * @override
 */
export function parseParticlesMaterialParams(json, textures = {radial: getDefaultRadial()}) {
  const params = /** @type {ParticlesMaterialParams} */ ({});
  if (json.name !== undefined) params.name = json.name;
  if (json.color !== undefined) params.color = new Color().setHex(json.color);
  if (json.fog !== undefined) params.fog = json.fog;
  if (json.flatShading !== undefined) params.flatShading = json.flatShading;
  if (json.blending !== undefined) params.blending = json.blending;

  if (json.side !== undefined) params.side = json.side;
  if (json.opacity !== undefined) params.opacity = json.opacity;
  if (json.transparent !== undefined) params.transparent = json.transparent;
  if (json.alphaTest !== undefined) params.alphaTest = json.alphaTest;
  if (json.depthTest !== undefined) params.depthTest = json.depthTest;
  if (json.depthWrite !== undefined) params.depthWrite = json.depthWrite;
  if (json.colorWrite !== undefined) params.colorWrite = json.colorWrite;

  if (json.stencilWrite !== undefined) params.stencilWrite = json.stencilWrite;
  if (json.stencilWriteMask !== undefined) params.stencilWriteMask = json.stencilWriteMask;
  if (json.stencilFunc !== undefined) params.stencilFunc = json.stencilFunc;
  if (json.stencilRef !== undefined) params.stencilRef = json.stencilRef;
  if (json.stencilFuncMask !== undefined) params.stencilFuncMask = json.stencilFuncMask;
  if (json.stencilFail !== undefined) params.stencilFail = json.stencilFail;
  if (json.stencilZFail !== undefined) params.stencilZFail = json.stencilZFail;
  if (json.stencilZPass !== undefined) params.stencilZPass = json.stencilZPass;

  if (json.wireframe !== undefined) params.wireframe = json.wireframe;
  if (json.wireframeLinewidth !== undefined) params.wireframeLinewidth = json.wireframeLinewidth;

  if (json.linewidth !== undefined) params.linewidth = json.linewidth;

  if (json.polygonOffset !== undefined) params.polygonOffset = json.polygonOffset;
  if (json.polygonOffsetFactor !== undefined) params.polygonOffsetFactor = json.polygonOffsetFactor;
  if (json.polygonOffsetUnits !== undefined) params.polygonOffsetUnits = json.polygonOffsetUnits;

  if (json.skinning !== undefined) params.skinning = json.skinning;
  if (json.morphTargets !== undefined) params.morphTargets = json.morphTargets;
  if (json.morphNormals !== undefined) params.morphNormals = json.morphNormals;
  if (json.dithering !== undefined) params.dithering = json.dithering;

  if (json.visible !== undefined) params.visible = json.visible;
  if (json.toneMapped !== undefined) params.toneMapped = json.toneMapped;
  if (json.userData !== undefined) params.userData = json.userData;
  if (json.vertexColors !== undefined) params.vertexColors = json.vertexColors;

  // Shader Material
  if (json.uniforms !== undefined) {
    params.uniforms = {};
    for (const name in json.uniforms) {
      params.uniforms[name] = parseUniform(json.uniforms[name], textures);
    }
  }

  if (json.defines !== undefined) params.defines = json.defines;
  if (json.vertexShader !== undefined) params.vertexShader = json.vertexShader;
  if (json.fragmentShader !== undefined) params.fragmentShader = json.fragmentShader;

  if (json.extensions !== undefined) {
    params.extensions = {};
    for (const key in json.extensions) {
      params.extensions[key] = json.extensions[key];
    }
  }

  if (json.size !== undefined) params.size = json.size;
  if (json.sizeAttenuation !== undefined) params.sizeAttenuation = json.sizeAttenuation;
  if (json.map !== undefined) params.map = textures[json.map];
  if (json.alphaMap !== undefined) params.alphaMap = textures[json.alphaMap];
  return params;
}

/**
 * Parses a json uniform.
 *
 * @param {any} json The uniform json.
 * @param {Object<string,import('three').Texture>} textures The string to 
 * textures map.
 * @returns {import('three').IUniform} The parsed uniform.
 */
function parseUniform(json, textures) {
  const materialUniform = {value: null};
  switch (json.type) {
    case 't':
      materialUniform.value = textures[json.value];
      break;
    case 'c':
      materialUniform.value = new Color().setHex(json.value);
      break;
    case 'v2':
      materialUniform.value = new Vector2().fromArray(json.value);
      break;
    case 'v3':
      materialUniform.value = new Vector3().fromArray(json.value);
      break;
    case 'v4':
      materialUniform.value = new Vector4().fromArray(json.value);
      break;
    case 'm3':
      materialUniform.value = new Matrix3().fromArray(json.value);
      break;
    case 'm4':
      materialUniform.value = new Matrix4().fromArray(json.value);
      break;
    default:
      materialUniform.value = json.value;
  }
  return materialUniform;
}
