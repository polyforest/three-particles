import resolve from '@rollup/plugin-node-resolve';
import {terser} from 'rollup-plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
import pkg from './package.json';
import {eslint} from 'rollup-plugin-eslint';

const production = process.env.BUILD === 'production';

export default [
    {
        input: 'src/three-particles.js',
        external: ['three'],
        output: {
            name: 'three-particles',
            globals: {
                'three': 'THREE',
            },
            file: pkg.browser,
            format: 'umd',
            sourcemap: true,
        },
        plugins: [
            resolve(), // Resolve node_modules
            eslint({throwOnError: true}),
            commonjs(),
            production && terser(), // minify, but only in production
        ],
    },
    // CommonJS (for Node) and ES module (for bundlers) build.
    // (We could have three entries in the configuration array
    // instead of two, but it's quicker to generate multiple
    // builds from a single configuration where possible, using
    // an array for the `output` option, where we can specify
    // `file` and `format` for each target)
    {
        input: 'src/three-particles.js',
        external: ['three'],
        output: [
            {
                file: pkg.main,
                format: 'cjs',
            },
            {
                file: pkg.module,
                format: 'esm',
            },
        ],
        plugins: [
            resolve(), // Resolve node_modules
        ],
    },

];
