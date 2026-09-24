import http from 'node:http'
import type { AddressInfo } from 'node:net'
import { LoadingManager, MeshBasicMaterial } from 'three'
import { ParticleEffectLoader } from '../src/ParticleEffectLoader'
import type { ParticleEffectModelJson } from '../src/model'

// three.js' FileLoader constructs ProgressEvent objects while streaming
// response bodies for onProgress. Node does not ship that constructor, so
// provide a minimal stand-in for the test runtime (kept if one appears).
;(globalThis as Record<string, unknown>).ProgressEvent ??= class {
    readonly lengthComputable: boolean
    readonly loaded: number
    readonly total: number

    constructor(
        _type: string,
        init: { lengthComputable?: boolean; loaded?: number; total?: number },
    ) {
        this.lengthComputable = init.lengthComputable ?? false
        this.loaded = init.loaded ?? 0
        this.total = init.total ?? 0
    }
}

/** Serves one malformed JSON body per request, then closes the connection. */
async function startMalformedJsonServer(): Promise<{
    url: string
    close: () => Promise<void>
}> {
    const server = http.createServer((_req, res) => {
        res.writeHead(200, {
            'Content-Type': 'application/json',
            Connection: 'close',
        })
        res.end('{ this is not valid json')
    })
    await new Promise<void>((resolve) => server.listen(0, '127.0.0.1', resolve))
    const { port } = server.address() as AddressInfo
    return {
        url: `http://127.0.0.1:${port}/malformed.json`,
        close: () =>
            new Promise<void>((resolve) => server.close(() => resolve())),
    }
}

/** Serves a MeshBasicMaterial JSON referencing one texture uuid, per request. */
async function startMaterialServer(): Promise<{
    url: string
    close: () => Promise<void>
}> {
    const server = http.createServer((_req, res) => {
        res.writeHead(200, {
            'Content-Type': 'application/json',
            Connection: 'close',
        })
        res.end(
            JSON.stringify({
                metadata: { version: 4.6, type: 'Material', generator: 'test' },
                uuid: 'mat-uuid',
                name: 'shared-material',
                type: 'MeshBasicMaterial',
                // Resolved against the parsing loader's texture map.
                map: 'tex-shared-uuid',
            }),
        )
    })
    await new Promise<void>((resolve) => server.listen(0, '127.0.0.1', resolve))
    const { port } = server.address() as AddressInfo
    return {
        url: `http://127.0.0.1:${port}/`,
        close: () =>
            new Promise<void>((resolve) => server.close(() => resolve())),
    }
}

describe('ParticleEffectLoader', () => {
    it('routes malformed JSON responses to onError and rejects loadAsync (TP-3)', async () => {
        const { url, close } = await startMalformedJsonServer()
        try {
            const manager = new LoadingManager()
            const itemErrorSpy = jest.spyOn(manager, 'itemError')
            const itemEndSpy = jest.spyOn(manager, 'itemEnd')
            const loader = new ParticleEffectLoader(manager)

            const onLoad = jest.fn()

            // Direct load(): the onError callback must fire with the parse
            // error instead of the throw escaping as an unhandled rejection.
            const outcome = await new Promise<
                { error: unknown } | { loaded: true }
            >((resolve) => {
                loader.load(
                    url,
                    () => resolve({ loaded: true }),
                    undefined,
                    (error) => resolve({ error }),
                )
            })
            expect(outcome).toEqual({ error: expect.any(SyntaxError) })
            expect(onLoad).not.toHaveBeenCalled()

            // loadAsync() must reject (its internal onError is the reject).
            await expect(loader.loadAsync(url)).rejects.toThrow(SyntaxError)

            // Let FileLoader's promise chain finish its bookkeeping.
            await new Promise((resolve) => setTimeout(resolve, 0))
            expect(itemErrorSpy).toHaveBeenCalledWith(url)
            expect(itemEndSpy).toHaveBeenCalledWith(url)
        } finally {
            await close()
        }
    })

    it('gives concurrent parseAsync calls independent material texture maps (TP-5)', async () => {
        const { url, close } = await startMaterialServer()
        try {
            const loader = new ParticleEffectLoader()
            loader.setPath(url)

            // Two effects bundle a texture under the same uuid the shared
            // material references. The string-referenced material forces the
            // awaited fetch between setTextures and parse that used to
            // interleave the shared MaterialLoader's texture map.
            const effectA = {
                textures: {
                    'tex-shared-uuid': {
                        uuid: 'tex-shared-uuid',
                        name: 'tex-A',
                    },
                },
                materials: { mat: 'material.json' },
            } as ParticleEffectModelJson
            const effectB = {
                textures: {
                    'tex-shared-uuid': {
                        uuid: 'tex-shared-uuid',
                        name: 'tex-B',
                    },
                },
                materials: { mat: 'material.json' },
            } as ParticleEffectModelJson

            const [a, b] = await Promise.all([
                loader.parseAsync(effectA),
                loader.parseAsync(effectB),
            ])

            // Each effect's material must resolve its OWN bundled texture,
            // by identity. The served JSON declares type MeshBasicMaterial.
            const matA = a.materials['mat'] as MeshBasicMaterial
            const matB = b.materials['mat'] as MeshBasicMaterial
            expect(matA.map).toBe(a.textures['tex-shared-uuid'])
            expect(matB.map).toBe(b.textures['tex-shared-uuid'])
            expect(matA.map).not.toBe(matB.map)
            expect(matA.map?.name).toBe('tex-A')
            expect(matB.map?.name).toBe('tex-B')
        } finally {
            await close()
        }
    })
})
