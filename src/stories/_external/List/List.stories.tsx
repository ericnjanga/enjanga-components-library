import type { Meta, StoryObj } from '@storybook/react';
import List from '../../../components/List';
import { listStoryArgTypes } from '@/mockData/stories/argTypes';
import {
  mockListUnlinked,
  mockListLinked,
  mockListMixed,
} from '@/mockData/mockLists';
import { argsList } from '@/mockData/stories/args';

const meta: Meta<typeof List> = {
  title: 'External Components/List',
  component: List,
  args: { ...argsList },
  parameters: {
    docs: {
      description: {
        component:
          'The `List` component renders an ordered or unordered list with support for links. Each item is rendered using a `ListItem` component.',
      },
    },
  },
  argTypes: {
    ...listStoryArgTypes,
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
    ...argsList,
    content: [...mockListLinked],
  },
};

export const WithoutLinks: Story = {
  args: {
    ...argsList,
    content: [...mockListUnlinked],
  },
};

export const WithJSXFragments: Story = {
  args: {
    ...argsList,
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
