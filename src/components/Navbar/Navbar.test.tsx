// @vitest-environment jsdom

import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { Navbar } from './Navbar';

const items = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'disabled', label: 'Unavailable', href: '#unavailable', disabled: true },
];

const renderNavbar = (props = {}) =>
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

    const about = screen.getByRole('link', { name: 'About' });
    await user.click(about);

    expect(about.getAttribute('aria-current')).toBe('page');
    expect(onNavigate).toHaveBeenCalledWith(
      expect.objectContaining({ item: expect.objectContaining({ id: 'about' }) })
    );
  });

  it('prevents disabled items from changing active state', async () => {
    const user = userEvent.setup();
    renderNavbar();

    await user.click(screen.getByRole('link', { name: 'Unavailable' }));

    expect(screen.getByRole('link', { name: 'Home' }).getAttribute('aria-current')).toBe('page');
    expect(screen.getByRole('link', { name: 'Unavailable' }).getAttribute('aria-disabled')).toBe('true');
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
});
