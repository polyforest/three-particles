import { copyFiles } from './util/copyFiles'

const watch = process.argv.includes('-w')

copyFiles('resources', 'www', {
    watch,
    copyOptions: {
        overwrite: true,
    },
})

copyFiles('packages/example/dist', 'www/example', {
    watch,
    copyOptions: {
        overwrite: true,
    },
})
