import { useEffect, useRef, type MouseEventHandler } from 'react';
import { Button } from '../Button';
import { close as closeIcon } from '../Button/icons';

export interface CaseStudyVideoDialogProps {
  title: string;
  videoSrc: string;
  videoType?: string;
  posterSrc?: string;
  caseStudyHref?: string;
  onReadCaseStudy?: MouseEventHandler<HTMLButtonElement>;
  readLabel?: string;
  readDisabled?: boolean;
  open: boolean;
  onClose: () => void;
}

/** Controlled video player. The parent decides which interaction opens it. */
export function CaseStudyVideoDialog({ title, videoSrc, videoType = 'video/mp4', posterSrc, caseStudyHref, onReadCaseStudy, readLabel = 'Read the full case study', readDisabled = false, open, onClose }: CaseStudyVideoDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    const video = videoRef.current;
    if (!dialog || !video) return;
    if (open) {
      if (!dialog.open) dialog.showModal();
      void video.play().catch(() => { /* Native controls remain available when autoplay is blocked. */ });
    } else if (dialog.open) {
      dialog.close();
    }
    return () => {
      video.pause();
      video.currentTime = 0;
    };
  }, [open, videoSrc]);

  return <dialog ref={dialogRef} className="enj-case-study-card__dialog"
    aria-label={`Video introduction: ${title}`}
    onClose={() => {
      videoRef.current?.pause();
      if (videoRef.current) videoRef.current.currentTime = 0;
      onClose();
    }}
    onClick={event => { if (event.target === event.currentTarget) dialogRef.current?.close(); }}>
    <header className="enj-case-study-card__dialog-header">
      <h2 className="enj-case-study-card__dialog-title">{title}</h2>
      <button type="button" className="enj-case-study-card__dialog-dismiss" aria-label="Close video" autoFocus
        onClick={() => dialogRef.current?.close()}>
        <span style={{ maskImage: `url("${closeIcon}")` }} aria-hidden="true" />
      </button>
    </header>
    <video className="enj-case-study-card__dialog-video" ref={videoRef} controls playsInline preload="none" poster={posterSrc} aria-label={title}>
      <source src={videoSrc} type={videoType} />
      Your browser does not support this video. <a href={videoSrc}>Open the video</a>.
    </video>
    <footer className="enj-case-study-card__dialog-footer">
      <Button variant="tertiary" icon="close" onClick={() => dialogRef.current?.close()}>Close modal</Button>
      {caseStudyHref && !readDisabled ? (
        <Button variant="secondary" icon="chevron-right" href={caseStudyHref}>{readLabel}</Button>
      ) : (onReadCaseStudy || readDisabled) ? (
        <Button variant="secondary" icon="chevron-right" disabled={readDisabled} onClick={onReadCaseStudy}>{readLabel}</Button>
      ) : null}
    </footer>
  </dialog>;
}
