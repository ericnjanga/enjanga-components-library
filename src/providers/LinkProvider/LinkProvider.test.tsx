// @vitest-environment jsdom
import { forwardRef, createRef } from 'react';
import { fireEvent, render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import {
  LinkProvider, AnchorLinkProvider, ButtonLinkProvider, Button, Navbar,
  type LinkProps,
} from '../../index';

const items = [
  { id: 'work', label: 'Work', href: '/work' },
  { id: 'disabled', label: 'Unavailable', href: '/disabled', disabled: true },
  { id: 'external', label: 'External', href: 'https://example.com', openInNewTab: true },
];

function setup() {
  const navigate = vi.fn();
  const onNavigate = vi.fn();
  // Model a router adapter: run the consumer handler before routing so disabled
  // links can cancel navigation, as they do with Next.js Link.
  const Adapter = forwardRef<HTMLAnchorElement, LinkProps>(function Adapter(
    { onClick, ...props }, ref
  ) {
    return <a {...props} ref={ref} data-adapter="anchor" onClick={event => {
      onClick?.(event);
      if (event.defaultPrevented) return;
      event.preventDefault();
      navigate(props.href);
    }} />;
  });
  render(<LinkProvider component={Adapter}>
    <Navbar brand="Site" brandLabel="Site home" items={items} onNavigate={onNavigate} />
  </LinkProvider>);
  return { navigate, onNavigate };
}

describe('LinkProvider public API', () => {
  it('routes desktop menu and brand links through the adapter, preserving attributes', async () => {
    const { navigate, onNavigate } = setup();
    const work = screen.getByRole('link', { name: 'Work' });
    expect(work.getAttribute('data-adapter')).toBe('anchor');
    expect(work.classList.contains('enj-navbar__link')).toBe(true);
    await userEvent.setup().click(work);
    expect(navigate).toHaveBeenLastCalledWith('/work');
    expect(onNavigate).toHaveBeenCalledOnce();
    expect(work.getAttribute('aria-current')).toBe('page');
    await userEvent.setup().click(screen.getByRole('link', { name: 'Site home' }));
    expect(navigate).toHaveBeenLastCalledWith('/');
    const external = screen.getByRole('link', { name: 'External' });
    expect(external.getAttribute('target')).toBe('_blank');
    expect(external.getAttribute('rel')).toBe('noopener noreferrer');
  });

  it('lets disabled items cancel adapter routing and the navigation callback', () => {
    const { navigate, onNavigate } = setup();
    const disabled = screen.getByRole('link', { name: 'Unavailable' });
    expect(disabled.getAttribute('aria-disabled')).toBe('true');
    expect(disabled.tabIndex).toBe(-1);
    expect(fireEvent.click(disabled)).toBe(false);
    expect(navigate).not.toHaveBeenCalled();
    expect(onNavigate).not.toHaveBeenCalled();
  });

  it.each(['Work', 'Site home'])('routes mobile %s and closes the drawer', async name => {
    const { navigate } = setup();
    const user = userEvent.setup();
    await user.click(screen.getByRole('button', { name: 'Open main menu' }));
    const dialog = screen.getByRole('dialog');
    const link = within(dialog).getByRole('link', { name });
    expect(link.getAttribute('data-adapter')).toBe('anchor');
    await user.click(link);
    expect(navigate).toHaveBeenCalledWith(name === 'Work' ? '/work' : '/');
    expect(screen.queryByRole('dialog')).toBeNull();
    expect(document.body.style.overflow).toBe('');
  });

  it('shares one adapter across Button and Navbar while preserving refs and actions', () => {
    const Adapter = forwardRef<HTMLAnchorElement, LinkProps>(function Adapter(props, ref) {
      return <a {...props} ref={ref} data-adapter="shared" />;
    });
    const ref = createRef<HTMLAnchorElement>();
    render(<LinkProvider component={Adapter}>
      <Navbar brand="Site" items={items} />
      <Button href="/read" ref={ref}>Read</Button>
      <Button>Action</Button>
    </LinkProvider>);
    expect(screen.getByRole('link', { name: 'Work' }).getAttribute('data-adapter')).toBe('shared');
    expect(ref.current).toBe(screen.getByRole('link', { name: 'Read' }));
    expect(ref.current?.getAttribute('data-adapter')).toBe('shared');
    expect(screen.getByRole('button', { name: 'Action' }).tagName).toBe('BUTTON');
  });

  it('keeps legacy provider names as aliases of the shared provider', () => {
    expect(ButtonLinkProvider).toBe(LinkProvider);
    expect(AnchorLinkProvider).toBe(LinkProvider);
  });

  it('preserves native navigation without a provider', () => {
    render(<Navbar brand="Site" items={[{ id: 'about', label: 'About', href: '#about' }]} />);
    const link = screen.getByRole('link', { name: 'About' });
    expect(link.tagName).toBe('A');
    expect(link.hasAttribute('data-adapter')).toBe(false);
    expect(fireEvent.click(link)).toBe(true);
  });
});
