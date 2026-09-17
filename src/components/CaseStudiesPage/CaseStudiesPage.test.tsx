// @vitest-environment jsdom
import { render, screen } from '@testing-library/react';
import { beforeEach, afterEach, describe, expect, it, vi } from 'vitest';
import { CaseStudiesPage } from './CaseStudiesPage';

beforeEach(() => {
  vi.stubGlobal('IntersectionObserver', class { observe = vi.fn(); disconnect = vi.fn(); });
});
afterEach(() => vi.unstubAllGlobals());

describe('CaseStudiesPage', () => {
  it.each([0, 1, 3])('renders separators only between %i cards', count => {
    const studies = Array.from({ length: count }, (_, i) => ({ id: `study-${i}`, title: `Study ${i}`, description: 'Summary', caseStudyHref: `/studies/${i}` }));
    render(<CaseStudiesPage title="Work" caseStudies={studies} />);
    expect(screen.queryAllByRole('article')).toHaveLength(count);
    expect(screen.queryAllByRole('separator')).toHaveLength(Math.max(0, count - 1));
    const list = document.querySelector('.enj-case-studies-page__list')!;
    if (count) {
      expect(list.firstElementChild?.tagName).not.toBe('HR');
      expect(list.lastElementChild?.tagName).not.toBe('HR');
      for (const hr of screen.queryAllByRole('separator')) {
        expect(hr.previousElementSibling?.querySelector('article')).toBeTruthy();
        expect(hr.nextElementSibling?.querySelector('article')).toBeTruthy();
      }
    }
  });
  it('renders the title, configurable empty state, and native page props', () => {
    render(<CaseStudiesPage title="Selected work" caseStudies={[]} emptyMessage="No studies yet" id="work" className="custom" />);
    expect(screen.getByRole('heading', { level: 1 }).textContent).toBe('Selected work');
    expect(screen.getByText('No studies yet')).toBeTruthy();
    expect(screen.getByRole('main').id).toBe('work');
    expect(screen.getByRole('main').classList.contains('custom')).toBe(true);
  });
});
