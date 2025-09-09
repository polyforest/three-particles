import { ParticleEffectModelJson } from 'three-particles'
import { MathUtils } from 'three'
import { cloneDeep } from 'lodash'

export interface SavedEffect {
    id: string
    name: string
    effect: ParticleEffectModelJson
    lastModified: number
}

const emptyEffect: ParticleEffectModelJson = {
    version: '1.0',
    emitters: [],
}

export function createNewEffect(
    name: string = 'Untitled Effect',
    effect = cloneDeep(emptyEffect),
): SavedEffect {
    return {
        id: MathUtils.generateUUID(),
        lastModified: Date.now(),
        effect,
        name,
    }
}
