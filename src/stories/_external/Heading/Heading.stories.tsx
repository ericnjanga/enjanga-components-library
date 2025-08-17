import type { Meta, StoryObj } from '@storybook/react';
import { Heading } from '../../../components/Heading';
import { headingArgTypes } from '@/mockData/stories/argTypes';
import { headingArgs } from '@/mockData/stories/args';
import {
  HDG_levelOpt,
  HDG_levelPropsType,
} from '@/components/Heading/libs/types';
import { mockHeading } from '@/mockData/mixed';
import { Grid, Column } from '@carbon/react';

const meta: Meta<typeof Heading> = {
  title: 'External Components/Heading',
  component: Heading,
  args: {
    ...headingArgs,
  },
  argTypes: {
    ...headingArgTypes,
  },
};
// HDG_levelOpt[0] as HDG_levelPropsType,
export default meta;

type Story = StoryObj<typeof Heading>;

export const Default: Story = {};

export const Empty: Story = {
  args: {
    children: undefined,
  },
};

export const WithJSXFragments: Story = {
  args: {
    children: mockHeading.jsx,
  },
  render: (args) => {
    return (
      <Grid>
        {[1, 2, 3, 4, 5, 6].map((index) => (
          <Column key={index} lg={8} style={{ marginBottom: '1.5rem' }}>
            {index && (
              <Heading level={index as HDG_levelPropsType}>
                ({index}) - {args.children}
              </Heading>
            )}
          </Column>
        ))}
      </Grid>
    );
  },
};

export const h1: Story = {};

export const h2: Story = {
  args: {
    level: 2,
  },
};

export const h3: Story = {
  args: {
    level: 3,
  },
};

export const h4: Story = {
  args: {
    level: 4,
  },
};

export const h5: Story = {
  args: {
    level: 5,
  },
};

export const h6: Story = {
  args: {
    level: 6,
  },
};
