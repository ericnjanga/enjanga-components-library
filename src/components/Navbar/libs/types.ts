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
