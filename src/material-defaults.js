import {
  ParticlesMaterial,
  particlesMaterialParamDefaults,
} from './particles-material.js';
import {createCircleGradientTexture} from './textures.js';
import {defaults} from './util/object-utils.js';

/** @module threeParticles */

/**
 * @type {?import('three').Material}
 * @private
 */
let _defaultMaterial = null;

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
 * Note: This method mutates the input.
 */
export function sanitizeShaderMaterialParams(shaderMaterialParams) {
  defaults(shaderMaterialParams, particlesMaterialParamDefaults);
  return /** @type {ShaderMaterialParameters} */ (shaderMaterialParams);
}

/**
 * @returns {import('three').Material} Returns a radial material for a
 * particle effect.
 */
export function getRadialMaterial() {
  if (_defaultMaterial === null) {
    const m = new ParticlesMaterial(sanitizeShaderMaterialParams({}));
    const tex = createCircleGradientTexture();
    m.uniforms.map.value = tex;
    m['map'] = tex;
    _defaultMaterial = m;
  }
  return _defaultMaterial;
}
