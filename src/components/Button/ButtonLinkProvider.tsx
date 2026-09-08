"use client";

import { createContext, type AnchorHTMLAttributes, type ComponentType, type ReactNode, type RefAttributes } from 'react';

export type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  RefAttributes<HTMLAnchorElement> & { href: string };

export const ButtonLinkContext = createContext<ComponentType<ButtonLinkProps> | undefined>(undefined);

/** Supply a router adapter to every Button, including buttons nested inside cards. */
export function ButtonLinkProvider({ component, children }: {
  component: ComponentType<ButtonLinkProps>;
  children: ReactNode;
}) {
  return <ButtonLinkContext.Provider value={component}>{children}</ButtonLinkContext.Provider>;
}
