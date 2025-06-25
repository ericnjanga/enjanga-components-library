import type { Meta, StoryObj } from '@storybook/react';
import { BrandLogo } from '../../components/BrandLogo';

const meta: Meta<typeof BrandLogo> = {
  title: 'External Components/BrandLogo',
  component: BrandLogo,
};

export default meta;
type Story = StoryObj<typeof BrandLogo>;

export const Default: Story = {};
