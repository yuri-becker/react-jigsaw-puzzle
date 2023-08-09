import { StorybookConfig } from '@storybook/react-webpack5'

const config: StorybookConfig = {
  stories: ['../src'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-essentials',
  ],
  framework: '@storybook/react-webpack5',
}

export default config
