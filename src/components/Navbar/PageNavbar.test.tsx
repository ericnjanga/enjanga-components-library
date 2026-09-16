// @vitest-environment jsdom
import { afterEach, beforeEach, expect, it, vi } from 'vitest';
import {
  act,
  cleanup,
  fireEvent,
  render,
  screen,
} from '@testing-library/react';
import { PageNavbar } from './PageNavbar';
const items = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'expertise', label: 'Expertise', href: '/#expertise' },
  { id: 'about', label: 'About', href: '/#about' },
  { id: 'cases', label: 'Case Studies', href: '/case-studies' },
];
let frames: FrameRequestCallback[];
let tops: Record<string, number>;
beforeEach(() => {
  frames = [];
  tops = { home: 0, expertise: 900, about: 1800 };
  vi.stubGlobal('requestAnimationFrame', (cb: FrameRequestCallback) => {
    frames.push(cb);
    return frames.length;
  });
  vi.stubGlobal('cancelAnimationFrame', vi.fn());
  Object.defineProperty(document.documentElement, 'scrollHeight', {
    configurable: true,
    value: 3000,
  });
  Object.defineProperty(window, 'scrollY', { configurable: true, value: 0 });
  window.history.replaceState({ preserved: true }, '', '/?preview=1');
  for (const id of Object.keys(tops)) {
    const section = document.createElement('section');
    section.id = id;
    section.getBoundingClientRect = () => ({ top: tops[id] } as DOMRect);
    document.body.appendChild(section);
  }
});
afterEach(() => {
  cleanup();
  document.querySelectorAll('section').forEach((n) => n.remove());
  vi.unstubAllGlobals();
});
function flush() {
  act(() => {
    const pending = frames.splice(0);
    pending.forEach((cb) => cb(0));
  });
}
it('tracks visible Home sections and replaces the hash without losing history state or search', () => {
  render(
    <PageNavbar
      pathname="/"
      brand="Site"
      brandLabel="Site home"
      items={items}
    />
  );
  flush();
  flush();
  expect(
    screen
      .getByRole('link', { name: 'Home', exact: true })
      .getAttribute('aria-current')
  ).toBe('page');
  tops.expertise = -1;
  tops.home = -901;
  fireEvent.scroll(window);
  flush();
  expect(
    screen.getByRole('link', { name: 'Expertise' }).getAttribute('aria-current')
  ).toBe('page');
  expect(window.location.hash).toBe('#expertise');
  expect(window.location.search).toBe('?preview=1');
  expect(window.history.state).toEqual({ preserved: true });
});
it('matches nested routes and stops Home scroll tracking away from Home', () => {
  const { rerender } = render(
    <PageNavbar
      pathname="/"
      brand="Site"
      brandLabel="Site home"
      items={items}
    />
  );
  flush();
  flush();
  rerender(
    <PageNavbar
      pathname="/case-studies/project"
      brand="Site"
      brandLabel="Site home"
      items={items}
    />
  );
  tops.expertise = -1;
  fireEvent.scroll(window);
  flush();
  expect(
    screen
      .getByRole('link', { name: 'Case Studies' })
      .getAttribute('aria-current')
  ).toBe('page');
  expect(window.location.hash).toBe('');
});
it('selects the last Home section at the page bottom', () => {
  Object.defineProperty(window, 'scrollY', { configurable: true, value: 3000 });
  render(
    <PageNavbar
      pathname="/"
      brand="Site"
      brandLabel="Site home"
      items={items}
    />
  );
  flush();
  flush();
  expect(
    screen.getByRole('link', { name: 'About' }).getAttribute('aria-current')
  ).toBe('page');
});
it('does not rewrite hashes when synchronization is disabled', () => {
  tops.home = -901;
  tops.expertise = -1;
  render(
    <PageNavbar
      pathname="/"
      brand="Site"
      brandLabel="Site home"
      items={items}
      syncHash={false}
    />
  );
  flush();
  flush();
  expect(
    screen.getByRole('link', { name: 'Expertise' }).getAttribute('aria-current')
  ).toBe('page');
  expect(window.location.hash).toBe('');
});

it('keeps the clicked section active during smooth scrolling and focuses its heading', () => {
  vi.stubGlobal('scrollTo', vi.fn());
  document.getElementById('about')!.innerHTML = '<h2>About heading</h2>';
  render(
    <PageNavbar
      pathname="/"
      brand="Site"
      brandLabel="Site home"
      items={items}
    />
  );
  flush();
  flush();
  fireEvent.click(screen.getByRole('link', { name: 'About', exact: true }));
  tops.expertise = -1;
  tops.home = -901;
  fireEvent.scroll(window);
  flush();
  expect(
    screen
      .getByRole('link', { name: 'About', exact: true })
      .getAttribute('aria-current')
  ).toBe('page');
  expect(window.location.hash).toBe('#about');
  expect(document.activeElement?.textContent).toBe('About heading');
  fireEvent.wheel(window);
  flush();
  flush();
  expect(
    screen
      .getByRole('link', { name: 'Expertise', exact: true })
      .getAttribute('aria-current')
  ).toBe('page');
});
it('honors reduced motion and avoids duplicate history entries for the same section', () => {
  const scrollTo = vi.fn();
  vi.stubGlobal('scrollTo', scrollTo);
  vi.stubGlobal('matchMedia', () => ({ matches: true }));
  render(
    <PageNavbar
      pathname="/"
      brand="Site"
      brandLabel="Site home"
      items={items}
    />
  );
  flush();
  flush();
  const push = vi.spyOn(window.history, 'pushState');
  fireEvent.click(screen.getByRole('link', { name: 'About', exact: true }));
  fireEvent.click(screen.getByRole('link', { name: 'About', exact: true }));
  expect(push).toHaveBeenCalledTimes(1);
  expect(scrollTo).toHaveBeenCalledWith(
    expect.objectContaining({ behavior: 'instant' })
  );
  push.mockRestore();
});

it('closes the mobile menu and keeps focus on the destination heading', () => {
  vi.stubGlobal('scrollTo', vi.fn());
  document.getElementById('about')!.innerHTML = '<h2>About heading</h2>';
  render(
    <PageNavbar
      pathname="/"
      brand="Site"
      brandLabel="Site home"
      items={items}
    />
  );
  flush();
  flush();
  fireEvent.click(screen.getByRole('button', { name: 'Open main menu' }));
  const link = screen
    .getByRole('dialog')
    .querySelector<HTMLAnchorElement>('a[href="/#about"]')!;
  fireEvent.click(link);
  expect(screen.queryByRole('dialog')).toBeNull();
  expect(document.activeElement?.textContent).toBe('About heading');
});
