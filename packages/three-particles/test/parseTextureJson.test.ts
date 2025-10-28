import {
    FloatType,
    LinearMipmapLinearFilter,
    MirroredRepeatWrapping,
    NearestFilter,
    RepeatWrapping,
    RGBAFormat,
    SRGBColorSpace,
    Texture,
    TextureJSON,
    TextureLoader,
    UVMapping,
} from 'three'
import { parseTextureJson } from '../src/parseTextureJson'

class FakeTextureLoader extends TextureLoader {
    public lastUrl: string | null = null
    load(url: string): Texture {
        this.lastUrl = url
        return new Texture()
    }
}

describe('parseTextureJson', () => {
    test('applies full TextureJSON fields and loads image via loader', () => {
        const loader = new FakeTextureLoader()

        const json = {
            name: 'myTex',
            uuid: '1234-5678',
            image: 'data:image/png;base64,XXXX',
            mapping: UVMapping as any,
            repeat: [2, 3] as [number, number],
            offset: [0.25, 0.5] as [number, number],
            center: [0.1, 0.2] as [number, number],
            rotation: Math.PI / 4,
            wrap: [RepeatWrapping as any, MirroredRepeatWrapping as any] as any,
            format: RGBAFormat as any,
            type: FloatType as any,
            colorSpace: SRGBColorSpace as any,
            magFilter: NearestFilter as any,
            minFilter: LinearMipmapLinearFilter as any,
            anisotropy: 8,
            flipY: true,
            generateMipmaps: false,
            userData: { nested: { value: 42 } },
        } satisfies Partial<TextureJSON>

        const tex = parseTextureJson(json as any, loader)

        expect(loader.lastUrl).toBe(json.image)
        expect(tex.name).toBe('myTex')
        expect(tex.uuid).toBe('1234-5678')

        expect(tex.repeat.x).toBe(2)
        expect(tex.repeat.y).toBe(3)
        expect(tex.offset.x).toBe(0.25)
        expect(tex.offset.y).toBe(0.5)
        expect(tex.center.x).toBe(0.1)
        expect(tex.center.y).toBe(0.2)
        expect(tex.rotation).toBeCloseTo(Math.PI / 4)

        expect(tex.wrapS).toBe(RepeatWrapping)
        expect(tex.wrapT).toBe(MirroredRepeatWrapping)
        expect(tex.mapping).toBe(UVMapping)

        expect(tex.magFilter).toBe(NearestFilter)
        expect(tex.minFilter).toBe(LinearMipmapLinearFilter)
        expect(tex.anisotropy).toBe(8)

        expect(tex.format).toBe(RGBAFormat)
        expect(tex.type).toBe(FloatType)
        expect(tex.colorSpace).toBe(SRGBColorSpace)

        expect(tex.flipY).toBe(true)
        expect(tex.generateMipmaps).toBe(false)

        // userData should be deep-cloned
        expect(tex.userData).toEqual({ nested: { value: 42 } })
        // mutate original json and verify texture.userData not affected
        json.userData.nested.value = 100
        expect(tex.userData).toEqual({ nested: { value: 42 } })
    })

    test('creates Texture without image and applies partial fields', () => {
        const loader = new FakeTextureLoader()
        const json = {
            name: 'noImage',
            flipY: false,
        }
        const tex = parseTextureJson(json as any, loader)

        // no image should not trigger loader
        expect(loader.lastUrl).toBeNull()
        expect(tex).toBeInstanceOf(Texture)
        expect(tex.name).toBe('noImage')
        expect(tex.flipY).toBe(false)
    })
})
