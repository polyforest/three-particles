import { ParticleEffectModelJson } from 'three-particles'

export interface SavedEffect {
    id: string
    name: string
    effect: ParticleEffectModelJson
    lastModified: number
}
