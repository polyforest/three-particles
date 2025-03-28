import { FileLoader, Loader } from 'three'
import type { ParticleEffectModel } from './model'
import { sanitizeParticleEffect } from './model'

/**
 * Loads a JSON file describing a particle effect.
 */
export class ParticleEffectLoader extends Loader<ParticleEffectModel> {
    /**
     * Loads a particle effect JSON from a given URL.
     * @param url - The url of the json file.
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
                // If text is ArrayBuffer, convert to string:
                const jsonStr =
                    typeof text === 'string'
                        ? text
                        : new TextDecoder().decode(text)
                const jsonObj = JSON.parse(
                    jsonStr,
                ) as Partial<ParticleEffectModel>
                sanitizeParticleEffect(jsonObj)
                if (onLoad) onLoad(jsonObj)
            },
            onProgress,
            onError,
        )
    }
}

const loader = new ParticleEffectLoader()

/**
 * Uses a particle effect loader to load a particle effect from a given URL.
 *
 * @param url
 * @param onProgress (optional) called to indicate load progress.
 */
export function loadParticleEffect(
    url: string,
    onProgress?: (event: ProgressEvent) => void,
): Promise<ParticleEffectModel> {
    return new Promise((resolve, reject) => {
        loader.load(url, resolve, onProgress, reject)
    })
}
