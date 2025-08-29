import type { Meta, StoryObj } from '@storybook/react';
import { Heading } from '../../../components/Heading';
import { argTypesHeadingStories } from '@/mockData/stories/argTypes';
import { argsHeadingPlain } from '@/mockData/stories/args/argsHeading';
import { HDG_levelPropsType } from '@/components/Heading/libs/types';
import { mockHeading } from '@/mockData/mixed';
import { Grid, Column } from '@carbon/react';
import { styleHeadingLabel } from '@/mockData/mixed';

const meta: Meta<typeof Heading> = {
  title: 'External Components/Heading',
  component: Heading,
  args: {
    ...argsHeadingPlain,
  },
  argTypes: {
    ...argTypesHeadingStories,
  },
};

export default meta;

type Story = StoryObj<typeof Heading>;

export const Default: Story = {};

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

export const EmptyVersion: Story = {
  args: {
    children: undefined,
  },
  render: (args) => {
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

        <Heading {...args} />
      </>
    );
  },
};
