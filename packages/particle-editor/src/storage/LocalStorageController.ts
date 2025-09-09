import { PersistenceController } from './PersistenceController'
import { logger } from '../utils/logger'

export class LocalStorageController implements PersistenceController {
    constructor() {
        logger.info('LocalStorageController initialized')
    }

    async get(key: string): Promise<any> {
        logger.debug('Getting item from localStorage', { key })

        const data = localStorage.getItem(key)

        if (data === null) {
            logger.debug('Item not found in localStorage', { key })
            return null
        }

        const parsedData = JSON.parse(data)
        logger.debug('Successfully retrieved item from localStorage', {
            key,
        })
        return parsedData
    }

    async save(key: string, data: any): Promise<void> {
        logger.debug('Saving item to localStorage', { key })
        const serializedData = JSON.stringify(data)
        localStorage.setItem(key, serializedData)
    }

    async delete(key: string): Promise<void> {
        logger.debug('Deleting item from localStorage', { key })
        localStorage.removeItem(key)
    }
}
