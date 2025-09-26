import { FileLoader, Loader, Material, MaterialLoader } from 'three'
import {
    ParticleEffectModelJson,
    parseParticleEffect,
    ParticleEffectModel,
} from './model'
import { LoadingManager } from 'three/src/loaders/LoadingManager'
import { getDefaultRadial } from './materialDefaults'
import { decodeText } from './util'
import { cloneDeep } from 'lodash'

/**
 * Loads a JSON file describing a particle effect.
 */
export class ParticleEffectLoader extends Loader<ParticleEffectModel> {
    public readonly materialLoader: MaterialLoader

    public materials: Record<string, Material> = {}

    constructor(
        manager?: LoadingManager,
        deps?: {
            readonly materialLoader?: MaterialLoader
        },
    ) {
        super(manager)
        this.materialLoader =
            deps?.materialLoader ?? new MaterialLoader(manager)

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
        onLoad?: (effect: ParticleEffectModel) => void,
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
        json: ParticleEffectModelJson,
    ): Promise<ParticleEffectModel> {
        json = cloneDeep(json)
        if (json.materials) {
            // Load materials from the JSON.
            const mLoader = this.materialLoader
            for (const [key, material] of Object.entries(json.materials)) {
                this.materials[key] =
                    typeof material === 'string'
                        ? await mLoader.loadAsync(material)
                        : mLoader.parse(material)
            }
        }
        return parseParticleEffect(json, this.materials)
    }
}
