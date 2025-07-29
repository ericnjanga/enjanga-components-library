import type { Meta, StoryObj } from '@storybook/react';
import Banner from '../../../components/Banner/Banner';
import { infoBlock } from '@/mockData/infoBlock';

const meta: Meta<typeof Banner> = {
  title: 'External Components/Banner',
  component: Banner,
  tags: [], // Keep this enabled
  argTypes: {
    isHuge: {
      control: 'select',
      options: [true, false],
    },
    showPlainDescription: {
      control: 'select',
      options: [true, false],
    },
    showRichDescription: {
      control: 'select',
      options: [true, false],
    },
    title: { control: 'text' },
    plainDescription: { control: 'text' },
    richDescription: { control: 'object' },
    className: { control: 'text' },
  },
  args: {
    isHuge: false,
    showPlainDescription: false,
    showRichDescription: false,
    title: 'Toffee jujubes candy jujubes bears',
    plainDescription: `Gingerbread cupcake candy canes sugar plum I love soufflé. Jelly beans sweet roll shortbread wafer shortbread. Shortbread caramels I love I love bear claw jelly beans. Danish liquorice halvah brownie I love cookie dessert brownie jelly beans.`,
    richDescription: {
      ...infoBlock.description,
    },
    className: '',
  },
};

export default meta;

type Story = StoryObj<typeof Banner>;

export const SmallBanner: Story = {};

export const SmallBannerWithPlainDescription: Story = {
  args: {
    showPlainDescription: true,
  },
};

export const SmallBannerWithRichDescription: Story = {
  args: {
    showRichDescription: true,
  },
};

export const hugeBanner: Story = {
  args: {
    isHuge: true,
  },
};

export const hugeBannerWithPlainDescription: Story = {
  args: {
    isHuge: true,
    showPlainDescription: true,
  },
};

export const hugeBannerWithRichDescription: Story = {
  args: {
    isHuge: true,
    showRichDescription: true,
  },
};

export const smallBannerSkeleton: Story = {
  args: {
    title: undefined,
  },
};

export const smallBannerSkeletonWithDescription: Story = {
  args: {
    title: undefined,
    showPlainDescription: true, // || showRichDescription (either or both)
  },
};

export const hugeBannerSkeleton: Story = {
  args: {
    isHuge: true,
    title: undefined,
  },
};

export const hugeBannerSkeletonWithDescription: Story = {
  args: {
    isHuge: true,
    title: undefined,
    showPlainDescription: true, // || showRichDescription (either or both)
  },
};

// export const SkeletonLoaderDefault: Story = {
//   args: {
//     title: undefined,
//     // The animated skeleton will show up if "title" props are undefined
//   },
// };

// export const SkeletonLoaderDefaultNoSubtitle: Story = {
//   args: {
//     title: undefined,
//     description: `none`,
//     // The animated skeleton will show up if "title" props are undefined
//   },
// };

// export const SkeletonLoaderSmall: Story = {
//   args: {
//     title: undefined,
//     isHuge: false,
//     // The animated skeleton will show up if "title" props are undefined
//   },
// };

// export const SkeletonLoaderSmallNoSubtitle: Story = {
//   args: {
//     title: undefined,
//     isHuge: false,
//     description: `none`,
//     // The animated skeleton will show up if "title" props are undefined
//   },
// };
