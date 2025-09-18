// .storybook/main.ts
import type { StorybookConfig } from '@storybook/types';
import path from 'path';

const config: StorybookConfig = {
  framework: '@storybook/react',
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
  ],
  staticDirs: [
    { from: '../dist', to: '/dist' },
    { from: '../public', to: '/' },
  ],
  typescript: {
    check: true,
  },
  // webpack overrides go here, **but TS will not allow it directly on StorybookConfig**
  core: {
    builder: {
      name: 'webpack5',
      options: {
        // TS-safe place to inject webpack config
        webpackFinal: async (config: any) => {
          config.resolve = config.resolve || {};
          config.resolve.alias = {
            ...config.resolve.alias,
            '@': path.resolve(__dirname, '../src'),
          };
          return config;
        },
      },
    },
  },
};

export default config;
