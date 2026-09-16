// @vitest-environment jsdom
import { forwardRef } from 'react';
import { cleanup, render, screen, fireEvent } from '@testing-library/react';
import { afterEach, expect, it, vi } from 'vitest';
import { Footer } from './Footer';
import { LinkProvider, type LinkProps } from '../../provider/LinkProvider';
afterEach(cleanup);

it('renders an accessible footer with safe external links and a home destination', () => {
  render(
    <Footer
      siteName="Example"
      homeHref="/home"
      copyright="Copyright Example"
      links={[
        {
          label: 'Profile',
          href: 'https://example.com/profile',
          accessibleLabel: 'Open profile in a new tab',
          openInNewTab: true,
        },
        { label: 'About', href: '/#about' },
      ]}
    />
  );
  expect(screen.getByRole('contentinfo')).toBeTruthy();
  expect(
    screen.getByRole('navigation', { name: 'Footer navigation' })
  ).toBeTruthy();
  expect(
    screen.getByRole('link', { name: 'Example home' }).getAttribute('href')
  ).toBe('/home');
  const external = screen.getByRole('link', {
    name: 'Open profile in a new tab',
  });
  expect(external.getAttribute('target')).toBe('_blank');
  expect(external.getAttribute('rel')).toBe('noopener noreferrer');
  expect(
    screen.getByRole('link', { name: 'About' }).getAttribute('target')
  ).toBeNull();
  expect(screen.getByText('Copyright Example')).toBeTruthy();
});
it('omits empty navigation and copyright', () => {
  render(<Footer siteName="Example" />);
  expect(screen.queryByRole('navigation')).toBeNull();
  expect(document.querySelector('p')).toBeNull();
  expect(screen.getAllByRole('link')).toHaveLength(1);
});
it('uses the application link adapter for brand and navigation', () => {
  const navigate = vi.fn();
  const Adapter = forwardRef<HTMLAnchorElement, LinkProps>(
    ({ href, ...props }, ref) => (
      <a
        {...props}
        href={href}
        ref={ref}
        onClick={(event) => {
          event.preventDefault();
          navigate(href);
        }}
      />
    )
  );
  render(
    <LinkProvider component={Adapter}>
      <Footer
        siteName="Example"
        links={[{ label: 'Studies', href: '/case-studies' }]}
      />
    </LinkProvider>
  );
  fireEvent.click(screen.getByRole('link', { name: 'Example home' }));
  fireEvent.click(screen.getByRole('link', { name: 'Studies' }));
  expect(navigate.mock.calls).toEqual([['/'], ['/case-studies']]);
});
