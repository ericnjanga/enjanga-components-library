// @vitest-environment jsdom
import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, expect, test } from 'vitest';
import { ImageProvider, type ImageProps } from './ImageProvider';
import { InteractiveImage } from '../components/InteractiveImage';
import { CaseStudyCard } from '../components/CaseStudyCard';

afterEach(cleanup);

test('standalone images retain native attributes without a framework provider', () => {
  render(<InteractiveImage src="/photo.jpg" alt="Portrait" width={600} height={800} loading="lazy" />);
  const image = screen.getByRole('img');
  expect(image.getAttribute('src')).toBe('/photo.jpg');
  expect(image.getAttribute('width')).toBe('600');
  expect(image.getAttribute('loading')).toBe('lazy');
});

test('application renderer receives image dimensions, responsive sizes and accessibility', () => {
  function Adapter(props: ImageProps) { return <img {...props} src={`/optimized?src=${props.src}`} />; }
  render(<ImageProvider component={Adapter}><InteractiveImage src="/photo.jpg" alt="Portrait" width={600} height={800} sizes="50vw" /></ImageProvider>);
  const image = screen.getByRole('img', { name: 'Portrait' });
  expect(image.getAttribute('src')).toBe('/optimized?src=/photo.jpg');
  expect(image.getAttribute('height')).toBe('800');
  expect(image.getAttribute('sizes')).toBe('50vw');
});

test('card keeps the image source separate from a prepared native video poster', () => {
  const { container } = render(<CaseStudyCard title="Project" description="Summary" posterSrc="/original.jpg" videoPosterSrc="/optimized.jpg" videoSrc="/intro.mp4" />);
  expect(container.querySelector('img')?.getAttribute('src')).toBe('/original.jpg');
  expect(container.querySelector('video')?.getAttribute('poster')).toBe('/optimized.jpg');
  expect(container.querySelector('video')?.getAttribute('preload')).toBe('none');
});
