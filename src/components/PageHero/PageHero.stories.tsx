import type { Meta, StoryObj } from '@storybook/react';
import { PageHero } from './PageHero';
import './_PageHero.scss';

const meta = {
  title: 'Components/Page Hero',
  component: PageHero,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  args: { title: 'Engineering complex workflows into clear experiences.' },
} satisfies Meta<typeof PageHero>;
export default meta;
type Story = StoryObj<typeof meta>;

export const TitleOnly: Story = {};
export const WithDescription: Story = {
  args: {
    title: 'Architecting modern enterprise interfaces.',
    description: 'I engineer scalable front-end systems that transform complex business requirements into intuitive, maintainable digital experiences.',
  },
};
export const Mobile: Story = {
  ...WithDescription,
  parameters: { viewport: { defaultViewport: 'mobile1' } },
};
