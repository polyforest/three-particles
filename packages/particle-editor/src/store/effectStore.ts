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

    addEmitter: (emitter: any) => void

    removeEmitter: (emitterUuid: string) => void

    toggleEmitter: (emitterUuid: string) => void

    toggleAllEmitters: (enabled: boolean) => void
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

        addEmitter: (emitter) => {
            const current = get().currentEffect
            if (!current) return
            const updatedEmitters = [
                ...(current.effect.emitters || []),
                emitter,
            ]
            update({
                effect: {
                    ...current.effect,
                    emitters: updatedEmitters,
                },
            })
        },

        removeEmitter: (emitterUuid) => {
            const current = get().currentEffect
            if (!current) return
            const updatedEmitters = (current.effect.emitters || []).filter(
                (e) => e.uuid !== emitterUuid,
            )
            update({
                effect: {
                    ...current.effect,
                    emitters: updatedEmitters,
                },
            })
        },

        toggleEmitter: (emitterUuid) => {
            const current = get().currentEffect
            if (!current) return
            const updatedEmitters = (current.effect.emitters || []).map((e) =>
                e.uuid === emitterUuid ? { ...e, enabled: !e.enabled } : e,
            )
            update({
                effect: {
                    ...current.effect,
                    emitters: updatedEmitters,
                },
            })
        },

        toggleAllEmitters: (enabled) => {
            const current = get().currentEffect
            if (!current) return
            const updatedEmitters = (current.effect.emitters || []).map(
                (e) => ({ ...e, enabled }),
            )
            update({
                effect: {
                    ...current.effect,
                    emitters: updatedEmitters,
                },
            })
        },
    }
})
