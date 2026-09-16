'use client';

import { useEffect, useState } from 'react';
import { usePageNavigation } from './usePageNavigation';
import { Navbar } from './Navbar';
import type { NavbarProps } from './libs/types';

export interface PageNavbarProps
  extends Omit<NavbarProps, 'context' | 'activeHref' | 'defaultActiveHref'> {
  /** Current router pathname. Routing itself is supplied through LinkProvider. */
  pathname: string;
  homePath?: string;
  homeSectionId?: string;
  /** Replace the current URL hash as Home sections change without adding history entries. */
  syncHash?: boolean;
}

function localUrl(href: string) {
  const origin =
    typeof window === 'undefined'
      ? 'http://navbar.local'
      : window.location.origin;
  try {
    const url = new URL(href, origin);
    return url.origin === origin ? url : null;
  } catch {
    return null;
  }
}

/** Page navbar with route-aware highlighting and the portfolio Home scroll behavior. */
export function PageNavbar({
  pathname,
  homePath = '/',
  homeSectionId = 'home',
  syncHash = true,
  items,
  onNavigate,
  ...props
}: PageNavbarProps) {
  const pendingHref = usePageNavigation(pathname, homePath, homeSectionId);
  const routeHref =
    items
      .filter((item) => {
        const url = localUrl(item.href);
        return (
          url &&
          !url.hash &&
          (pathname === url.pathname ||
            (url.pathname !== homePath &&
              pathname.startsWith(`${url.pathname}/`)))
        );
      })
      .sort((a, b) => b.href.length - a.href.length)[0]?.href ?? '';
  const [sectionHref, setSectionHref] = useState(routeHref);

  useEffect(() => {
    if (pathname !== homePath || pendingHref) return;
    const sectionLinks = items.flatMap((item) => {
      if (item.disabled) return [];
      const url = localUrl(item.href);
      if (!url || url.pathname !== homePath) return [];
      let sectionId: string;
      try {
        sectionId = url.hash
          ? decodeURIComponent(url.hash.slice(1))
          : homeSectionId;
      } catch {
        return [];
      }
      const section = document.getElementById(sectionId);
      return section ? [{ href: item.href, sectionId, section }] : [];
    });
    if (!sectionLinks.length) {
      setSectionHref(routeHref);
      return;
    }
    const hashLink = sectionLinks.find(
      (item) => `#${item.sectionId}` === window.location.hash
    );
    setSectionHref(hashLink?.href ?? routeHref);
    let frame = 0;
    function update() {
      const activationLine =
        (document.querySelector('.enj-navbar')?.getBoundingClientRect()
          .height ?? 0) + 1;
      const ordered = [...sectionLinks].sort(
        (a, b) =>
          a.section.getBoundingClientRect().top -
          b.section.getBoundingClientRect().top
      );
      const atBottom =
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 2;
      const current = atBottom
        ? ordered[ordered.length - 1]
        : [...ordered]
            .reverse()
            .find(
              (item) =>
                item.section.getBoundingClientRect().top <= activationLine
            ) ?? ordered[0];
      setSectionHref(current.href);
      const hash =
        current.sectionId === homeSectionId
          ? ''
          : `#${encodeURIComponent(current.sectionId)}`;
      if (syncHash && window.location.hash !== hash)
        window.history.replaceState(
          window.history.state,
          '',
          `${window.location.pathname}${window.location.search}${hash}`
        );
    }
    const schedule = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    window.addEventListener('hashchange', schedule);
    window.addEventListener('popstate', schedule);
    frame = requestAnimationFrame(() => {
      frame = requestAnimationFrame(update);
    });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      window.removeEventListener('hashchange', schedule);
      window.removeEventListener('popstate', schedule);
    };
  }, [
    items,
    pathname,
    homePath,
    homeSectionId,
    syncHash,
    routeHref,
    pendingHref,
  ]);

  return (
    <Navbar
      {...props}
      context="page"
      items={items}
      activeHref={
        pathname === homePath ? pendingHref ?? sectionHref : routeHref
      }
      onNavigate={(details) => {
        setSectionHref(details.item.href);
        onNavigate?.(details);
      }}
    />
  );
}
