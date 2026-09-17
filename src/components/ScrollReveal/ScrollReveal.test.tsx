import { setSectionNavigating } from './navigation';
// @vitest-environment jsdom
import { afterEach, beforeEach, expect, it, vi } from 'vitest';
import { act, cleanup, render, screen } from '@testing-library/react';
import { renderToString } from 'react-dom/server';
import { ScrollReveal } from './ScrollReveal';
import { ScrollRevealProvider } from './ScrollRevealProvider';
import { scrollRevealBootstrap } from './bootstrap';

let callback: IntersectionObserverCallback;
const observe = vi.fn(), unobserve = vi.fn(), disconnect = vi.fn();
beforeEach(() => {
  delete document.documentElement.dataset.enjReveal;
  delete document.documentElement.dataset.enjRevealRoute;
  setSectionNavigating(false);
  vi.useFakeTimers();
  vi.clearAllMocks();
  vi.stubGlobal('IntersectionObserver', class {
    constructor(cb: IntersectionObserverCallback) { callback = cb; }
    observe = observe; unobserve = unobserve; disconnect = disconnect;
  });
});
afterEach(() => { cleanup(); vi.clearAllTimers(); vi.useRealTimers(); vi.unstubAllGlobals();
  delete document.documentElement.dataset.enjReveal;
  delete document.documentElement.dataset.enjRevealRoute; });
const enter = (target: HTMLElement, isIntersecting = true) => act(() => callback([{ target, isIntersecting }] as IntersectionObserverEntry[], {} as IntersectionObserver));
const advance = (ms: number) => act(() => vi.advanceTimersByTime(ms));
const content = <ScrollReveal><section style={{ paddingTop: 400 }}><div data-testid="first">First</div><div data-testid="second">Second</div></section></ScrollReveal>;
const state = (id = 'first') => screen.getByTestId(id).getAttribute('data-reveal-visible');

it('keeps content accessible without JavaScript or observer support', () => {
  expect(renderToString(<ScrollReveal>Content</ScrollReveal>)).toContain('data-visible="true"');
  vi.stubGlobal('IntersectionObserver', undefined);
  render(content);
  expect(state()).toBe('true');
});
it('holds an intersecting first block hidden for 450ms before revealing it', () => {
  render(content);
  enter(screen.getByTestId('first'));
  expect(state()).toBe('false');
  advance(449); expect(state()).toBe('false');
  advance(1); expect(state()).toBe('true');
  expect(state('second')).toBe('false');
  expect(observe.mock.calls.map(([target]) => target)).toEqual([screen.getByTestId('first'), screen.getByTestId('second')]);
});
it('cancels the delay on exit and starts a fresh pause on re-entry', () => {
  render(content); const target = screen.getByTestId('first');
  enter(target); advance(200); enter(target, false); advance(1000);
  expect(state()).toBe('false');
  enter(target); advance(449); expect(state()).toBe('false');
  advance(1); expect(state()).toBe('true');
});
it('reveals each block only once during a visit and disconnects when done', () => {
  render(content);
  enter(screen.getByTestId('first')); advance(450);
  enter(screen.getByTestId('first'), false); expect(state()).toBe('true');
  enter(screen.getByTestId('second')); advance(450);
  expect(disconnect).toHaveBeenCalled();
  expect(unobserve).toHaveBeenCalledTimes(2);
});
it('replays on return to a route even when the same component remains mounted', () => {
  const page = (route: string) => <ScrollRevealProvider routeKey={route}>{content}</ScrollRevealProvider>;
  const { rerender } = render(page('/'));
  enter(screen.getByTestId('first')); advance(450); expect(state()).toBe('true');
  rerender(page('/work')); expect(state()).toBe('false');
  enter(screen.getByTestId('first')); advance(450);
  rerender(page('/')); expect(state()).toBe('false');
  enter(screen.getByTestId('first')); advance(449); expect(state()).toBe('false');
  advance(1); expect(state()).toBe('true');
});
it('replays after restoration from the browser back-forward cache', () => {
  render(content); enter(screen.getByTestId('first')); advance(450);
  act(() => window.dispatchEvent(new PageTransitionEvent('pageshow', { persisted: true })));
  expect(state()).toBe('false');
  enter(screen.getByTestId('first')); advance(450); expect(state()).toBe('true');
});
it('cancels pending work on unmount and reveals on a fresh mount', () => {
  const { unmount } = render(content); enter(screen.getByTestId('first'));
  unmount(); expect(vi.getTimerCount()).toBe(0);
  render(content); enter(screen.getByTestId('first')); advance(450); expect(state()).toBe('true');
});
it('does not hide content for reduced motion', () => {
  vi.stubGlobal('matchMedia', () => ({ matches: true }));
  render(content); expect(state()).toBe('true'); expect(observe).not.toHaveBeenCalled();
});
it('immediately reveals and cancels delays when reduced motion is enabled', () => {
  let change = () => {};
  const motion = { matches: false, addEventListener: vi.fn((_, cb) => { change = cb; }), removeEventListener: vi.fn() };
  vi.stubGlobal('matchMedia', () => motion);
  render(content); enter(screen.getByTestId('first'));
  act(() => { motion.matches = true; change(); });
  expect(state()).toBe('true'); expect(state('second')).toBe('true'); expect(vi.getTimerCount()).toBe(0);
});


const boot = () => {
  vi.stubGlobal('matchMedia', () => ({ matches: false, addEventListener: vi.fn(), removeEventListener: vi.fn() }));
  new Function(scrollRevealBootstrap)();
};
it('releases server-rendered content after the deadline if hydration never happens', () => {
  const container = document.createElement('div');
  container.innerHTML = renderToString(content);
  document.body.append(container);
  boot();
  expect(document.documentElement.dataset.enjReveal).toBe('enabled');
  advance(1499); expect(document.documentElement.dataset.enjReveal).toBe('enabled');
  advance(1);
  expect(document.documentElement.dataset.enjReveal).toBe('expired');
  expect(container.querySelector('.enj-scroll-reveal')?.getAttribute('data-reveal-fallback')).toBe('true');
  container.remove();
});
it('never hides content on late hydration, but allows the next route visit to animate', () => {
  boot(); advance(1500);
  const page = (route: string) => <ScrollRevealProvider routeKey={route}>{content}</ScrollRevealProvider>;
  const { rerender } = render(page(window.location.pathname));
  expect(state()).toBe('true'); expect(observe).not.toHaveBeenCalled();
  rerender(page('/another-route'));
  expect(state()).toBe('false');
  enter(screen.getByTestId('first')); advance(450); expect(state()).toBe('true');
});
it('does not interrupt initialized offscreen reveals when the bootstrap deadline expires', () => {
  boot(); render(content);
  advance(1500);
  expect(state()).toBe('false');
  expect(screen.getByTestId('first').closest('.enj-scroll-reveal')?.hasAttribute('data-reveal-fallback')).toBe(false);
  enter(screen.getByTestId('first')); advance(450); expect(state()).toBe('true');
});
it('makes a broken observer fall back to visible content', () => {
  vi.stubGlobal('IntersectionObserver', class { constructor() { throw new Error('Unavailable'); } });
  render(content);
  expect(state()).toBe('true'); expect(state('second')).toBe('true');
});
it('does not arm pre-hydration hiding without observer support or for reduced motion', () => {
  vi.stubGlobal('IntersectionObserver', undefined);
  // The platform feature check uses the property existence, as real browsers do.
  const fakeWindow = { matchMedia: () => ({ matches: false }), setTimeout: vi.fn() };
  new Function('window', scrollRevealBootstrap)(fakeWindow);
  expect(document.documentElement.dataset.enjReveal).toBeUndefined();
  fakeWindow.matchMedia = () => ({ matches: true });
  new Function('window', scrollRevealBootstrap)({ ...fakeWindow, IntersectionObserver: class {} });
  expect(document.documentElement.dataset.enjReveal).toBeUndefined();
});


it('preserves browser-cache replay after an initialized page passes the hydration deadline', () => {
  boot(); render(content);
  enter(screen.getByTestId('first')); advance(1500);
  expect(state()).toBe('true');
  act(() => window.dispatchEvent(new PageTransitionEvent('pageshow', { persisted: true })));
  expect(state()).toBe('false');
  enter(screen.getByTestId('first')); advance(450); expect(state()).toBe('true');
});

it('waits for section navigation to settle before starting a fresh reveal delay', () => {
  render(content);
  const target = screen.getByTestId('first');
  enter(target); advance(200);
  act(() => setSectionNavigating(true));
  enter(target); advance(1000);
  expect(state()).toBe('false');
  act(() => setSectionNavigating(false));
  expect(observe).toHaveBeenLastCalledWith(screen.getByTestId('second'));
  enter(target); advance(449); expect(state()).toBe('false');
  advance(1); expect(state()).toBe('true');
});
it('does not re-hide revealed content when navigating between sections', () => {
  render(content);
  enter(screen.getByTestId('first')); advance(450);
  act(() => setSectionNavigating(true));
  expect(state()).toBe('true');
  act(() => setSectionNavigating(false));
  expect(state()).toBe('true');
});
it('uses a viewport-height threshold for home-page content', () => {
  const constructor = vi.fn();
  vi.stubGlobal('IntersectionObserver', class {
    constructor(cb: IntersectionObserverCallback, options: IntersectionObserverInit) {
      callback = cb; constructor(options);
    }
    observe = observe; unobserve = unobserve; disconnect = disconnect;
  });
  render(<main className="enj-home-page">{content}</main>);
  expect(constructor).toHaveBeenCalledWith({ threshold: 0, rootMargin: `0px 0px -${Math.round(window.innerHeight * 0.25)}px 0px` });
});

it('keeps the silhouette prototype opt-in and renders real content only once', () => {
  const markup = renderToString(<ScrollReveal preview><section><button>Read expertise</button></section></ScrollReveal>);
  expect(markup).toContain('enj-scroll-reveal--preview');
  expect(markup.match(/Read expertise/g)).toHaveLength(1);
  expect(markup).not.toContain('aria-busy');
  expect(renderToString(content)).not.toContain('enj-scroll-reveal--preview');
});
it('immediately reveals real content when a keyboard user focuses its control', () => {
  const { container } = render(<ScrollReveal preview><section><div><button>Read expertise</button></div></section></ScrollReveal>);
  act(() => screen.getByRole('button').focus());
  expect(container.firstElementChild?.getAttribute('data-visible')).toBe('true');
  expect(container.firstElementChild?.getAttribute('data-reveal-immediate')).toBe('true');
  expect(disconnect).toHaveBeenCalled();
  advance(1000);
  expect(container.firstElementChild?.getAttribute('data-visible')).toBe('true');
});
it('does not bypass navigation timing when navigation focuses the heading', () => {
  const { container } = render(<ScrollReveal preview><section><div><h2 tabIndex={-1}>Expertise</h2></div></section></ScrollReveal>);
  act(() => { setSectionNavigating(true); screen.getByRole('heading').focus(); });
  expect(container.firstElementChild?.getAttribute('data-visible')).toBe('false');
  act(() => setSectionNavigating(false));
});
it('exposes the preview content when observer setup fails', () => {
  vi.stubGlobal('IntersectionObserver', class { constructor() { throw new Error('Unavailable'); } });
  const { container } = render(<ScrollReveal preview><section><div>Expertise</div></section></ScrollReveal>);
  expect(container.firstElementChild?.getAttribute('data-reveal-fallback')).toBe('true');
  expect(container.firstElementChild?.getAttribute('data-visible')).toBe('true');
});

it('still reveals a focused control while section navigation is in progress', () => {
  const { container } = render(<ScrollReveal preview><section><div><button>Read expertise</button></div></section></ScrollReveal>);
  act(() => { setSectionNavigating(true); screen.getByRole('button').focus(); });
  expect(container.firstElementChild?.getAttribute('data-visible')).toBe('true');
  expect(container.firstElementChild?.getAttribute('data-reveal-immediate')).toBe('true');
  act(() => setSectionNavigating(false));
});
