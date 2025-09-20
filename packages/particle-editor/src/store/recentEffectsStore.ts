import { create } from 'zustand'
import { FileMetadata } from '../storage/FileMetadata'
import { savedEffectStorage } from './storePersistence'
import errorHandler from '../utils/errorHandler'
import logger from '../utils/logger'

interface RecentEffectsState {
    metadataIndex: FileMetadata[]
    loading: boolean

    loadIndex: () => Promise<void>
    deleteEffect: (id: string) => Promise<void>
    undeleteEffect: (id: string) => Promise<void>
}

export const useRecentEffectsStore = create<RecentEffectsState>((set, get) => ({
    metadataIndex: [],
    loading: false,

    loadIndex: async () => {
        try {
            set({ loading: true })
            const metadata = await savedEffectStorage.getMetadataIndex()
            // Sort by lastModified desc
            metadata.sort((a, b) => b.lastModified - a.lastModified)
            set({ metadataIndex: metadata })
        } catch (e) {
            logger.error('Failed to load recent effects index', e)
        } finally {
            set({ loading: false })
        }
    },

    deleteEffect: async (id: string) => {
        await savedEffectStorage.deleteEffect(id).catch(errorHandler)
        await get().loadIndex()
    },

    undeleteEffect: async (id: string) => {
        await savedEffectStorage.undeleteEffect(id).catch(errorHandler)
        await get().loadIndex()
    },
}))
