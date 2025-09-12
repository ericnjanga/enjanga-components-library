import type { Meta, StoryObj } from '@storybook/react';
import Banner from '../../../components/Banner/Banner';
import { argsBanner } from '@/mockData/stories/args/argsBanner';
import { argTypesBannerStories } from '@/mockData/stories/argTypes';
import {
  argsHeadingPlain,
  argsHeadingJSX,
} from '@/mockData/stories/args/argsHeading';
import { argsFeatureTextWithPlainText } from '@/mockData/stories/args/argsFeatureText';
import { mockHeading } from '@/mockData/mixed';
import { styleHeadingLabel } from '@/mockData/mixed';
import { mockRichTextSmall } from '@/mockData/mockRichText';
import { Grid, Column } from '@carbon/react';
import { BNN_roleOptPropsType } from '@/components/Banner/libs/types';

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

export const Default: Story = {};

export const PlainTextVersion: Story = {
  render: (args) => {
    return (
      <>
        <div style={{ marginBottom: '3rem' }}>
          <span style={{ ...styleHeadingLabel }}>With plain text</span>
          <Banner {...args} />
        </div>

        <Grid fullWidth>
          <Column lg={16}>
            <h1 style={{ textAlign: 'center' }}>Resoponsive size</h1>
          </Column>
        </Grid>

        <section>
          <Grid fullWidth>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
              (index) => (
                <Column
                  key={index}
                  style={{ marginBottom: '1.5rem' }}
                  lg={index}
                  md={8}
                  sm={4}
                >
                  <Banner {...args} />
                </Column>
              )
            )}
          </Grid>
        </section>
      </>
    );
  },
};

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
          richText: mockRichTextSmall.description,
        },
      },
      role: 'presentation' as BNN_roleOptPropsType,
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
          richText: mockRichTextSmall.description,
        },
      },
      role: 'presentation' as BNN_roleOptPropsType,
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

export const Responsiveness: Story = {
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
    // Compositions ...
    const argsBanner_WithRichHeadingPlainSmartText = {
      ...args,
    };

    return (
      <>
        <Grid>
          <Column lg={16}>
            <h1 style={{ textAlign: 'center' }}>Banner's size</h1>
          </Column>
        </Grid>

        <section>
          <Grid>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
              (index) => (
                <Column
                  key={index}
                  style={{ marginBottom: '1.5rem' }}
                  lg={index}
                  md={8}
                  sm={4}
                >
                  <Banner
                    {...argsBanner_WithRichHeadingPlainSmartText}
                    role={
                      `${
                        index > 0 ? 'presentation' : 'banner'
                      }` as BNN_roleOptPropsType
                    }
                  />
                </Column>
              )
            )}
          </Grid>
        </section>
      </>
    );
  },
};

export const WithHiddenProps: Story = {
  args: {
    featuredText: {
      ...argsFeatureTextWithPlainText,
      isHidden: 'heading',
    },
  },
  render: (args) => {
    const args2 = {
      ...args,
      featuredText: {
        ...argsFeatureTextWithPlainText,
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
          <Banner {...args2} role={'presentation' as BNN_roleOptPropsType} />
        </div>
      </>
    );
  },
};

export const HugeBanner: Story = {
  args: {
    isHuge: true,
  },
  render: (args) => {
    return (
      <>
        <div style={{ marginBottom: '3rem' }}>
          <span style={{ ...styleHeadingLabel }}>Huge Banner</span>
          <Banner {...args} />
        </div>

        <Grid fullWidth>
          <Column lg={16}>
            <h1 style={{ textAlign: 'center' }}>Resoponsive size</h1>
          </Column>
        </Grid>

        <section>
          <Grid fullWidth>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
              (index) => (
                <Column
                  key={index}
                  style={{ marginBottom: '1.5rem' }}
                  lg={index}
                  md={8}
                  sm={4}
                >
                  <Banner
                    {...args}
                    role={
                      `${
                        index > 0 ? 'presentation' : 'banner'
                      }` as BNN_roleOptPropsType
                    }
                  />
                </Column>
              )
            )}
          </Grid>
        </section>
      </>
    );
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
        <header
          style={{ marginBottom: '2.5rem' }}
          role={'presentation' as BNN_roleOptPropsType}
        >
          <h1 style={{ color: 'blue' }}>
            What happens if the expected props aren't there yet?
          </h1>
          <p style={{ fontSize: '1.3rem', color: 'blue' }}>
            Assuming a delayed API response request for instance. Some props may
            be arriving sooner than the others or they might all be absent.
          </p>
        </header>

        <div style={{ marginBottom: '3rem' }}>
          <span style={{ ...styleHeadingLabel }}>Empty heading</span>
          <Banner {...args} />
        </div>
        <div style={{ marginBottom: '3rem' }}>
          <span style={{ ...styleHeadingLabel }}>Empty text</span>
          <Banner {...args2} role={'presentation' as BNN_roleOptPropsType} />
        </div>
        <div>
          <span style={{ ...styleHeadingLabel }}>Empty heading and text</span>
          <Banner {...args3} role={'presentation' as BNN_roleOptPropsType} />
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
        <header style={{ marginBottom: '2.5rem' }}>
          <h1 style={{ color: 'blue' }}>
            What happens if the expected props aren't there yet?
          </h1>
          <p style={{ fontSize: '1.3rem', color: 'blue' }}>
            Assuming a delayed API response request for instance. Some props may
            be arriving sooner than the others or they might all be absent.
          </p>
        </header>
        <div style={{ marginBottom: '3rem' }}>
          <span style={{ ...styleHeadingLabel }}>
            Empty heading & Hidden smartText
          </span>
          <Banner {...args} role={'presentation' as BNN_roleOptPropsType} />
        </div>
        <div style={{ marginBottom: '3rem' }}>
          <span style={{ ...styleHeadingLabel }}>
            Hidden heading & empty smartText
          </span>
          <Banner {...args2} role={'presentation' as BNN_roleOptPropsType} />
        </div>
      </>
    );
  },
};
