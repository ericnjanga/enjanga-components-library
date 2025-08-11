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
  CTL_LayoutStyleOpt,
  CTL_LayoutStyleType,
} from '@/components/CustomTile/lib/types';
import { mockCustomTile, mockTextLengthList } from '@/mockData/mixed';

const activeLang = 'en';

const meta: Meta<typeof CustomTile> = {
  title: 'External Components/CustomTile',
  component: CustomTile,
  argTypes: {
    layoutStyle: {
      control: 'select',
      options: [...CTL_LayoutStyleOpt],
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

  /**
   * Custom CSS class
   */
  /**
   * Layout direction for tile content
   * @default 'card'
   */

  /**
   * Maximum character count for title content
   * @remarks Truncates with ellipsis if exceeded
   */

  /**
   * Maximum character count for blurb content
   * @remarks Truncates with ellipsis if exceeded
   */

  /**
   * Icon identifier (matches CustomIcon component)
   * @see {@link CI_nameType}
   */

  /**
   * Enables modal behavior when tile is clicked. If "true", "title" and "text" props will be rendered as modal content.
   * @remarks Modal content will show the tile's title and text
   */

  /**
   * Primary heading text
   * @required
   */

  /**
   * Descriptive content text
   * @required
   */

  /**
   * Modal main content text (in string format)
   * @required
   */

  /**
   * Modal main content text (in rich format from a headless CMS like ContentFul)
   * @required
   */

  /**
   * Destination URL/path when tile is clickable
   * @remarks Requires either linksTo or showsModal
   */

  /**
   * Link target behavior
   * @default '_self'
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#target}
   */
};

export default meta;
type Story = StoryObj<typeof CustomTile>;

export const Default: Story = {};

// export const VerticalNoIconNoImgNoLinking: Story = {};

export const VerticalIconNoImgNoLinking: Story = {
  args: {
    ...mockCustomTile,
    iconName: 'Hills' as CI_nameType,
  },
};

export const HorizontalNoIconNoImgNoLinking: Story = {
  args: {
    ...mockCustomTile,
    layoutStyle: 'banner' as CTL_LayoutStyleType,
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
    layoutStyle: 'banner' as CTL_LayoutStyleType,
    // The animated skeleton will show up if "title" or "blurb" props are undefined
  },
};

export const OpensExternalLinkUp: Story = {
  args: {
    ...mockCustomTile,
    linksTo: 'https://carbondesignsystem.com',
    linkTarget: '_blank' as CTL_LinkTargetType,
  },
};

export const OpensLocalLinkUp: Story = {
  args: {
    ...mockCustomTile,
    linksTo: 'link/param',
  },
};

export const OpensModalUpWithPlainText: Story = {
  args: {
    ...mockCustomTile,
    // The modal will display plain text
    plainDescription:
      'Marzipan halvah topping chocolate bonbon chocolate cake cupcake jujubes. Soufflé tiramisu gummies brownie bonbon. Dragée lemon drops jelly-o powder marzipan chocolate cake candy canes pastry. Tiramisu apple pie halvah tootsie roll apple pie. Chocolate pie gummi bears danish wafer cake shortbread. Dessert cake lemon drops toffee apple pie. Donut lemon drops caramels oat cake sweet roll chupa chups cake carrot cake. Muffin cake wafer cheesecake tart cotton candy jelly.',
    richDescription: undefined, // Must remain undefined when "plainDescription" is specified
    // TypeScript will be raise if both props are specified (See CTL_propsType1Validation for more info)
    showsModal: true,
    linkTarget: undefined, // Must remain undefined when "showsModal" is specified
    // TypeScript will be raise if both props are specified (See CTL_propsType1Validation for more info)
  },
};

export const OpensModalUpWithRichText: Story = {
  args: {
    ...mockCustomTile,
    // The modal will display rich text
    plainDescription: undefined, // Must remain undefined when "plainDescription" is specified
    richDescription: project?.data[activeLang]?.description,
    // TypeScript will be raise if both props are specified (See CTL_propsType1Validation for more info)
    showsModal: true,
    linkTarget: undefined, // Must remain undefined when "showsModal" is specified
    // TypeScript will be raise if both props are specified (See CTL_propsType1Validation for more info)
  },
};

// /**
//  * Props validation errors
//  * ---------------
//  */
export const ErrorsPropsValidation1: Story = {
  args: {
    ...mockCustomTile,
    // An error will be thrown because both "plainDescription" and "richDescription" have been provided

    plainDescription:
      'Marzipan halvah topping chocolate bonbon chocolate cake cupcake jujubes. Soufflé tiramisu gummies brownie bonbon. Dragée lemon drops jelly-o powder marzipan chocolate cake candy canes pastry. Tiramisu apple pie halvah tootsie roll apple pie. Chocolate pie gummi bears danish wafer cake shortbread. Dessert cake lemon drops toffee apple pie. Donut lemon drops caramels oat cake sweet roll chupa chups cake carrot cake. Muffin cake wafer cheesecake tart cotton candy jelly.',
    richDescription: project?.data[activeLang]?.description,
    showsModal: true,
    linkTarget: undefined,
  },
};

export const ErrorsPropsValidation2: Story = {
  args: {
    ...mockCustomTile,
    // An error will be thrown because both "plainDescription" and "richDescription" have been provided
    plainDescription:
      'Marzipan halvah topping chocolate bonbon chocolate cake cupcake jujubes. Soufflé tiramisu gummies brownie bonbon. Dragée lemon drops jelly-o powder marzipan chocolate cake candy canes pastry. Tiramisu apple pie halvah tootsie roll apple pie. Chocolate pie gummi bears danish wafer cake shortbread. Dessert cake lemon drops toffee apple pie. Donut lemon drops caramels oat cake sweet roll chupa chups cake carrot cake. Muffin cake wafer cheesecake tart cotton candy jelly.',
    richDescription: undefined,
    linksTo: 'https://carbondesignsystem.com',
    linkTarget: '_blank' as CTL_LinkTargetType,
    showsModal: true,
  },
};
