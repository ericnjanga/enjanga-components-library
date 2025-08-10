import type { Meta, StoryObj } from '@storybook/react';
import CustomIcon from '../../../components/CustomIcon/CustomIcon';
import { CI_nameOpt, CI_nameType } from '@/components/CustomIcon/libs/types';

const meta: Meta<typeof CustomIcon> = {
  title: 'External Components/CustomIcon',
  component: CustomIcon,
  args: {
    name: CI_nameOpt[0] as CI_nameType,
    className: 'custom-icon',
  },
  argTypes: {
    name: {
      control: 'select',
      options: [...CI_nameOpt],
    },
    className: {
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof CustomIcon>;

export const Default: Story = {};
