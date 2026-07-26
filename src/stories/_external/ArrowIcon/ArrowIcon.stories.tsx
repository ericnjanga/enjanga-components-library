import type { Meta, StoryObj } from '@storybook/react';
import { ArrowIcon } from '../../../components/ArrowIcon/ArrowIcon';
import { argsArrowIcon } from '@/libs/mockData/stories/args/argsArrowIcon';
import { argTypesArrowIconStories } from '@/libs/mockData/stories/argTypes';

const meta: Meta<typeof ArrowIcon> = {
  title: 'External Components/ArrowIcon',
  component: ArrowIcon,
  args: {
    ...argsArrowIcon,
  },
  argTypes: {
    ...argTypesArrowIconStories,
  },
};

export default meta;

type Story = StoryObj<typeof ArrowIcon>;

export const Default: Story = {};

export const UpRight: Story = {
  args: {
    ...argsArrowIcon,
    title: 'Arrow facing up and right',
    name: 'UpRight',
  },
};
