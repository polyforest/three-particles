import { create } from 'zustand'
import { EffectFile } from '../storage/EffectFile'
import {
    ParticleEffectModelJson,
    ParticleEmitterModelJson,
} from 'three-particles'
import { FileMetadata } from '../storage/FileMetadata'
import { cloneDeep } from 'lodash'
import logger from '../utils/logger'

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

    addEmitter: (emitter: ParticleEmitterModelJson) => void

    removeEmitter: (emitterUuid: string) => void

    toggleEmitter: (emitterUuid: string) => void

    toggleAllEmitters: (enabled: boolean) => void

    updateEmitter: (emitter: ParticleEmitterModelJson) => void

    // Undo/redo API
    undo: () => void
    redo: () => void
    canUndo: () => boolean
    canRedo: () => boolean
}

export const useEffectStore = create<EffectStore>((set, get) => {
    const pushToHistory = () => {
        const state = get()
        const current = state.currentEffect
        if (!current) return
        const snapshot = cloneDeep(current)
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
            logger.debug('updateName', name)
            updateMetadata({ name })
        },

        delete: () => {
            logger.debug('delete')
            updateMetadata({ deleted: true })
        },

        undelete: () => {
            logger.debug('undelete')
            updateMetadata({ deleted: false })
        },

        clearEffect: () => {
            logger.debug('clearEffect')
            // Clearing effect also clears history
            set({ currentEffect: null, past: [], future: [] })
        },

        addEmitter: (emitter) => {
            logger.debug('addEmitter', emitter)
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
            logger.debug('removeEmitter', emitterUuid)
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
            logger.debug('toggleEmitter', emitterUuid)
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
            logger.debug('toggleAllEmitters')
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

        updateEmitter: (emitter) => {
            logger.debug('updateEmitter', emitter.uuid)
            const current = get().currentEffect
            if (!current || !emitter.uuid) return
            const updatedEmitters = (current.effect.emitters || []).map((e) =>
                e.uuid === emitter.uuid ? emitter : e,
            )
            update({
                effect: {
                    ...current.effect,
                    emitters: updatedEmitters,
                },
            })
        },

        undo: () => {
            logger.debug('undo')
            const { past, currentEffect, future } = get()
            if (!currentEffect || past.length === 0) return
            const previous = past[past.length - 1]
            const newPast = past.slice(0, past.length - 1)
            const snapshot = cloneDeep(currentEffect)
            set({
                currentEffect: previous,
                past: newPast,
                future: [snapshot, ...future],
            })
        },

        redo: () => {
            logger.debug('redo')
            const { past, currentEffect, future } = get()
            if (!currentEffect || future.length === 0) return
            const next = future[0]
            const newFuture = future.slice(1)
            const snapshot = cloneDeep(currentEffect)
            set({
                currentEffect: next,
                past: [...past, snapshot],
                future: newFuture,
            })
        },

        canUndo: () => get().past.length > 0,
        canRedo: () => get().future.length > 0,
    }
})
