import { useRef, type MouseEventHandler } from 'react';
import clsx from 'clsx';
import { Button } from '../Button';
import { introCircle } from './introCircle';

export interface CaseStudyMediaProps {
  title: string;
  posterSrc?: string;
  posterAlt?: string;
  videoSrc?: string;
  videoType?: string;
  /** Runs before built-in playback; preventDefault lets the consumer handle it. */
  onWatchIntro?: MouseEventHandler<HTMLButtonElement>;
  introLabel?: string;
  introDisabled?: boolean;
}

/** Standalone media with the portfolio’s full-thumbnail hit target and hover interaction. */
export function CaseStudyMedia({ title, posterSrc, posterAlt = '', videoSrc,
  videoType = 'video/mp4', onWatchIntro, introLabel = 'Watch intro', introDisabled = false,
}: CaseStudyMediaProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const hasIntro = Boolean(videoSrc || onWatchIntro);
  const hasMedia = Boolean(posterSrc || hasIntro);
  const watchIntro: MouseEventHandler<HTMLButtonElement> = event => {
    onWatchIntro?.(event);
    if (!event.defaultPrevented && videoSrc) {
      dialogRef.current?.showModal();
      void videoRef.current?.play().catch(() => { /* Controls remain available when autoplay is blocked. */ });
    }
  };
  const stopVideo = () => {
    videoRef.current?.pause();
    if (videoRef.current) videoRef.current.currentTime = 0;
  };
  return <>
      {hasMedia && <div className={clsx("enj-case-study-card__media", !hasIntro && "enj-case-study-card__media--static")}>
        {posterSrc && <div className="enj-case-study-card__poster-frame">
          <img className="enj-case-study-card__poster" src={posterSrc} alt={posterAlt} loading="lazy" decoding="async" />
        </div>}
        {hasIntro && <button
          type="button"
          className="enj-case-study-card__media-trigger"
          aria-label={`${introLabel}: ${title}`}
          onClick={watchIntro}
          disabled={introDisabled}
        >
          <span className="enj-case-study-card__intro" aria-hidden="true">
          <span className="enj-case-study-card__intro-circle" style={{ maskImage: `url("${introCircle}")` }} aria-hidden="true" />
          <span className="enj-case-study-card__intro-label">{introLabel}</span>
          </span>
        </button>}
      </div>}
      {videoSrc && <dialog ref={dialogRef} className="enj-case-study-card__dialog"
        aria-label={`Video introduction: ${title}`} onClose={stopVideo}
        onClick={event => { if (event.target === event.currentTarget) dialogRef.current?.close(); }}>
        <div className="enj-case-study-card__dialog-content">
          <Button className="enj-case-study-card__close" variant="secondary" icon="close" autoFocus
            onClick={() => dialogRef.current?.close()}>Close video</Button>
          <video ref={videoRef} controls playsInline preload="none" poster={posterSrc} aria-label={title}>
            <source src={videoSrc} type={videoType} />
            Your browser does not support this video. <a href={videoSrc}>Open the video</a>.
          </video>
        </div>
      </dialog>}
  </>;
}
