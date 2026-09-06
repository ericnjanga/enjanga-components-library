// @vitest-environment jsdom
import { afterEach, describe, expect, it } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { PageHero } from './PageHero';
import { CaseStudiesPage } from '../CaseStudiesPage';

afterEach(cleanup);

describe('PageHero', () => {
  it('renders the page title as the only level-one heading', () => {
    const { container } = render(<PageHero title="Selected work" />);
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
    expect(screen.getByRole('heading', { name: 'Selected work' }).tagName).toBe('H1');
    expect(container.querySelector('p')).toBeNull();
  });

  it('renders an optional description below the title', () => {
    const { container } = render(<PageHero title="Hello" description="I build accessible interfaces." />);
    expect(screen.getByText('I build accessible interfaces.').tagName).toBe('P');
    expect(container.querySelector('header')?.children[0].tagName).toBe('H1');
    expect(container.querySelector('header')?.children[1].tagName).toBe('P');
  });

  it.each(['', '   '])('omits an empty description (%j)', description => {
    const { container } = render(<PageHero title="Hello" description={description} />);
    expect(container.querySelector('p')).toBeNull();
  });

  it('preserves native attributes and page-owned styling', () => {
    const { container } = render(<PageHero title="Hello" id="intro" aria-label="Introduction" className="home-hero" />);
    const header = container.querySelector('header');
    expect(header?.id).toBe('intro');
    expect(header?.getAttribute('aria-label')).toBe('Introduction');
    expect(header?.classList.contains('home-hero')).toBe(true);
    expect(header?.classList.contains('enj-page-hero')).toBe(true);
  });

  it('is reused by CaseStudiesPage without changing its empty state', () => {
    render(<CaseStudiesPage title="Selected work" caseStudies={[]} emptyMessage="More work soon." />);
    const heading = screen.getByRole('heading', { level: 1, name: 'Selected work' });
    expect(heading.parentElement?.classList.contains('enj-page-hero')).toBe(true);
    expect(heading.parentElement?.classList.contains('enj-case-studies-page__hero')).toBe(true);
    expect(screen.getByText('More work soon.')).toBeTruthy();
  });
});
