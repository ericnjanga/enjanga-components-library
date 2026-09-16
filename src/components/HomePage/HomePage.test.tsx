// @vitest-environment jsdom
import { afterEach, expect, it } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { HomePage } from './HomePage';

afterEach(cleanup);
it('renders content, section anchors, and application-owned media and actions', () => {
  const { container } = render(
    <HomePage
      title="Hello"
      description="Introduction"
      expertise={{
        title: 'Expertise',
        items: [{ title: 'Design', description: 'Useful products' }],
        action: <a href="/work">See work</a>,
      }}
      about={{
        title: 'About',
        paragraphs: ['My background'],
        image: <img src="/portrait.jpg" alt="Portrait" />,
      }}
    />
  );
  expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
  expect(
    screen.getByRole('link', { name: 'See work' }).getAttribute('href')
  ).toBe('/work');
  expect(screen.getByRole('img', { name: 'Portrait' })).toBeTruthy();
  expect(screen.getByText('My background')).toBeTruthy();
  for (const id of ['home', 'expertise', 'about'])
    expect(container.querySelector(`section#${id}`)).not.toBeNull();
});
