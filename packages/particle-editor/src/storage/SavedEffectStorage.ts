import { EffectFile } from './EffectFile'
import { FileMetadata } from './FileMetadata'
import { PersistenceController } from './PersistenceController'
import { logger } from '../utils/logger'

const METADATA_KEY = 'metadata_index'

export class SavedEffectStorage {
    private storage: PersistenceController

    constructor({ storage }: { storage: PersistenceController }) {
        this.storage = storage
    }

    async getMetadataIndex(): Promise<readonly FileMetadata[]> {
        try {
            return (await this.storage.get(METADATA_KEY)) ?? []
        } catch (error) {
            logger.error('Failed to load metadata index', error)
            return []
        }
    }

    async updateMetadataIndex(
        metadata: readonly FileMetadata[],
    ): Promise<void> {
        await this.storage.save(METADATA_KEY, metadata)
        logger.debug('Updated metadata index')
    }

    async updateMetadataForEffect(
        effectId: string,
        newMetadata: Partial<FileMetadata>,
    ) {
        // Mark effect as deleted instead of actually deleting
        const metadata = [...(await this.getMetadataIndex())]
        const existingIndex = metadata.findIndex((item) => item.id === effectId)

        if (existingIndex >= 0) {
            const merged: FileMetadata = {
                ...metadata[existingIndex],
                ...newMetadata,
            }
            metadata[existingIndex] = merged
            await this.updateMetadataIndex(metadata)
            logger.info('Updated effect', merged)
        } else {
            logger.warn('Effect not found in metadata index', { effectId })
        }
    }

    async saveEffect(savedEffect: EffectFile): Promise<void> {
        // Save the effect
        const id = savedEffect.metadata.id
        await this.storage.save(id, savedEffect.effect)

        // Update metadata index
        const metadata = [...(await this.getMetadataIndex())]

        // Find existing metadata entry by ID
        const existingIndex = metadata.findIndex((item) => item.id === id)

        if (existingIndex >= 0) {
            // Update existing entry
            metadata[existingIndex] = savedEffect.metadata
        } else {
            // Add new entry
            metadata.push(savedEffect.metadata)
        }

        await this.updateMetadataIndex(metadata)

        logger.info('Saved effect', savedEffect.metadata)
    }

    async getEffectById(id: string): Promise<EffectFile | null> {
        const effectJson = await this.storage.get(id)
        if (effectJson === null) return null
        const metadata = await this.getMetadataIndex()
        let m = metadata.find((item) => item.id === id)
        if (!m) {
            logger.error('Metadata not found for effect, creating', { id })
            m = {
                id,
                lastModified: Date.now(),
                name: 'Untitled Effect',
            }
            await this.updateMetadataIndex([...metadata, m])
        }
        return {
            effect: effectJson,
            metadata: m,
        }
    }

    deleteEffect(id: string): Promise<void> {
        return this.updateMetadataForEffect(id, { deleted: true })
    }

    undeleteEffect(id: string): Promise<void> {
        return this.updateMetadataForEffect(id, { deleted: false })
    }

    async cleanOldTrashItems(): Promise<void> {
        const oneMonthAgo = Date.now() - 30 * 24 * 60 * 60 * 1000 // 30 days in milliseconds
        const metadata = await this.getMetadataIndex()
        const itemsToDelete: string[] = []

        // Find deleted items older than a month
        const updatedMetadata = metadata.filter((item) => {
            if (item.deleted && item.lastModified < oneMonthAgo) {
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
