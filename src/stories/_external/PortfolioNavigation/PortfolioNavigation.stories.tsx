import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within, waitFor } from '@storybook/test';
import { PortfolioPreview } from './PortfolioPreview';
import { homePageFixture } from '../HomePage/fixtures';

const meta = {
  title: 'Pages/Portfolio Navigation',
  component: PortfolioPreview,
  parameters: { layout: 'fullscreen' },
  args: { home: homePageFixture },
} satisfies Meta<typeof PortfolioPreview>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Home: Story = {};
export const CaseStudies: Story = { args: { initialPath: '/case-studies' } };
export const Mobile: Story = {
  parameters: { viewport: { defaultViewport: 'mobile1' } },
};
export const RoundTrip: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const nav = within(
      canvas.getByRole('navigation', { name: 'Main navigation' })
    );
    await userEvent.click(
      nav.getByRole('link', { name: 'Case Studies', exact: true })
    );
    await expect(
      await canvas.findByRole('heading', {
        level: 1,
        name: 'Engineering complex workflows into clear experiences.',
      })
    ).toBeVisible();
    await userEvent.click(
      nav.getByRole('link', { name: 'Expertise', exact: true })
    );
    await waitFor(() =>
      expect(
        nav.getByRole('link', { name: 'Expertise', exact: true })
      ).toHaveAttribute('aria-current', 'page')
    );
    await expect(
      canvas.getByRole('heading', { name: 'Engineering beyond the interface.' })
    ).toBeVisible();
    await userEvent.click(
      nav.getByRole('link', { name: 'Case Studies', exact: true })
    );
    await userEvent.click(nav.getByRole('link', { name: 'Eric Njanga home' }));
    await waitFor(() =>
      expect(
        nav.getByRole('link', { name: 'Home', exact: true })
      ).toHaveAttribute('aria-current', 'page')
    );
  },
};

export const KeyboardNavigation: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const nav = within(
      canvas.getByRole('navigation', { name: 'Main navigation' })
    );
    nav.getByRole('link', { name: 'Home', exact: true }).focus();
    await userEvent.tab();
    await expect(
      nav.getByRole('link', { name: 'Expertise', exact: true })
    ).toHaveFocus();
    await userEvent.keyboard('{Enter}');
    await waitFor(() =>
      expect(
        canvas.getByRole('heading', {
          name: 'Engineering beyond the interface.',
        })
      ).toHaveFocus()
    );
  },
};
