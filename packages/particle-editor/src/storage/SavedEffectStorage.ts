import { SavedEffect } from './SavedEffect'
import { SavedEffectMetadata } from './SavedEffectMetadata'
import { PersistenceController } from './PersistenceController'
import { logger } from '../utils/logger'

const METADATA_KEY = 'effects_metadata'

export class SavedEffectStorage {
    private storage: PersistenceController

    constructor({ storage }: { storage: PersistenceController }) {
        this.storage = storage
    }

    public async getMetadataIndex(): Promise<SavedEffectMetadata[]> {
        try {
            const metadata = await this.storage.get(METADATA_KEY)
            return metadata || []
        } catch (error) {
            logger.error('Failed to load metadata index', error)
            return []
        }
    }

    async updateMetadataIndex(metadata: SavedEffectMetadata[]): Promise<void> {
        await this.storage.save(METADATA_KEY, metadata)
        logger.debug('Updated metadata index')
    }

    async saveEffect(savedEffect: SavedEffect): Promise<void> {
        // Save the effect
        await this.storage.save(savedEffect.id, savedEffect)

        // Update metadata index
        const metadata = await this.getMetadataIndex()

        // Find existing metadata entry by ID
        const existingIndex = metadata.findIndex(
            (item) => item.id === savedEffect.id,
        )

        const newMetadata: SavedEffectMetadata = {
            id: savedEffect.id,
            name: savedEffect.name,
            lastModified: savedEffect.lastModified,
        }

        if (existingIndex >= 0) {
            // Update existing entry
            metadata[existingIndex] = newMetadata
        } else {
            // Add new entry
            metadata.push(newMetadata)
        }

        await this.updateMetadataIndex(metadata)

        logger.info('Saved effect', {
            id: savedEffect.id,
            name: savedEffect.name,
        })
    }

    async getEffectById(id: string): Promise<SavedEffect | null> {
        return await this.storage.get(id)
    }

    async deleteEffect(id: string): Promise<void> {
        // Mark effect as deleted instead of actually deleting
        const metadata = await this.getMetadataIndex()
        const existingIndex = metadata.findIndex((item) => item.id === id)

        if (existingIndex >= 0) {
            metadata[existingIndex].deleted = true
            metadata[existingIndex].lastModified = Date.now()
            await this.updateMetadataIndex(metadata)
            logger.info('Marked effect as deleted', { id })
        } else {
            logger.warn('Effect not found in metadata index', { id })
        }
    }

    async restoreEffect(id: string): Promise<void> {
        // Restore deleted effect
        const metadata = await this.getMetadataIndex()
        const existingIndex = metadata.findIndex((item) => item.id === id)

        if (existingIndex >= 0 && metadata[existingIndex].deleted) {
            delete metadata[existingIndex].deleted
            metadata[existingIndex].lastModified = Date.now()
            await this.updateMetadataIndex(metadata)
            logger.info('Restored effect from trash', { id })
        } else {
            logger.warn('Effect not found or not deleted', { id })
        }
    }

    async cleanOldTrashItems(): Promise<void> {
        const oneMonthAgo = Date.now() - 30 * 24 * 60 * 60 * 1000 // 30 days in milliseconds
        const metadata = await this.getMetadataIndex()
        const itemsToDelete: string[] = []

        // Find deleted items older than a month
        const updatedMetadata = metadata.filter((item) => {
            console.log(
                'item:',
                item.deleted,
                item.lastModified < oneMonthAgo,
                new Date(item.lastModified),
                new Date(oneMonthAgo),
            )
            if (item.deleted && item.lastModified < oneMonthAgo) {
                console.log('to delete: ', itemsToDelete)
                itemsToDelete.push(item.id)
                return false // Remove from metadata
            }
            return true // Keep in metadata
        })

        // Actually delete the old items from storage
        for (const id of itemsToDelete) {
            try {
                await this.storage.delete(id)
                logger.info('Permanently deleted old trash item', { id })
            } catch (error) {
                logger.error(
                    'Failed to permanently delete old trash item',
                    error,
                    { id },
                )
            }
        }

        // Update metadata index if items were removed
        if (itemsToDelete.length > 0) {
            await this.updateMetadataIndex(updatedMetadata)
            logger.info('Cleaned old trash items', {
                count: itemsToDelete.length,
            })
        }
    }
}
