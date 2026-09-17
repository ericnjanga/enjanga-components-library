"use client";

import { useContext, useLayoutEffect, useRef, type ComponentPropsWithoutRef } from 'react';
import clsx from 'clsx';
import { ScrollRevealRouteContext } from './ScrollRevealProvider';

export interface ScrollRevealProps extends ComponentPropsWithoutRef<'div'> {
  /** Minimum time content stays hidden after entering view, in milliseconds. */
  delayMs?: number;
}

/** Observe actual content blocks; replay on route changes and browser cache restoration. */
export function ScrollReveal({ children, className, delayMs = 450, ...props }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const routeKey = useContext(ScrollRevealRouteContext);
  const previousRoute = useRef(routeKey);
  useLayoutEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (previousRoute.current !== routeKey) {
      delete node.dataset.revealFallback;
      previousRoute.current = routeKey;
    }
    const motion = window.matchMedia?.('(prefers-reduced-motion: reduce)');
    const blocks = Array.from(node.querySelectorAll<HTMLElement>(':scope > :is(section, article) > *'));
    const targets = blocks.length ? blocks : [node];
    let observer: IntersectionObserver | undefined;
    let generation = 0;
    const timers = new Map<HTMLElement, ReturnType<typeof setTimeout>>();
    const cancel = () => {
      generation++;
      observer?.disconnect();
      timers.forEach(clearTimeout);
      timers.clear();
    };
    const showAll = () => {
      cancel();
      targets.forEach(target => target.setAttribute('data-reveal-visible', 'true'));
      node.dataset.visible = 'true';
      node.dataset.revealReady = 'true';
    };
    const start = () => {
      cancel();
      const root = document.documentElement;
      const initialVisitExpired = node.dataset.revealReady !== 'true' &&
        root.dataset.enjReveal === 'expired' &&
        (routeKey === undefined || root.dataset.enjRevealRoute === routeKey);
      if (node.dataset.revealFallback === 'true' || initialVisitExpired) {
        node.dataset.revealFallback = 'true';
        showAll();
        return;
      }
      if (motion?.matches || typeof IntersectionObserver === 'undefined') {
        showAll();
        return;
      }
      try {
      const current = generation;
      const pending = new Set(targets);
      targets.forEach(target => target.setAttribute('data-reveal-visible', 'false'));
      node.dataset.visible = 'false';
      observer = new IntersectionObserver(entries => {
        if (current !== generation) return;
        for (const entry of entries) {
          const target = entry.target as HTMLElement;
          if (!pending.has(target)) continue;
          if (!entry.isIntersecting) {
            clearTimeout(timers.get(target));
            timers.delete(target);
            continue;
          }
          if (timers.has(target)) continue;
          timers.set(target, setTimeout(() => {
            if (current !== generation) return;
            target.setAttribute('data-reveal-visible', 'true');
            pending.delete(target);
            timers.delete(target);
            observer?.unobserve(target);
            if (!pending.size) {
              node.dataset.visible = 'true';
              observer?.disconnect();
            }
          }, Math.max(0, delayMs)));
        }
      }, { threshold: 0, rootMargin: '0px 0px -8% 0px' });
      targets.forEach(target => observer!.observe(target));
      node.dataset.revealReady = 'true';
      } catch {
        // An unavailable/broken observer must never strand hidden content.
        node.dataset.revealFallback = 'true';
        showAll();
      }
    };
    const onMotion = () => { if (motion?.matches) showAll(); };
    const onPageShow = (event: PageTransitionEvent) => { if (event.persisted) start(); };
    start();
    motion?.addEventListener?.('change', onMotion);
    window.addEventListener('pageshow', onPageShow);
    return () => {
      cancel();
      targets.forEach(target => target.removeAttribute('data-reveal-visible'));
      delete node.dataset.revealReady;
      motion?.removeEventListener?.('change', onMotion);
      window.removeEventListener('pageshow', onPageShow);
    };
  }, [routeKey, delayMs]);
  return <div {...props} ref={ref} className={clsx('enj-scroll-reveal', className)} data-visible="true">{children}</div>;
}
