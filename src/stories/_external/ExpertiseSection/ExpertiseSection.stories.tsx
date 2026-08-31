import type { Meta, StoryObj } from '@storybook/react';
import { ExpertiseSection } from '@/components/ExpertiseSection';

const items = [
  {
    id: 'improving',
    title: 'Improving',
    description:
      'I bring existing software forward by improving its experience, capabilities, and long-term usability.',
  },
  {
    id: 'customizing',
    title: 'Customizing',
    description:
      'I create digital tools shaped around each organization’s unique context, workflows, and goals.',
  },
  {
    id: 'communicating',
    title: 'Communicating',
    description:
      'I translate complex technical ideas into clear, engaging content for broader audiences. I also collaborate with marketing and human resources teams to create educational and training materials best suited for their unique needs.',
  },
];

const meta = {
  title: 'Pages/Expertise Section',
  component: ExpertiseSection,
  parameters: {
    layout: 'fullscreen',
    viewport: { defaultViewport: 'responsive' },
  },
  args: {
    eyebrow: 'Expertise',
    heading: 'How I deliver value',
    description:
      'I modernize existing software, create digital tools tailored to real needs, and make complex ideas easier to understand.',
    items,
    profile: {
      statement:
        'I’m a senior UI engineer with over 10 years of front-end experience building enterprise applications.',
      imageSrc: '/img/expertise-profile.jpg',
      imageAlt: 'Eric Njanga',
    },
  },
} satisfies Meta<typeof ExpertiseSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ResponsivePage: Story = {};

export const Mobile: Story = {
  parameters: { viewport: { defaultViewport: 'mobile1' } },
};

export const Tablet: Story = {
  parameters: { viewport: { defaultViewport: 'tablet' } },
};
