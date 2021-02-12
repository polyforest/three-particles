import {
  FloatType,
  ShaderMaterial,
  Texture,
  UniformsLib,
} from 'three';
import pointsFrag from './shaders/points_frag.glsl.js';
import pointsVert from './shaders/points_vert.glsl.js';
import {defaults} from './util/object-utils.js';

/** @module threeParticles */

/**
 * Draws a radial gradient.
 *
 * @param {CanvasRenderingContext2D} ctx The rendering context.
 * @param {number} canvasRadius The radius of the circle.
 * @param {number} [canvasW] The width of the canvas.
 * @param {number} [canvasH] The height of the canvas.
 * @private
 */
function drawRadialGradient(ctx,
  canvasRadius,
  canvasW = canvasRadius * 2,
  canvasH = canvasRadius * 2) {
  ctx.save();
  const gradient = ctx.createRadialGradient(canvasRadius, canvasRadius, 0,
    canvasRadius, canvasRadius, canvasRadius);
  gradient.addColorStop(0, 'rgba(255,255,255,1.0)');
  gradient.addColorStop(0.5, 'rgba(255,255,255,0.5)');
  gradient.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvasW, canvasH);
  ctx.restore();
}

/**
 * Creates a circle gradient texture.
 *
 * @param {number} textureSize The diameter of the circle gradient.
 * @returns {Texture} The newly created texture.
 * @private
 */
export function createCircleGradientTexture(textureSize = 64.0) {
  if (typeof (document) === 'undefined') return new Texture(); // NodeJS
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  const diameter = textureSize;
  canvas.width = diameter;
  canvas.height = diameter;
  const canvasRadius = diameter / 2;

  drawRadialGradient(ctx, canvasRadius);

  const texture = new Texture(canvas);
  texture.type = FloatType;
  texture.needsUpdate = true;
  return texture;
}

/**
 * @type {?Texture}
 * @private
 */
let _defaultRadial = null;

/**
 * Returns the default radial gradient.
 *
 * @returns {Texture} The cached or newly created circle gradient texture.
 */
export function getDefaultRadial() {
  if (_defaultRadial === null) _defaultRadial = createCircleGradientTexture();
  return _defaultRadial;
}

/**
 * @type {?import('three').Material}
 * @private
 */
let _defaultMaterial = null;

export const shaderMaterialParamDefaults = {
  type: 'ShaderMaterial',
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
  map: 'radial',
};

/**
 * @typedef {import('type-fest').PartialDeep<T>} PartialDeep
 * @template T
 */

/**
 * @typedef {import('three').ShaderMaterialParameters} ShaderMaterialParameters
 */

/**
 * Sets any defaults for unset properties on a shader material.
 *
 * @param {PartialDeep<ShaderMaterialParameters>} shaderMaterialParams The 
 * material parameters to sanitize.
 * @returns {ShaderMaterialParameters} The input, now safely 
 * type cast.
 * Note: This method mutates material.
 */
export function sanitizeShaderMaterialParams(shaderMaterialParams) {
  defaults(shaderMaterialParams, shaderMaterialParamDefaults);
  return /** @type {ShaderMaterialParameters} */ (shaderMaterialParams);
}

/**
 * @returns {import('three').Material} Returns a radial material for a
 * particle effect.
 */
export function getRadialMaterial() {
  if (_defaultMaterial === null) {
    const m = new ShaderMaterial(sanitizeShaderMaterialParams({}));
    const tex = createCircleGradientTexture();
    m.uniforms.map.value = tex;
    m['map'] = tex;
    _defaultMaterial = m;
  }
  return _defaultMaterial;
}
