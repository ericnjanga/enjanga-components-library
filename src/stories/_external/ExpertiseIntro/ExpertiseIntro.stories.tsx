import type { Meta, StoryObj } from '@storybook/react';
import { ExpertiseIntro } from '@/components/ExpertiseSection';

const meta = {
  title: 'External Components/Expertise/ExpertiseIntro',
  component: ExpertiseIntro,
  parameters: { layout: 'padded' },
  args: {
    eyebrow: 'Expertise',
    heading: 'How I deliver value',
    description:
      'I modernize existing software, create digital tools tailored to real needs, and make complex ideas easier to understand.',
  },
} satisfies Meta<typeof ExpertiseIntro>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
