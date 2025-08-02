import { copyFiles } from './util/copyFiles'

const watch = process.argv.includes('-w')

copyFiles({
    src: 'resources',
    dest: 'www',
    options: {
        watch,
        copyOptions: {
            overwrite: true,
        },
    },
})

copyFiles({
    src: 'packages/example/dist',
    dest: 'www/example',
    options: {
        watch,
        copyOptions: {
            overwrite: true,
        },
    },
})
