"use client";

import { createContext, type ReactNode } from 'react';

export const ScrollRevealRouteContext = createContext<string | undefined>(undefined);

/** Pass the router pathname to replay reveals when a cached route is revisited. */
export function ScrollRevealProvider({ routeKey, children, nonce }: {
  routeKey: string;
  children: ReactNode;
  nonce?: string;
}) {
  return <ScrollRevealRouteContext.Provider value={routeKey}>
    <script nonce={nonce} dangerouslySetInnerHTML={{ __html:
      "if('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) document.documentElement.dataset.enjReveal = 'enabled';"
    }} />
    {children}
  </ScrollRevealRouteContext.Provider>;
}
