import type { Meta, StoryObj } from '@storybook/react';
import Banner from '../../../components/Banner/Banner';
import { argsBanner } from '@/mockData/stories/args';
import { argTypesBannerStories } from '@/mockData/stories/argTypes';
import { argsHeadingPlain, argsFeatureText } from '@/mockData/stories/args';
import { mockHeading } from '@/mockData/mixed';
import { styleHeadingLabel } from '@/mockData/mixed';

const meta: Meta<typeof Banner> = {
  title: 'External Components/Banner',
  component: Banner,
  tags: [], // Keep this enabled
  argTypes: {
    ...argTypesBannerStories,
  },
  args: {
    ...argsBanner,
  },
};

export default meta;

type Story = StoryObj<typeof Banner>;

export const PlainTextVersion: Story = {};

export const HugeBanner: Story = {
  args: {
    isHuge: true,
  },
};

export const EmptyVersions: Story = {
  // Empty heading ...
  args: {
    ...argsBanner,
    featuredText: {
      ...argsBanner.featuredText,
      heading: {
        ...argsHeadingPlain,
        children: undefined,
      },
    },
  },
  render: (args) => {
    // Empty text ...
    const args2 = {
      ...args,
      featuredText: {
        ...argsBanner.featuredText,
        heading: {
          ...argsHeadingPlain,
        },
        smartText: {
          plainText: undefined,
          richText: undefined,
        },
      },
    };

    // Empty heading and text ...
    const args3 = {
      ...args,
      featuredText: {
        heading: {
          ...argsHeadingPlain,
          children: undefined,
        },
        smartText: {
          plainText: undefined,
          richText: undefined,
        },
      },
    };

    return (
      <>
        <div style={{ marginBottom: '3rem' }}>
          <span style={{ ...styleHeadingLabel }}>Empty heading</span>
          <Banner {...args} />
        </div>
        <div style={{ marginBottom: '3rem' }}>
          <span style={{ ...styleHeadingLabel }}>Empty text</span>
          <Banner {...args2} />
        </div>
        <div>
          <span style={{ ...styleHeadingLabel }}>Empty heading and text</span>
          <Banner {...args3} />
        </div>
      </>
    );
  },
};

export const RichTextVersions: Story = {
  // Empty heading ...
  args: {
    ...argsBanner,
    featuredText: {
      ...argsBanner.featuredText,
      heading: {
        ...argsHeadingPlain,
        children: undefined,
      },
    },
  },
  render: (args) => {
    // Empty text ...
    const args2 = {
      ...args,
      featuredText: {
        ...argsBanner.featuredText,
        heading: {
          ...argsHeadingPlain,
        },
        smartText: {
          plainText: undefined,
          richText: undefined,
        },
      },
    };

    // Empty heading and text ...
    const args3 = {
      ...args,
      featuredText: {
        heading: {
          ...argsHeadingPlain,
          children: undefined,
        },
        smartText: {
          plainText: undefined,
          richText: undefined,
        },
      },
    };

    return (
      <>
        <div style={{ marginBottom: '3rem' }}>
          <span style={{ ...styleHeadingLabel }}>Empty heading</span>
          <Banner {...args} />
        </div>
        <div style={{ marginBottom: '3rem' }}>
          <span style={{ ...styleHeadingLabel }}>Empty text</span>
          <Banner {...args2} />
        </div>
        <div>
          <span style={{ ...styleHeadingLabel }}>Empty heading and text</span>
          <Banner {...args3} />
        </div>
      </>
    );
  },
};
