import type { Meta, StoryObj } from '@storybook/react';
import SmartText from '../../../components/SmartText/SmartText';
import { mockRichText } from '@/mockData/mockRichText';
import { classNameStoryArgType } from '@/mockData/stories/argTypes';

const meta: Meta<typeof SmartText> = {
  title: 'External Components/SmartText',
  component: SmartText,
  args: {
    className: '',
    plainText: `Gingerbread cupcake candy canes sugar plum I love soufflé. Jelly beans sweet roll shortbread wafer shortbread. Shortbread caramels I love I love bear claw jelly beans. Danish liquorice halvah brownie I love cookie dessert brownie jelly beans.`,
    richText: undefined,
  },
  argTypes: {
    ...classNameStoryArgType,
    plainText: { control: 'text' },
    richText: { control: 'object' },
  },
};

export default meta;

type Story = StoryObj<typeof SmartText>;

export const WithPlainText: Story = {};

export const WithRichText: Story = {
  args: {
    plainText: undefined,
    richText: {
      ...mockRichText.description,
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
      ...mockRichText.description,
    },
  },
};
export const ErrorsPropsValidation2: Story = {
  args: {
    plainText: undefined,
    richText: undefined,
  },
};
