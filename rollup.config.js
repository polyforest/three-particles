import * as babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import {eslint} from 'rollup-plugin-eslint';
import {terser} from 'rollup-plugin-terser';
import multi from '@rollup/plugin-multi-entry';
import pkg from './package.json';

const production = process.env.BUILD === 'production';
const replacements = {
    '__buildVersion__': process.env.npm_package_version,
};

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
            sourcemap: true,
        },
        plugins: [
            eslint({throwOnError: production}),
            replace(replacements),
            babel.babel({
                babelHelpers: 'bundled',
                babelrc: true,
            }),
            resolve(),
            multi(),
            commonjs(),
            production && terser(), // minify, but only in production
        ],
    },
    {
        input: 'src/**/*.js',
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
            multi(),
            resolve(),
        ],
    },

];
