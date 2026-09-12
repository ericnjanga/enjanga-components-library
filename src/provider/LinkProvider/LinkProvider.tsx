"use client";

import { createContext, type AnchorHTMLAttributes, type ComponentType, type ReactNode, type RefAttributes } from 'react';

export type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  RefAttributes<HTMLAnchorElement> & { href: string };

export const LinkContext = createContext<ComponentType<LinkProps> | undefined>(undefined);

/** Supply a router adapter to Button links and Navbar menu and brand links. Defaults to native anchors without this provider. */
export function LinkProvider({ component, children }: {
  component: ComponentType<LinkProps>;
  children: ReactNode;
}) {
  return <LinkContext.Provider value={component}>{children}</LinkContext.Provider>;
}
