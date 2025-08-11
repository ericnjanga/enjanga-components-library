import type { Meta, StoryObj } from '@storybook/react';
import CustomIcon from '../../../components/CustomIcon/CustomIcon';
import {
  CI_nameOpt,
  CI_nameType,
  CI_sizeOpt,
  CI_sizeType,
} from '@/components/CustomIcon/libs/types';
import { mockCustomIcon } from '@/mockData/mixed';

const meta: Meta<typeof CustomIcon> = {
  title: 'External Components/CustomIcon',
  component: CustomIcon,
  args: {
    ...mockCustomIcon,
  },
  argTypes: {
    name: {
      control: 'select',
      options: [...CI_nameOpt],
    },
    size: {
      control: 'select',
      options: [...CI_sizeOpt],
    },
    className: {
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof CustomIcon>;

export const Default: Story = {};

export const Small: Story = {
  args: {
    ...mockCustomIcon,
    size: CI_sizeOpt[0] as CI_sizeType,
  },
};

export const Medium: Story = {
  args: {
    ...mockCustomIcon,
    size: 'md' as CI_sizeType,
  },
};

export const Large: Story = {
  args: {
    ...mockCustomIcon,
    size: 'lg' as CI_sizeType,
  },
};

export const ExtraLarge: Story = {
  args: {
    ...mockCustomIcon,
    size: 'xl' as CI_sizeType,
  },
};
