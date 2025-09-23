import type { Meta, StoryObj } from '@storybook/react';
import { quoteSamples } from '@/mockData/mixed';
import { CustomQuotes } from '../../../components/CustomQuotes';

const meta: Meta<typeof CustomQuotes> = {
  title: 'External Components/CustomQuotes',
  component: CustomQuotes,
  args: {
    quotes: [
      ...quoteSamples
    ],
    rotationTimer: 2
  },
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional CSS class name'
    },
    quotes: {
      control: 'object',
      description: 'Array of quotes to display and rotate through'
    },
    rotationTimer: {
      control: { type: 'number', min: 1, max: 60, step: 1 },
      description: 'Rotation interval in minutes'
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'A component that displays rotating quotes with configurable timing. Quotes never repeat consecutively.'
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof CustomQuotes>;

export const Default: Story = {};

export const WithCustomTimer: Story = {
  args: {
    rotationTimer: 5 // 5 minutes rotation
  }
};

export const SingleQuote: Story = {
  args: {
    quotes: ["Only one quote available - no rotation will occur."]
  }
};

export const ManyQuotes: Story = {
  args: {
    quotes: [
      "Quote 1",
      "Quote 2", 
      "Quote 3",
      "Quote 4",
      "Quote 5",
      "Quote 6",
      "Quote 7",
      "Quote 8"
    ],
    rotationTimer: 1 // Rotate every minute
  }
};

export const WithCustomClassName: Story = {
  args: {
    className: 'my-custom-quotes-class'
  }
};

export const EmptyQuotes: Story = {
  args: {
    quotes: []
  }
};