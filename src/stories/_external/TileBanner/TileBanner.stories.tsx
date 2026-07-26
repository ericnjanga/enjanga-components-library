import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentProps } from 'react';
import TileBanner from '../../../components/TileBanner/TileBanner';
import { argsFeatureTextWithPlainText } from '@/libs/mockData/stories/args/argsFeatureText';

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
type TileBannerArgs = ComponentProps<typeof TileBanner>;

export const Default: Story = {
  args: {
    linksTo: '/getting-started/installation',
  },
  render: (args: TileBannerArgs) => (
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
  render: (args: TileBannerArgs) => (
    <div style={{ margin: '0 auto', maxWidth: '1000px' }}>
      <TileBanner {...args} />
    </div>
  ),
};

export const EdgeCaseIbmKnowledgeCatalogPremim: Story = {
  args: {
    linksTo: 'https://example.com',
    pictogramName: 'IbmKnowledgeCatalogPremium',
    featuredText: {
      ...argsFeatureTextWithPlainText,
      heading: {
        ...argsFeatureTextWithPlainText.heading,
        level: 2,
        children: 'Mungo Digital Labs: Web Engineering & UX Innovation Practice',
      },
    },
  },
  render: (args: TileBannerArgs) => (
    <div style={{ margin: '0 auto', maxWidth: '1000px' }}>
      <TileBanner {...args} />
    </div>
  ),
};

export const EdgeCaseIbmEloEngineeringInsights: Story = {
  args: {
    linksTo: 'https://example.com',
    pictogramName: 'IbmEloEngineeringInsights',
    featuredText: {
      ...argsFeatureTextWithPlainText,
      heading: {
        ...argsFeatureTextWithPlainText.heading,
        level: 2,
        children: "Ontario's Ministry of Public and Business Service Delivery and Procurement",
      },
    },
  },
  render: (args: TileBannerArgs) => (
    <div style={{ margin: '0 auto', maxWidth: '1000px' }}>
      <TileBanner {...args} />
    </div>
  ),
};