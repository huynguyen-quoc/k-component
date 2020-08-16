module.exports = {
  stories: ['../src/**/*.stories.@(tsx|mdx)'],
  addons: [
    '@storybook/addon-actions',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
      },
    },
  ],
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => {
        const parentName = (prop.parent && prop.parent.name) || ''
        if (
          prop.name === 'key' ||
          parentName === 'RefAttributes' ||
          parentName.endsWith('HTMLAttributes') ||
          parentName === 'DOMAttributes' ||
          parentName === 'AriaAttributes'
        ) {
          return false
        }

        return true
      }
    },
  },
}
