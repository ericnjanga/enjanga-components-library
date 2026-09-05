'use client';

import clsx from 'clsx';
import {
  useEffect,
  useId,
  useRef,
  useState,
  type MouseEvent,
} from 'react';
import type { NavbarItem, NavbarProps } from './libs/types';

const MenuIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="m6 6 12 12M18 6 6 18" />
  </svg>
);

export const Navbar = ({
  items,
  brand,
  brandHref = '/',
  brandLabel = 'Home',
  ariaLabel = 'Main navigation',
  activeHref,
  defaultActiveHref = brandHref,
  actions,
  className,
  menuOpenLabel = 'Open main menu',
  menuCloseLabel = 'Close main menu',
  onNavigate,
}: NavbarProps) => {
  const menuId = useId();
  const openerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [internalActiveHref, setInternalActiveHref] =
    useState(defaultActiveHref);
  const currentHref = activeHref ?? internalActiveHref;

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeMenu();
        return;
      }

      if (event.key !== 'Tab') return;

      const focusable = Array.from(
        drawerRef.current?.querySelectorAll<HTMLElement>(
          'a[href]:not([aria-disabled="true"]), button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        ) ?? []
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (!first || !last) return;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
      openerRef.current?.focus();
    };
  }, [isOpen]);

  const handleNavigate = (
    item: NavbarItem,
    event: MouseEvent<HTMLAnchorElement>
  ) => {
    if (item.disabled) {
      event.preventDefault();
      return;
    }

    if (activeHref === undefined) setInternalActiveHref(item.href);
    onNavigate?.({ item, closeMenu });
    closeMenu();
  };

  const renderLink = (item: NavbarItem) => {
    const isActive = currentHref === item.href;
    const externalProps = item.openInNewTab
      ? { target: '_blank', rel: 'noopener noreferrer' }
      : {};

    return (
      <a
        key={item.id}
        href={item.href}
        aria-current={isActive ? 'page' : undefined}
        aria-disabled={item.disabled || undefined}
        tabIndex={item.disabled ? -1 : undefined}
        className={clsx('enj-navbar__link', {
          'enj-navbar__link--active': isActive,
          'enj-navbar__link--disabled': item.disabled,
        })}
        onClick={(event) => handleNavigate(item, event)}
        {...externalProps}
      >
        {item.label}
      </a>
    );
  };

  return (
    <header className={clsx('enj-navbar', className)}>
      <nav className="enj-navbar__inner" aria-label={ariaLabel}>
        <a href={brandHref} aria-label={brandLabel} className="enj-navbar__brand">
          {brand}
        </a>

        <div className="enj-navbar__desktop">
          <div className="enj-navbar__links">{items.map(renderLink)}</div>
          {actions && <div className="enj-navbar__actions">{actions}</div>}
        </div>

        <div className="enj-navbar__mobileActions">
          {actions}
          <button
            ref={openerRef}
            type="button"
            className="enj-navbar__iconButton"
            aria-label={menuOpenLabel}
            aria-controls={menuId}
            aria-expanded={isOpen}
            onClick={() => setIsOpen(true)}
          >
            <MenuIcon />
          </button>
        </div>

        {isOpen && (
          <div className="enj-navbar__mobileLayer">
            <button
              type="button"
              aria-label={menuCloseLabel}
              className="enj-navbar__overlay"
              onClick={closeMenu}
            />
            <div
              ref={drawerRef}
              id={menuId}
              role="dialog"
              aria-modal="true"
              aria-label={ariaLabel}
              className="enj-navbar__drawer"
            >
              <div className="enj-navbar__drawerHeader">
                <a href={brandHref} aria-label={brandLabel} className="enj-navbar__brand" onClick={closeMenu}>
                  {brand}
                </a>
                <button
                  ref={closeRef}
                  type="button"
                  className="enj-navbar__iconButton"
                  aria-label={menuCloseLabel}
                  onClick={closeMenu}
                >
                  <CloseIcon />
                </button>
              </div>
              <div className="enj-navbar__drawerLinks">{items.map(renderLink)}</div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
