import { ParticleEffectModelJson } from 'three-particles'
import { MathUtils } from 'three'
import { cloneDeep } from 'lodash'
import { SavedEffectMetadata } from './SavedEffectMetadata'

export interface SavedEffect extends SavedEffectMetadata {
    effect: ParticleEffectModelJson
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
