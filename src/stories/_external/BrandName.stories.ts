import type { Meta, StoryObj } from '@storybook/react';
import { BrandName } from '../../components/BrandName';

const meta: Meta<typeof BrandName> = {
  title: 'External Components/BrandName',
  component: BrandName,
};

export default meta;
type Story = StoryObj<typeof BrandName>;

export const Default: Story = {};
