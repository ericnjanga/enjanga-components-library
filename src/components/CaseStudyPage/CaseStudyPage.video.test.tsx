// @vitest-environment jsdom
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, beforeEach, expect, it, vi } from 'vitest';
import { CaseStudyPage } from './CaseStudyPage';

beforeEach(() => {
  vi.spyOn(HTMLMediaElement.prototype, 'play').mockResolvedValue();
  vi.spyOn(HTMLMediaElement.prototype, 'pause').mockImplementation(() => {});
  Object.defineProperty(HTMLDialogElement.prototype, 'showModal', { configurable: true, value: function(this: HTMLDialogElement) { this.setAttribute('open', ''); } });
  Object.defineProperty(HTMLDialogElement.prototype, 'close', { configurable: true, value: function(this: HTMLDialogElement) { this.removeAttribute('open'); this.dispatchEvent(new Event('close')); } });
});
afterEach(() => { cleanup(); vi.restoreAllMocks(); delete (HTMLDialogElement.prototype as Partial<HTMLDialogElement>).showModal; delete (HTMLDialogElement.prototype as Partial<HTMLDialogElement>).close; });

it('opens the selected video without navigation and restores focus when closed', async () => {
  render(<CaseStudyPage title="Project"><p><a href="/one.mp4?version=2"><strong>First walkthrough</strong></a></p><a href="/two.webm">Second walkthrough</a></CaseStudyPage>);
  const user = userEvent.setup();
  await user.click(screen.getByText('First walkthrough'));
  const dialog = screen.getByRole('dialog', { name: 'Video walkthrough: First walkthrough' });
  expect(dialog.classList.contains('enj-case-study-card__dialog--walkthrough')).toBe(true);
  expect(dialog.querySelector('source')?.getAttribute('src')).toContain('/one.mp4?version=2');
  expect(screen.queryByText('Read the full case study')).toBeNull();
  await user.click(screen.getByRole('button', { name: 'Close modal' }));
  expect(screen.queryByRole('dialog')).toBeNull();
  expect(document.activeElement).toBe(screen.getByRole('link', { name: 'First walkthrough' }));
  await user.click(screen.getByText('Second walkthrough'));
  expect(screen.getByRole('dialog').querySelector('source')?.type).toBe('video/webm');
});

it('opens with the keyboard and stops playback on native dismissal', async () => {
  render(<CaseStudyPage title="Project"><a href="/one.mp4">Walkthrough</a></CaseStudyPage>);
  const user = userEvent.setup();
  await user.tab();
  await user.keyboard('{Enter}');
  const dialog = screen.getByRole('dialog') as HTMLDialogElement;
  fireEvent(dialog, new Event('close'));
  expect(screen.queryByRole('dialog')).toBeNull();
  expect(HTMLMediaElement.prototype.pause).toHaveBeenCalled();
});

it('leaves ordinary links, downloads and modified clicks alone', () => {
  render(<CaseStudyPage title="Project"><a href="#context">Context</a><a href="/one.mp4" download>Download</a><a href="/two.mp4">Walkthrough</a></CaseStudyPage>);
  const navigation = vi.fn((event: Event) => { expect(event.defaultPrevented).toBe(false); event.preventDefault(); });
  document.addEventListener('click', navigation);
  fireEvent.click(screen.getByText('Context'));
  fireEvent.click(screen.getByText('Download'));
  fireEvent.click(screen.getByText('Walkthrough'), { ctrlKey: true });
  expect(screen.queryByRole('dialog')).toBeNull();
  expect(navigation).toHaveBeenCalledTimes(3);
  document.removeEventListener('click', navigation);
});
