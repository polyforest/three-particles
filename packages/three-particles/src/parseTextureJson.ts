import { Texture, TextureLoader, TextureJSON } from 'three'
import { Wrapping } from 'three/src/constants'
import { cloneDeep } from 'lodash'

/**
 * Parse a THREE.TextureJSON object by loading its image and applying fields.
 * Note: Only commonly used fields are applied here. For full parity with ObjectLoader,
 * consider integrating THREE.ObjectLoader in the future.
 */
export function parseTextureJson(
    json: Partial<TextureJSON>,
    textureLoader: TextureLoader,
): Texture {
    const t = json.image ? textureLoader.load(json.image) : new Texture()

    // identity defaults
    if (json.name) t.name = json.name
    if (json.uuid) t.uuid = json.uuid

    // transforms
    if (json.repeat) t.repeat.set(json.repeat[0], json.repeat[1])
    if (json.offset) t.offset.set(json.offset[0], json.offset[1])
    if (json.center) t.center.set(json.center[0], json.center[1])
    if (typeof json.rotation === 'number') t.rotation = json.rotation

    // addressing / wrapping
    if (json.wrap) {
        t.wrapS = json.wrap[0] as Wrapping
        t.wrapT = json.wrap[1] as Wrapping
    }
    if (json.mapping !== undefined) t.mapping = json.mapping

    // sampling / filtering
    if (json.magFilter !== undefined) t.magFilter = json.magFilter
    if (json.minFilter !== undefined) t.minFilter = json.minFilter
    if (typeof json.anisotropy === 'number') t.anisotropy = json.anisotropy

    // format / type / color space
    if (json.format !== undefined) t.format = json.format
    if (json.type !== undefined) t.type = json.type
    if (json.colorSpace !== undefined) t.colorSpace = json.colorSpace

    // mipmaps and flags
    if (typeof json.flipY === 'boolean') t.flipY = json.flipY
    if (typeof json.generateMipmaps === 'boolean')
        t.generateMipmaps = json.generateMipmaps

    // user data
    if (json.userData) t.userData = cloneDeep(json.userData)

    t.needsUpdate = true
    return t
}
