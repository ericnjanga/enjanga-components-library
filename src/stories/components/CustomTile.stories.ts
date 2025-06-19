import type { Meta, StoryObj } from '@storybook/react';
import CustomTile from '../../components/CustomTile/CustomTile';
import type { CustomIconProps } from '../../components/CustomIcon';

const meta: Meta<typeof CustomTile> = {
  title: 'Components/CustomTile',
  component: CustomTile,
  argTypes: {
    iconName: {
      control: 'select',
      options: ['Hills', 'App Developer', 'Leadership'], // <-- your pictogram names
    }
  },
  args: {
    title: 'Default Tile Title',
    text: 'Marzipan halvah topping chocolate bonbon chocolate cake cupcake jujubes...',
    stackOrder: 'vertical'
  }
};

export default meta;
type Story = StoryObj<typeof CustomTile>;

export const Default: Story = {};

export const Horizontal: Story = {
  args: {
    stackOrder: 'horizontal'
  }
};

export const TrimmedText: Story = {
  args: {
    text: 'Short text example'
  }
};

export const WithIcon: Story = {
  args: {
    iconName: 'Hills', // default selected
    title: 'Tile with icon'
  }
};
