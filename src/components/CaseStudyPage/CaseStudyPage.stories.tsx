import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';
import { CaseStudyPage } from './CaseStudyPage';
import { Navbar } from '../Navbar';
import { financialRecordsArticle } from './fixture';
import './_CaseStudyPage.scss';
import './story.scss';

const meta = {
  title: 'Pages/Case Study',
  component: CaseStudyPage,
  parameters: { layout: 'fullscreen' },
  args: {
    title: 'Modernizing the Way Financial Records Are Retrieved',
    children: financialRecordsArticle,
  },
  decorators: [Story => <>
    <Navbar brand="Eric Njanga" brandLabel="Eric Njanga home" activeHref="/case-studies" items={[
      { id: 'home', label: 'Home', href: '/' },
      { id: 'expertise', label: 'Expertise', href: '/#expertise' },
      { id: 'about', label: 'About', href: '/#about' },
      { id: 'case-studies', label: 'Case Studies', href: '/case-studies' },
    ]} />
    <Story />
  </>],
} satisfies Meta<typeof CaseStudyPage>;
export default meta;
type Story = StoryObj<typeof meta>;
export const FinancialRecords: Story = {};
export const Mobile: Story = { parameters: { viewport: { defaultViewport: 'mobile1' } } };
export const Dark: Story = { globals: { theme: 'dark' } };
export const WithIntroduction: Story = { args: { description: 'A scalable search experience for complex financial workflows.' } };

export const WalkthroughDialog: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const link = canvas.getAllByRole('link', { name: /Watch walkthrough/ })[0];
    await userEvent.click(link);
    await expect(canvas.getByRole('dialog')).toBeVisible();
    await userEvent.keyboard('{Escape}');
    await expect(canvas.queryByRole('dialog')).toBeNull();
    await expect(link).toHaveFocus();
  },
};
