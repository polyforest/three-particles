import fs, { CopyOptions } from 'fs-extra'

export function copyFiles({
    src,
    dest,
    options,
}: {
    src: string
    dest: string
    options: { readonly watch: boolean; readonly copyOptions?: CopyOptions }
}): void {
    const copy = async () => {
        await fs.copy(src, dest, options.copyOptions).catch((error) => {
            console.error(`copy ${src} failed:`, error)
            throw error
        })
        console.log(`${src} copied to: ${dest}`)
    }
    copy().catch(() => {
        if (!options.watch) {
            process.exit(-1)
        }
    })
    if (options.watch) {
        fs.watch(src, { recursive: true }, () => copy().catch(() => {}))
    }
}
