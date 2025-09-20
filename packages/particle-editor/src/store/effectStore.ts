import { create } from 'zustand'
import { EffectFile } from '../storage/EffectFile'
import { ParticleEffectModelJson } from 'three-particles'
import { FileMetadata } from '../storage/FileMetadata'

interface EffectStore {
    currentEffect: EffectFile | null

    // History stacks for undo/redo
    past: EffectFile[]
    future: EffectFile[]

    /**
     * Sets the current effect.
     * @param effect
     */
    setCurrentEffectFile: (effect: EffectFile | null) => void

    updateEffect: (effect: ParticleEffectModelJson) => void

    updateName: (name: string) => void

    delete: () => void
    undelete: () => void

    clearEffect: () => void

    addEmitter: (emitter: any) => void

    removeEmitter: (emitterUuid: string) => void

    toggleEmitter: (emitterUuid: string) => void

    toggleAllEmitters: (enabled: boolean) => void

    // Undo/redo API
    undo: () => void
    redo: () => void
    canUndo: () => boolean
    canRedo: () => boolean
}

export const useEffectStore = create<EffectStore>((set, get) => {
    const deepClone = <T,>(obj: T): T => JSON.parse(JSON.stringify(obj))

    const pushToHistory = () => {
        const state = get()
        const current = state.currentEffect
        if (!current) return
        const snapshot = deepClone(current)
        set({ past: [...state.past, snapshot], future: [] })
    }

    const update = (effect: Partial<EffectFile>) => {
        const current = get().currentEffect
        if (!current) return
        pushToHistory()
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
        pushToHistory()
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
        past: [],
        future: [],

        setCurrentEffectFile: (effect) => {
            // Setting a new current effect resets history
            set({ currentEffect: effect, past: [], future: [] })
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
            // Clearing effect also clears history
            set({ currentEffect: null, past: [], future: [] })
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

        undo: () => {
            const { past, currentEffect, future } = get()
            if (!currentEffect || past.length === 0) return
            const previous = past[past.length - 1]
            const newPast = past.slice(0, past.length - 1)
            const snapshot = deepClone(currentEffect)
            set({ currentEffect: previous, past: newPast, future: [snapshot, ...future] })
        },

        redo: () => {
            const { past, currentEffect, future } = get()
            if (!currentEffect || future.length === 0) return
            const next = future[0]
            const newFuture = future.slice(1)
            const snapshot = deepClone(currentEffect)
            set({ currentEffect: next, past: [...past, snapshot], future: newFuture })
        },

        canUndo: () => get().past.length > 0,
        canRedo: () => get().future.length > 0,
    }
})
