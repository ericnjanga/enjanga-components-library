import type { StorybookConfig } from '@storybook/react-webpack5';
import path from 'path';

const config: StorybookConfig = {
  // Updated framework configuration
  framework: {
    name: '@storybook/react-webpack5',
    options: {
      builder: {
        useSWC: true // This replaces @storybook/addon-webpack5-compiler-swc
      }
    }
  },
  
  stories: ['../src/**/*.@(mdx|stories.@(js|jsx|ts|tsx))'],

  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    // Remove '@storybook/addon-webpack5-compiler-swc' as it's now integrated
    // '@chromatic-com/storybook'
  ],

  staticDirs: [
    { from: '../dist', to: '/dist' },
    { from: '../public', to: '/' },
  ],

  typescript: {
    check: true,
    reactDocgen: 'react-docgen-typescript'
  },

  // Webpack configuration
  webpackFinal: async (config) => {
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@': path.resolve(__dirname, '../src'),

      // Storybook build isn’t running in a Next.js, given that it doesn’t have 'next/link',
      // we need to alias/mock next/link and others
      'next/link': path.resolve(__dirname, './storybook-mocks/NextLink.tsx'),
      'next/router': path.resolve(__dirname, './storybook-mocks/NextRouter.ts'),
      'next/image': path.resolve(__dirname, './storybook-mocks/NextImage.tsx'),
      'next/navigation': path.resolve(__dirname, './storybook-mocks/NextNavigation.ts'),
    };

    // Add TS/TSX loader
    config.module?.rules?.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('babel-loader'),
          options: {
            presets: [
              require.resolve('@babel/preset-env'),
              require.resolve('@babel/preset-react'),
              require.resolve('@babel/preset-typescript'),
            ],
          },
        },
      ],
    });

    // ✅ Add SCSS/Sass loader
    config.module?.rules?.push({
      test: /\.s[ac]ss$/i,
      use: [
        require.resolve('style-loader'),
        require.resolve('css-loader'),
        {
          loader: require.resolve('sass-loader'),
          options: {
            // Prefer Dart Sass
            implementation: require('sass'),
          },
        },
      ],
    });

    config.resolve.extensions?.push('.ts', '.tsx');

    return config;
  },



  docs: {}
};

export default config;