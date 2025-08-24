import type { Meta, StoryObj } from '@storybook/react';
import FeatureText from '../../../components/FeatureText/FeatureText';
import { mockRichText } from '@/mockData/mockRichText';
import { argsHeadingPlain, argsFeatureText } from '@/mockData/stories/args';
import {
  headingStoryArgTypes,
  classNameStoryArgType,
  smartTextStoryArgTypes,
} from '@/mockData/stories/argTypes';
import { styleHeadingLabel } from '@/mockData/mixed';
import { argsHeadingJSX } from '@/mockData/stories/args';
import { Grid, Column } from '@carbon/react';

const meta: Meta<typeof FeatureText> = {
  title: 'External Components/FeatureText',
  component: FeatureText,
  args: {
    ...argsFeatureText,
  },
  argTypes: {
    ...classNameStoryArgType,
    ...headingStoryArgTypes,
    ...smartTextStoryArgTypes,
  },
};

export default meta;

type Story = StoryObj<typeof FeatureText>;

export const WithPlainTexts: Story = {};

export const WithRichTexts: Story = {
  args: {
    ...argsFeatureText,
    smartText: {
      ...argsFeatureText.smartText,
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
            both heading and description are rich
          </span>
          <FeatureText {...args2} />
        </div>
      </>
    );
  },
};

export const WithHeadingVariations: Story = {
  args: {
    ...argsFeatureText,
    smartText: {
      ...argsFeatureText.smartText,
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
          <div>
            <span style={{ ...styleHeadingLabel }}>Heading level 1</span>
            <FeatureText {...args} />
          </div>
          <div>
            <span style={{ ...styleHeadingLabel }}>Heading level 2</span>
            <FeatureText {...args} heading={{ ...args.heading, level: 2 }} />
          </div>
          <div>
            <span style={{ ...styleHeadingLabel }}>Heading level 3</span>
            <FeatureText {...args} heading={{ ...args.heading, level: 3 }} />
          </div>
        </Column>
        <Column lg={8} md={4} sm={4} style={{ marginBottom: '1.5rem' }}>
          <div>
            <span style={{ ...styleHeadingLabel }}>Heading level 1</span>
            <FeatureText {...args2} />
          </div>
          <div>
            <span style={{ ...styleHeadingLabel }}>Heading level 2</span>
            <FeatureText {...args2} heading={{ ...args.heading, level: 2 }} />
          </div>
          <div>
            <span style={{ ...styleHeadingLabel }}>Heading level 3</span>
            <FeatureText {...args2} heading={{ ...args.heading, level: 3 }} />
          </div>
        </Column>
      </Grid>
    );
  },
};

export const Empty: Story = {
  args: {
    heading: {
      ...argsHeadingPlain,
      children: undefined,
    },
    smartText: undefined,
  },
};

export const WithRichText: Story = {
  args: {
    ...argsFeatureText,
    smartText: {
      ...argsFeatureText.smartText,
      plainText: undefined,
      richText: mockRichText.description,
    },
  },
};

/**
 * Props validation errors
 * ---------------
 */
// Both plainText and richText props are privided ...
export const ErrorsPropsValidation1: Story = {
  args: {
    ...argsFeatureText,
    smartText: {
      ...argsFeatureText.smartText,
      richText: mockRichText.description,
    },
  },
};

// None of plainText and richText props are privided ...
export const ErrorsPropsValidation2: Story = {
  args: {
    ...argsFeatureText,
    smartText: {
      plainText: undefined,
      richText: undefined,
    },
  },
};
