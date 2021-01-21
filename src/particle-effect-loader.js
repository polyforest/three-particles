import {DefaultLoadingManager, FileLoader, Loader} from 'three';
import {ParticleEffect} from './particle-effect.js';

/**
 * @param {THREE.LoadingManager} manager
 * @constructor
 */
function ParticleEffectLoader(manager = DefaultLoadingManager) {
    Loader.call(this, manager);
}

ParticleEffectLoader.prototype =
    Object.assign(Object.create(Loader.prototype), {

    constructor: ParticleEffectLoader,

    load: function(url, onLoad, onProgress, onError) {
        const scope = this;

        const loader = new FileLoader(this.manager);
        loader.setPath(this.path);
        loader.setRequestHeader(this.requestHeader);
        loader.setWithCredentials(scope.withCredentials);
        loader.load(url, /** @param {string} text */
        (text) => {
            console.log('Load text');
            const json = JSON.parse(text);
            const font = scope.parse( json );
            if (onLoad) onLoad(font);
        }, onProgress, onError);
    },

    parse: function(json) {
        const data = JSON.parse(json);
        if (data.material) {
            if (typeof(data.material) != 'string') {
                if (data.type === undefined) {
                    data.type = 'PointsMaterial';
                }
                data.material = this.materialLoader.parse(data.material);
            }
        }
        return new ParticleEffect(data);
    },
});

export {ParticleEffectLoader};


// /**
//  * Loads a json file describing a particle effect.
//  */
// export class ParticleEffectLoader extends Loader {
//
//     /**
//      *
//      * @param {?THREE.LoadingManager} [manager] The loading manager to use.
//      * Defaults to THREE.DefaultLoadingManager.
//      */
//     constructor(manager) {
//         super(manager);
//         this.materialLoader = new MaterialLoader(manager);
//     }
//
//     /**
//      * Parses the json, returning a new ParticleEffect instance.
//      * @param {string} json
//      * @return {ParticleEffect}
//      * @override
//      */
//     parse(json) {
//         const data = JSON.parse(json);
//         if (data.material) {
//             if (typeof(data.material) != 'string') {
//                 if (data.type === undefined) {
//                     data.type = 'PointsMaterial';
//                 }
//                 data.material = this.materialLoader.parse(data.material);
//             }
//         }
//         return new ParticleEffect(data);
//     }
//
// }
