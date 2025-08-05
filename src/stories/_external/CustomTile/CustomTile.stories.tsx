import type { Meta, StoryObj } from '@storybook/react';
import CustomTile from '../../../components/CustomTile/CustomTile';
import { Grid, Column } from '@carbon/react';
import { customIconsList } from '../../../components/CustomIcon/CustomIcon';
import {
  CustomTileStackOrder,
  LinkTargetType,
  LinkTargetList,
} from '@/components/CustomTile/parts/ct-types';

const sharedArgs = {
  stackOrder: 'vertical' as CustomTileStackOrder['name'],
  titleLength: 50,
  textLength: 300,
  iconName: undefined,
  linksTo: undefined,
  linkTarget: '_self' as LinkTargetType['name'],
  showsModal: undefined,
  title:
    'Dragée lemon drops jelly-o powder marzipan chocolate cake candy Marzipan halvah topping chocolate bonbon chocolate cake cupcake jujubes.',
  text: 'Marzipan halvah topping chocolate bonbon chocolate cake cupcake jujubes. Soufflé tiramisu gummies brownie bonbon. Dragée lemon drops jelly-o powder marzipan chocolate cake candy canes pastry. Tiramisu apple pie halvah tootsie roll apple pie. Chocolate pie gummi bears danish wafer cake shortbread. Dessert cake lemon drops toffee apple pie. Donut lemon drops caramels oat cake sweet roll chupa chups cake carrot cake. Muffin cake wafer cheesecake tart cotton candy jelly.',
};

const meta: Meta<typeof CustomTile> = {
  title: 'External Components/CustomTile',
  component: CustomTile,
  argTypes: {
    stackOrder: {
      control: 'select',
      options: ['vertical', 'horizontal'],
    },
    titleLength: {
      control: 'select',
      options: [50, 100, 200, 300, 500, 1000],
    },
    textLength: {
      control: 'select',
      options: [50, 100, 200, 300, 500, 1000],
    },
    iconName: {
      control: 'select',
      options: ['...', ...customIconsList],
    },
    linkTarget: {
      control: 'select',
      options: [...LinkTargetList],
    },
    showsModal: {
      control: 'select',
      options: [true, false],
    },
  },
  args: {
    ...sharedArgs,
  },
};

export default meta;
type Story = StoryObj<typeof CustomTile>;

export const VerticalNoIconNoImgNoLinking: Story = {};

export const VerticalIconNoImgNoLinking: Story = {
  args: {
    ...sharedArgs,
    iconName: 'Hills',
  },
};

export const HorizontalNoIconNoImgNoLinking: Story = {
  args: {
    ...sharedArgs,
    stackOrder: 'horizontal',
  },
};

export const SkeletonVerticalNoIconNoImg: Story = {
  args: {
    title: undefined,
    text: undefined,
    // The animated skeleton will show up if "title" or "text" props are undefined
  },
};

export const SkeletonHorizontalNoIconNoImg: Story = {
  args: {
    title: undefined,
    text: undefined,
    stackOrder: 'horizontal',
    // The animated skeleton will show up if "title" or "text" props are undefined
  },
};

export const OpensExternalLinkUp: Story = {
  args: {
    ...sharedArgs,
    linksTo: 'https://carbondesignsystem.com',
    linkTarget: '_blank' as LinkTargetType['name'],
  },
};

export const OpensLocalLinkUp: Story = {
  args: {
    ...sharedArgs,
    linksTo: 'link/param',
  },
};

export const OpensModalUp: Story = {
  args: {
    ...sharedArgs,
    // TypeScript will flag this as an error unless we nullify this prop
    // (See CustomTileExclusiveProps for more info)
    linkTarget: undefined,
    showsModal: true,
  },
};
