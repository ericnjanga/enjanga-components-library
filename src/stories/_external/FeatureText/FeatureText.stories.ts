import type { Meta, StoryObj } from '@storybook/react';
import FeatureText from '../../../components/FeatureText/FeatureText';
import { mockRichText } from '@/mockData/mockRichText';
import { mockFeatureText, mockTextLengthList } from '@/mockData/mixed';
import {
  headingStoryArgTypes,
  classNameStoryArgType,
} from '@/mockData/stories/argTypes';

const meta: Meta<typeof FeatureText> = {
  title: 'External Components/FeatureText',
  component: FeatureText,
  args: {
    ...mockFeatureText,
  },
  argTypes: {
    ...classNameStoryArgType,
    ...headingStoryArgTypes,
    plainText: { control: 'text' },
    richText: { control: 'object' },
    blurbMaxLength: {
      control: 'select',
      options: [...mockTextLengthList],
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
