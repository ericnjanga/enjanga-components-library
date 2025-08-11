import type { Meta, StoryObj } from '@storybook/react';
import { ListItem } from '../../../components/ListItem';
import { mockListItemArgs, mockListMixed } from '@/mockData/mockLists';

const meta: Meta<typeof ListItem> = {
  title: 'Internal Components/ListItem',
  component: ListItem,
  args: {
    ...mockListItemArgs,
  },
  argTypes: {
    cssClass: {
      control: 'text',
      description: '###',
    },
    href: {
      control: 'text',
      description: '###',
    },
    children: {
      control: 'object',
      description: '###',
    },
  },
  parameters: {
    docs: {
      description: {
        component: '###',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ListItem>;

export const Default: Story = {};

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
};

export const WithRandomChildren: Story = {
  args: {
    ...mockListMixed[1],
  },
};

export const WithChildrenComponent: Story = {
  args: {
    ...mockListMixed[2],
  },
};
