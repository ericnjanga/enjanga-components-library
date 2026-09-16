import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from '../../../components/Footer';
import '../../../components/Footer/_Footer.scss';

const meta = {
  title: 'External Components/Footer',
  component: Footer,
  parameters: { layout: 'fullscreen' },
  args: {
    siteName: 'Eric Njanga',
    copyright: 'Copyright @ Toronto, Canada.',
    links: [
      {
        label: 'LinkedIn Profile',
        href: 'https://www.linkedin.com/in/ericnjanga/',
        openInNewTab: true,
        accessibleLabel:
          'Visit Eric Njanga’s LinkedIn profile (opens in a new tab)',
      },
      {
        label: 'GitHub Profile',
        href: 'https://github.com/ericnjanga',
        openInNewTab: true,
      },
      {
        label: 'Publications',
        href: 'https://www.linkedin.com/newsletters/modern-ui-architecture-7498340545321123840/',
      },
    ],
  },
} satisfies Meta<typeof Footer>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Mobile: Story = {
  parameters: { viewport: { defaultViewport: 'mobile1' } },
};
export const Dark: Story = { globals: { theme: 'dark' } };
export const BrandOnly: Story = { args: { links: [], copyright: undefined } };
