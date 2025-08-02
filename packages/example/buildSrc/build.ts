import { build, BuildOptions, context } from 'esbuild'
import { copyFiles } from '../../../buildSrc/util/copyFiles'

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

copyFiles({
    src: 'resources',
    dest: buildOptions.outdir,
    options: {
        watch,
        copyOptions: {
            overwrite: true,
        },
    },
})
