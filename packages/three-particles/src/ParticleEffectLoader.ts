import { FileLoader, Loader, Material, MaterialLoader } from 'three'
import { ParticleEffectModelJson, sanitizeParticleEffect } from './model'
import { ParticleEffect, ParticleEmitterPoints } from './object'
import { LoadingManager } from 'three/src/loaders/LoadingManager'
import { getDefaultRadial } from './materialDefaults'
import { decodeText } from './util'
import { cloneDeep } from 'lodash'

/**
 * Loads a JSON file describing a particle effect.
 */
export class ParticleEffectLoader extends Loader<ParticleEffect> {
    public readonly materialLoader: MaterialLoader

    public materials: Record<string, Material> = {}

    constructor(manager?: LoadingManager) {
        super(manager)
        this.materialLoader = new MaterialLoader(this.manager)

        // TODO temp
        this.materialLoader.setTextures({
            radial: getDefaultRadial(),
        })
    }

    setMaterials(materials: Record<string, Material>) {
        this.materials = materials
    }

    setPath(path: string): this {
        super.setPath(path)
        this.materialLoader.setPath(path)
        return this
    }

    /**
     * Loads a particle effect JSON from a given URL.
     *
     * @param url - The url of the JSON file.
     * @param onLoad - Callback invoked when the ParticleEffect has finished loading.
     * @param onProgress - Callback invoked by the file loader with progress information.
     * @param onError - Callback invoked if there is an error while loading.
     */
    public load(
        url: string,
        onLoad?: (effect: ParticleEffect) => void,
        onProgress?: (event: ProgressEvent) => void,
        onError?: (error: unknown) => void,
    ): void {
        const loader = new FileLoader(this.manager)

        loader.setPath(this.path)
        loader.setRequestHeader(this.requestHeader)
        loader.setWithCredentials(this.withCredentials)

        loader.load(
            url,
            (text: string | ArrayBuffer) => {
                this.parseAsync(JSON.parse(decodeText(text)))
                    .then(onLoad)
                    .catch((error) => onError?.(error))
            },
            onProgress,
            onError,
        )
    }

    /**
     * Parses the given JSON. This is used internally by
     * {@link ParticleEffectLoader#load}
     * but can also be used directly to parse a previously loaded JSON structure.
     *
     * @param {Object} json - The serialized particle effect object.
     * @return {ParticleEffect} The parsed ParticleEffect object.
     */
    async parseAsync(
        json: ParticleEffectModelJson & {
            materials?: Record<string, any>
        },
    ): Promise<ParticleEffect> {
        json = cloneDeep(json)
        if (json.materials) {
            const mLoader = this.materialLoader
            for (const [key, material] of Object.entries(json.materials)) {
                this.materials[key] =
                    typeof material === 'string'
                        ? await mLoader.loadAsync(material)
                        : mLoader.parse(material)
            }
        }
        sanitizeParticleEffect(json, this.materials)

        const effect = new ParticleEffect()
        for (const emitterModel of json.emitters) {
            effect.add(new ParticleEmitterPoints(emitterModel))
        }
        return effect
    }
}
