import type { Meta, StoryObj } from '@storybook/react';
import FeatureText from '../../../components/FeatureText/FeatureText';
import { mockRichText } from '@/mockData/mockRichText';
import { argsFeatureTextWithPlainText } from '@/mockData/stories/args/argsFeatureText';
import { mockHeading } from '@/mockData/mixed';
import { argTypesFeatureTextStories } from '@/mockData/stories/argTypes';
import { styleHeadingLabel } from '@/mockData/mixed';
import { argsHeadingJSX } from '@/mockData/stories/args/argsHeading';
import { Grid, Column } from '@carbon/react';
import { argsHeadingPlain } from '@/mockData/stories/args/argsHeading';

const meta: Meta<typeof FeatureText> = {
  title: 'External Components/FeatureText',
  component: FeatureText,
  args: {
    ...argsFeatureTextWithPlainText,
  },
  argTypes: {
    ...argTypesFeatureTextStories,
  },
};

export default meta;

type Story = StoryObj<typeof FeatureText>;

export const WithPlainTexts: Story = {};

export const WithRichTexts: Story = {
  args: {
    ...argsFeatureTextWithPlainText,
    smartText: {
      ...argsFeatureTextWithPlainText.smartText,
      plainText: undefined,
      richText: mockRichText.description,
    },
  },
  render: (args) => {
    const args2 = {
      ...args,
      heading: {
        ...argsHeadingJSX,
      },
    };

    return (
      <>
        <div>
          <span style={{ ...styleHeadingLabel }}>Only description is rich</span>
          <FeatureText {...args} />
        </div>
        <div>
          <span style={{ ...styleHeadingLabel }}>
            Both heading and description are rich
          </span>
          <FeatureText {...args2} />
        </div>
      </>
    );
  },
};

export const WithHeadingVariations: Story = {
  args: {
    ...argsFeatureTextWithPlainText,
    smartText: {
      ...argsFeatureTextWithPlainText.smartText,
      plainText: undefined,
      richText: mockRichText.description,
    },
  },
  render: (args) => {
    const args2 = {
      ...args,
      heading: {
        ...argsHeadingJSX,
      },
    };

    return (
      <Grid>
        <Column lg={8} md={4} sm={4} style={{ marginBottom: '1.5rem' }}>
          <div style={{ marginBottom: '6rem' }}>
            <span style={{ ...styleHeadingLabel }}>Heading level 1</span>
            <FeatureText
              {...args}
              smartText={{ ...argsFeatureTextWithPlainText.smartText }}
            />
          </div>
          <div style={{ marginBottom: '6rem' }}>
            <span style={{ ...styleHeadingLabel }}>Heading level 2</span>
            <FeatureText
              {...args}
              heading={{ ...args.heading, level: 2 }}
              smartText={{ ...argsFeatureTextWithPlainText.smartText }}
            />
          </div>
          <div style={{ marginBottom: '6rem' }}>
            <span style={{ ...styleHeadingLabel }}>Heading level 3</span>
            <FeatureText
              {...args}
              heading={{ ...args.heading, level: 3 }}
              smartText={{ ...argsFeatureTextWithPlainText.smartText }}
            />
          </div>
          <div style={{ marginBottom: '6rem' }}>
            <span style={{ ...styleHeadingLabel }}>Heading level 4</span>
            <FeatureText
              {...args}
              heading={{ ...args.heading, level: 4 }}
              smartText={{ ...argsFeatureTextWithPlainText.smartText }}
            />
          </div>
          <div style={{ marginBottom: '6rem' }}>
            <span style={{ ...styleHeadingLabel }}>Heading level 5</span>
            <FeatureText
              {...args}
              heading={{ ...args.heading, level: 5 }}
              smartText={{ ...argsFeatureTextWithPlainText.smartText }}
            />
          </div>
          <div>
            <span style={{ ...styleHeadingLabel }}>Heading level 6</span>
            <FeatureText
              {...args}
              heading={{ ...args.heading, level: 6 }}
              smartText={{ ...argsFeatureTextWithPlainText.smartText }}
            />
          </div>
        </Column>
        <Column lg={8} md={4} sm={4} style={{ marginBottom: '1.5rem' }}>
          <div>
            <span style={{ ...styleHeadingLabel }}>Heading level 1</span>
            <FeatureText {...args2} />
          </div>
          <div>
            <span style={{ ...styleHeadingLabel }}>Heading level 2</span>
            <FeatureText {...args2} heading={{ ...args2.heading, level: 2 }} />
          </div>
          <div>
            <span style={{ ...styleHeadingLabel }}>Heading level 3</span>
            <FeatureText {...args2} heading={{ ...args2.heading, level: 3 }} />
          </div>
          <div>
            <span style={{ ...styleHeadingLabel }}>Heading level 4</span>
            <FeatureText {...args2} heading={{ ...args2.heading, level: 4 }} />
          </div>
          <div>
            <span style={{ ...styleHeadingLabel }}>Heading level 5</span>
            <FeatureText {...args2} heading={{ ...args2.heading, level: 5 }} />
          </div>
          <div>
            <span style={{ ...styleHeadingLabel }}>Heading level 6</span>
            <FeatureText {...args2} heading={{ ...args2.heading, level: 6 }} />
          </div>
        </Column>
      </Grid>
    );
  },
};

export const WithHiddenProps: Story = {
  args: {
    ...argsFeatureTextWithPlainText,
    isHidden: 'heading',
  },
  render: (args) => {
    const args2 = {
      ...args,
      isHidden: 'smartText' as typeof args.isHidden,
    };

    return (
      <>
        <div style={{ marginBottom: '3rem' }}>
          <span style={{ ...styleHeadingLabel }}>Hidden Heading</span>
          <FeatureText {...args} />
        </div>
        <div style={{ marginBottom: '3rem' }}>
          <span style={{ ...styleHeadingLabel }}>Hidden description</span>
          <FeatureText {...args2} />
        </div>
      </>
    );
  },
};

export const EmptyVersions: Story = {
  // Empty heading ...
  args: {
    heading: {
      ...argsHeadingPlain,
      children: undefined,
    },
    smartText: {
      plainText: mockHeading.plain,
      richText: undefined,
    },
  },
  render: (args) => {
    // Empty smartText ...
    const args2 = {
      ...args,
      heading: {
        ...argsHeadingPlain,
      },
      smartText: {
        plainText: undefined,
        richText: undefined,
      },
    };

    // Empty heading and smartText ...
    const args3 = {
      ...args,
      heading: {
        ...argsHeadingPlain,
        children: undefined,
      },
      smartText: {
        plainText: undefined,
        richText: undefined,
      },
    };

    return (
      <>
        <div style={{ marginBottom: '3rem' }}>
          <span style={{ ...styleHeadingLabel }}>Empty heading</span>
          <FeatureText {...args} />
        </div>
        <div style={{ marginBottom: '3rem' }}>
          <span style={{ ...styleHeadingLabel }}>Empty smartText</span>
          <FeatureText {...args2} />
        </div>
        <div style={{ marginBottom: '3rem' }}>
          <span style={{ ...styleHeadingLabel }}>
            Empty heading and smartText
          </span>
          <FeatureText {...args3} />
        </div>
      </>
    );
  },
};

export const EmptyVersionsWithHiddenProps: Story = {
  // Empty heading & Hidden smartText ...
  args: {
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
  render: (args) => {
    // Hidden heading & empty smartText ...
    const args2 = {
      ...args,
      heading: {
        ...argsHeadingPlain,
      },
      smartText: {
        plainText: undefined,
        richText: undefined,
      },
      isHidden: 'heading' as typeof args.isHidden,
    };

    return (
      <>
        <div style={{ marginBottom: '3rem' }}>
          <span style={{ ...styleHeadingLabel }}>
            Empty heading & Hidden smartText
          </span>
          <FeatureText {...args} />
        </div>
        <div style={{ marginBottom: '3rem' }}>
          <span style={{ ...styleHeadingLabel }}>
            Hidden heading & empty smartText
          </span>
          <FeatureText {...args2} />
        </div>
      </>
    );
  },
};

/**
 * Props validation errors
 * ---------------
 */
// Both plainText and richText props are privided ...
export const ErrorsPropsValidation1: Story = {
  args: {
    ...argsFeatureTextWithPlainText,
    smartText: {
      ...argsFeatureTextWithPlainText.smartText,
      richText: mockRichText.description,
    },
  },
};
