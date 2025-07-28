import type { Meta, StoryObj } from '@storybook/react';
import Banner from '../../../components/Banner/Banner';

const meta: Meta<typeof Banner> = {
  title: 'External Components/Banner',
  component: Banner,
  tags: [], // Keep this enabled
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    isJumbtron: {
      control: 'select',
      options: [true, false],
    },
  },
  args: {
    title: 'Toffee jujubes candy jujubes bears',
    subtitle: `Gingerbread cupcake candy canes sugar plum I love soufflé.
                  Jelly beans sweet roll shortbread wafer shortbread. Shortbread
                  caramels I love I love bear claw jelly beans. Danish liquorice
                  halvah brownie I love cookie dessert brownie jelly beans.`,
    isJumbtron: true,
  },
};

export default meta;

type Story = StoryObj<typeof Banner>;

export const Default: Story = {};

export const DefaultNoSubtitle: Story = {
  args: {
    subtitle: `none`,
  },
};

export const SmallBanner: Story = {
  args: {
    isJumbtron: false,
    title: 'Toffee jujubes candy jujubes bears',
    subtitle: `Gingerbread cupcake candy canes sugar plum I love soufflé.
                  Jelly beans sweet roll shortbread wafer shortbread.`,
  },
};

export const SmallBannerNoSubtitle: Story = {
  args: {
    isJumbtron: false,
    title: 'Toffee jujubes candy jujubes bears',
    subtitle: `none`,
  },
};

export const SkeletonLoaderDefault: Story = {
  args: {
    title: undefined,
    // The animated skeleton will show up if "title" props are undefined
  },
};

export const SkeletonLoaderDefaultNoSubtitle: Story = {
  args: {
    title: undefined,
    subtitle: `none`,
    // The animated skeleton will show up if "title" props are undefined
  },
};

export const SkeletonLoaderSmall: Story = {
  args: {
    title: undefined,
    isJumbtron: false,
    // The animated skeleton will show up if "title" props are undefined
  },
};

export const SkeletonLoaderSmallNoSubtitle: Story = {
  args: {
    title: undefined,
    isJumbtron: false,
    subtitle: `none`,
    // The animated skeleton will show up if "title" props are undefined
  },
};
