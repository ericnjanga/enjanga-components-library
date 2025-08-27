import type { Meta, StoryObj } from '@storybook/react';
import SmartText from '../../../components/SmartText/SmartText';
import { mockRichTextSmall } from '@/mockData/mockRichText';
import { argTypesSmartTextStories } from '@/mockData/stories/argTypes';
import {
  argsSmartTextPlain,
  argsSmartTextRich,
} from '@/mockData/stories/args/argsSmartText';

const meta: Meta<typeof SmartText> = {
  title: 'External Components/SmartText',
  component: SmartText,
  args: {
    ...argsSmartTextPlain,
  },
  argTypes: {
    ...argTypesSmartTextStories,
  },
};

export default meta;

type Story = StoryObj<typeof SmartText>;

export const WithPlainText: Story = {};

export const WithRichText: Story = {
  args: {
    ...argsSmartTextRich,
  },
};

export const Empty: Story = {
  args: {
    plainText: undefined,
    richText: undefined,
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
      ...mockRichTextSmall.description,
    },
  },
};
