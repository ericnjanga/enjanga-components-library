import type { Meta, StoryObj } from '@storybook/react';
import { expect, within, userEvent } from '@storybook/test';
import { CaseStudiesPage } from '../../../components/CaseStudiesPage';
import { Navbar } from '../../../components/Navbar';
import { caseStudiesPageFixture } from './fixtures';

const meta = {
  title: 'Pages/Case Studies',
  component: CaseStudiesPage,
  parameters: { layout: 'fullscreen' },
  args: caseStudiesPageFixture,
  decorators: [Story => <>
    <Navbar brand="Eric Njanga" brandLabel="Eric Njanga home" activeHref="/case-studies" items={[
      { id: 'home', label: 'Home', href: 'http://localhost:3000/' },
      { id: 'expertise', label: 'Expertise', href: 'http://localhost:3000/#expertise' },
      { id: 'about', label: 'About', href: 'http://localhost:3000/#about' },
      { id: 'case-studies', label: 'Case Studies', href: '/case-studies' },
    ]} />
    <Story />
  </>],
} satisfies Meta<typeof CaseStudiesPage>;
export default meta;
type Story = StoryObj<typeof meta>;

export const AllPublished: Story = {
  parameters: { chromatic: { viewports: [1440, 768, 390] } },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByRole('article')).toHaveLength(caseStudiesPageFixture.caseStudies.length);
    await expect(canvas.getAllByRole('button', { name: /^Watch intro:/ })).toHaveLength(3);
    await expect(canvas.getAllByRole('link', { name: /^Read the full case study:/ })).toHaveLength(4);
  },
};
export const Mobile: Story = { parameters: { viewport: { defaultViewport: 'mobile1' } } };
export const Dark: Story = { globals: { theme: 'dark' } };
export const Empty: Story = { args: { caseStudies: [] } };
export const VideoInteraction: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const intro = canvas.getAllByRole('button', { name: /^Watch intro:/ })[0];
    intro.focus();
    await userEvent.keyboard('{Enter}');
    await expect(canvas.getByRole('dialog')).toBeVisible();
    await userEvent.click(canvas.getByRole('button', { name: 'Close video' }));
    await expect(canvas.queryByRole('dialog')).not.toBeInTheDocument();
    await expect(intro).toHaveFocus();
  },
};
