// .storybook/manager.ts
import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';
import appLogo from './logo.svg';

const theme = create({
  base: 'light', // or 'dark'
  brandTitle: 'ENjanga Design System',
  brandImage: appLogo,
  brandUrl: '/',
  // Optional additional theming
  colorPrimary: '#3A10E5',
  colorSecondary: '#585C6D',
  appBg: '#ffffff',
  appContentBg: '#ffffff',
  appBorderColor: '#e6e6e6',
});

addons.setConfig({
  sidebar: {
    renderLabel: ({ name }) => name === 'getting-started' ? 'Getting Started' : name,
  },
  theme
});