import type { Meta, StoryObj } from '@storybook/react';
import CustomTile from '../../../components/CustomTile/CustomTile';
import { Grid, Column } from '@carbon/react';
import { CI_nameOpt, CI_nameType } from '@/components/CustomIcon/libs/types';
import {
  CTL_LinkTargetType,
  CTL_LinkTargetOpt,
} from '@/components/CustomTile/lib/types';
import { project } from '@/mockData/project';
import {
  CTL_StackOrderOpt,
  CTL_StackOrderType,
} from '@/components/CustomTile/lib/types';
import { mockCustomTile, mockTextLengthList } from '@/mockData/mixed';

const activeLang = 'en';

const meta: Meta<typeof CustomTile> = {
  title: 'External Components/CustomTile',
  component: CustomTile,
  argTypes: {
    stackOrder: {
      control: 'select',
      options: [...CTL_StackOrderOpt],
    },
    titleLength: {
      control: 'select',
      options: [...mockTextLengthList],
    },
    blurbLength: {
      control: 'select',
      options: [...mockTextLengthList],
    },
    iconName: {
      control: 'select',
      options: ['...', ...CI_nameOpt],
    },
    linkTarget: {
      control: 'select',
      options: [...CTL_LinkTargetOpt],
    },
    showsModal: {
      control: 'select',
      options: [true, false],
    },
  },
  args: {
    ...mockCustomTile,
  },
};

export default meta;
type Story = StoryObj<typeof CustomTile>;

export const Default: Story = {};

// export const VerticalNoIconNoImgNoLinking: Story = {};

// export const VerticalIconNoImgNoLinking: Story = {
//   args: {
//     ...mockCustomTile,
//     iconName: 'Hills' as CI_nameType,
//   },
// };

// export const HorizontalNoIconNoImgNoLinking: Story = {
//   args: {
//     ...mockCustomTile,
//     stackOrder: 'horizontal' as CTL_StackOrderType,
//   },
// };

// export const SkeletonVerticalNoIconNoImg: Story = {
//   args: {
//     title: undefined,
//     blurb: undefined,
//     // The animated skeleton will show up if "title" or "blurb" props are undefined
//   },
// };

// export const SkeletonHorizontalNoIconNoImg: Story = {
//   args: {
//     title: undefined,
//     blurb: undefined,
//     stackOrder: 'horizontal' as CTL_StackOrderType,
//     // The animated skeleton will show up if "title" or "blurb" props are undefined
//   },
// };

// export const OpensExternalLinkUp: Story = {
//   args: {
//     ...mockCustomTile,
//     linksTo: 'https://carbondesignsystem.com',
//     linkTarget: '_blank' as CTL_LinkTargetType,
//   },
// };

// export const OpensLocalLinkUp: Story = {
//   args: {
//     ...mockCustomTile,
//     linksTo: 'link/param',
//   },
// };

// export const OpensModalUpWithPlainText: Story = {
//   args: {
//     ...mockCustomTile,
//     // The modal will display plain text
//     plainDescription:
//       'Marzipan halvah topping chocolate bonbon chocolate cake cupcake jujubes. Soufflé tiramisu gummies brownie bonbon. Dragée lemon drops jelly-o powder marzipan chocolate cake candy canes pastry. Tiramisu apple pie halvah tootsie roll apple pie. Chocolate pie gummi bears danish wafer cake shortbread. Dessert cake lemon drops toffee apple pie. Donut lemon drops caramels oat cake sweet roll chupa chups cake carrot cake. Muffin cake wafer cheesecake tart cotton candy jelly.',
//     richDescription: undefined, // Must remain undefined when "plainDescription" is specified
//     // TypeScript will be raise if both props are specified (See CTL_propsType1Validation for more info)
//     showsModal: true,
//     linkTarget: undefined, // Must remain undefined when "showsModal" is specified
//     // TypeScript will be raise if both props are specified (See CTL_propsType1Validation for more info)
//   },
// };

// export const OpensModalUpWithRichText: Story = {
//   args: {
//     ...mockCustomTile,
//     // The modal will display rich text
//     plainDescription: undefined, // Must remain undefined when "plainDescription" is specified
//     richDescription: project?.data[activeLang]?.description,
//     // TypeScript will be raise if both props are specified (See CTL_propsType1Validation for more info)
//     showsModal: true,
//     linkTarget: undefined, // Must remain undefined when "showsModal" is specified
//     // TypeScript will be raise if both props are specified (See CTL_propsType1Validation for more info)
//   },
// };

// /**
//  * Props validation errors
//  * ---------------
//  */
// export const ErrorsPropsValidation1: Story = {
//   args: {
//     ...mockCustomTile,
//     // An error will be thrown because both "plainDescription" and "richDescription" have been provided

//     plainDescription:
//       'Marzipan halvah topping chocolate bonbon chocolate cake cupcake jujubes. Soufflé tiramisu gummies brownie bonbon. Dragée lemon drops jelly-o powder marzipan chocolate cake candy canes pastry. Tiramisu apple pie halvah tootsie roll apple pie. Chocolate pie gummi bears danish wafer cake shortbread. Dessert cake lemon drops toffee apple pie. Donut lemon drops caramels oat cake sweet roll chupa chups cake carrot cake. Muffin cake wafer cheesecake tart cotton candy jelly.',
//     richDescription: project?.data[activeLang]?.description,
//     showsModal: true,
//     linkTarget: undefined,
//   },
// };

// export const ErrorsPropsValidation2: Story = {
//   args: {
//     ...mockCustomTile,
//     // An error will be thrown because both "plainDescription" and "richDescription" have been provided
//     plainDescription:
//       'Marzipan halvah topping chocolate bonbon chocolate cake cupcake jujubes. Soufflé tiramisu gummies brownie bonbon. Dragée lemon drops jelly-o powder marzipan chocolate cake candy canes pastry. Tiramisu apple pie halvah tootsie roll apple pie. Chocolate pie gummi bears danish wafer cake shortbread. Dessert cake lemon drops toffee apple pie. Donut lemon drops caramels oat cake sweet roll chupa chups cake carrot cake. Muffin cake wafer cheesecake tart cotton candy jelly.',
//     richDescription: undefined,
//     linksTo: 'https://carbondesignsystem.com',
//     linkTarget: '_blank' as CTL_LinkTargetType,
//     showsModal: true,
//   },
// };
