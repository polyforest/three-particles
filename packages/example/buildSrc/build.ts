import fs from 'fs-extra'
import { build, BuildOptions, context } from 'esbuild'

const watch = process.argv.includes('-w')
const release = !watch

const buildOptions = {
    entryPoints: ['src/index.ts'],
    bundle: true,
    format: 'iife',
    outdir: 'dist',
    minify: release,
    sourcemap: true,
} as const satisfies BuildOptions

async function runBuild() {
    if (watch) {
        await (await context(buildOptions)).watch()
    } else {
        await build(buildOptions)
        console.log('Build succeeded.')
    }
}

runBuild().catch((error) => {
    console.error('Build failed:', error)
    process.exit(1) // Ensure the script signals a failed build in CI
})

function copyResources() {
    ;(async () => {
        await fs.copy('resources', buildOptions.outdir, { overwrite: true })
        console.log('resources copied to dist')
    })().catch((_error) => {
        //console.warn('copy resources erred:', error)
    })
}

copyResources()
if (watch) {
    fs.watch('resources', { recursive: true }, copyResources)
}
