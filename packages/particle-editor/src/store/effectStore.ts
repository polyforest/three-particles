import { create } from 'zustand'
import { SavedEffect } from '../storage/SavedEffect'
import { ParticleEffectModelJson } from 'three-particles'

interface EffectStore {
    currentEffect: SavedEffect | null

    /**
     * Sets the current effect.
     * @param effect
     */
    setCurrentEffect: (effect: SavedEffect | null) => void

    updateEffect: (effect: ParticleEffectModelJson) => void

    updateName: (name: string) => void

    clearEffect: () => void
}

export const useEffectStore = create<EffectStore>((set, get) => {
    const update = (effect: Partial<SavedEffect>) => {
        const current = get().currentEffect
        if (!current) return
        const updatedEffect: SavedEffect = {
            ...current,
            ...effect,
            lastModified: Date.now(),
        }
        set({ currentEffect: updatedEffect })
    }

    return {
        currentEffect: null,

        setCurrentEffect: (effect) => {
            set({ currentEffect: effect })
        },

        updateEffect: (effect) => {
            update({ effect })
        },

        updateName: (name) => {
            update({ name })
        },

        clearEffect: () => {
            get().setCurrentEffect(null)
        },
    }
})
