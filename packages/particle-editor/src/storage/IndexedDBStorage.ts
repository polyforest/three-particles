import { PersistenceController } from './PersistenceController'
import { logger } from '../utils/logger'

export class IndexedDBStorage implements PersistenceController {
    private readonly dbName: string
    private readonly storeName: string
    private readonly version: number

    constructor(dbName: string, storeName: string, version: number = 1) {
        this.dbName = dbName
        this.storeName = storeName
        this.version = version
        logger.info('IndexedDBStorage initialized', {
            dbName: this.dbName,
            storeName: this.storeName,
            version: this.version,
        })
    }

    private openDatabase(): Promise<IDBDatabase> {
        logger.debug('Opening IndexedDB database', {
            dbName: this.dbName,
            version: this.version,
        })

        return new Promise((resolve, reject) => {
            const request = indexedDB.open(this.dbName, this.version)

            request.onerror = () => {
                const error = new Error('Failed to open database')
                logger.error('Failed to open IndexedDB database', error, {
                    dbName: this.dbName,
                    version: this.version,
                })
                reject(error)
            }

            request.onsuccess = () => {
                logger.debug('Successfully opened IndexedDB database', {
                    dbName: this.dbName,
                })
                resolve(request.result)
            }

            request.onupgradeneeded = (event) => {
                logger.info('IndexedDB database upgrade needed', {
                    dbName: this.dbName,
                    oldVersion: event.oldVersion,
                    newVersion: event.newVersion,
                })
                const db = (event.target as IDBOpenDBRequest).result
                if (!db.objectStoreNames.contains(this.storeName)) {
                    db.createObjectStore(this.storeName, { keyPath: 'id' })
                    logger.info('Created object store', {
                        storeName: this.storeName,
                    })
                }
            }
        })
    }

    async get(id: string): Promise<any> {
        logger.debug('Getting item from IndexedDB', {
            id,
            storeName: this.storeName,
        })
        const db = await this.openDatabase()

        return new Promise((resolve, reject) => {
            const transaction = db.transaction(this.storeName, 'readonly')
            const store = transaction.objectStore(this.storeName)
            const request = store.get(id)

            request.onsuccess = () => {
                const result = request.result || null
                logger.debug('Successfully retrieved item from IndexedDB', {
                    id,
                    found: !!result,
                })
                resolve(result)
            }

            request.onerror = () => {
                const error = new Error('Failed to get item')
                logger.error('Failed to get item from IndexedDB', error, {
                    id,
                    storeName: this.storeName,
                })
                reject(error)
            }
        })
    }

    async save(id: string, data: any): Promise<void> {
        logger.debug('Saving item to IndexedDB', {
            id,
            storeName: this.storeName,
        })
        const db = await this.openDatabase()
        const itemToSave = { ...data, id }

        return new Promise((resolve, reject) => {
            const transaction = db.transaction(this.storeName, 'readwrite')
            const store = transaction.objectStore(this.storeName)
            const request = store.add(itemToSave)

            request.onsuccess = () => {
                logger.info('Successfully saved item to IndexedDB', {
                    id,
                    storeName: this.storeName,
                })
                resolve()
            }

            request.onerror = () => {
                const error = new Error('Failed to save item')
                logger.error('Failed to save item to IndexedDB', error, {
                    id,
                    storeName: this.storeName,
                    errorCode: request.error?.name,
                })
                reject(error)
            }
        })
    }

    async update(id: string, data: any): Promise<void> {
        logger.debug('Updating item in IndexedDB', {
            id,
            storeName: this.storeName,
        })
        const db = await this.openDatabase()
        const itemToUpdate = { ...data, id }

        return new Promise((resolve, reject) => {
            const transaction = db.transaction(this.storeName, 'readwrite')
            const store = transaction.objectStore(this.storeName)
            const request = store.put(itemToUpdate)

            request.onsuccess = () => {
                logger.info('Successfully updated item in IndexedDB', {
                    id,
                    storeName: this.storeName,
                })
                resolve()
            }

            request.onerror = () => {
                const error = new Error('Failed to update item')
                logger.error('Failed to update item in IndexedDB', error, {
                    id,
                    storeName: this.storeName,
                    errorCode: request.error?.name,
                })
                reject(error)
            }
        })
    }

    async getAll(): Promise<any[]> {
        logger.debug('Getting all items from IndexedDB', {
            storeName: this.storeName,
        })
        const db = await this.openDatabase()

        return new Promise((resolve, reject) => {
            const transaction = db.transaction(this.storeName, 'readonly')
            const store = transaction.objectStore(this.storeName)
            const request = store.getAll()

            request.onsuccess = () => {
                const results = request.result
                logger.debug(
                    'Successfully retrieved all items from IndexedDB',
                    {
                        count: results.length,
                        storeName: this.storeName,
                    },
                )
                resolve(results)
            }

            request.onerror = () => {
                const error = new Error('Failed to get all items')
                logger.error('Failed to get all items from IndexedDB', error, {
                    storeName: this.storeName,
                })
                reject(error)
            }
        })
    }

    async delete(id: string): Promise<void> {
        logger.debug('Deleting item from IndexedDB', {
            id,
            storeName: this.storeName,
        })
        const db = await this.openDatabase()

        return new Promise((resolve, reject) => {
            const transaction = db.transaction(this.storeName, 'readwrite')
            const store = transaction.objectStore(this.storeName)
            const request = store.delete(id)

            request.onsuccess = () => {
                logger.info('Successfully deleted item from IndexedDB', {
                    id,
                    storeName: this.storeName,
                })
                resolve()
            }

            request.onerror = () => {
                const error = new Error('Failed to delete item')
                logger.error('Failed to delete item from IndexedDB', error, {
                    id,
                    storeName: this.storeName,
                })
                reject(error)
            }
        })
    }
}
