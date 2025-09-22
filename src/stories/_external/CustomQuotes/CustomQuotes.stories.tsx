import type { Meta, StoryObj } from '@storybook/react';
import { CustomQuotes } from '../../../components/CustomQuotes';

const meta: Meta<typeof CustomQuotes> = {
  title: 'External Components/CustomQuotes',
  component: CustomQuotes,
  args: {
    quotes: [
      "The only way to do great work is to love what you do.",
      "Innovation distinguishes between a leader and a follower.",
      "Life is what happens to you while you're busy making other plans.",
      "The future belongs to those who believe in the beauty of their dreams.",
      "Success is not final, failure is not fatal: it is the courage to continue that counts."
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