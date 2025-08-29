import type { Meta, StoryObj } from '@storybook/react';
import List from '../../../components/List';
import { argTypesListStories } from '@/mockData/stories/argTypes';
import {
  mockListUnlinked,
  mockListLinked,
  mockListMixed,
} from '@/mockData/mockLists';
import { argsList } from '@/mockData/stories/args/argsList';

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
    ...argTypesListStories,
  },
};

export default meta;
type Story = StoryObj<typeof List>;

export const Default: Story = {};

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

export const EmptyVersion: Story = {
  args: {
    content: [],
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

        <List {...args} />
      </>
    );
  },
};
