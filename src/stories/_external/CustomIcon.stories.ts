import type { Meta, StoryObj } from '@storybook/react';
import CustomIcon from '../../components/CustomIcon/CustomIcon';

const meta: Meta<typeof CustomIcon> = {
  title: 'External Components/CustomIcon',
  component: CustomIcon,
  argTypes: {
    name: {
      control: 'select',
      options: ['Hills', 'App Developer', 'Leadership'],
    },
    className: {
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof CustomIcon>;

export const Default: Story = {
  args: {
    name: 'Hills',
    className: 'custom-icon',
  },
};
