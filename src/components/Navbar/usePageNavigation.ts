import { setSectionNavigating } from '../ScrollReveal/navigation';
import { useLayoutEffect, useRef, useState } from 'react';

/** Coordinates explicit link navigation; passive scrolling never moves focus. */
export function usePageNavigation(
  pathname: string,
  homePath: string,
  homeSectionId: string
) {
  const [pendingHref, setPendingHref] = useState<string | null>(null);
  const intent = useRef<{
    hash: string;
    href: string;
    pathname: string;
  } | null>(null);
  const stop = useRef<() => void>(() => {});

  useLayoutEffect(() => {
    const focus = (element: HTMLElement) => {
      const heading = element.matches('h1,h2,h3')
        ? element
        : element.querySelector<HTMLElement>('h1,h2,h3') ?? element;
      const previous = heading.getAttribute('tabindex');
      heading.setAttribute('tabindex', '-1');
      heading.focus({ preventScroll: true });
      heading.addEventListener(
        'blur',
        () => {
          if (previous === null) heading.removeAttribute('tabindex');
          else heading.setAttribute('tabindex', previous);
        },
        { once: true }
      );
    };
    const move = (hash: string, href: string, smooth: boolean) => {
      stop.current();
      let id = homeSectionId;
      try {
        id = hash ? decodeURIComponent(hash.slice(1)) : homeSectionId;
      } catch {
        /* Use page heading. */
      }
      const target =
        pathname === homePath
          ? document.getElementById(id)
          : document.querySelector<HTMLElement>('main h1');
      if (!target || target.closest('[hidden]')) return false;
      setPendingHref(href);
      setSectionNavigating(true);
      const top = hash
        ? Math.max(
            0,
            target.getBoundingClientRect().top +
              window.scrollY -
              (document.querySelector('.enj-navbar')?.getBoundingClientRect()
                .height ?? 0)
          )
        : 0;
      window.scrollTo({
        top,
        behavior:
          smooth &&
          !window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
            ? 'smooth'
            : 'instant',
      });
      focus(target);
      let frame = 0;
      let stable = 0;
      let previous = window.scrollY;
      const started = performance.now();
      let finished = false;
      const finish = () => {
        if (finished) return;
        finished = true;
        cancelAnimationFrame(frame);
        window.removeEventListener('wheel', interrupt);
        window.removeEventListener('touchstart', interrupt);
        window.removeEventListener('keydown', onKey);
        setPendingHref(null);
        setSectionNavigating(false);
      };
      const interrupt = () => {
        window.scrollTo({ top: window.scrollY, behavior: 'instant' });
        finish();
      };
      const onKey = (event: KeyboardEvent) => {
        if (
          [
            'ArrowUp',
            'ArrowDown',
            'PageUp',
            'PageDown',
            'Home',
            'End',
            ' ',
          ].includes(event.key)
        )
          interrupt();
      };
      const check = () => {
        // Routers may reset focus as their own route effects finish.
        // Restore it only from the body, never from a user-selected control.
        if (document.activeElement === document.body && target.isConnected) focus(target);
        stable = Math.abs(window.scrollY - previous) < 1 ? stable + 1 : 0;
        previous = window.scrollY;
        if (
          (stable > 3 && performance.now() - started > 120) ||
          performance.now() - started > 2000
        )
          finish();
        else frame = requestAnimationFrame(check);
      };
      window.addEventListener('wheel', interrupt, { passive: true });
      window.addEventListener('touchstart', interrupt, { passive: true });
      window.addEventListener('keydown', onKey);
      frame = requestAnimationFrame(check);
      stop.current = finish;
      return true;
    };
    // Position committed route content before the browser paints it.
    const destination = intent.current;
    if (
      destination &&
      destination.pathname === pathname &&
      move(destination.hash, destination.href, false)
    )
      intent.current = null;
    const observer = new MutationObserver(() => {
      const destination = intent.current;
      if (
        destination &&
        destination.pathname === pathname &&
        move(destination.hash, destination.href, false)
      )
        intent.current = null;
    });
    observer.observe(document.body, { childList: true, subtree: true });
    const click = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      )
        return;
      const anchor = (event.target as Element)?.closest<HTMLAnchorElement>(
        'a[href]'
      );
      if (
        !anchor ||
        anchor.hasAttribute('download') ||
        anchor.getAttribute('aria-disabled') === 'true' ||
        (anchor.target && anchor.target !== '_self')
      )
        return;
      const url = new URL(anchor.href);
      const logicalUrl = new URL(
        anchor.dataset.navigationHref ?? anchor.href,
        window.location.origin
      );
      if (url.origin !== window.location.origin) return;
      const destinationPath = logicalUrl.pathname;
      const href = destinationPath + url.hash;
      if (destinationPath === pathname) {
        if (pathname === homePath) {
          event.preventDefault();
          if (url.href !== window.location.href)
            window.history.pushState(window.history.state, '', url);
          move(url.hash, href, true);
        } else if (url.href === window.location.href) {
          event.preventDefault();
        }
      } else
        intent.current = { hash: url.hash, href, pathname: destinationPath };
    };
    // Handle Home anchors before router adapters to avoid competing scrolls.
    document.addEventListener('click', click, true);
    const cancelIntent = () => {
      intent.current = null;
      stop.current();
    };
    window.addEventListener('popstate', cancelIntent);
    return () => {
      observer.disconnect();
      document.removeEventListener('click', click, true);
      window.removeEventListener('popstate', cancelIntent);
      stop.current();
    };
  }, [pathname, homePath, homeSectionId]);
  return pendingHref;
}
