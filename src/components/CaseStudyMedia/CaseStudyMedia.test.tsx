// @vitest-environment jsdom
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { CaseStudyMedia } from '../../index';

const props = { title: 'Financial records', posterSrc: '/poster.jpg', posterAlt: 'Preview', videoSrc: '/intro.mp4' };

beforeEach(() => {
  // jsdom does not implement native media playback or the dialog API.
  vi.spyOn(HTMLMediaElement.prototype, 'play').mockResolvedValue();
  vi.spyOn(HTMLMediaElement.prototype, 'pause').mockImplementation(() => {});
  Object.defineProperty(HTMLDialogElement.prototype, 'showModal', { configurable: true, value: vi.fn(function(this: HTMLDialogElement) { this.setAttribute('open', ''); }) });
  Object.defineProperty(HTMLDialogElement.prototype, 'close', { configurable: true, value: vi.fn(function(this: HTMLDialogElement) { this.removeAttribute('open'); this.dispatchEvent(new Event('close')); }) });
});
afterEach(() => { vi.restoreAllMocks(); delete (HTMLDialogElement.prototype as Partial<HTMLDialogElement>).showModal; delete (HTMLDialogElement.prototype as Partial<HTMLDialogElement>).close; });

describe('CaseStudyMedia', () => {
  it('renders nothing when there is no media or intro action', () => {
    const { container } = render(<CaseStudyMedia title="No media" />);
    expect(container.innerHTML).toBe('');
  });
  it('renders a static poster without a play button', () => {
    render(<CaseStudyMedia title="Static" posterSrc="/poster.jpg" posterAlt="Preview" />);
    expect(screen.getByRole('img').getAttribute('src')).toBe('/poster.jpg');
    expect(screen.getByRole('img').getAttribute('alt')).toBe('Preview');
    expect(screen.queryByRole('button')).toBeNull();
  });
  it('uses a full-thumbnail trigger to open playback', async () => {
    const user = userEvent.setup();
    render(<CaseStudyMedia {...props} />);
    const trigger = screen.getByRole('button', { name: 'Watch intro: Financial records' });
    expect(trigger.classList.contains('enj-case-study-card__media-trigger')).toBe(true);
    await user.click(trigger);
    expect(screen.getByRole('dialog')).toBeTruthy();
    expect(HTMLMediaElement.prototype.play).toHaveBeenCalledOnce();
  });
  it('supports keyboard activation and closes and resets playback', async () => {
    const user = userEvent.setup();
    render(<CaseStudyMedia {...props} />);
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
    expect(HTMLMediaElement.prototype.pause).toHaveBeenCalledOnce();
    expect(video.currentTime).toBe(0);
  });
  it('allows a callback to prevent built-in playback', async () => {
    const onWatchIntro = vi.fn(event => event.preventDefault());
    render(<CaseStudyMedia {...props} onWatchIntro={onWatchIntro} />);
    await userEvent.click(screen.getByRole('button', { name: /Watch intro:/ }));
    expect(onWatchIntro).toHaveBeenCalledOnce();
    expect(HTMLMediaElement.prototype.play).not.toHaveBeenCalled();
    expect(screen.queryByRole('dialog')).toBeNull();
  });
  it('supports callback-only introductions and disabled controls', async () => {
    const onWatchIntro = vi.fn();
    const { rerender } = render(<CaseStudyMedia title="Custom" introLabel="Explore" onWatchIntro={onWatchIntro} introDisabled />);
    await userEvent.click(screen.getByRole('button', { name: 'Explore: Custom' }));
    expect(onWatchIntro).not.toHaveBeenCalled();
    rerender(<CaseStudyMedia title="Custom" introLabel="Explore" onWatchIntro={onWatchIntro} />);
    await userEvent.click(screen.getByRole('button', { name: 'Explore: Custom' }));
    expect(onWatchIntro).toHaveBeenCalledOnce();
    expect(screen.queryByRole('dialog')).toBeNull();
  });
  it('keeps controls available if automatic playback is rejected', async () => {
    vi.mocked(HTMLMediaElement.prototype.play).mockRejectedValue(new Error('Autoplay blocked'));
    render(<CaseStudyMedia {...props} videoType="video/webm" />);
    await userEvent.click(screen.getByRole('button', { name: /Watch intro:/ }));
    expect(screen.getByRole('dialog').querySelector('video')?.controls).toBe(true);
    expect(screen.getByRole('dialog').querySelector('source')?.type).toBe('video/webm');
  });
  it('closes on the backdrop, but not on video content', async () => {
    render(<CaseStudyMedia {...props} />);
    await userEvent.click(screen.getByRole('button', { name: /Watch intro:/ }));
    const dialog = screen.getByRole('dialog');
    fireEvent.click(dialog.querySelector('video')!);
    expect(dialog.hasAttribute('open')).toBe(true);
    fireEvent.click(dialog);
    expect(dialog.hasAttribute('open')).toBe(false);
  });
});
