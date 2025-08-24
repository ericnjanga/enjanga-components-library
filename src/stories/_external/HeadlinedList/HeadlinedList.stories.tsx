import type { Meta, StoryObj } from '@storybook/react';
import HeadlinedList from '../../../components/HeadlinedList';
import { mockHeadlinedListArgs, mockListMixed } from '@/mockData/mockLists';
import { mockHeading } from '@/mockData/mixed';
import { Grid, Column } from '@carbon/react';
import { argsList } from '@/mockData/stories/args';
import { styleHeadingLabel } from '@/mockData/mixed';
import { HDG_levelPropsType } from '@/components/Heading/libs/types';
import { argTypesHeadingStories } from '@/mockData/stories/argTypes';
import { argTypesListStories } from '@/mockData/stories/argTypes';

const meta: Meta<typeof HeadlinedList> = {
  title: 'External Components/HeadlinedList',
  component: HeadlinedList,

  /**
   * NOTE:
   * ---------
   * It's best to use control: { type: 'object' } when we have nested args like:
   * - wrapper.tag, wrapper.cssClass
   * - heading.content
   */
  argTypes: {
    ...argTypesHeadingStories,
    wrapper: {
      description: 'Wrapper configuration',
      control: {
        type: 'object',
      },
    },
    ...argTypesListStories,
  },
  args: {
    ...mockHeadlinedListArgs,
  },
  parameters: {
    docs: {
      description: {
        component:
          'HeadlinedList displays a semantic heading followed by a list (ordered or unordered). Customize layout and structure using wrapper and list options.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof HeadlinedList>;

export const Default: Story = {
  args: { ...mockHeadlinedListArgs },
};

export const Empty: Story = {
  args: {
    list: undefined,
  },
  render: (args) => {
    return (
      <Grid>
        <Column lg={16} md={8} sm={4} style={{ marginBottom: '2.5rem' }}>
          <h4 style={{ ...styleHeadingLabel }}>(Empty list)</h4>
          <HeadlinedList {...args} />
        </Column>
        <Column lg={16} md={8} sm={4} style={{ marginBottom: '2.5rem' }}>
          <h4 style={{ ...styleHeadingLabel }}>(Empty heading)</h4>
          <HeadlinedList
            {...args}
            heading={{ children: undefined, level: 3 }}
            list={{ ...argsList }}
          />
        </Column>
        <Column lg={16} md={8} sm={4} style={{ marginBottom: '2.5rem' }}>
          <h4 style={{ ...styleHeadingLabel }}>(Empty heading and list)</h4>
          <HeadlinedList
            {...args}
            heading={{ children: undefined, level: 3 }}
          />
        </Column>
      </Grid>
    );
  },
};

export const WithJSXFragments: Story = {
  args: {
    ...mockHeadlinedListArgs,
    heading: {
      ...mockHeadlinedListArgs.heading,
      children: mockHeading.jsx,
    },
    list: {
      ...mockHeadlinedListArgs.list,
      content: [...mockListMixed],
    },
  },
};

export const HeadingLevelList: Story = {
  args: {
    ...mockHeadlinedListArgs,
    heading: {
      ...mockHeadlinedListArgs.heading,
      level: 1,
    },
  },
  render: (args) => {
    return (
      <Grid>
        {[1, 2, 3, 4, 5, 6].map((index) => (
          <Column
            key={index}
            lg={4}
            md={4}
            sm={4}
            style={{ marginBottom: '2.5rem' }}
          >
            <h4 style={{ ...styleHeadingLabel }}>(With heading{index})</h4>
            <HeadlinedList
              {...args}
              heading={{
                children: args.heading.children,
                level: index as HDG_levelPropsType,
              }}
            />
          </Column>
        ))}
      </Grid>
    );
  },
};
