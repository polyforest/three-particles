import { create } from 'zustand'
import { EffectFile } from '../storage/EffectFile'
import { ParticleEffectModelJson } from 'three-particles'
import { FileMetadata } from '../storage/FileMetadata'

interface EffectStore {
    currentEffect: EffectFile | null

    /**
     * Sets the current effect.
     * @param effect
     */
    setCurrentEffectFile: (effect: EffectFile | null) => void

    updateEffect: (effect: ParticleEffectModelJson) => void

    updateName: (name: string) => void

    clearEffect: () => void
}

export const useEffectStore = create<EffectStore>((set, get) => {
    const update = (effect: Partial<EffectFile>) => {
        const current = get().currentEffect
        if (!current) return
        const updatedEffect: EffectFile = {
            ...current,
            ...effect,
            metadata: {
                ...current.metadata,
                lastModified: Date.now(),
            },
        }
        set({ currentEffect: updatedEffect })
    }

    const updateMetadata = (metadata: Partial<FileMetadata>) => {
        const current = get().currentEffect
        if (!current) return
        const updatedEffect: EffectFile = {
            ...current,
            metadata: {
                ...current.metadata,
                ...metadata,
                lastModified: Date.now(),
            },
        }
        set({ currentEffect: updatedEffect })
    }

    return {
        currentEffect: null,

        setCurrentEffectFile: (effect) => {
            set({ currentEffect: effect })
        },

        updateEffect: (effect) => {
            update({ effect })
        },

        updateName: (name) => {
            updateMetadata({ name })
        },

        delete: () => {
            updateMetadata({ deleted: true })
        },

        undelete: () => {
            updateMetadata({ deleted: false })
        },

        clearEffect: () => {
            get().setCurrentEffectFile(null)
        },
    }
})
