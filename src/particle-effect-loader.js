import {
    FileLoader,
    Loader,
    MaterialLoader,
} from 'three';
import {ParticleEffect} from './particle-effect.js';

/**
 * Loads a json file describing a particle effect.
 */
export class ParticleEffectLoader extends Loader {

    /**
     * @param {?THREE.LoadingManager} [manager] The loading manager to use.
     * Defaults to `THREE.DefaultLoadingManager`.
     */
    constructor(manager) {
        super(manager);
        this.materialLoader = new MaterialLoader(manager);
    }

    /**
     * Loads a particle effect JSON.
     * @param {string} url
     * @param {?OnLoadHandler.<ParticleEffect>} [onLoad] Invoked when the
     * particle effect has finished loading.
     * @param {?function(ProgressEvent):any} [onProgress]
     * @param {?function(ErrorEvent):any} [onError]
     * @override
     */
    load(url, onLoad, onProgress, onError) {
        const scope = this;
        const loader = new FileLoader(this.manager);
        loader.setPath(this.path);
        loader.setRequestHeader(this.requestHeader);
        loader.setWithCredentials(scope.withCredentials);

        loader.load(url, (text) => {
            const json = JSON.parse(/** @type string */ (text));
            const particleEffect = scope.parse(json);
            if (onLoad) onLoad(particleEffect);
        }, onProgress, onError);
    }

    /**
     * Parses the data object, returning a new ParticleEffect instance.
     * @param {any} json
     * @return {ParticleEffect}
     * @override
     */
    parse(json) {
        if (json.material) {
            if (typeof(json.material) != 'string') {
                if (json.type === undefined) {
                    json.type = 'PointsMaterial';
                }
                json.material = this.materialLoader.parse(json.material);
            }
        }
        return new ParticleEffect(json);
    }

}

/**
 * @template T
 * @callback OnLoadHandler
 * @param {T} result The loaded result.
 */

