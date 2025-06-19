import type { Preview } from '@storybook/react';
import '../src/app/globals.scss';
import { CustomDocsPage } from './CustomDocsPage';

const preview: Preview = {
  parameters: {
    // docs: {
    //   page: CustomDocsPage,
    //   toc: {
    //     headingSelector: 'h2, h3',
    //     title: 'On this page',
    //   },
    // },
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