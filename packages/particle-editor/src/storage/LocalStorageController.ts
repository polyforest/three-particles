import { PersistenceController } from './PersistenceController'
import { logger } from '../utils/logger'

export class LocalStorageController implements PersistenceController {
    private readonly keyPrefix: string

    constructor(keyPrefix: string = 'particleEditor') {
        this.keyPrefix = keyPrefix
        logger.info('LocalStorageController initialized', {
            keyPrefix: this.keyPrefix,
        })

        // Check if localStorage is available
        if (!this.isLocalStorageAvailable()) {
            throw new Error('localStorage is not available in this environment')
        }
    }

    private isLocalStorageAvailable(): boolean {
        try {
            const test = '__localStorage_test__'
            localStorage.setItem(test, 'test')
            localStorage.removeItem(test)
            return true
        } catch {
            return false
        }
    }

    private getStorageKey(id: string): string {
        return `${this.keyPrefix}_${id}`
    }

    async get(id: string): Promise<any> {
        logger.debug('Getting item from localStorage', { id })

        try {
            const key = this.getStorageKey(id)
            const data = localStorage.getItem(key)

            if (data === null) {
                logger.debug('Item not found in localStorage', { id })
                return null
            }

            const parsedData = JSON.parse(data)
            logger.debug('Successfully retrieved item from localStorage', {
                id,
            })
            return parsedData
        } catch (error) {
            logger.error('Failed to get item from localStorage', error, { id })
            throw new Error(`Failed to get item: ${id}`)
        }
    }

    async save(id: string, data: any): Promise<void> {
        logger.debug('Saving item to localStorage', { id })

        try {
            const key = this.getStorageKey(id)
            const serializedData = JSON.stringify(data)

            // Check if we're approaching localStorage size limits
            const estimatedSize = serializedData.length
            logger.debug('Saving item size', { id, sizeBytes: estimatedSize })

            localStorage.setItem(key, serializedData)

            logger.info('Successfully saved item to localStorage', {
                id,
                sizeBytes: estimatedSize,
            })
        } catch (error) {
            if (error instanceof Error && error.name === 'QuotaExceededError') {
                logger.error('localStorage quota exceeded', error, { id })
                throw new Error(
                    'Storage quota exceeded. Please free up space by deleting some effects.',
                )
            }

            logger.error('Failed to save item to localStorage', error, { id })
            throw new Error(`Failed to save item: ${id}`)
        }
    }

    async update(id: string, data: any): Promise<void> {
        logger.debug('Updating item in localStorage', { id })

        try {
            const key = this.getStorageKey(id)

            // Check if item exists
            if (localStorage.getItem(key) === null) {
                logger.warn('Attempted to update non-existent item', { id })
                throw new Error(`Item does not exist: ${id}`)
            }

            const serializedData = JSON.stringify(data)
            const estimatedSize = serializedData.length
            logger.debug('Updating item size', { id, sizeBytes: estimatedSize })

            localStorage.setItem(key, serializedData)

            logger.info('Successfully updated item in localStorage', {
                id,
                sizeBytes: estimatedSize,
            })
        } catch (error) {
            if (error instanceof Error && error.name === 'QuotaExceededError') {
                logger.error(
                    'localStorage quota exceeded during update',
                    error,
                    { id },
                )
                throw new Error(
                    'Storage quota exceeded. Please free up space by deleting some effects.',
                )
            }

            logger.error('Failed to update item in localStorage', error, { id })
            throw new Error(`Failed to update item: ${id}`)
        }
    }

    async delete(id: string): Promise<void> {
        logger.debug('Deleting item from localStorage', { id })

        try {
            const key = this.getStorageKey(id)

            // Check if item exists
            if (localStorage.getItem(key) === null) {
                logger.warn('Attempted to delete non-existent item', { id })
                return // Silently succeed for non-existent items
            }

            localStorage.removeItem(key)

            logger.info('Successfully deleted item from localStorage', { id })
        } catch (error) {
            logger.error('Failed to delete item from localStorage', error, {
                id,
            })
            throw new Error(`Failed to delete item: ${id}`)
        }
    }

    /**
     * Get storage usage information
     */
    getStorageInfo(): {
        usedBytes: number
        availableBytes: number
        itemCount: number
    } {
        try {
            let usedBytes = 0
            let itemCount = 0

            // Calculate used space for our items
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i)
                if (key && key.startsWith(this.keyPrefix)) {
                    const value = localStorage.getItem(key)
                    if (value) {
                        usedBytes += key.length + value.length
                        itemCount++
                    }
                }
            }

            // Estimate available space (localStorage typically has 5-10MB limit)
            const estimatedTotalSpace = 5 * 1024 * 1024 // 5MB
            const availableBytes = Math.max(0, estimatedTotalSpace - usedBytes)

            return { usedBytes, availableBytes, itemCount }
        } catch (error) {
            logger.error('Failed to get storage info', error)
            return { usedBytes: 0, availableBytes: 0, itemCount: 0 }
        }
    }

    /**
     * Clear all data managed by this controller
     */
    async clear(): Promise<void> {
        logger.info('Clearing all localStorage data', {
            keyPrefix: this.keyPrefix,
        })

        try {
            const keysToRemove: string[] = []

            // Find all keys that belong to this controller
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i)
                if (key && key.startsWith(this.keyPrefix)) {
                    keysToRemove.push(key)
                }
            }

            // Remove all found keys
            keysToRemove.forEach((key) => localStorage.removeItem(key))

            logger.info('Successfully cleared all localStorage data', {
                removedCount: keysToRemove.length,
            })
        } catch (error) {
            logger.error('Failed to clear localStorage data', error)
            throw new Error('Failed to clear storage')
        }
    }
}
