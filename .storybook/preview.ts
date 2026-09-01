import type { Preview } from '@storybook/react';
import 'enjanga-core-setup/typography.css';
import '../src/components/Navbar/_Navbar.scss';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
