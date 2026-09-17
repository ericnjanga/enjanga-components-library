// @vitest-environment jsdom
import { afterEach, beforeEach, expect, it, vi } from 'vitest';
import { act, cleanup, render, screen } from '@testing-library/react';
import { renderToString } from 'react-dom/server';
import { ScrollReveal } from './ScrollReveal';
import { ScrollRevealProvider } from './ScrollRevealProvider';

let callback: IntersectionObserverCallback;
const observe = vi.fn(), unobserve = vi.fn(), disconnect = vi.fn();
beforeEach(() => {
  vi.useFakeTimers();
  vi.clearAllMocks();
  vi.stubGlobal('IntersectionObserver', class {
    constructor(cb: IntersectionObserverCallback) { callback = cb; }
    observe = observe; unobserve = unobserve; disconnect = disconnect;
  });
});
afterEach(() => { cleanup(); vi.useRealTimers(); vi.unstubAllGlobals(); });
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
