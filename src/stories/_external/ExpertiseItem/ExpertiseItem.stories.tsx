import type { Meta, StoryObj } from '@storybook/react';
import { ExpertiseItem } from '@/components/ExpertiseSection';

const meta = {
  title: 'External Components/Expertise/ExpertiseItem',
  component: ExpertiseItem,
  parameters: { layout: 'padded' },
  args: {
    id: 'improving',
    title: 'Improving',
    description:
      'I bring existing software forward by improving its experience, capabilities, and long-term usability.',
    modal: {
      heading: 'Improving digital products',
      body: (
        <p>
          Dummy detail content covering product audits, modernization,
          accessibility, performance, and design-system adoption.
        </p>
      ),
    },
  },
} satisfies Meta<typeof ExpertiseItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
