import type { Meta, StoryObj } from '@storybook/react';
import { ExpertiseProfileCard } from '@/components/ExpertiseSection';

const meta = {
  title: 'External Components/Expertise/ExpertiseProfileCard',
  component: ExpertiseProfileCard,
  parameters: { layout: 'centered' },
  args: {
    statement:
      'I’m a senior UI engineer with over 10 years of front-end experience building enterprise applications.',
    imageSrc: '/img/expertise-profile.jpg',
    imageAlt: 'Eric Njanga',
    modal: {
      heading: 'A decade of front-end practice',
      body: (
        <p>
          Dummy biography content describing enterprise UI engineering,
          design-system leadership, and cross-functional collaboration.
        </p>
      ),
    },
  },
} satisfies Meta<typeof ExpertiseProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div style={{ maxWidth: 430 }}>
      <ExpertiseProfileCard {...args} />
    </div>
  ),
};
