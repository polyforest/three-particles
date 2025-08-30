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

for (const pckg of ['example', 'particle-editor']) {
    copyFiles({
        src: `packages/${pckg}/dist`,
        dest: `www/${pckg}`,
        options: {
            watch,
            copyOptions: {
                overwrite: true,
            },
        },
    })
}
