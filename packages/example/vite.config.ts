import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    root: './resources',
    publicDir: '.',
    build: {
        outDir: '../dist',
        sourcemap: true,
        minify: true,
    },
    resolve: {
        alias: {
            'three-particles': resolve(__dirname, '../three-particles/dist'),
            '/src': resolve(__dirname, 'src'),
        },
    },
    server: {
        open: true,
    },
})
