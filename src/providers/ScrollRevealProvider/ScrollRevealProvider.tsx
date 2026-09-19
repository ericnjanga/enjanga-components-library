"use client";

import { createContext, useLayoutEffect, useRef, type ReactNode } from 'react';

import { scrollRevealBootstrap } from '../../components/ScrollReveal/bootstrap';

export const ScrollRevealRouteContext = createContext<string | undefined>(undefined);

/** Pass the router pathname to replay reveals when a cached route is revisited. */
export function ScrollRevealProvider({ routeKey, children, nonce }: {
  routeKey: string;
  children: ReactNode;
  nonce?: string;
}) {
  const previousRoute = useRef(routeKey);
  useLayoutEffect(() => {
    if (previousRoute.current !== routeKey) {
      // Future client navigations initialize before paint and can animate again.
      document.documentElement.dataset.enjReveal = 'ready';
      document.documentElement.dataset.enjRevealRoute = routeKey;
      previousRoute.current = routeKey;
    }
  }, [routeKey]);
  return <ScrollRevealRouteContext.Provider value={routeKey}>
    <script nonce={nonce} dangerouslySetInnerHTML={{ __html: scrollRevealBootstrap }} />
    {children}
  </ScrollRevealRouteContext.Provider>;
}
