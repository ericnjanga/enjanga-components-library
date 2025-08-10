import type { Meta, StoryObj } from '@storybook/react';
import List from '../../../components/List';

const meta: Meta<typeof List> = {
  title: 'External Components/List',
  component: List,
  args: {
    type: 'ordered',
    cssClass: '',
    content: [
      { id: '1', name: 'Introduction', href: '#' },
      { id: '2', name: 'Features', href: '#' },
      { id: '3', name: 'Contact Us', href: '#' },
    ],
  },
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
      options: ['ordered', 'unordered'],
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

export const EmptyList: Story = {
  args: {
    content: [],
  },
};

export const OrderedList: Story = {
  args: {
    type: 'ordered',
  },
};

export const UnorderedList: Story = {
  args: {
    type: 'unordered',
  },
};
