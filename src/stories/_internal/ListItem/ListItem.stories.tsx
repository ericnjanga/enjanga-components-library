import type { Meta, StoryObj } from '@storybook/react';
import { ListItem } from '../../../components/ListItem';
import { mockListItemArgs, mockListMixed } from '@/mockData/mockLists';
import { classNameStoryArgType } from '@/mockData/stories/argTypes';

const meta: Meta<typeof ListItem> = {
  title: 'Internal Components/ListItem',
  component: ListItem,
  args: {
    ...mockListItemArgs,
  },
  argTypes: {
    ...classNameStoryArgType,
    href: {
      control: 'text',
      description: '(coming soon)',
    },
    children: {
      control: 'object',
      description: '(coming soon)',
    },
  },
  parameters: {
    docs: {
      description: {
        component: '(coming soon)',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ListItem>;

export const Default: Story = {
  render: (args) => (
    <ul>
      <ListItem {...args} />
    </ul>
  ),
};

export const Empty: Story = {
  args: {
    ...mockListItemArgs,
    content: undefined,
  },
};

export const Linked: Story = {
  args: {
    ...mockListMixed[0],
  },
  render: (args) => (
    <ul>
      <ListItem {...args} />
    </ul>
  ),
};

export const WithRandomChildren: Story = {
  args: {
    ...mockListMixed[1],
  },
  render: (args) => (
    <ul>
      <ListItem {...args} />
    </ul>
  ),
};

export const WithChildrenComponent: Story = {
  args: {
    ...mockListMixed[2],
  },
  render: (args) => (
    <ul>
      <ListItem {...args} />
    </ul>
  ),
};
