const path = require('path')
const SRC_PATH = path.join(__dirname, '../src')
const tsImportPluginFactory = require('ts-import-plugin')

const transformerPlugin = tsImportPluginFactory({
  libraryName: 'antd',
  libraryDirectory: 'lib',
  style: true
});

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
            javascriptEnabled: true
          }
        },
      }
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
            before: [ transformerPlugin ]
          }),
        },
      }
    ],
    exclude: /node_modules/
  })
  config.resolve.extensions.push('.ts', '.tsx')
  return config
}
