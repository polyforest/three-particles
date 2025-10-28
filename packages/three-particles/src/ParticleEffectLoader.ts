import {
    FileLoader,
    Loader,
    Material,
    MaterialLoader,
    Texture,
    TextureLoader,
} from 'three'
import { parseTextureJson } from './parseTextureJson'
import {
    ParticleEffectModelJson,
    parseParticleEffect,
    ParticleEffectModel,
} from './model'
import { LoadingManager } from 'three/src/loaders/LoadingManager'
import { decodeText } from './util'
import { cloneDeep } from 'lodash'
import { getDefaultRadial } from './materialDefaults'

/**
 * Loads a JSON file describing a particle effect.
 */
export class ParticleEffectLoader extends Loader<ParticleEffectModel> {
    public readonly materialLoader: MaterialLoader
    public readonly textureLoader: TextureLoader

    public materials: Record<string, Material> = {}
    public textures: Record<string, Texture> = {}

    constructor(
        manager?: LoadingManager,
        deps?: {
            readonly materialLoader?: MaterialLoader
            readonly textureLoader?: TextureLoader
        },
    ) {
        super(manager)
        this.materialLoader =
            deps?.materialLoader ?? new MaterialLoader(manager)
        this.textureLoader = deps?.textureLoader ?? new TextureLoader(manager)

        // Provide a sensible default texture map so basic effects work out of the box.
        // Users can override via setTextures(), and JSON-bundled textures will be merged.
        this.setTextures({ radial: getDefaultRadial() })
    }

    setMaterials(materials: Record<string, Material>) {
        this.materials = materials
    }

    setTextures(textures: Record<string, Texture>) {
        this.textures = textures
    }

    setPath(path: string): this {
        super.setPath(path)
        this.materialLoader.setPath(path)
        this.textureLoader.setPath(path)
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

        // Load bundled textures first so materials can reference them by key.
        const bundledTextures: Record<string, Texture> = {}
        if (json.textures) {
            const tLoader = this.textureLoader
            for (const [key, tex] of Object.entries(json.textures)) {
                if (typeof tex === 'string') {
                    // Texture was set to a URL.
                    bundledTextures[key] = await tLoader.loadAsync(tex)
                } else {
                    // Parse a full TextureJSON blob by loading its image and applying properties.
                    bundledTextures[key] = parseTextureJson(tex, tLoader)
                }
            }
        }

        // Make textures available to MaterialLoader for resolving map/alphaMap/etc.
        const externalTextures = this.textures
        const allTextures = { ...externalTextures, ...bundledTextures }
        const mLoader = this.materialLoader
        mLoader.setTextures(allTextures)

        // 2) Load bundled materials
        const bundledMaterials: Record<string, Material> = {}
        if (json.materials) {
            for (const [key, material] of Object.entries(json.materials)) {
                bundledMaterials[key] =
                    typeof material === 'string'
                        ? await mLoader.loadAsync(material)
                        : mLoader.parse(material)
            }
        }

        return parseParticleEffect(
            json,
            bundledMaterials,
            this.materials,
            bundledTextures,
            externalTextures,
        )
    }
}
