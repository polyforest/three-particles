import {
  FileLoader,
  Loader,
  MaterialLoader,
} from 'three';
import {sanitizeParticleEffect, scaleEmitter} from './model.js';
import {ParticleEffect} from './particle-effect.js';
import {
  parseParticlesMaterialParams,
  ParticlesMaterial,
  particlesMaterialParamDefaults,
} from './particles-material.js';
import {getDefaultRadial} from './textures.js';
import {defaults} from './util/object-utils.js';

/** @module threeParticles */

/**
 * @typedef {import('./model').ParticleEffectVo} ParticleEffectVo
 */

 /**
  * @typedef {import('./model').ParticleEmitterVo} ParticleEmitterVo
  */

/** 
 * @typedef {import('type-fest').PartialDeep<T>} PartialDeep 
 * @template T
 */

/**
 * Expected JSON data for a particle effect.
 *
 * @typedef {object} ParticleEffectJson
 * @property {?string} [version] The version of three-particles for which this 
 * effect was built.
 * @property {?Object<string, any>} [materials] The materials map of material 
 * id to object.
 * 
 * @property {ParticleEmitterJson[]} emitters A list of emitter models.
 * 
 */

/**
 * @typedef {object} ParticleEmitterJsonExtra
 * @property {?string} [material] The name of the material.
 */

 /**
  * Expected JSON data for an emitter.
  *
  * @typedef {Omit<PartialDeep<import('./model').ParticleEmitterVo>, 'material'>
  *  & ParticleEmitterJsonExtra} ParticleEmitterJson
  */

/**
 * Loads a json file describing a particle effect.
 * 
 * For json examples, see `test-resources/effects/`
 * 
 * 
 * Defining materials in the json:
 * ```
 * {
 *  "materials": {
 *    "pointsMat": {
 *      "type": "PointsMaterial",
 *      "color": 0x00FF00
 *    },
 *    "particlesMat": {
 *      "blending": 2,
 *      "color": 0xFF0000,
 *      "mat": "radial"
 *    }
 *  }
 * }
 * ```
 */
export class ParticleEffectLoader extends Loader {

  /**
   * Constructor
   *
   * @param {?import('three').LoadingManager} [manager] The loading manager to 
   * use. Defaults to `THREE.DefaultLoadingManager`.
   */
  constructor(manager) {
    super(manager);
    this._materialLoader = new MaterialLoader(manager);
    this.textures['radial'] = getDefaultRadial();

    /**
     * A map of materials available to the emitters.
     * All materials are expected to be renderable using POINTS draw. 
     * These are available in addition to the materials defined within the json.
     *
     * @type {Object<string, import('three').Material>}
     */
    this.materials = {};

    /**
     * Max particle counts and emission rates can be scaled by setting
     * a scaling factor per emitter here.
     * The key is the emitter id, the value is a numeric multiplier.
     * To scale all emitters, use the key '*'.
     * This can be used, for example, to reduce particle emissions on
     * slower devices, or increase emissions for stress tests.
     */
    this.emissionScaling = {'*': 1};
  }

  /**
   * A map of textures the material loader should use.
   * The keys will be the name of the texture, the values the `Texture` object.
   *
   * @default {}
   * @returns {Object<string, import('three').Texture>} Returns the currently 
   * set texture map.
   */
  get textures() {
    return this._materialLoader.textures;
  }

  /**
   * Replaces the textures object.
   *
   * @param {Object<string, import('three').Texture>} value The new textures 
   * map.
   */
  set textures(value) {
    this._materialLoader.setTextures(value);
  }

  /**
   * Loads a particle effect JSON.
   *
   * @param {string} url The url of the json file.
   * @param {?function(ParticleEffect):any} [onLoad] Invoked when the particle 
   * effect has finished loading.
   * @param {?function(ProgressEvent):any} [onProgress] If set, will be  invoked
   * by the file loader with progress
   * information.
   * @param {?function(ErrorEvent):any} [onError] If set, will be invoked if 
   * there is an error.
   * @override
   */
  load(url, onLoad, onProgress, onError) {
    const scope = this;
    const loader = new FileLoader(this.manager);
    loader.setPath(this.path);
    loader.setRequestHeader(this.requestHeader);
    loader.setWithCredentials(scope.withCredentials);

    loader.load(url, (text) => {
      const json = JSON.parse(/** @type {string} */(text));
      const particleEffect = scope.parse(json);
      if (onLoad) onLoad(particleEffect);
    }, onProgress, onError);
  }

  /**
   * Parses the data object, returning a new `ParticleEffect` instance.
   *
   * @param {ParticleEffectJson} json A parsed JSON object.
   * @returns {ParticleEffect} The newly created effect.
   * @override
   */
  parse(json) {
    const effectVo = /** @type {PartialDeep<ParticleEffectVo>} */ ({});
    /** @type {Object<string, import('three').Material>} */
    const definedMaterials = {};
    if (json.materials !== undefined) {
      for (const materialName in json.materials) {
        const materialJson = json.materials[materialName];
        if (materialJson.type === undefined ||
          materialJson.type === 'ParticlesMaterial') {
          const materialParams = parseParticlesMaterialParams(
            materialJson, this.textures);
          definedMaterials[materialName] =
            new ParticlesMaterial(defaults(
              materialParams, particlesMaterialParamDefaults));
        } else {
          definedMaterials[materialName] = this._materialLoader.parse(
            materialJson);
        }
      }
    }
    if (json.emitters !== undefined) {
      effectVo.emitters = [];
      for (const emitterJson of json.emitters) {
        const emitterVo = /** @type {PartialDeep<ParticleEmitterVo>} */ ({});
        defaults(emitterVo, emitterJson);
        if (emitterJson.material !== undefined) {
          emitterVo.material = definedMaterials[emitterJson.material] ||
            this.materials[emitterJson.material];
        }
        effectVo.emitters.push(emitterVo);
      }
    }
    const sanitizedEffectVo = sanitizeParticleEffect(effectVo);

    // Scale the emitter counts and emission rates based on the emitterScaling
    // settings.
    for (const emitterVo of sanitizedEffectVo.emitters) {
      scaleEmitter(emitterVo,
        this.emissionScaling[emitterVo.id] || this.emissionScaling['*']);
    }
    return new ParticleEffect(sanitizedEffectVo);
  }

}
