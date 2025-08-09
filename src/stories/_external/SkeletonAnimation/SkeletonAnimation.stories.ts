import type { Meta, StoryObj } from '@storybook/react';
import { SkeletonAnimation } from '../../../components/SkeletonAnimation';
import {
  Sk_partType,
  Sk_partOpt,
} from '../../../components/SkeletonAnimation/libs/types';

const meta: Meta<typeof SkeletonAnimation> = {
  title: 'External Components/SkeletonAnimation',
  component: SkeletonAnimation,
  args: {
    className: '',
    part: Sk_partOpt[0] as Sk_partType,
  },
  argTypes: {
    className: {
      control: 'text',
      description: '',
    },
    part: {
      control: 'select',
      options: [...Sk_partOpt],
      description: '...',
    },
  },
  parameters: {
    docs: {
      description: {
        component: '...',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof SkeletonAnimation>;

export const Heading: Story = {};
export const Body: Story = {
  args: {
    part: 'body',
  },
};
export const List: Story = {
  args: {
    part: 'list',
  },
};
