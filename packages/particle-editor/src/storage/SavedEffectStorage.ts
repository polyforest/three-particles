import { ParticleEffectModelJson } from 'three-particles'
import { SavedEffect } from './SavedEffect'
import { PersistenceController } from './PersistenceController'

export class SavedEffectStorage {
    private storage: PersistenceController

    constructor({ storage }: { storage: PersistenceController }) {
        this.storage = storage
    }

    async saveEffect(
        name: string,
        effect: ParticleEffectModelJson,
    ): Promise<string> {
        const id = crypto.randomUUID()
        const savedEffect: SavedEffect = {
            id,
            name,
            effect,
            lastModified: Date.now(),
        }
        await this.storage.save(id, savedEffect)
        return id
    }

    async updateEffect(
        id: string,
        name: string,
        effect: ParticleEffectModelJson,
    ): Promise<void> {
        const savedEffect: SavedEffect = {
            id,
            name,
            effect,
            lastModified: Date.now(),
        }
        return await this.storage.update(id, savedEffect)
    }

    async getEffectById(id: string): Promise<SavedEffect | null> {
        return await this.storage.get(id)
    }

    async getAllEffects(): Promise<SavedEffect[]> {
        return await this.storage.getAll()
    }

    async deleteEffect(id: string): Promise<void> {
        return await this.storage.delete(id)
    }
}
