import { ParticleEffectModelJson } from 'three-particles'
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
        try {
            await this.storage.update(METADATA_KEY, metadata)
        } catch (error) {
            // If update fails, try save (metadata index might not exist yet)
            try {
                await this.storage.save(METADATA_KEY, metadata)
                logger.debug('Updated metadata index')
            } catch (saveError) {
                logger.error('Failed to save metadata index', saveError)
                throw new Error('Failed to update metadata index')
            }
        }
    }

    async saveEffect(
        name: string,
        effect: ParticleEffectModelJson,
    ): Promise<string> {
        const id = crypto.randomUUID()
        const timestamp = Date.now()

        const savedEffect: SavedEffect = {
            id,
            name,
            effect,
            lastModified: timestamp,
        }

        // Save the effect
        await this.storage.save(id, savedEffect)

        // Update metadata index
        const metadata = await this.getMetadataIndex()
        metadata.push({
            id,
            name,
            lastModified: timestamp,
        })
        await this.updateMetadataIndex(metadata)

        logger.info('Saved effect with metadata', { id, name })
        return id
    }

    async updateEffect(
        id: string,
        name: string,
        effect: ParticleEffectModelJson,
    ): Promise<void> {
        const timestamp = Date.now()

        const savedEffect: SavedEffect = {
            id,
            name,
            effect,
            lastModified: timestamp,
        }

        // Update the effect
        await this.storage.update(id, savedEffect)

        // Update metadata index
        const metadata = await this.getMetadataIndex()
        const index = metadata.findIndex((item) => item.id === id)

        if (index !== -1) {
            metadata[index] = {
                id,
                name,
                lastModified: timestamp,
            }
            await this.updateMetadataIndex(metadata)
        } else {
            logger.warn('Updated effect not found in metadata index', { id })
        }

        logger.info('Updated effect with metadata', { id, name })
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
