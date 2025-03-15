import { build, BuildOptions, context } from 'esbuild'

const watch = process.argv.includes('-w')
const release = !watch

async function runBuild() {
    const buildOptions: BuildOptions = {
        entryPoints: ['src/index.ts'],
        bundle: true,
        format: 'esm',
        outdir: 'dist',
        minify: release,
        sourcemap: true,
        external: ['three'],
    }
    if (watch) await (await context(buildOptions)).watch()
    else {
        await build(buildOptions)
        console.log('Build succeeded.')
    }
}

runBuild().catch((error) => {
    console.error('Build failed:', error)
    process.exit(1) // Ensure the script signals a failed build in CI
})
