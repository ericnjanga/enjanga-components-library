import type { Meta, StoryObj } from '@storybook/react';
import CustomPictogram from '@/components/CustomPictogram/CustomPictogram';
import {
  CP_nameOpt,
  CP_nameType,
  CP_sizeOpt,
  CP_sizeType,
} from '@/components/CustomPictogram/libs/types';
import { mockCustomPictogram } from '@/mockData/mixed';
import { classNameStoryArgType } from '@/mockData/stories/argTypes';

const meta: Meta<typeof CustomPictogram> = {
  title: 'External Components/CustomPictogram',
  component: CustomPictogram,
  args: {
    ...mockCustomPictogram,
  },
  argTypes: {
    ...classNameStoryArgType,
    name: {
      control: 'select',
      options: [...CP_nameOpt],
    },
    size: {
      control: 'select',
      options: [...CP_sizeOpt],
    },
  },
};

export default meta;

type Story = StoryObj<typeof CustomPictogram>;

export const Default: Story = {};

export const Small: Story = {
  args: {
    ...mockCustomPictogram,
    size: CP_sizeOpt[0] as CP_sizeType,
  },
};

export const Medium: Story = {
  args: {
    ...mockCustomPictogram,
    size: 'md' as CP_sizeType,
  },
};

export const Large: Story = {
  args: {
    ...mockCustomPictogram,
    size: 'lg' as CP_sizeType,
  },
};

export const ExtraLarge: Story = {
  args: {
    ...mockCustomPictogram,
    size: 'xl' as CP_sizeType,
  },
};
