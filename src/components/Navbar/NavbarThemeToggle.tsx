'use client';

import type { ComponentPropsWithoutRef } from 'react';
import clsx from 'clsx';

export interface NavbarThemeToggleProps extends Omit<ComponentPropsWithoutRef<'button'>, 'children' | 'onChange' | 'onClick' | 'aria-pressed'> {
  theme: 'light' | 'dark';
  onThemeChange: (theme: 'light' | 'dark') => void;
}

/** Controlled theme action. The application owns persistence and document theme. */
export function NavbarThemeToggle({ theme, onThemeChange, className, ...props }: NavbarThemeToggleProps) {
  const isDark = theme === 'dark';
  const label = `Switch to ${isDark ? 'light' : 'dark'} theme`;
  return <button type="button" aria-label={label} title={label} {...props}
    className={clsx('enj-navbar__themeToggle', className)}
    aria-pressed={isDark} onClick={() => onThemeChange(isDark ? 'light' : 'dark')}>
      {isDark ? (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.66 6.34l1.41-1.41" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.7 15.1A9 9 0 0 1 8.9 3.3 9 9 0 1 0 20.7 15.1Z" />
        </svg>
      )}
  </button>;
}
