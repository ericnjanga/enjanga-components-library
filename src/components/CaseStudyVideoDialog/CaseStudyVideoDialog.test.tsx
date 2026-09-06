// @vitest-environment jsdom
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { CaseStudyCard, CaseStudyVideoDialog } from '../../index';

const MediaInCard = (props: Omit<React.ComponentProps<typeof CaseStudyCard>, 'description'>) => <CaseStudyCard {...props} description="Summary" />;

const props = { title: 'Financial records', posterSrc: '/poster.jpg', posterAlt: 'Preview', videoSrc: '/intro.mp4' };

beforeEach(() => {
  // jsdom does not implement native media playback or the dialog API.
  vi.spyOn(HTMLMediaElement.prototype, 'play').mockResolvedValue();
  vi.spyOn(HTMLMediaElement.prototype, 'pause').mockImplementation(() => {});
  Object.defineProperty(HTMLDialogElement.prototype, 'showModal', { configurable: true, value: vi.fn(function(this: HTMLDialogElement) { this.setAttribute('open', ''); }) });
  Object.defineProperty(HTMLDialogElement.prototype, 'close', { configurable: true, value: vi.fn(function(this: HTMLDialogElement) { this.removeAttribute('open'); this.dispatchEvent(new Event('close')); }) });
});
afterEach(() => { cleanup(); vi.restoreAllMocks(); delete (HTMLDialogElement.prototype as Partial<HTMLDialogElement>).showModal; delete (HTMLDialogElement.prototype as Partial<HTMLDialogElement>).close; });

describe('CaseStudyVideoDialog inside CaseStudyCard', () => {
  it('uses a full-thumbnail trigger to open playback', async () => {
    const user = userEvent.setup();
    render(<MediaInCard {...props} />);
    const trigger = screen.getByRole('button', { name: 'Watch intro: Financial records' });
    expect(trigger.classList.contains('enj-case-study-card__media-trigger')).toBe(true);
    await user.click(trigger);
    expect(screen.getByRole('dialog')).toBeTruthy();
    expect(HTMLMediaElement.prototype.play).toHaveBeenCalledOnce();
  });
  it('supports keyboard activation and closes and resets playback', async () => {
    const user = userEvent.setup();
    render(<MediaInCard {...props} />);
    // jsdom focuses autofocus content even inside a closed dialog.
    screen.getByRole('button', { name: /Watch intro:/ }).focus();
    await user.keyboard('{Enter}');
    const dialog = screen.getByRole('dialog');
    const video = dialog.querySelector('video')!;
    video.currentTime = 12;
    expect(video.controls).toBe(true);
    expect(video.getAttribute('preload')).toBe('none');
    await user.click(screen.getByRole('button', { name: 'Close video' }));
    expect(screen.queryByRole('dialog')).toBeNull();
    expect(HTMLMediaElement.prototype.pause).toHaveBeenCalled();
    expect(video.currentTime).toBe(0);
  });
  it('allows a callback to prevent built-in playback', async () => {
    const onWatchIntro = vi.fn(event => event.preventDefault());
    render(<MediaInCard {...props} onWatchIntro={onWatchIntro} />);
    await userEvent.click(screen.getByRole('button', { name: /Watch intro:/ }));
    expect(onWatchIntro).toHaveBeenCalledOnce();
    expect(HTMLMediaElement.prototype.play).not.toHaveBeenCalled();
    expect(screen.queryByRole('dialog')).toBeNull();
  });
  it('supports callback-only introductions and disabled controls', async () => {
    const onWatchIntro = vi.fn();
    const { rerender } = render(<MediaInCard title="Custom" introLabel="Explore" onWatchIntro={onWatchIntro} introDisabled />);
    await userEvent.click(screen.getByRole('button', { name: 'Explore: Custom' }));
    expect(onWatchIntro).not.toHaveBeenCalled();
    rerender(<MediaInCard title="Custom" introLabel="Explore" onWatchIntro={onWatchIntro} />);
    await userEvent.click(screen.getByRole('button', { name: 'Explore: Custom' }));
    expect(onWatchIntro).toHaveBeenCalledOnce();
    expect(screen.queryByRole('dialog')).toBeNull();
  });
  it('keeps controls available if automatic playback is rejected', async () => {
    vi.mocked(HTMLMediaElement.prototype.play).mockRejectedValue(new Error('Autoplay blocked'));
    render(<MediaInCard {...props} videoType="video/webm" />);
    await userEvent.click(screen.getByRole('button', { name: /Watch intro:/ }));
    expect(screen.getByRole('dialog').querySelector('video')?.controls).toBe(true);
    expect(screen.getByRole('dialog').querySelector('source')?.type).toBe('video/webm');
  });
  it('closes on the backdrop, but not on video content', async () => {
    render(<MediaInCard {...props} />);
    await userEvent.click(screen.getByRole('button', { name: /Watch intro:/ }));
    const dialog = screen.getByRole('dialog');
    fireEvent.click(dialog.querySelector('video')!);
    expect(dialog.hasAttribute('open')).toBe(true);
    fireEvent.click(dialog);
    expect(dialog.hasAttribute('open')).toBe(false);
  });
});

it('follows controlled open state and stops on unmount', () => {
  const onClose = vi.fn();
  const { rerender, unmount } = render(<CaseStudyVideoDialog {...props} open={false} onClose={onClose} />);
  expect(HTMLMediaElement.prototype.play).not.toHaveBeenCalled();
  rerender(<CaseStudyVideoDialog {...props} open onClose={onClose} />);
  expect(screen.getByRole('dialog')).toBeTruthy();
  expect(HTMLMediaElement.prototype.play).toHaveBeenCalledOnce();
  rerender(<CaseStudyVideoDialog {...props} open={false} onClose={onClose} />);
  expect(screen.queryByRole('dialog')).toBeNull();
  expect(onClose).toHaveBeenCalledOnce();
  rerender(<CaseStudyVideoDialog {...props} open onClose={onClose} />);
  vi.mocked(HTMLMediaElement.prototype.pause).mockClear();
  unmount();
  expect(HTMLMediaElement.prototype.pause).toHaveBeenCalledOnce();
});

it('shows the title and the footer navigation action from the design', () => {
  render(<CaseStudyVideoDialog {...props} open onClose={vi.fn()} caseStudyHref="/case-studies/records" />);
  expect(screen.getByRole('heading', { name: props.title })).toBeTruthy();
  expect(screen.getByRole('link', { name: 'Read the full case study' }).getAttribute('href')).toBe('/case-studies/records');
});
it('closes using the footer action', async () => {
  const onClose = vi.fn();
  render(<CaseStudyVideoDialog {...props} open onClose={onClose} />);
  await userEvent.click(screen.getByRole('button', { name: 'Close modal' }));
  expect(onClose).toHaveBeenCalledOnce();
  expect(screen.queryByRole('dialog')).toBeNull();
});
it('uses the card read callback from the dialog footer', async () => {
  const onReadCaseStudy = vi.fn();
  render(<MediaInCard {...props} onReadCaseStudy={onReadCaseStudy} />);
  await userEvent.click(screen.getByRole('button', { name: /Watch intro:/ }));
  await userEvent.click(screen.getByRole('button', { name: 'Read the full case study' }));
  expect(onReadCaseStudy).toHaveBeenCalledOnce();
});
