// @vitest-environment jsdom
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect, it, vi } from 'vitest';
import { CaseStudyMedia } from '../../index';
it('standalone media never renders a dialog even with a video URL', async () => {
  const onWatchIntro = vi.fn();
  const { container } = render(<CaseStudyMedia title="Preview" videoSrc="/intro.mp4" onWatchIntro={onWatchIntro} />);
  await userEvent.click(screen.getByRole('button', { name: 'Watch intro: Preview' }));
  expect(onWatchIntro).toHaveBeenCalledOnce();
  expect(container.querySelector('dialog')).toBeNull();
  expect(container.querySelector('video')).toBeNull();
});
it('renders nothing without media', () => {
  const { container } = render(<CaseStudyMedia title="Empty" />);
  expect(container.innerHTML).toBe('');
});
it('renders a static poster without an intro action', () => {
  render(<CaseStudyMedia title="Static" posterSrc="/poster.jpg" posterAlt="Preview" />);
  expect(screen.getByRole('img').getAttribute('alt')).toBe('Preview');
  expect(screen.queryByRole('button')).toBeNull();
});
it('disables standalone callback activation', async () => {
  const onWatchIntro = vi.fn();
  render(<CaseStudyMedia title="Disabled" onWatchIntro={onWatchIntro} introDisabled />);
  await userEvent.click(screen.getByRole('button'));
  expect(onWatchIntro).not.toHaveBeenCalled();
});
