import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: [
    // 1) Listing MDX files in explicit order
    '../src/stories/getting-started/Welcome.mdx',
    '../src/stories/getting-started/FeatureFlags.mdx',

    // 2) Including components
    // Exported components don't need story files, that's why their stories are located inside the "stories" folder.
    '../src/stories/components/**/*.stories.@(js|jsx|ts|tsx|mdx)',
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
