import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';
import { Navbar, type NavbarItem } from '../../../components/Navbar';

const items: NavbarItem[] = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'work', label: 'Work', href: '#work' },
  { id: 'about', label: 'About', href: '#about' },
  {
    id: 'writing',
    label: 'Writing',
    href: 'https://example.com',
    openInNewTab: true,
  },
];

const ThemeAction = () => (
  <button type="button" aria-label="Toggle color theme">
    Theme
  </button>
);

const meta = {
  title: 'External Components/Navbar',
  component: Navbar,
  parameters: { layout: 'fullscreen' },
  args: {
    brand: 'Eric Njanga',
    brandLabel: 'Eric Njanga home',
    items,
    defaultActiveHref: '#home',
    actions: <ThemeAction />,
  },
  argTypes: {
    onNavigate: { action: 'navigate' },
  },
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DesktopDefault: Story = {
  parameters: {
    chromatic: { viewports: [1440, 901, 900, 390] },
  },
  play: async ({ canvasElement }) => {
    await document.fonts.load('16px "Mona Sans"');
    await document.fonts.ready;

    const navbar = canvasElement.querySelector<HTMLElement>('.enj-navbar');
    await expect(document.fonts.check('16px "Mona Sans"')).toBe(true);
    await expect(getComputedStyle(navbar!).fontFamily).toContain('Mona Sans');
  },
};

export const ActiveItem: Story = {
  args: { activeHref: '#work' },
  parameters: { chromatic: { viewports: [1440] } },
  play: async ({ canvasElement }) => {
    const activeItem = within(canvasElement).getByRole('link', { name: 'Work' });
    const styles = getComputedStyle(activeItem);

    await expect(activeItem).toHaveAttribute('aria-current', 'page');
    await expect(styles.backgroundColor).toBe('rgb(17, 24, 39)');
    await expect(styles.color).toBe('rgb(255, 255, 255)');
  },
};

export const DarkTheme: Story = {
  args: { activeHref: '#work' },
  globals: { theme: 'dark' },
  parameters: { chromatic: { viewports: [1440] } },
  play: async ({ canvasElement }) => {
    const navbar = canvasElement.querySelector<HTMLElement>('.enj-navbar')!;
    const activeItem = within(canvasElement).getByRole('link', { name: 'Work' });

    await expect(getComputedStyle(navbar).backgroundColor).toBe('rgb(13, 23, 38)');
    await expect(getComputedStyle(activeItem).backgroundColor).toBe('rgb(219, 234, 254)');
    await expect(getComputedStyle(activeItem).color).toBe('rgb(13, 23, 38)');
  },
};

export const MobileClosed: Story = {
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
    chromatic: { viewports: [390] },
  },
};

export const MobileOpen: Story = {
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
    chromatic: { viewports: [390] },
  },
  play: async ({ canvasElement }) => {
    await userEvent.click(
      within(canvasElement).getByRole('button', { name: 'Open main menu' })
    );
    await expect(
      within(canvasElement).getByRole('dialog', { name: 'Main navigation' })
    ).toBeVisible();
  },
};

export const DisabledItem: Story = {
  args: {
    items: [
      ...items,
      {
        id: 'unavailable',
        label: 'Unavailable',
        href: '#unavailable',
        disabled: true,
      },
    ],
  },
  parameters: { chromatic: { viewports: [1440] } },
};
