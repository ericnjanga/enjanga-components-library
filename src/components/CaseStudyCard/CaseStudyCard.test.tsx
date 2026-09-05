// @vitest-environment jsdom
import { createRef } from 'react';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { CaseStudyCard, type CaseStudyCardProps } from '../../index';

const defaults: CaseStudyCardProps = {
  title: 'Accessible experiences', description: ['The challenge.', 'The outcome.'],
  posterSrc: '/poster.png', posterAlt: 'Project preview',
  onWatchIntro: vi.fn(), onReadCaseStudy: vi.fn(),
};

describe('CaseStudyCard', () => {
  it('exports an article named by an h2 using the core preset', () => {
    render(<CaseStudyCard {...defaults} />);
    const article = screen.getByRole('article', { name: defaults.title });
    const title = within(article).getByRole('heading', { level: 2, name: defaults.title });
    expect(title.className).toBe('enj-h2');
    expect(article.getAttribute('aria-labelledby')).toBe(title.id);
    expect(article.querySelectorAll('h1,h3,h4').length).toBe(0);
  });
  it('renders ordered paragraphs and accepts a single description', () => {
    const { rerender } = render(<CaseStudyCard {...defaults} />);
    expect(Array.from(document.querySelectorAll('p'), p => p.textContent)).toEqual(defaults.description);
    rerender(<CaseStudyCard {...defaults} description="One paragraph." />);
    expect(document.querySelectorAll('p').length).toBe(1);
    expect(screen.getByText('One paragraph.')).toBeTruthy();
  });
  it('preserves poster source and accessible alternative text', () => {
    render(<CaseStudyCard {...defaults} />);
    const poster = screen.getByRole('img', { name: 'Project preview' });
    expect(poster.getAttribute('src')).toBe('/poster.png');
    expect(poster.getAttribute('loading')).toBe('lazy');
  });
  it('supports a decorative poster', () => {
    render(<CaseStudyCard {...defaults} posterAlt="" />);
    expect(screen.queryByRole('img')).toBeNull();
  });
  it('uses Button for the case study action and dispatches independent callbacks', async () => {
    const user = userEvent.setup();
    const intro = vi.fn(); const read = vi.fn();
    render(<CaseStudyCard {...defaults} onWatchIntro={intro} onReadCaseStudy={read} />);
    const action = screen.getByRole('button', { name: `Read the full case study: ${defaults.title}` });
    expect(action.classList.contains('enj-button--secondary')).toBe(true);
    expect(action.querySelector('.enj-button__icon')).toBeTruthy();
    await user.click(screen.getByRole('button', { name: `Watch intro: ${defaults.title}` }));
    expect(intro).toHaveBeenCalledOnce(); expect(read).not.toHaveBeenCalled();
    await user.click(action); expect(read).toHaveBeenCalledOnce();
  });
  it('supports keyboard focus and activation for both actions without submitting forms', async () => {
    const user = userEvent.setup(); const intro = vi.fn(); const read = vi.fn(); const submit = vi.fn(e => e.preventDefault());
    render(<form onSubmit={submit}><CaseStudyCard {...defaults} onWatchIntro={intro} onReadCaseStudy={read} /></form>);
    await user.tab(); await user.keyboard('{Enter}');
    await user.tab(); await user.keyboard(' ');
    expect(intro).toHaveBeenCalledOnce(); expect(read).toHaveBeenCalledOnce(); expect(submit).not.toHaveBeenCalled();
  });
  it('disables actions independently', async () => {
    const user = userEvent.setup(); const intro = vi.fn(); const read = vi.fn();
    const { rerender } = render(<CaseStudyCard {...defaults} introDisabled onWatchIntro={intro} onReadCaseStudy={read} />);
    const buttons = screen.getAllByRole('button');
    await user.click(buttons[0]); await user.click(buttons[1]);
    expect(intro).not.toHaveBeenCalled(); expect(read).toHaveBeenCalledOnce();
    rerender(<CaseStudyCard {...defaults} readDisabled onWatchIntro={intro} onReadCaseStudy={read} />);
    await user.click(buttons[0]); await user.click(buttons[1]);
    expect(intro).toHaveBeenCalledOnce(); expect(read).toHaveBeenCalledOnce();
  });
  it('supports custom labels and unique heading associations across cards', () => {
    render(<><CaseStudyCard {...defaults} introLabel="Play" readLabel="Explore" /><CaseStudyCard {...defaults} /></>);
    const headings = screen.getAllByRole('heading', { level: 2 });
    expect(headings[0].id).not.toBe(headings[1].id);
    expect(screen.getByRole('button', { name: `Play: ${defaults.title}` })).toBeTruthy();
    expect(screen.getByRole('button', { name: `Explore: ${defaults.title}` })).toBeTruthy();
  });
  it('forwards article attributes, classes, and refs', () => {
    const ref = createRef<HTMLElement>();
    render(<CaseStudyCard {...defaults} ref={ref} className="custom" id="study" />);
    const article = screen.getByRole('article');
    expect(ref.current).toBe(article); expect(article.id).toBe('study'); expect(article.classList.contains('custom')).toBe(true);
  });
});
