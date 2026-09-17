import { Button } from '../Button';
// @vitest-environment jsdom
import { afterEach, expect, it } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { HomePage } from './HomePage';

afterEach(cleanup);
it('renders content, section anchors, and application-owned media and actions', () => {
  const { container } = render(
    <HomePage
      title="Hello"
      heroAction={<Button variant="tertiary" icon="chevron-down" href="/#expertise">Explore expertise</Button>}
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
  const cta = screen.getByRole('link', { name: 'Explore expertise' });
  expect(cta.getAttribute('href')).toBe('/#expertise');
  expect(cta.closest('header')).not.toBeNull();
  expect(cta.classList.contains('enj-button--tertiary')).toBe(true);
  expect((cta.querySelector('.enj-button__icon') as HTMLElement).style.rotate).toBe('90deg');
  expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
  expect(
    screen.getByRole('link', { name: 'See work' }).getAttribute('href')
  ).toBe('/work');
  expect(screen.getByRole('img', { name: 'Portrait' })).toBeTruthy();
  expect(screen.getByText('My background')).toBeTruthy();
  for (const id of ['home', 'expertise', 'about'])
    expect(container.querySelector(`section#${id}`)).not.toBeNull();
});
