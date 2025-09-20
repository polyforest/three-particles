export interface FileMetadata {
    readonly id: string
    readonly name: string
    readonly lastModified: number
    readonly deleted?: boolean
}
