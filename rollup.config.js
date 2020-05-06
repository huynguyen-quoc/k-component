import typescript from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import createTransformer from 'ts-import-plugin';
import postcss from 'rollup-plugin-postcss';

const transformer = createTransformer({
    libraryDirectory: 'es',
    libraryName: 'antd',
    style: true,
});

import pkg from './package.json';

export default {
    input: 'src/index.ts',
    output: [
        {
            file: pkg.main,
            format: 'cjs',
            exports: 'named',
            sourcemap: true,
        },
        {
            file: pkg.module,
            format: 'esm',
            exports: 'named',
            sourcemap: true,
        },
    ],
    external: ['react', 'lodash', 'antd'],
    plugins: [
        external(),
        resolve(),
        typescript({
            exclude: ['**/__tests__/**', '**/__stories__/**'],
            clean: true,
            transformers: [
                () => ({
                    before: transformer,
                }),
            ],
        }),
        babel({
            babelHelpers: 'bundled',
            exclude: 'node_modules/**',
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
        }),
        commonjs({
            include: ['node_modules/**'],
            namedExports: { react: ['createElement', 'Component', 'PropTypes', 'Children'], 'react-dom': ['render'] },
        }),
        postcss({
            extensions: ['.css', '.scss', '.less'],
            use: ['sass', ['less', { javascriptEnabled: true }]],
        }),
    ],
};
