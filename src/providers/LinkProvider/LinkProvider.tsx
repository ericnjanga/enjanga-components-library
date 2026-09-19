"use client";

import { createContext, forwardRef, useContext, type AnchorHTMLAttributes, type ComponentType, type ReactNode, type RefAttributes } from 'react';

export type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  RefAttributes<HTMLAnchorElement> & { href: string };

export const LinkContext = createContext<ComponentType<LinkProps> | undefined>(undefined);

/** Supply a router adapter to Footer links, Button links, InteractiveImage links, and Navbar menu and brand links. Defaults to native anchors without this provider. */
export function LinkProvider({ component, children }: {
  component: ComponentType<LinkProps>;
  children: ReactNode;
}) {
  return <LinkContext.Provider value={component}>{children}</LinkContext.Provider>;
}

/** Render through the nearest router adapter, or a native anchor without a provider. */
export const LibraryLink = forwardRef<HTMLAnchorElement, LinkProps>(function LibraryLink(props, ref) {
  const Link = useContext(LinkContext) ?? 'a';
  return <Link {...props} ref={ref} />;
});
