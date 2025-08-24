import type { Meta, StoryObj } from '@storybook/react';
import { Heading } from '../../../components/Heading';
import { argTypesHeading } from '@/mockData/stories/argTypes';
import { argsHeading } from '@/mockData/stories/args';
import { HDG_levelPropsType } from '@/components/Heading/libs/types';
import { mockHeading } from '@/mockData/mixed';
import { Grid, Column } from '@carbon/react';
import { styleHeadingLabel } from '@/mockData/mixed';

const meta: Meta<typeof Heading> = {
  title: 'External Components/Heading',
  component: Heading,
  args: {
    ...argsHeading,
  },
  argTypes: {
    ...argTypesHeading,
  },
};

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
          <Column
            key={index}
            lg={16}
            md={8}
            sm={4}
            style={{ marginBottom: '1.5rem' }}
          >
            {index && (
              <>
                <span style={{ ...styleHeadingLabel }}>Level ({index})</span>
                <Heading level={index as HDG_levelPropsType}>
                  {args.children}
                </Heading>
              </>
            )}
          </Column>
        ))}
      </Grid>
    );
  },
};

export const LevelVariations: Story = {
  render: (args) => {
    return (
      <Grid>
        {[1, 2, 3, 4, 5, 6].map((index) => (
          <Column
            key={index}
            lg={16}
            md={8}
            sm={4}
            style={{ marginBottom: '1.5rem' }}
          >
            {index && (
              <>
                <span style={{ ...styleHeadingLabel }}>Level ({index})</span>
                <Heading level={index as HDG_levelPropsType}>
                  {args.children}
                </Heading>
              </>
            )}
          </Column>
        ))}
      </Grid>
    );
  },
};
