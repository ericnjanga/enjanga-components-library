// @vitest-environment jsdom
import { forwardRef } from 'react';
import { afterEach, expect, it, vi } from 'vitest';
import {
  act,
  cleanup,
  fireEvent,
  render,
  screen,
} from '@testing-library/react';
import { InteractiveImage } from './InteractiveImage';
import { LinkProvider, type LinkProps } from '../../provider/LinkProvider';

afterEach(() => {
  cleanup();
  vi.useRealTimers();
  vi.unstubAllGlobals();
});
function setup(extra = {}) {
  const navigate = vi.fn();
  const Adapter = forwardRef<HTMLAnchorElement, LinkProps>(
    ({ onClick, ...props }, ref) => (
      <a
        {...props}
        ref={ref}
        onClick={(event) => {
          onClick?.(event);
          if (
            event.defaultPrevented ||
            event.ctrlKey ||
            event.metaKey ||
            props.target === '_blank'
          )
            return;
          event.preventDefault();
          navigate(props.href);
        }}
      />
    )
  );
  const result = render(
    <LinkProvider component={Adapter}>
      <InteractiveImage
        src="/photo.jpg"
        alt="Portrait"
        href="/about"
        interactionLabel="About"
        {...extra}
      />
    </LinkProvider>
  );
  return { ...result, navigate };
}
it('delays normal routing for the ripple and navigates once through LinkProvider', () => {
  vi.useFakeTimers();
  const { navigate } = setup();
  const link = screen.getByRole('link');
  fireEvent.click(link);
  fireEvent.click(link);
  expect(navigate).not.toHaveBeenCalled();
  act(() => vi.advanceTimersByTime(480));
  expect(navigate).toHaveBeenCalledExactlyOnceWith('/about');
});
it('cancels delayed navigation on unmount', () => {
  vi.useFakeTimers();
  const { navigate, unmount } = setup();
  fireEvent.click(screen.getByRole('link'));
  unmount();
  act(() => vi.runAllTimers());
  expect(navigate).not.toHaveBeenCalled();
});
it('routes immediately with reduced motion', () => {
  vi.stubGlobal('matchMedia', () => ({ matches: true }));
  const { navigate } = setup();
  fireEvent.click(screen.getByRole('link'));
  expect(navigate).toHaveBeenCalledExactlyOnceWith('/about');
});
it('preserves modified clicks and secure new-tab attributes', () => {
  vi.useFakeTimers();
  setup({ target: '_blank' });
  const link = screen.getByRole('link');
  expect(link.getAttribute('rel')).toBe('noopener noreferrer');
  expect(fireEvent.click(link, { ctrlKey: true })).toBe(true);
  expect(vi.getTimerCount()).toBe(0);
});
it('renders a noninteractive image without a link', () => {
  render(<InteractiveImage src="/photo.jpg" alt="Portrait" />);
  expect(screen.queryByRole('link')).toBeNull();
  expect(screen.getByRole('img').getAttribute('alt')).toBe('Portrait');
});
