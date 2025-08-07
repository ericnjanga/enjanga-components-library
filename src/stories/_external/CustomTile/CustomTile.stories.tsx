import type { Meta, StoryObj } from '@storybook/react';
import CustomTile from '../../../components/CustomTile/CustomTile';
import { Grid, Column } from '@carbon/react';
import { customIconsList } from '../../../components/CustomIcon/CustomIcon';
import {
  CustomTileStackOrder,
  LinkTargetType,
  LinkTargetList,
} from '@/components/CustomTile/parts/ct-types';
import { project } from '@/mockData/project';

const activeLang = 'en';
const sharedArgs = {
  stackOrder: 'vertical' as CustomTileStackOrder['name'],
  titleLength: 50,
  blurbLength: 300,
  iconName: undefined,
  linksTo: undefined,
  linkTarget: '_self' as LinkTargetType['name'],
  showsModal: undefined,
  title:
    'Dragée lemon drops jelly-o powder marzipan chocolate cake candy Marzipan halvah topping chocolate bonbon chocolate cake cupcake jujubes.',
  blurb:
    'Marzipan halvah topping chocolate bonbon chocolate cake cupcake jujubes. Soufflé tiramisu gummies brownie bonbon. Dragée lemon drops jelly-o powder marzipan chocolate cake candy canes pastry. Tiramisu apple pie halvah tootsie roll apple pie. Chocolate pie gummi bears danish wafer cake shortbread. Dessert cake lemon drops toffee apple pie. Donut lemon drops caramels oat cake sweet roll chupa chups cake carrot cake. Muffin cake wafer cheesecake tart cotton candy jelly.',
  plainDescription: undefined,
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
    blurbLength: {
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
    blurb: undefined,
    // The animated skeleton will show up if "title" or "blurb" props are undefined
  },
};

export const SkeletonHorizontalNoIconNoImg: Story = {
  args: {
    title: undefined,
    blurb: undefined,
    stackOrder: 'horizontal',
    // The animated skeleton will show up if "title" or "blurb" props are undefined
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

export const OpensModalUpWithPlainText: Story = {
  args: {
    ...sharedArgs,
    // The modal will display plain text
    plainDescription:
      'Marzipan halvah topping chocolate bonbon chocolate cake cupcake jujubes. Soufflé tiramisu gummies brownie bonbon. Dragée lemon drops jelly-o powder marzipan chocolate cake candy canes pastry. Tiramisu apple pie halvah tootsie roll apple pie. Chocolate pie gummi bears danish wafer cake shortbread. Dessert cake lemon drops toffee apple pie. Donut lemon drops caramels oat cake sweet roll chupa chups cake carrot cake. Muffin cake wafer cheesecake tart cotton candy jelly.',
    richDescription: undefined, // Must remain undefined when "plainDescription" is specified
    // TypeScript will be raise if both props are specified (See CustomTileProps1Validation for more info)
    showsModal: true,
    linkTarget: undefined, // Must remain undefined when "showsModal" is specified
    // TypeScript will be raise if both props are specified (See CustomTileProps1Validation for more info)
  },
};

export const OpensModalUpWithRichText: Story = {
  args: {
    ...sharedArgs,
    // The modal will display rich text
    plainDescription: undefined, // Must remain undefined when "plainDescription" is specified
    richDescription: project?.data[activeLang]?.description,
    // TypeScript will be raise if both props are specified (See CustomTileProps1Validation for more info)
    showsModal: true,
    linkTarget: undefined, // Must remain undefined when "showsModal" is specified
    // TypeScript will be raise if both props are specified (See CustomTileProps1Validation for more info)
  },
};

/**
 * Props validation errors
 * ---------------
 */
export const ErrorsModalProps: Story = {
  args: {
    ...sharedArgs,
    // An error will be thrown because both "plainDescription" and "richDescription" have been provided

    plainDescription:
      'Marzipan halvah topping chocolate bonbon chocolate cake cupcake jujubes. Soufflé tiramisu gummies brownie bonbon. Dragée lemon drops jelly-o powder marzipan chocolate cake candy canes pastry. Tiramisu apple pie halvah tootsie roll apple pie. Chocolate pie gummi bears danish wafer cake shortbread. Dessert cake lemon drops toffee apple pie. Donut lemon drops caramels oat cake sweet roll chupa chups cake carrot cake. Muffin cake wafer cheesecake tart cotton candy jelly.',
    richDescription: project?.data[activeLang]?.description,
    showsModal: true,
    linkTarget: undefined,
  },
};

export const ErrorsLinkAndModalProps: Story = {
  args: {
    ...sharedArgs,
    // An error will be thrown because both "plainDescription" and "richDescription" have been provided
    plainDescription:
      'Marzipan halvah topping chocolate bonbon chocolate cake cupcake jujubes. Soufflé tiramisu gummies brownie bonbon. Dragée lemon drops jelly-o powder marzipan chocolate cake candy canes pastry. Tiramisu apple pie halvah tootsie roll apple pie. Chocolate pie gummi bears danish wafer cake shortbread. Dessert cake lemon drops toffee apple pie. Donut lemon drops caramels oat cake sweet roll chupa chups cake carrot cake. Muffin cake wafer cheesecake tart cotton candy jelly.',
    richDescription: undefined,
    linksTo: 'https://carbondesignsystem.com',
    linkTarget: '_blank' as LinkTargetType['name'],
    showsModal: true,
  },
};
