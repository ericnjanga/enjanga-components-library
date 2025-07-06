import type { Meta, StoryObj } from '@storybook/react';
import HeadlinedList from '../../../components/HeadlinedList';

const meta: Meta<typeof HeadlinedList> = {
  title: 'External Components/HeadlinedList',
  component: HeadlinedList,
  args: {
    wrapper: {
      tag: 'section',
      cssClass: 'custom-wrapper-class',
    },
    heading: {
      content: 'My Awesome List',
      h: 'h2',
      cssClass: 'custom-heading-class',
    },
    list: {
      type: 'unordered',
      cssClass: 'custom-list-class',
      content: [
        { id: '1', name: 'First Item', href: '#' },
        { id: '2', name: 'Second Item', href: '#' },
        { id: '3', name: 'Third Item', href: '#' },
      ],
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'HeadlinedList displays a semantic heading followed by a list (ordered or unordered). Customize layout and structure using wrapper and list options.',
      },
    },
  },
  argTypes: {
    wrapper: {
      control: 'select',
      options: ['div', 'section'],
      description: 'HTML tag for the wrapper container',
    },
    heading: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      description: 'Heading level',
    },
    list: {
      control: 'radio',
      options: ['ul', 'ol'],
      description: 'List type (unordered or ordered)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof HeadlinedList>;

export const Default: Story = {};

export const NoList: Story = {
  args: {
    list: undefined,
  },
};

export const CustomWrapperAndHeading: Story = {
  args: {
    wrapper: {
      tag: 'div',
      cssClass: 'bg-gray-100 p-4',
    },
    heading: {
      content: 'Custom Layout',
      h: 'h4',
      cssClass: 'text-blue-600',
    },
  },
};
