// @vitest-environment jsdom
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, expect, it, vi } from 'vitest';
import { InteractiveImage } from './InteractiveImage';
let callbacks: Map<number, FrameRequestCallback>;
let id: number;
let time: number;
beforeEach(() => {
  callbacks = new Map(); id = 0; time = 0;
  vi.stubGlobal('PointerEvent', MouseEvent);
  vi.stubGlobal('requestAnimationFrame', (callback: FrameRequestCallback) => { callbacks.set(++id, callback); return id; });
  vi.stubGlobal('cancelAnimationFrame', (key: number) => callbacks.delete(key));
  vi.stubGlobal('matchMedia', () => ({ matches: false }));
});
afterEach(() => { cleanup(); vi.unstubAllGlobals(); });
function frame() {
  time += 1000 / 60;
  const pending = [...callbacks.values()]; callbacks.clear(); pending.forEach(callback => callback(time));
}
function setup() {
  const view = render(<InteractiveImage src="/poster.jpg" alt="Preview" interactionLabel="Open" action={{ onClick: () => {} }} />);
  const control = screen.getByRole('button');
  control.getBoundingClientRect = () => ({ left: 0, top: 0, width: 400, height: 300 } as DOMRect);
  const label = control.querySelector<HTMLElement>('.enj-interactive-image__label')!;
  const x = () => Number(/translate3d\(([^p]+)px/.exec(label.style.transform)?.[1]);
  return { ...view, control, label, x };
}
it('coalesces rapid pointer events and smoothly retargets without jumping or restarting', () => {
  const { control, x } = setup();
  fireEvent.pointerEnter(control, { clientX: 300, clientY: 150 });
  fireEvent.pointerMove(control, { clientX: 320, clientY: 150 });
  fireEvent.pointerMove(control, { clientX: 340, clientY: 150 });
  expect(callbacks.size).toBe(1);
  frame();
  expect(x()).toBeGreaterThan(0); expect(x()).toBeLessThan(140);
  const before = x();
  fireEvent.pointerMove(control, { clientX: 50, clientY: 150 });
  expect(x()).toBe(before);
  frame(); expect(x()).toBeLessThan(before); expect(x()).toBeGreaterThan(-150);
  for (let i = 0; i < 40; i++) frame();
  expect(x()).toBe(-150); expect(callbacks.size).toBe(0);
  fireEvent.pointerLeave(control);
  frame(); expect(x()).toBeGreaterThan(-150); expect(x()).toBeLessThan(0);
  for (let i = 0; i < 60; i++) frame();
  expect(x()).toBe(0); expect(callbacks.size).toBe(0);
});
it('cancels animation on unmount and uses immediate positioning with reduced motion', () => {
  vi.stubGlobal('matchMedia', () => ({ matches: true }));
  const { control, x, unmount } = setup();
  fireEvent.pointerEnter(control, { clientX: 300, clientY: 150 });
  frame(); expect(x()).toBe(100); expect(callbacks.size).toBe(0);
  fireEvent.pointerMove(control, { clientX: 350, clientY: 150 });
  unmount(); expect(callbacks.size).toBe(0);
});
