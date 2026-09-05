import type { Preview } from '@storybook/react';
import { withThemeByDataAttribute } from '@storybook/addon-themes';
import 'enjanga-core-setup/typography.css';
import 'enjanga-core-setup/design-tokens.css';
import '../src/components/Navbar/_Navbar.scss';

const preview: Preview = {
  decorators: [
    withThemeByDataAttribute({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'light',
      attributeName: 'data-theme',
    }),
  ],
  parameters: {
    a11y: { test: 'error' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;

import '../src/components/Button/_Button.scss';

import '../src/components/CaseStudyCard/_CaseStudyCard.scss';
