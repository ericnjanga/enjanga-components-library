import type { Meta, StoryObj } from '@storybook/react';
import Banner from '../../../components/Banner/Banner';
import { argsBanner } from '@/mockData/stories/args';
import { argTypesBannerStories } from '@/mockData/stories/argTypes';
import {
  argsHeadingPlain,
  argsHeadingJSX,
  argsFeatureText,
} from '@/mockData/stories/args';
import { mockHeading } from '@/mockData/mixed';
import { styleHeadingLabel } from '@/mockData/mixed';
import { mockRichText } from '@/mockData/mockRichText';

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

export const RichTextVersions: Story = {
  // Rich heading with plain smartText ...
  args: {
    ...argsBanner,
    featuredText: {
      ...argsBanner.featuredText,
      heading: {
        ...argsHeadingJSX,
      },
    },
  },
  render: (args) => {
    // Plain heading with rich smartText ...
    const args2 = {
      ...args,
      featuredText: {
        ...argsBanner.featuredText,
        heading: {
          ...argsHeadingPlain,
        },
        smartText: {
          plainText: undefined,
          richText: mockRichText.description,
        },
      },
    };

    // Rich heading with rich smartText ...
    const args3 = {
      ...args,
      featuredText: {
        heading: {
          ...argsHeadingJSX,
        },
        smartText: {
          plainText: undefined,
          richText: mockRichText.description,
        },
      },
    };

    return (
      <>
        <div style={{ marginBottom: '3rem' }}>
          <span style={{ ...styleHeadingLabel }}>
            Rich heading with plain smartText
          </span>
          <Banner {...args} />
        </div>
        <div style={{ marginBottom: '3rem' }}>
          <span style={{ ...styleHeadingLabel }}>
            Plain heading with rich smartText
          </span>
          <Banner {...args2} />
        </div>
        <div>
          <span style={{ ...styleHeadingLabel }}>
            Rich heading with rich smartText
          </span>
          <Banner {...args3} />
        </div>
      </>
    );
  },
};

export const WithHiddenProps: Story = {
  args: {
    featuredText: {
      ...argsFeatureText,
      isHidden: 'heading',
    },
  },
  render: (args) => {
    const args2 = {
      ...args,
      featuredText: {
        ...argsFeatureText,
        isHidden: 'smartText' as typeof args.featuredText.isHidden,
      },
    };

    return (
      <>
        <div style={{ marginBottom: '3rem' }}>
          <span style={{ ...styleHeadingLabel }}>Hidden Heading</span>
          <Banner {...args} />
        </div>
        <div style={{ marginBottom: '3rem' }}>
          <span style={{ ...styleHeadingLabel }}>Hidden description</span>
          <Banner {...args2} />
        </div>
      </>
    );
  },
};

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

export const EmptyVersionsWithHiddenProps: Story = {
  // Empty heading & Hidden smartText ...
  args: {
    featuredText: {
      heading: {
        ...argsHeadingPlain,
        children: undefined,
      },
      smartText: {
        plainText: mockHeading.plain,
        richText: undefined,
      },
      isHidden: 'smartText',
    },
  },
  render: (args) => {
    // Hidden heading & empty smartText ...
    const args2 = {
      ...args,
      featuredText: {
        heading: {
          ...argsHeadingPlain,
        },
        smartText: {
          plainText: undefined,
          richText: undefined,
        },
        isHidden: 'heading' as typeof args.featuredText.isHidden,
      },
    };

    return (
      <>
        <div style={{ marginBottom: '3rem' }}>
          <span style={{ ...styleHeadingLabel }}>
            Empty heading & Hidden smartText
          </span>
          <Banner {...args} />
        </div>
        <div style={{ marginBottom: '3rem' }}>
          <span style={{ ...styleHeadingLabel }}>
            Hidden heading & empty smartText
          </span>
          <Banner {...args2} />
        </div>
      </>
    );
  },
};
