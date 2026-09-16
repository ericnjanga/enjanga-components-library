// @vitest-environment jsdom
import { afterEach, expect, it, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NavbarThemeToggle } from './NavbarThemeToggle';
import { Navbar } from './Navbar';

afterEach(cleanup);
it('requests a theme change while leaving state under consumer control', async () => {
  const onThemeChange = vi.fn();
  const { rerender } = render(<NavbarThemeToggle theme="light" onThemeChange={onThemeChange} />);
  await userEvent.click(screen.getByRole('button', { name: 'Switch to dark theme' }));
  expect(onThemeChange).toHaveBeenCalledWith('dark');
  expect(screen.getByRole('button').getAttribute('aria-pressed')).toBe('false');
  rerender(<NavbarThemeToggle theme="dark" onThemeChange={onThemeChange} />);
  await userEvent.click(screen.getByRole('button', { name: 'Switch to light theme' }));
  expect(onThemeChange).toHaveBeenLastCalledWith('light');
  expect(screen.getByRole('button').getAttribute('aria-pressed')).toBe('true');
});
it('does not change theme when disabled', async () => {
  const onThemeChange = vi.fn();
  render(<NavbarThemeToggle theme="light" onThemeChange={onThemeChange} disabled />);
  await userEvent.click(screen.getByRole('button'));
  expect(onThemeChange).not.toHaveBeenCalled();
});
it('preserves mobile menu behavior in page context', async () => {
  render(<Navbar context="page" brand="Example" items={[]} />);
  await userEvent.click(screen.getByRole('button', { name: 'Open main menu' }));
  expect(screen.getByRole('dialog')).toBeTruthy();
  await userEvent.keyboard('{Escape}');
  expect(screen.queryByRole('dialog')).toBeNull();
  expect(document.activeElement).toBe(screen.getByRole('button', { name: 'Open main menu' }));
});
