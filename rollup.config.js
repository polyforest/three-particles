import * as babel from '@rollup/plugin-babel';
import multi from '@rollup/plugin-multi-entry';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import {eslint} from 'rollup-plugin-eslint';
import {terser} from 'rollup-plugin-terser';
import pkg from './package.json';

const jsName = 'threeParticles';

const production = process.env.BUILD === 'production';
const replacements = {
    '__buildVersion__': process.env.npm_package_version,
};

console.log('production build:', production);

export default [
    {
        input: 'src/**/*.js',
        external: ['three'],
        output: {
            name: jsName,
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
            production && terser(), // minify, but only in production
        ],
    },
    {
        input: 'src/**/*.js',
        external: ['three'],
        output: [
            {
                name: jsName,
                file: pkg.module,
                format: 'esm',
            },
            {
                name: jsName,
                file: pkg.main,
                format: 'cjs',
            },
        ],
        plugins: [
            replace(replacements),
            multi(),
            resolve(),
        ],
    },

];
