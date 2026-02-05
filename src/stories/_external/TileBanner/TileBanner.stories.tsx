import type { Meta, StoryObj } from '@storybook/react';
import TileBanner from '../../../components/TileBanner/TileBanner';
import { argsFeatureTextWithPlainText } from '@/mockData/stories/args/argsFeatureText';

const meta: Meta<typeof TileBanner> = {
  title: 'External Components/TileBanner',
  component: TileBanner,
  args: {
    className: '',
    featuredText: {
      ...argsFeatureTextWithPlainText,
      heading: {
        ...argsFeatureTextWithPlainText.heading,
        level: 2,
      },
    },
    linksTo: undefined,
    linkTarget: '_self',
  },
};

export default meta;
type Story = StoryObj<typeof TileBanner>;

export const Default: Story = {
  render: (args) => (
    <div style={{ margin: '0 auto', maxWidth: '1000px' }}>
      <TileBanner {...args} />
    </div>
  ),
};

export const WithLink: Story = {
  args: {
    linksTo: '/getting-started/installation',
  },
  render: (args) => (
    <div style={{ margin: '0 auto', maxWidth: '1000px' }}>
      <TileBanner {...args} />
    </div>
  ),
};

export const WithExternalLink: Story = {
  args: {
    linksTo: 'https://example.com',
    linkTarget: '_blank',
  },
  render: (args) => (
    <div style={{ margin: '0 auto', maxWidth: '1000px' }}>
      <TileBanner {...args} />
    </div>
  ),
};