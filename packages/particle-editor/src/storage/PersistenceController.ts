export interface PersistenceController {
    get(id: string): Promise<any>
    save(id: string, data: any): Promise<void>
    update(id: string, data: any): Promise<void>
    delete(id: string): Promise<void>
}
