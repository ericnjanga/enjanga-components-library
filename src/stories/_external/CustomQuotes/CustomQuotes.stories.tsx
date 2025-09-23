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
    rotationTimer: (2 * 60) // seconds
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
      control: { type: 'number', min: 1, max: (5 * 60), step: 1 },
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

export const Default: Story = {
  args: {
    rotationTimer: 1
  },
  render: (args) => (
    <div style={{ padding: '120px' }}>
      <CustomQuotes {...args} />
    </div>
  )
};


export const WithCustomTimer: Story = {
  args: {
    rotationTimer: 5 // 5 minutes rotation
  },
  render: (args) => (
    <div style={{ padding: '120px' }}>
      <CustomQuotes {...args} />
    </div>
  )
};

export const SingleQuote: Story = {
  args: {
    quotes: [quoteSamples[0]]
  },
  render: (args) => (
    <div style={{ padding: '120px' }}>
      <CustomQuotes {...args} />
    </div>
  )
};

export const ManyQuotes: Story = {
  args: {
    quotes: [
      ...quoteSamples
    ],
    rotationTimer: 1 // Rotate every minute
  },
  render: (args) => (
    <div style={{ padding: '120px' }}>
      <CustomQuotes {...args} />
    </div>
  )
};

export const WithCustomClassName: Story = {
  args: {
    className: 'my-custom-quotes-class'
  },
  render: (args) => (
    <div style={{ padding: '120px' }}>
      <CustomQuotes {...args} />
    </div>
  )
};

export const EmptyQuotes: Story = {
  args: {
    quotes: []
  },
  render: (args) => (
    <div style={{ padding: '120px' }}>
      <CustomQuotes {...args} />
    </div>
  )
};

export const UndefinedQuotes: Story = {
  args: {
    quotes: undefined
  },
  render: (args) => (
    <div style={{ padding: '120px' }}>
      <CustomQuotes {...args} />
    </div>
  )
};