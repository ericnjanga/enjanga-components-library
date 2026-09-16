// @vitest-environment jsdom
import { afterEach, expect, it, vi } from 'vitest';
import { act, cleanup, render, screen } from '@testing-library/react';
import { renderToString } from 'react-dom/server';
import { ScrollReveal } from './ScrollReveal';
afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
});
it('keeps server-rendered and unsupported-browser content visible', () => {
  expect(renderToString(<ScrollReveal>Content</ScrollReveal>)).toContain(
    'data-visible="true"'
  );
  vi.stubGlobal('IntersectionObserver', undefined);
  render(<ScrollReveal data-testid="reveal">Content</ScrollReveal>);
  expect(screen.getByTestId('reveal').getAttribute('data-visible')).toBe(
    'true'
  );
});
it('reveals once on intersection and disconnects on cleanup', () => {
  let callback: IntersectionObserverCallback;
  const disconnect = vi.fn();
  vi.stubGlobal(
    'IntersectionObserver',
    class {
      constructor(cb: IntersectionObserverCallback) {
        callback = cb;
      }
      observe = vi.fn();
      disconnect = disconnect;
    }
  );
  const { unmount } = render(
    <ScrollReveal data-testid="reveal">
      <section>Content</section>
    </ScrollReveal>
  );
  expect(screen.getByTestId('reveal').getAttribute('data-visible')).toBe(
    'false'
  );
  act(() =>
    callback(
      [{ isIntersecting: true } as IntersectionObserverEntry],
      {} as IntersectionObserver
    )
  );
  expect(screen.getByTestId('reveal').getAttribute('data-visible')).toBe(
    'true'
  );
  expect(disconnect).toHaveBeenCalledOnce();
  unmount();
  expect(disconnect).toHaveBeenCalledTimes(2);
});
it('does not hide content for reduced motion', () => {
  const observer = vi.fn();
  vi.stubGlobal('IntersectionObserver', observer);
  vi.stubGlobal('matchMedia', () => ({ matches: true }));
  render(<ScrollReveal data-testid="reveal">Content</ScrollReveal>);
  expect(screen.getByTestId('reveal').getAttribute('data-visible')).toBe(
    'true'
  );
  expect(observer).not.toHaveBeenCalled();
});
