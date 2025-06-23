import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: [
    // 1) Listing MDX files in explicit order
    '../src/stories/getting-started/Welcome.mdx',
    '../src/stories/getting-started/FeatureFlags.mdx',

    // 2) External/public components
    // (Story files are not encapsulated with component to avoid polluting exported files)
    '../src/stories/_external/**/*.stories.@(js|jsx|ts|tsx|mdx)',

    // 3) Internal/private components (optional - you might exclude these)
    '../src/stories/_internal/**/*.stories.@(js|jsx|ts|tsx|mdx)',
  ],
  addons: [
    '@storybook/addon-docs', // ← required for MDX support
    '@storybook/addon-essentials', // Includes docs, controls, etc.
    '@storybook/addon-themes',
    '@storybook/addon-mdx-gfm',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  staticDirs: ['../public'],
};

export default config;
