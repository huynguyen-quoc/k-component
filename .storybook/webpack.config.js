const path = require('path')
const SRC_PATH = path.join(__dirname, '../src')
const tsImportPluginFactory = require('ts-import-plugin')

const transformerPlugin = tsImportPluginFactory({
  libraryName: 'antd',
  libraryDirectory: 'lib',
  style: true,
})

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.less$/,
    use: [
      'style-loader',
      'css-loader',
      {
        loader: require.resolve('less-loader'),
        options: {
          lessOptions: {
            javascriptEnabled: true,
          },
        },
      },
    ],
  })
  config.module.rules.push({
    test: /\.scss$/,
    use: [
      'style-loader',
      'css-loader',
      {
        loader: require.resolve('sass-loader'),
        options: {
          sassOptions: {
            javascriptEnabled: true,
          },
        },
      },
    ],
  })
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    include: [SRC_PATH],
    use: [
      'babel-loader',
      {
        loader: require.resolve('awesome-typescript-loader'),
        options: {
          configFileName: './tsconfig.json',
          getCustomTransformers: () => ({
            before: [transformerPlugin],
          }),
        },
      },
      {
        loader: require.resolve('react-docgen-typescript-loader'),
        options: {
          tsconfigPath: path.resolve(__dirname, '../tsconfig.json'),
          propFilter: (prop) => {
            const parentName = (prop.parent && prop.parent.name) || ''
            if (
              (prop.name === 'key' && parentName === 'RefAttributes') ||
              parentName.endsWith('HTMLAttributes') ||
              parentName === 'DOMAttributes' ||
              parentName === 'AriaAttributes'
            ) {
              return false
            }

            return true
          },
        },
      },
    ],
    exclude: /node_modules/,
  })
  config.resolve.extensions.push('.ts', '.tsx')
  return config
}
