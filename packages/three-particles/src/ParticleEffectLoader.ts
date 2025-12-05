import {
    BufferGeometry,
    BufferGeometryLoader,
    FileLoader,
    Loader,
    Material,
    MaterialLoader,
    Texture,
    TextureLoader,
} from 'three'
import { parseTextureJson } from './parseTextureJson'
import {
    parseParticleEffect,
    ParticleEffectModel,
    ParticleEffectModelJson,
} from './model'
import { LoadingManager } from 'three/src/loaders/LoadingManager'
import { decodeText } from './util'
import { cloneDeep } from 'lodash'
import { getDefaultRadial } from './materialDefaults'
import { ReadonlyDeep } from 'type-fest'

/**
 * Loads a JSON file describing a particle effect.
 */
export class ParticleEffectLoader extends Loader<ParticleEffectModel> {
    public readonly materialLoader: MaterialLoader
    public readonly textureLoader: TextureLoader
    public readonly geometryLoader: BufferGeometryLoader

    public materials: Record<string, Material> = {}
    public textures: Record<string, Texture> = {}
    public geometries: Record<string, BufferGeometry> = {}

    constructor(
        manager?: LoadingManager,
        deps?: {
            readonly materialLoader?: MaterialLoader
            readonly textureLoader?: TextureLoader
            readonly geometryLoader?: BufferGeometryLoader
        },
    ) {
        super(manager)
        this.materialLoader =
            deps?.materialLoader ?? new MaterialLoader(manager)
        this.textureLoader = deps?.textureLoader ?? new TextureLoader(manager)
        this.geometryLoader =
            deps?.geometryLoader ?? new BufferGeometryLoader(manager)

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

    setGeometries(geometries: Record<string, BufferGeometry>) {
        this.geometries = geometries
    }

    setPath(path: string): this {
        super.setPath(path)
        this.materialLoader.setPath(path)
        this.textureLoader.setPath(path)
        this.geometryLoader.setPath(path)
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
        json: ReadonlyDeep<ParticleEffectModelJson>,
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
        const mLoader = this.materialLoader
        mLoader.setTextures({ ...this.textures, ...bundledTextures })

        // Load bundled materials
        const bundledMaterials: Record<string, Material> = {}
        if (json.materials) {
            for (const [key, material] of Object.entries(json.materials)) {
                bundledMaterials[key] =
                    typeof material === 'string'
                        ? await mLoader.loadAsync(material)
                        : mLoader.parse(material)
            }
        }

        // Load bundled geometries
        const bundledGeometries: Record<string, BufferGeometry> = {}
        if (json.geometries) {
            const gLoader = this.geometryLoader
            for (const [key, geom] of Object.entries(json.geometries)) {
                bundledGeometries[key] =
                    typeof geom === 'string'
                        ? await gLoader.loadAsync(geom)
                        : gLoader.parse(geom)
            }
        }

        return parseParticleEffect({
            effectJson: json,
            bundledMaterials: bundledMaterials,
            externalMaterials: this.materials,
            bundledTextures: bundledTextures,
            bundledGeometries: bundledGeometries,
            externalGeometries: this.geometries,
        })
    }
}
