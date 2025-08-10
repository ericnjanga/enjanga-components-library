import type { Meta, StoryObj } from '@storybook/react';
import List from '../../../components/List';
import { LST_typeOpt } from '@/components/List/libs/types';
import {
  mockListArgs,
  mockListUnlinked,
  mockListLinked,
  mockListMixed,
} from '@/mockData/mockLists';

const meta: Meta<typeof List> = {
  title: 'External Components/List',
  component: List,
  args: { ...mockListArgs },
  parameters: {
    docs: {
      description: {
        component:
          'The `List` component renders an ordered or unordered list with support for links. Each item is rendered using a `ListItem` component.',
      },
    },
  },
  argTypes: {
    type: {
      control: 'radio',
      options: [...LST_typeOpt],
      description: 'Type of list to render (ordered or unordered)',
    },
    cssClass: {
      control: 'text',
      description: 'Custom CSS class applied to the list wrapper',
    },
    content: {
      control: 'object',
      description: 'Array of list items',
    },
  },
};

export default meta;
type Story = StoryObj<typeof List>;

export const Default: Story = {};

export const EmptyList: Story = {
  args: {
    content: [],
  },
};

export const WithLinks: Story = {
  args: {
    ...mockListArgs,
    content: [...mockListLinked],
  },
};

export const WithoutLinks: Story = {
  args: {
    ...mockListArgs,
    content: [...mockListUnlinked],
  },
};

export const WithMixedData: Story = {
  args: {
    ...mockListArgs,
    content: [...mockListMixed],
  },
};

export const Ordered: Story = {
  args: {
    type: 'ordered',
  },
};

export const Unordered: Story = {
  args: {
    type: 'unordered',
  },
};
