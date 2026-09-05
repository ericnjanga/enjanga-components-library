// @vitest-environment jsdom
import { createRef } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { Button } from '../../index';

describe('Button', () => {
  it('exports a primary native button with a safe default type', () => {
    render(<Button>Continue</Button>);
    const button = screen.getByRole('button', { name: 'Continue' });
    expect(button.classList.contains('enj-button--primary')).toBe(true);
    expect(button.getAttribute('type')).toBe('button');
  });
  it.each(['primary', 'secondary', 'tertiary'] as const)('renders the %s variant', variant => {
    render(<Button variant={variant}>Action</Button>);
    expect(screen.getByRole('button').classList.contains(`enj-button--${variant}`)).toBe(true);
  });
  it.each(['chevron-right', 'close'] as const)('keeps the %s icon decorative', icon => {
    render(<Button icon={icon}>Continue</Button>);
    const button = screen.getByRole('button', { name: 'Continue' });
    expect(button.querySelector('.enj-button__icon')?.getAttribute('aria-hidden')).toBe('true');
    expect(button.classList.contains('enj-button--with-icon')).toBe(true);
  });
  it('omits icon markup and spacing when no icon is requested', () => {
    render(<Button>Continue</Button>);
    expect(screen.getByRole('button').querySelector('.enj-button__icon')).toBeNull();
    expect(screen.getByRole('button').classList.contains('enj-button--with-icon')).toBe(false);
  });
  it('supports pointer, Enter, and Space activation', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Continue</Button>);
    await user.tab();
    expect(document.activeElement).toBe(screen.getByRole('button'));
    await user.keyboard('{Enter}');
    await user.keyboard(' ');
    await user.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalledTimes(3);
  });
  it('prevents disabled activation and skips disabled buttons in tab order', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<><Button disabled onClick={onClick}>Unavailable</Button><Button>Available</Button></>);
    await user.click(screen.getByRole('button', { name: 'Unavailable' }));
    await user.tab();
    expect(document.activeElement).toBe(screen.getByRole('button', { name: 'Available' }));
    expect(onClick).not.toHaveBeenCalled();
  });
  it('submits a form only when explicitly configured', async () => {
    const user = userEvent.setup();
    const submit = vi.fn(event => event.preventDefault());
    render(<form onSubmit={submit}><Button>Cancel</Button><Button type="submit">Save</Button></form>);
    await user.click(screen.getByRole('button', { name: 'Cancel' }));
    expect(submit).not.toHaveBeenCalled();
    await user.click(screen.getByRole('button', { name: 'Save' }));
    expect(submit).toHaveBeenCalledOnce();
  });
  it('forwards refs, custom classes, and native accessible attributes', () => {
    const ref = createRef<HTMLButtonElement>();
    render(<Button ref={ref} className="custom" aria-label="Save draft" aria-pressed="true" name="action" value="save">Save</Button>);
    const button = screen.getByRole('button', { name: 'Save draft' });
    expect(ref.current).toBe(button);
    expect(button.classList.contains('custom')).toBe(true);
    expect(button.getAttribute('aria-pressed')).toBe('true');
    expect(button.getAttribute('name')).toBe('action');
    expect(button.getAttribute('value')).toBe('save');
  });
});
