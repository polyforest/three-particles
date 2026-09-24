import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    root: './resources',
    publicDir: '.',
    base: './',
    build: {
        outDir: '../dist',
        sourcemap: true,
        minify: true,
    },
    resolve: {
        alias: {
            'three-particles': resolve(
                import.meta.dirname,
                '../three-particles/dist',
            ),
            '/src': resolve(import.meta.dirname, 'src'),
        },
    },
    server: {
        open: true,
    },
})
