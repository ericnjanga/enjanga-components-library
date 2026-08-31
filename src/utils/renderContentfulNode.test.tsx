/**
 * Tests for renderContentfulNode
 * Covers: entry-hyperlink, resource-hyperlink, standard hyperlink, unresolved fallbacks
 */

import { describe, it, expect, vi } from 'vitest';

// Mock the Next.js Image component (peer dep not available in test env)
vi.mock('next/image', () => ({
  default: (props: Record<string, unknown>) => {
    const { src, alt, ...rest } = props;
    return <img src={src as string} alt={alt as string} {...rest} />;
  },
}));
import { renderToStaticMarkup } from 'react-dom/server';
import { renderContentfulNode } from './renderContentfulNode';
import { INLINES } from '@contentful/rich-text-types';
import type { Inline, Text } from '@contentful/rich-text-types';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function makeTextNode(value: string): Text {
  return { nodeType: 'text', value, marks: [], data: {} };
}

function makeInline(
  nodeType: string,
  data: Record<string, unknown>,
  text = 'linked text'
): Inline {
  return {
    nodeType: nodeType as Inline['nodeType'],
    data,
    content: [makeTextNode(text)],
  };
}

function render(node: Parameters<typeof renderContentfulNode>[0], options?: Parameters<typeof renderContentfulNode>[2]) {
  const el = renderContentfulNode(node, 'test-key', options);
  if (el === null) return '';
  return renderToStaticMarkup(el);
}

// ---------------------------------------------------------------------------
// Entry entries map fixture
// ---------------------------------------------------------------------------

const entriesMap = {
  'case-study-id': { sys: { id: 'case-study-id' }, __typename: 'CaseStudy', slug: 'my-case-study' },
  'project-id':    { sys: { id: 'project-id' },    __typename: 'Project',   slug: 'my-project' },
  'blog-id':       { sys: { id: 'blog-id' },       __typename: 'BlogPost',  slug: 'my-blog-post' },
  'org-id':        { sys: { id: 'org-id' },        __typename: 'Organization', slug: 'my-org' },
};

// ---------------------------------------------------------------------------
// INLINES.ENTRY_HYPERLINK
// ---------------------------------------------------------------------------

describe('INLINES.ENTRY_HYPERLINK', () => {
  it('renders correct anchor href for a CaseStudy entry', () => {
    const node = makeInline(INLINES.ENTRY_HYPERLINK, { target: { sys: { id: 'case-study-id' } } }, 'Read case study');
    const html = render(node, { entries: entriesMap });
    expect(html).toBe('<a href="/case-studies/my-case-study"><span>Read case study</span></a>');
  });

  it('renders correct anchor href for a Project entry', () => {
    const node = makeInline(INLINES.ENTRY_HYPERLINK, { target: { sys: { id: 'project-id' } } }, 'See project');
    const html = render(node, { entries: entriesMap });
    expect(html).toBe('<a href="/case-studies/my-project"><span>See project</span></a>');
  });

  it('renders correct anchor href for a BlogPost entry', () => {
    const node = makeInline(INLINES.ENTRY_HYPERLINK, { target: { sys: { id: 'blog-id' } } }, 'Read post');
    const html = render(node, { entries: entriesMap });
    expect(html).toBe('<a href="/case-studies/my-blog-post"><span>Read post</span></a>');
  });

  it('renders correct anchor href for an Organization entry', () => {
    const node = makeInline(INLINES.ENTRY_HYPERLINK, { target: { sys: { id: 'org-id' } } }, 'View org');
    const html = render(node, { entries: entriesMap });
    expect(html).toBe('<a href="/experience/my-org"><span>View org</span></a>');
  });

  it('renders children as plain span when entry id cannot be resolved (no disappearance)', () => {
    const node = makeInline(INLINES.ENTRY_HYPERLINK, { target: { sys: { id: 'unknown-id' } } }, 'Orphan text');
    const html = render(node, { entries: entriesMap });
    expect(html).toContain('Orphan text');
    expect(html).not.toContain('<a');
    expect(html).toBe('<span><span>Orphan text</span></span>');
  });

  it('renders children as plain span when no entries map is provided', () => {
    const node = makeInline(INLINES.ENTRY_HYPERLINK, { target: { sys: { id: 'any-id' } } }, 'Fallback text');
    const html = render(node, {});
    expect(html).toContain('Fallback text');
    expect(html).not.toContain('<a');
  });
});

// ---------------------------------------------------------------------------
// INLINES.RESOURCE_HYPERLINK
// ---------------------------------------------------------------------------

describe('INLINES.RESOURCE_HYPERLINK', () => {
  const spaceId = 'abc123';

  it('renders correct anchor href when URN resolves to a CaseStudy entry', () => {
    const urn = `crn:contentful:::content:spaces/${spaceId}/entries/case-study-id`;
    const node = makeInline(INLINES.RESOURCE_HYPERLINK, { target: { sys: { urn } } }, 'Resource link');
    const html = render(node, { entries: entriesMap });
    expect(html).toBe('<a href="/case-studies/my-case-study"><span>Resource link</span></a>');
  });

  it('renders correct anchor href when URN resolves to an Organization entry', () => {
    const urn = `crn:contentful:::content:spaces/${spaceId}/entries/org-id`;
    const node = makeInline(INLINES.RESOURCE_HYPERLINK, { target: { sys: { urn } } }, 'Visit org');
    const html = render(node, { entries: entriesMap });
    expect(html).toBe('<a href="/experience/my-org"><span>Visit org</span></a>');
  });

  it('renders children as plain span when URN entry id cannot be resolved (no disappearance)', () => {
    const urn = `crn:contentful:::content:spaces/${spaceId}/entries/does-not-exist`;
    const node = makeInline(INLINES.RESOURCE_HYPERLINK, { target: { sys: { urn } } }, 'Missing resource');
    const html = render(node, { entries: entriesMap });
    expect(html).toContain('Missing resource');
    expect(html).not.toContain('<a');
  });

  it('renders children as plain span when urn is absent', () => {
    const node = makeInline(INLINES.RESOURCE_HYPERLINK, { target: { sys: {} } }, 'No urn text');
    const html = render(node, { entries: entriesMap });
    expect(html).toContain('No urn text');
    expect(html).not.toContain('<a');
  });
});

// ---------------------------------------------------------------------------
// INLINES.HYPERLINK (standard — behavior unchanged)
// ---------------------------------------------------------------------------

describe('INLINES.HYPERLINK', () => {
  it('renders an external link with target _blank and rel noopener noreferrer', () => {
    const node = makeInline(INLINES.HYPERLINK, { uri: 'https://external-site.com/page' }, 'External');
    const html = render(node);
    expect(html).toContain('href="https://external-site.com/page"');
    expect(html).toContain('target="_blank"');
    expect(html).toContain('rel="noopener noreferrer"');
  });

  it('renders an internal link without target _blank', () => {
    const node = makeInline(INLINES.HYPERLINK, { uri: 'https://enjanga.com/about' }, 'About');
    const html = render(node);
    expect(html).toContain('href="https://enjanga.com/about"');
    expect(html).not.toContain('target="_blank"');
    expect(html).not.toContain('noopener');
  });

  it('renders a relative internal path without target _blank', () => {
    const node = makeInline(INLINES.HYPERLINK, { uri: '/case-studies/foo' }, 'Foo');
    const html = render(node);
    expect(html).toContain('href="/case-studies/foo"');
    expect(html).not.toContain('target="_blank"');
  });

  it('renders link text correctly', () => {
    const node = makeInline(INLINES.HYPERLINK, { uri: 'https://example.com' }, 'Click me');
    const html = render(node);
    expect(html).toContain('Click me');
  });
});
