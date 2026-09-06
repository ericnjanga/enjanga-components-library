import { forwardRef, useId, useRef, type ComponentPropsWithoutRef, type MouseEventHandler } from 'react';
import clsx from 'clsx';
import { Button } from '../Button';
import { introCircle } from './introCircle';

export interface CaseStudyCardProps extends Omit<ComponentPropsWithoutRef<'article'>, 'title' | 'children'> {
  /** Always rendered as an h2 using the core heading preset. */
  title: string;
  /** A paragraph, or an ordered collection of paragraphs. */
  description: string | readonly string[];
  posterSrc?: string;
  /** Use an empty string when the poster is purely decorative. */
  posterAlt?: string;
  /** Hosted video URL. Omit when no introduction is available. */
  videoSrc?: string;
  videoType?: string;
  /** Native navigation destination. Takes precedence over the read callback. */
  caseStudyHref?: string;
  onWatchIntro?: MouseEventHandler<HTMLButtonElement>;
  onReadCaseStudy?: MouseEventHandler<HTMLButtonElement>;
  introLabel?: string;
  readLabel?: string;
  introDisabled?: boolean;
  readDisabled?: boolean;
}

export const CaseStudyCard = forwardRef<HTMLElement, CaseStudyCardProps>(function CaseStudyCard(
  {
    title, description, posterSrc, posterAlt = '', onWatchIntro, onReadCaseStudy,
    videoSrc, videoType = 'video/mp4', caseStudyHref,
    introLabel = 'Watch intro', readLabel = 'Read the full case study',
    introDisabled = false, readDisabled = false, className, ...props
  },
  ref,
) {
  const titleId = useId();
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
  const paragraphs = typeof description === 'string' ? [description] : description;

  return (
    <article {...props} ref={ref} aria-labelledby={titleId} className={clsx('enj-case-study-card', !hasMedia && 'enj-case-study-card--text-only', className)}>
      {hasMedia && <div className={clsx("enj-case-study-card__media", !hasIntro && "enj-case-study-card__media--static")}>
        {posterSrc && <div className="enj-case-study-card__poster-frame">
          <img className="enj-case-study-card__poster" src={posterSrc} alt={posterAlt} loading="lazy" decoding="async" />
        </div>}
        {hasIntro && <button
          type="button"
          className="enj-case-study-card__intro"
          aria-label={`${introLabel}: ${title}`}
          onClick={watchIntro}
          disabled={introDisabled}
        >
          <span className="enj-case-study-card__intro-circle" style={{ maskImage: `url("${introCircle}")` }} aria-hidden="true" />
          <span className="enj-case-study-card__intro-label">{introLabel}</span>
        </button>}
      </div>}
      <div className="enj-case-study-card__content">
        <h2 id={titleId} className="enj-h2">{title}</h2>
        <div className="enj-case-study-card__description">
          {paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
        </div>
        {caseStudyHref && !readDisabled ? (
          <Button className="enj-case-study-card__action" variant="secondary" icon="chevron-right"
            href={caseStudyHref} aria-label={`${readLabel}: ${title}`}>{readLabel}</Button>
        ) : (onReadCaseStudy || readDisabled) ? (
          <Button className="enj-case-study-card__action" variant="secondary" icon="chevron-right"
            aria-label={`${readLabel}: ${title}`} onClick={onReadCaseStudy} disabled={readDisabled}>{readLabel}</Button>
        ) : null}
      </div>
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
    </article>
  );
});
