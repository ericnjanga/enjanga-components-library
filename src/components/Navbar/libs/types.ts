import type { ReactNode } from 'react';

export interface NavbarItem {
  id: string;
  label: ReactNode;
  href: string;
  openInNewTab?: boolean;
  disabled?: boolean;
}

export interface NavbarNavigateDetails {
  item: NavbarItem;
  closeMenu: () => void;
}

export interface NavbarProps {
  /** Page context fixes the navbar, aligns it with page containers, and reserves its height. */
  context?: 'standalone' | 'page';
  items: NavbarItem[];
  brand: ReactNode;
  brandHref?: string;
  brandLabel?: string;
  ariaLabel?: string;
  activeHref?: string;
  defaultActiveHref?: string;
  actions?: ReactNode;
  className?: string;
  menuOpenLabel?: string;
  menuCloseLabel?: string;
  onNavigate?: (details: NavbarNavigateDetails) => void;
}
