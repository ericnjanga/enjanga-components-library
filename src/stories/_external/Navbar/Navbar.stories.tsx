import type { Meta, StoryObj } from '@storybook/react';
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

export const Default: Story = {};

export const ControlledActiveItem: Story = {
  args: { activeHref: '#work' },
};

export const WithoutActions: Story = {
  args: { actions: undefined },
};

export const MobileDrawer: Story = {
  parameters: { viewport: { defaultViewport: 'mobile1' } },
};
