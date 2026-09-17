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
      heroAction={<Button variant="primary" icon="chevron-down" href="/#expertise">Explore expertise</Button>}
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
  expect(cta.classList.contains('enj-button--primary')).toBe(true);
  expect((cta.querySelector('.enj-button__icon') as HTMLElement).style.rotate).toBe('90deg');
  expect(container.querySelectorAll('.enj-scroll-reveal--preview')).toHaveLength(2);
  expect(container.querySelector('#expertise')?.parentElement?.classList.contains('enj-scroll-reveal--preview')).toBe(true);
  expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
  expect(
    screen.getByRole('link', { name: 'See work' }).getAttribute('href')
  ).toBe('/work');
  expect(screen.getByRole('img', { name: 'Portrait' })).toBeTruthy();
  expect(screen.getByText('My background')).toBeTruthy();
  for (const id of ['home', 'expertise', 'about'])
    expect(container.querySelector(`section#${id}`)).not.toBeNull();
});

it('allows the Expertise prototype to be disabled for comparison', () => {
  const { container } = render(<HomePage title="Hello" expertisePreview={false} expertise={{title:'Expertise',items:[]}} about={{title:'About',paragraphs:[]}} />);
  expect(container.querySelector('#expertise')?.parentElement?.classList.contains('enj-scroll-reveal--preview')).toBe(false);
  expect(container.querySelector('#about')?.parentElement?.classList.contains('enj-scroll-reveal--preview')).toBe(true);
});

it('keeps the product image frame inside the fading content layer', () => {
  const { container } = render(<HomePage title="Hello" expertise={{title:'Expertise',items:[],image:<img src="/product.jpg" alt="Product" />}} about={{title:'About',paragraphs:[]}} />);
  const image = screen.getByRole('img', {name:'Product'});
  expect(image.parentElement?.className).toBe('enj-home-page__productImageFrame');
  expect(image.parentElement?.parentElement).toBe(container.querySelector('.enj-home-page__productImage'));
});
