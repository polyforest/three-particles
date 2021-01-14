import resolve from '@rollup/plugin-node-resolve';
import {terser} from 'rollup-plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
import pkg from './package.json';
import multi from '@rollup/plugin-multi-entry';

const production = process.env.BUILD === 'production';

export default [
    {
        input: 'src/**/*.js',
        external: ['three'],
        output: {
            name: 'three-particles',
            globals: {
                'three': 'THREE',
            },
            file: pkg.browser,
            format: 'umd',
            sourcemap: true
        },
        plugins: [
            resolve(), // Resolve node_modules
            multi(),
            commonjs(),
            production && terser() // minify, but only in production
        ]
    },
    // CommonJS (for Node) and ES module (for bundlers) build.
    // (We could have three entries in the configuration array
    // instead of two, but it's quicker to generate multiple
    // builds from a single configuration where possible, using
    // an array for the `output` option, where we can specify
    // `file` and `format` for each target)
    {
        input: 'src/**/*.js',
        external: ['three'],
        output: [
            { file: pkg.main, format: 'cjs' },
            { file: pkg.module, format: 'es' }
        ],
        plugins: [
            resolve(), // Resolve node_modules
            multi(),
            production && terser() // minify, but only in production
        ]
    }
];