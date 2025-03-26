import { build, BuildOptions, context } from 'esbuild'

const watch = process.argv.includes('-w')
const release = !watch

const buildOptions = {
    entryPoints: ['src/index.ts'],
    bundle: true,
    format: 'esm',
    outdir: 'dist',
    minify: release,
    sourcemap: true,
    external: ['three'],
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
