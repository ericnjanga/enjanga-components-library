import type { Preview } from '@storybook/react';
import { fn } from '@storybook/test';

/**
 * Carbon styles load only in Storybook
 * They don’t pollute your final npm package
 */
import 'enjanga-core-setup/carbon.css'; // Carbon global styles
import '../src/styles/index.scss'; // Component library styles

const preview: Preview = {
  parameters: {
    actions: {
      handles: ['click', 'change', 'submit'], // explicitly list events
      map: { onClick: fn, onChange: fn },    // map props to mock functions
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  // 👇 Provide fn() mocks globally
  args: {
    onClick: fn(),
    onChange: fn(),
    onSubmit: fn(),
  },

  tags: ['autodocs']
};

export default preview;
