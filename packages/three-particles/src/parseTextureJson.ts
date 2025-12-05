import { Texture, TextureJSON, TextureLoader } from 'three'
import { Wrapping } from 'three/src/constants'
import { cloneDeep } from 'lodash'
import { PartialDeep, ReadonlyDeep } from 'type-fest'

/**
 * Parse a THREE.TextureJSON object by loading its image and applying fields.
 * Note: Only commonly used fields are applied here. For full parity with ObjectLoader,
 * consider integrating THREE.ObjectLoader in the future.
 */
export function parseTextureJson(
    json: ReadonlyDeep<PartialDeep<TextureJSON>>,
    textureLoader: TextureLoader,
): Texture {
    const t = json.image ? textureLoader.load(json.image) : new Texture()

    // identity defaults
    if (json.name) t.name = json.name
    if (json.uuid) t.uuid = json.uuid

    // transforms
    if (json.repeat) t.repeat.fromArray(json.repeat)
    if (json.offset) t.offset.fromArray(json.offset)
    if (json.center) t.center.fromArray(json.center)
    if (typeof json.rotation === 'number') t.rotation = json.rotation

    // addressing / wrapping
    if (json.wrap) {
        t.wrapS = json.wrap[0] as Wrapping
        t.wrapT = json.wrap[1] as Wrapping
    }
    if (json.mapping != null) t.mapping = json.mapping

    // sampling / filtering
    if (json.magFilter != null) t.magFilter = json.magFilter
    if (json.minFilter != null) t.minFilter = json.minFilter
    if (json.anisotropy != null) t.anisotropy = json.anisotropy

    // format / type / color space
    if (json.format != null) t.format = json.format
    if (json.type != null) t.type = json.type
    if (json.colorSpace != null) t.colorSpace = json.colorSpace

    // mipmaps and flags
    if (typeof json.flipY === 'boolean') t.flipY = json.flipY
    if (typeof json.generateMipmaps === 'boolean')
        t.generateMipmaps = json.generateMipmaps

    // user data
    if (json.userData) t.userData = cloneDeep(json.userData)

    t.needsUpdate = true
    return t
}
