import type { Preview } from '@storybook/react';
/**
 * Carbon styles load only in Storybook
 * They don’t pollute your final npm package
 */
import '@carbon/styles/css/styles.min.css'; // Carbon global styles
import '../src/styles/index.scss'; // Component library styles

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
