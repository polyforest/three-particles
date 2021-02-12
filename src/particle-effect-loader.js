import {
    FileLoader,
    Loader,
    MaterialLoader,
} from 'three';
import {sanitizeParticleEffect, scaleEmitter} from './model.js';
import {ParticleEffect} from './particle-effect.js';
import {
    getDefaultRadial,
    shaderMaterialParamDefaults,
} from './material-defaults.js';
import {defaults} from './util/object-utils.js';

/** @module threeParticles */

/**
 * Loads a json file describing a particle effect.
 */
export class ParticleEffectLoader extends Loader {

    /**
     * constructor
     *
     * @param {?import('three').LoadingManager} [manager] The loading manager to
     * use.
     * Defaults to `THREE.DefaultLoadingManager`.
     */
    constructor(manager) {
        super(manager);
        this.materialLoader = new MaterialLoader(manager);
        this.textures['radial'] = getDefaultRadial();

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
     * The keys will be the name of the texture, the values the `Texture`
     * object.
     *
     * @default {}
     * @returns {{}} Returns the currently set texture map.
     */
    get textures() {
        return this.materialLoader.textures;
    }

    /**
     * Loads a particle effect JSON.
     *
     * @param {string} url The url of the json file.
     * @param {?function(ParticleEffect):any} [onLoad] Invoked when the
     * particle effect has finished loading.
     * @param {?function(ProgressEvent):any} [onProgress] If set, will be
     * invoked by the file loader with progress information.
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
     * Parses the data object, returning a new ParticleEffect instance.
     *
     * @param {Partial<import('./model').ParticleEffectVo>} json A parsed JSON
     * object.
     * @returns {ParticleEffect} The newly created effect.
     * @override
     */
    parse(json) {
        const globalScale = this.emissionScaling['*'];
        if (json.emitters !== undefined) {
            for (const emitterJson of json.emitters) {
                if (emitterJson.material) {
                    let materialParams;
                    if (emitterJson.material.type === undefined) {
                        materialParams = defaults({},
                            emitterJson.material, shaderMaterialParamDefaults);
                    } else {
                        materialParams = emitterJson.material;
                    }
                    emitterJson.material =
                        this.materialLoader.parse(materialParams);
                }
                scaleEmitter(emitterJson,
                    this.emissionScaling[emitterJson.id] || globalScale);
            }
        }
        return new ParticleEffect(sanitizeParticleEffect(json));
    }

}
