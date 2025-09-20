import { ParticleEffectModelJson } from 'three-particles'
import { MathUtils } from 'three'
import { cloneDeep } from 'lodash'
import { FileMetadata } from './FileMetadata'

export interface EffectFile {
    readonly effect: ParticleEffectModelJson
    readonly metadata: FileMetadata
}

const emptyEffect: ParticleEffectModelJson = {
    version: '1.0',
    emitters: [],
} as const

export function createNewEffect(
    name: string = 'Untitled Effect',
    effect = cloneDeep(emptyEffect),
): EffectFile {
    return {
        effect,
        metadata: {
            id: MathUtils.generateUUID(),
            lastModified: Date.now(),
            name,
        },
    }
}
