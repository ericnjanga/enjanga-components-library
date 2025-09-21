import type { Meta, StoryObj } from '@storybook/react';
import { CustomTabs } from '../../../components/CustomTabs';

const meta: Meta<typeof CustomTabs> = {
  title: 'External Components/CustomTabs',
  component: CustomTabs,
  args: {},
};

export default meta;
type Story = StoryObj<typeof CustomTabs>;

export const Default: Story = {};
