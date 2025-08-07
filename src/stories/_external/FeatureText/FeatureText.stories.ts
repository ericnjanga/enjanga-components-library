import type { Meta, StoryObj } from '@storybook/react';
import FeatureText from '../../../components/FeatureText/FeatureText';
import { infoBlock } from '@/mockData/infoBlock';

const meta: Meta<typeof FeatureText> = {
  title: 'External Components/FeatureText',
  component: FeatureText,
  args: {
    className: '',
    title: `Jelly beans sweet roll shortbread wafer shortbread. Shortbread caramels I love I love bear claw jelly beans.`,
    plainText: `Gingerbread cupcake candy canes sugar plum I love soufflé. Jelly beans sweet roll shortbread wafer shortbread. Shortbread caramels I love I love bear claw jelly beans. Danish liquorice halvah brownie I love cookie dessert brownie jelly beans.`,
    richText: undefined,
    titleLength: 50,
    blurbLength: 300,
  },
  argTypes: {
    className: { control: 'text' },
    title: { control: 'text' },
    plainText: { control: 'text' },
    richText: { control: 'object' },
    titleLength: {
      control: 'select',
      options: [50, 100, 200, 300, 500, 1000],
    },
    blurbLength: {
      control: 'select',
      options: [50, 100, 200, 300, 500, 1000],
    },
  },
};

export default meta;

type Story = StoryObj<typeof FeatureText>;

export const WithPlainText: Story = {};

export const WithRichText: Story = {
  args: {
    plainText: undefined,
    richText: {
      ...infoBlock.description,
    },
  },
};

/**
 * Props validation errors
 * ---------------
 */
export const ErrorsPropsValidation1: Story = {
  args: {
    plainText:
      'Marzipan halvah topping chocolate bonbon chocolate cake cupcake jujubes. Soufflé tiramisu gummies brownie bonbon. Dragée lemon drops jelly-o powder marzipan chocolate cake candy canes pastry. Tiramisu apple pie halvah tootsie roll apple pie. Chocolate pie gummi bears danish wafer cake shortbread. Dessert cake lemon drops toffee apple pie. Donut lemon drops caramels oat cake sweet roll chupa chups cake carrot cake. Muffin cake wafer cheesecake tart cotton candy jelly.',
    richText: {
      ...infoBlock.description,
    },
  },
};
export const ErrorsPropsValidation2: Story = {
  args: {
    plainText: undefined,
    richText: undefined,
  },
};
