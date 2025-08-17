import type { Meta, StoryObj } from '@storybook/react';
import Banner from '../../../components/Banner/Banner';
import { mockBanner } from '@/mockData/mixed';

const meta: Meta<typeof Banner> = {
  title: 'External Components/Banner',
  component: Banner,
  tags: [], // Keep this enabled
  argTypes: {
    title: { control: 'text' },
    plainDescription: { control: 'text' },
    richDescription: { control: 'object' },
    className: { control: 'text' },
    isHuge: {
      control: 'select',
      options: [true, false],
    },
    // showPlainDescription: {
    //   control: 'select',
    //   options: [true, false],
    // },
    // showRichDescription: {
    //   control: 'select',
    //   options: [true, false],
    // },
  },
  args: {
    ...mockBanner,
  },
};

export default meta;

type Story = StoryObj<typeof Banner>;

export const Default: Story = {};

// export const EmptySmallBanner: Story = {
//   args: {
//     title: undefined,
//   },
// };

// export const EmptySmallBannerWithDescription: Story = {
//   args: {
//     title: undefined,
//     showPlainDescription: true, // || showRichDescription (either or both)
//   },
// };

// export const EmptyHugeBanner: Story = {
//   args: {
//     isHuge: true,
//     title: undefined,
//   },
// };

// export const EmptyHugeBannerWithDescription: Story = {
//   args: {
//     isHuge: true,
//     title: undefined,
//     showPlainDescription: true, // || showRichDescription (either or both)
//   },
// };

// export const SmallBanner: Story = {};

// export const SmallBannerWithPlainDescription: Story = {
//   args: {
//     showPlainDescription: true,
//   },
// };

// export const SmallBannerWithRichDescription: Story = {
//   args: {
//     showRichDescription: true,
//   },
// };

// export const hugeBanner: Story = {
//   args: {
//     isHuge: true,
//   },
// };

// export const hugeBannerWithPlainDescription: Story = {
//   args: {
//     isHuge: true,
//     showPlainDescription: true,
//   },
// };

// export const hugeBannerWithRichDescription: Story = {
//   args: {
//     isHuge: true,
//     showRichDescription: true,
//   },
// };
// /**
//  * Props validation errors
//  * ---------------
//  */
// export const ErrorsPropsValidation1: Story = {
//   args: {
//     plainText:
//       'Marzipan halvah topping chocolate bonbon chocolate cake cupcake jujubes. Soufflé tiramisu gummies brownie bonbon. Dragée lemon drops jelly-o powder marzipan chocolate cake candy canes pastry. Tiramisu apple pie halvah tootsie roll apple pie. Chocolate pie gummi bears danish wafer cake shortbread. Dessert cake lemon drops toffee apple pie. Donut lemon drops caramels oat cake sweet roll chupa chups cake carrot cake. Muffin cake wafer cheesecake tart cotton candy jelly.',
//     richText: {
//       ...mockRichText.description,
//     },
//   },
// };
// export const ErrorsPropsValidation2: Story = {
//   args: {
//     plainText: undefined,
//     richText: undefined,
//   },
// };
