import type { Meta, StoryObj } from '@storybook/react';
import FeatureText from '../../../components/FeatureText/FeatureText';
import { mockRichText } from '@/mockData/mockRichText';
import { mockFeatureText } from '@/mockData/mixed';
import {
  headingStoryArgTypes,
  classNameStoryArgType,
  smartTextStoryArgTypes,
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
    ...smartTextStoryArgTypes,
  },
};

export default meta;

type Story = StoryObj<typeof FeatureText>;

export const WithPlainText: Story = {};

export const WithRichText: Story = {
  args: {
    ...mockFeatureText,
    smartText: {
      ...mockFeatureText.smartText,
      plainText: undefined,
      richText: mockRichText.description,
    },
  },
};

/**
 * Props validation errors
 * ---------------
 */
// Both plainText and richText props are privided ...
export const ErrorsPropsValidation1: Story = {
  args: {
    ...mockFeatureText,
    smartText: {
      ...mockFeatureText.smartText,
      richText: mockRichText.description,
    },
  },
};

// None of plainText and richText props are privided ...
export const ErrorsPropsValidation2: Story = {
  args: {
    ...mockFeatureText,
    smartText: {
      plainText: undefined,
      richText: undefined,
    },
  },
};
