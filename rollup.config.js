import typescript from 'rollup-plugin-typescript2'
import commonjs from '@rollup/plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import createTransformer from 'ts-import-plugin'
import postcss from 'rollup-plugin-postcss'

const transformer = createTransformer({
  libraryDirectory: 'es',
  libraryName: 'antd',
  style: true,
})

import pkg from './package.json'

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        axios: 'axios',
        antd: 'antd',
      },
    },
    {
      file: pkg.module,
      format: 'esm',
      exports: 'named',
      sourcemap: true,
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        axios: 'axios',
        antd: 'antd',
        'antd/es/button': 'Button',
        'antd/es/input': 'Button',
        'antd/es/checkbox': 'Button',
        'antd/es/date-picker': 'DatePicker',
        'antd/es/row': 'Row',
        'antd/es/col': 'Col',
        'antd/es/select': 'Select',
        'antd/es/radio': 'Radio',
        'antd/es/form': 'Form',
        'antd/es/modal': 'Modal',
        'antd/es/table': 'Table',
        'antd/es/divider': 'Divider',
        'antd/es/space': 'Space',
      },
    },
    {
      file: pkg.umd,
      name: pkg.name,
      format: 'umd',
      sourcemap: true,
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        axios: 'axios',
        antd: 'antd',
        'antd/es/button': 'Button',
        'antd/es/input': 'Button',
        'antd/es/checkbox': 'Button',
        'antd/es/date-picker': 'DatePicker',
        'antd/es/row': 'Row',
        'antd/es/col': 'Col',
        'antd/es/select': 'Select',
        'antd/es/radio': 'Radio',
        'antd/es/form': 'Form',
        'antd/es/modal': 'Modal',
        'antd/es/table': 'Table',
        'antd/es/divider': 'Divider',
        'antd/es/space': 'Space',
      },
    },
  ],

  external: ['react', 'lodash', 'antd'],
  plugins: [
    external(),
    resolve(),
    typescript({
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
    commonjs({}),
    postcss({
      extensions: ['.css', '.scss', '.less'],
      use: ['sass', ['less', { javascriptEnabled: true }]],
    }),
  ],
}
