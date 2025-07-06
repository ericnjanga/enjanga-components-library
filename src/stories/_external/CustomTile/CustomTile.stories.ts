import type { Meta, StoryObj } from '@storybook/react';
import CustomTile from '../../../components/CustomTile/CustomTile';
import { customIconsList } from '../../../components/CustomIcon/CustomIcon';

const meta: Meta<typeof CustomTile> = {
  title: 'External Components/CustomTile',
  component: CustomTile,
  argTypes: {
    iconName: {
      control: 'select',
      options: [...customIconsList],
    },
  },
  args: {
    title: 'Dragée lemon drops jelly-o powder marzipan chocolate cake candy',
    text: 'Marzipan halvah topping chocolate bonbon chocolate cake cupcake jujubes. Soufflé tiramisu gummies brownie bonbon. Dragée lemon drops jelly-o powder marzipan chocolate cake candy canes pastry. Tiramisu apple pie halvah tootsie roll apple pie.',
    stackOrder: 'vertical',
  },
};

export default meta;
type Story = StoryObj<typeof CustomTile>;

export const Default: Story = {};

export const WithIcon: Story = {
  args: {
    iconName: 'Hills',
  },
};

export const VeryLongText: Story = {
  args: {
    title:
      'Dragée lemon drops jelly-o powder marzipan chocolate cake candy Marzipan halvah topping chocolate bonbon chocolate cake cupcake jujubes.',
    text: 'Marzipan halvah topping chocolate bonbon chocolate cake cupcake jujubes. Soufflé tiramisu gummies brownie bonbon. Dragée lemon drops jelly-o powder marzipan chocolate cake candy canes pastry. Tiramisu apple pie halvah tootsie roll apple pie. Chocolate pie gummi bears danish wafer cake shortbread. Dessert cake lemon drops toffee apple pie. Donut lemon drops caramels oat cake sweet roll chupa chups cake carrot cake. Muffin cake wafer cheesecake tart cotton candy jelly.',
  },
};

// export const TrimmedText: Story = {
//   args: {
//     text: 'Short text example',
//   },
// };

// export const WithIcon: Story = {
//   args: {
//     iconName: 'Hills', // default selected
//     title: 'Tile with icon',
//   },
// };
