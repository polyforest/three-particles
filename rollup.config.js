import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import {eslint} from 'rollup-plugin-eslint';
import {terser} from 'rollup-plugin-terser';
import pkg from './package.json';

const production = process.env.BUILD === 'production';
const replacements = {
    '__buildVersion__': process.env.npm_package_version,
};

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
            replace(replacements),
            resolve(), // Resolve node_modules
            eslint({throwOnError: production}),
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
            replace(replacements),
            resolve(), // Resolve node_modules
        ],
    },

];
