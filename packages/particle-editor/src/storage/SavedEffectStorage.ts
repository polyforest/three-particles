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

    private async getMetadataIndex(): Promise<SavedEffectMetadata[]> {
        try {
            const metadata = await this.storage.get(METADATA_KEY)
            return metadata || []
        } catch (error) {
            logger.error('Failed to load metadata index', error)
            return []
        }
    }

    private async updateMetadataIndex(
        metadata: SavedEffectMetadata[],
    ): Promise<void> {
        await this.storage.save(METADATA_KEY, metadata)
        logger.debug('Updated metadata index')
    }

    async saveEffect(savedEffect: SavedEffect): Promise<void> {
        // Save the effect
        await this.storage.save(savedEffect.id, savedEffect)

        // Update metadata index
        const metadata = await this.getMetadataIndex()
        metadata.push({
            id: savedEffect.id,
            name: savedEffect.name,
            lastModified: savedEffect.lastModified,
        })
        await this.updateMetadataIndex(metadata)

        logger.info('Saved effect', {
            id: savedEffect.id,
            name: savedEffect.name,
        })
    }

    async getEffectById(id: string): Promise<SavedEffect | null> {
        return await this.storage.get(id)
    }

    async getAllEffectsMetadata(): Promise<SavedEffectMetadata[]> {
        return await this.getMetadataIndex()
    }

    async deleteEffect(id: string): Promise<void> {
        // Delete the effect
        await this.storage.delete(id)

        // Update metadata index
        const metadata = await this.getMetadataIndex()
        const filteredMetadata = metadata.filter((item) => item.id !== id)

        if (filteredMetadata.length !== metadata.length) {
            await this.updateMetadataIndex(filteredMetadata)
            logger.info('Deleted effect and updated metadata', { id })
        } else {
            logger.warn('Deleted effect not found in metadata index', { id })
        }
    }
}
