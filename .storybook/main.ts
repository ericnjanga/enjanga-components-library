import type { StorybookConfig } from '@storybook/react-webpack5';
import path from 'path';

const config: StorybookConfig = {
  framework: {
    name: '@storybook/react-webpack5',
    options: {
      builder: {
        useSWC: true
      }
    }
  },
  
  stories: ['../src/**/*.@(mdx|stories.@(js|jsx|ts|tsx))'],

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
    check: false, // Temporarily disable to avoid build issues
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    }
  },

  webpackFinal: async (config) => {
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@': path.resolve(__dirname, '../src'),
      'next/link': path.resolve(__dirname, './storybook-mocks/NextLink.tsx'),
      'next/router': path.resolve(__dirname, './storybook-mocks/NextRouter.ts'),
      'next/image': path.resolve(__dirname, './storybook-mocks/NextImage.tsx'),
      'next/navigation': path.resolve(__dirname, './storybook-mocks/NextNavigation.ts'),
    };

    // Add TS/TSX loader
    config.module = config.module || { rules: [] };
    config.module?.rules?.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('babel-loader'),
          options: {
            presets: [
              require.resolve('@babel/preset-env'),
              [
                require.resolve('@babel/preset-react'),
                {
                  runtime: 'automatic', // 👈 this makes it align with jsx=react-jsx
                  importSource: 'react',
                },
              ],
              require.resolve('@babel/preset-typescript'),
            ],
          },
        },
      ],
    });

    // Add SCSS/Sass loader
    config.module?.rules?.push({
      test: /\.s[ac]ss$/i,
      use: [
        require.resolve('style-loader'),
        require.resolve('css-loader'),
        {
          loader: require.resolve('sass-loader'),
          options: {
            implementation: require('sass'),
          },
        },
      ],
    });

    config.resolve.extensions = config.resolve.extensions || [];
    config.resolve.extensions.push('.ts', '.tsx');

    return config;
  },

  docs: {
    autodocs: true
  }
};

export default config;