import { type MouseEventHandler } from 'react';
import clsx from 'clsx';
import { introCircle } from './introCircle';

export interface CaseStudyMediaProps {
  title: string;
  posterSrc?: string;
  posterAlt?: string;
  videoSrc?: string;
  videoType?: string;
  /** Click notification only. Standalone media never opens a dialog. */
  onWatchIntro?: MouseEventHandler<HTMLButtonElement>;
  introLabel?: string;
  introDisabled?: boolean;
}

/** Standalone media with the portfolio’s full-thumbnail hit target and hover interaction. */
export function CaseStudyMedia({ title, posterSrc, posterAlt = '', videoSrc,
  onWatchIntro, introLabel = 'Watch intro', introDisabled = false,
}: CaseStudyMediaProps) {
  const hasIntro = Boolean(videoSrc || onWatchIntro);
  const hasMedia = Boolean(posterSrc || hasIntro);
  return <>
      {hasMedia && <div className={clsx("enj-case-study-card__media", !hasIntro && "enj-case-study-card__media--static")}>
        {posterSrc && <div className="enj-case-study-card__poster-frame">
          <img className="enj-case-study-card__poster" src={posterSrc} alt={posterAlt} loading="lazy" decoding="async" />
        </div>}
        {hasIntro && <button
          type="button"
          className="enj-case-study-card__media-trigger"
          aria-label={`${introLabel}: ${title}`}
          onClick={onWatchIntro}
          disabled={introDisabled}
        >
          <span className="enj-case-study-card__intro" aria-hidden="true">
          <span className="enj-case-study-card__intro-circle" style={{ maskImage: `url("${introCircle}")` }} aria-hidden="true" />
          <span className="enj-case-study-card__intro-label">{introLabel}</span>
          </span>
        </button>}
      </div>}
  </>;
}
