// @vitest-environment jsdom

import { fireEvent, render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import type { NavbarProps } from './libs/types';
import { Navbar } from './Navbar';

const items = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'work', label: 'Work', href: '#work' },
  { id: 'about', label: 'About', href: '#about' },
  {
    id: 'writing',
    label: 'Writing',
    href: 'https://example.com',
    openInNewTab: true,
  },
  {
    id: 'disabled',
    label: 'Unavailable',
    href: '#unavailable',
    disabled: true,
  },
];

const renderNavbar = (props: Partial<NavbarProps> = {}) =>
  render(
    <Navbar
      brand="Enjanga"
      brandLabel="Enjanga home"
      items={items}
      defaultActiveHref="#home"
      {...props}
    />
  );

describe('Navbar', () => {
  it('updates its uncontrolled active item and reports navigation', async () => {
    const user = userEvent.setup();
    const onNavigate = vi.fn();
    renderNavbar({ onNavigate });

    const work = screen.getByRole('link', { name: 'Work' });
    await user.click(work);

    expect(work.getAttribute('aria-current')).toBe('page');
    expect(onNavigate).toHaveBeenCalledWith(
      expect.objectContaining({ item: expect.objectContaining({ id: 'work' }) })
    );
  });

  it('keeps controlled active state under consumer ownership', async () => {
    const user = userEvent.setup();
    const onNavigate = vi.fn();
    renderNavbar({ activeHref: '#work', onNavigate });

    await user.click(screen.getByRole('link', { name: 'About' }));

    expect(screen.getByRole('link', { name: 'Work' }).getAttribute('aria-current')).toBe('page');
    expect(screen.getByRole('link', { name: 'About' }).getAttribute('aria-current')).toBeNull();
    expect(onNavigate).toHaveBeenCalledOnce();
  });

  it('prevents disabled items from changing active state', async () => {
    const user = userEvent.setup();
    renderNavbar();

    const disabled = screen.getByRole('link', { name: 'Unavailable' });
    await user.click(disabled);

    expect(screen.getByRole('link', { name: 'Home' }).getAttribute('aria-current')).toBe('page');
    expect(disabled.getAttribute('aria-disabled')).toBe('true');
    expect(disabled.getAttribute('tabindex')).toBe('-1');
  });

  it('protects links that open in a new tab', () => {
    renderNavbar();

    const external = screen.getByRole('link', { name: 'Writing' });
    expect(external.getAttribute('target')).toBe('_blank');
    expect(external.getAttribute('rel')).toBe('noopener noreferrer');
  });

  it('closes the mobile drawer with Escape and restores opener focus', async () => {
    const user = userEvent.setup();
    renderNavbar();
    const opener = screen.getByRole('button', { name: 'Open main menu' });

    await user.click(opener);
    expect(screen.getByRole('dialog', { name: 'Main navigation' })).not.toBeNull();
    expect(document.body.style.overflow).toBe('hidden');

    fireEvent.keyDown(window, { key: 'Escape' });

    expect(screen.queryByRole('dialog', { name: 'Main navigation' })).toBeNull();
    expect(document.activeElement).toBe(opener);
    expect(document.body.style.overflow).toBe('');
  });

  it('keeps Tab focus inside the open mobile drawer', async () => {
    const user = userEvent.setup();
    renderNavbar();
    await user.click(screen.getByRole('button', { name: 'Open main menu' }));

    const dialog = screen.getByRole('dialog', { name: 'Main navigation' });
    const brand = dialog.querySelector<HTMLAnchorElement>('.enj-navbar__brand')!;
    const links = dialog.querySelectorAll<HTMLAnchorElement>('.enj-navbar__link:not([aria-disabled="true"])');
    const lastLink = links[links.length - 1];

    lastLink.focus();
    fireEvent.keyDown(window, { key: 'Tab' });
    expect(document.activeElement).toBe(brand);

    brand.focus();
    fireEvent.keyDown(window, { key: 'Tab', shiftKey: true });
    expect(document.activeElement).toBe(lastLink);
  });

  it('closes the mobile drawer after navigation', async () => {
    const user = userEvent.setup();
    renderNavbar();
    await user.click(screen.getByRole('button', { name: 'Open main menu' }));

    const dialog = screen.getByRole('dialog', { name: 'Main navigation' });
    await user.click(within(dialog).getByRole('link', { name: 'About' }));

    expect(dialog.isConnected).toBe(false);
  });
});
