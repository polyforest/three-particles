import { PersistenceController } from './PersistenceController'

export class IndexedDBStorage implements PersistenceController {
    private readonly dbName: string
    private readonly storeName: string
    private readonly version: number

    constructor(dbName: string, storeName: string, version: number = 1) {
        this.dbName = dbName
        this.storeName = storeName
        this.version = version
    }

    private openDatabase(): Promise<IDBDatabase> {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open(this.dbName, this.version)

            request.onerror = () => {
                reject(new Error('Failed to open database'))
            }

            request.onsuccess = () => {
                resolve(request.result)
            }

            request.onupgradeneeded = (event) => {
                const db = (event.target as IDBOpenDBRequest).result
                if (!db.objectStoreNames.contains(this.storeName)) {
                    db.createObjectStore(this.storeName, { keyPath: 'id' })
                }
            }
        })
    }

    async get(id: string): Promise<any | null> {
        const db = await this.openDatabase()

        return new Promise((resolve, reject) => {
            const transaction = db.transaction(this.storeName, 'readonly')
            const store = transaction.objectStore(this.storeName)
            const request = store.get(id)

            request.onsuccess = () => {
                resolve(request.result || null)
            }

            request.onerror = () => {
                reject(new Error('Failed to get item'))
            }
        })
    }

    async save(id: string, data: any): Promise<void> {
        const db = await this.openDatabase()
        const itemToSave = { ...data, id }

        return new Promise((resolve, reject) => {
            const transaction = db.transaction(this.storeName, 'readwrite')
            const store = transaction.objectStore(this.storeName)
            const request = store.add(itemToSave)

            request.onsuccess = () => {
                resolve()
            }

            request.onerror = () => {
                reject(new Error('Failed to save item'))
            }
        })
    }

    async update(id: string, data: any): Promise<void> {
        const db = await this.openDatabase()
        const itemToUpdate = { ...data, id }

        return new Promise((resolve, reject) => {
            const transaction = db.transaction(this.storeName, 'readwrite')
            const store = transaction.objectStore(this.storeName)
            const request = store.put(itemToUpdate)

            request.onsuccess = () => {
                resolve()
            }

            request.onerror = () => {
                reject(new Error('Failed to update item'))
            }
        })
    }

    async getAll(): Promise<any[]> {
        const db = await this.openDatabase()

        return new Promise((resolve, reject) => {
            const transaction = db.transaction(this.storeName, 'readonly')
            const store = transaction.objectStore(this.storeName)
            const request = store.getAll()

            request.onsuccess = () => {
                resolve(request.result)
            }

            request.onerror = () => {
                reject(new Error('Failed to get all items'))
            }
        })
    }

    async delete(id: string): Promise<void> {
        const db = await this.openDatabase()

        return new Promise((resolve, reject) => {
            const transaction = db.transaction(this.storeName, 'readwrite')
            const store = transaction.objectStore(this.storeName)
            const request = store.delete(id)

            request.onsuccess = () => {
                resolve()
            }

            request.onerror = () => {
                reject(new Error('Failed to delete item'))
            }
        })
    }
}
