// @vitest-environment jsdom
import { afterEach, describe, expect, it } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CaseStudyPage } from './CaseStudyPage';
import { financialRecordsArticle } from './fixture';

afterEach(cleanup);

describe('CaseStudyPage', () => {
  it('renders one page heading and a named article using PageHero', () => {
    render(<CaseStudyPage title="Selected project"><h2>Context</h2></CaseStudyPage>);
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
    expect(screen.getByRole('heading', { level: 1 }).parentElement?.classList.contains('enj-page-hero')).toBe(true);
    expect(screen.getByRole('article', { name: 'Selected project' }).contains(screen.getByText('Context'))).toBe(true);
  });

  it('places the optional introduction in the hero', () => {
    render(<CaseStudyPage title="Project" description="Introduction"><p>Article body</p></CaseStudyPage>);
    expect(screen.getByText('Introduction').closest('header')).not.toBeNull();
    expect(screen.getByText('Article body').closest('article')).not.toBeNull();
  });

  it('preserves rich article semantics and all execution steps', () => {
    const { container } = render(<CaseStudyPage title="Project">{financialRecordsArticle}</CaseStudyPage>);
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(6);
    expect(screen.getAllByRole('separator')).toHaveLength(10);
    expect(container.querySelectorAll('blockquote')).toHaveLength(1);
    expect(screen.getAllByRole('listitem')).toHaveLength(2);
    expect(screen.getAllByRole('link', { name: /Watch walkthrough/ })).toHaveLength(7);
    expect(screen.getAllByRole('link', { name: 'ServiceOntario' })[0].getAttribute('href')).toBe('https://www.ontario.ca/page/serviceontario');
  });

  it('allows keyboard access to article links', async () => {
    render(<CaseStudyPage title="Project"><p><a href="/related">Related work</a></p></CaseStudyPage>);
    await userEvent.setup().tab();
    expect(document.activeElement).toBe(screen.getByRole('link', { name: 'Related work' }));
  });

  it('forwards native main attributes and custom styling', () => {
    render(<CaseStudyPage title="Project" id="project" className="custom" aria-label="Project page">{null}</CaseStudyPage>);
    const main = screen.getByRole('main', { name: 'Project page' });
    expect(main.id).toBe('project');
    expect(main.classList.contains('custom')).toBe(true);
    expect(main.classList.contains('enj-case-study-page')).toBe(true);
  });
});
