import type { Meta, StoryObj } from '@storybook/react';
import { Heading } from '../../../components/Heading';

const meta: Meta<typeof Heading> = {
  title: 'External Components/Heading',
  component: Heading,
  args: {
    className: '',
    level: 1,
    children:
      'Liquorice liquorice fruitcake tiramisu sesame snaps sugar plum lollipop gummi bears cookie.',
  },
  argTypes: {
    className: { control: 'text' },
    level: {
      control: 'select',
      options: ['ordered', 'unordered'],
      description: '... soon ...',
    },
    children: {
      control: 'text',
      description: '... soon ...',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Heading>;

export const h1: Story = {};

export const Empty: Story = {
  args: {
    children: undefined,
  },
};

export const h2: Story = {
  args: {
    level: 2,
  },
};

export const h3: Story = {
  args: {
    level: 3,
  },
};

export const h4: Story = {
  args: {
    level: 4,
  },
};

export const h5: Story = {
  args: {
    level: 5,
  },
};

export const h6: Story = {
  args: {
    level: 6,
  },
};
