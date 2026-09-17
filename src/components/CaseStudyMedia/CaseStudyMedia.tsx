import { type MouseEventHandler } from 'react';
import clsx from 'clsx';
import { InteractiveImage } from '../InteractiveImage';

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
  caseStudyHref?: string;
  readLabel?: string;
  readDisabled?: boolean;
}

/** Shared image interaction with a native button for video introductions. */
export function CaseStudyMedia({
  title,
  posterSrc,
  posterAlt = '',
  videoSrc,
  onWatchIntro,
  introLabel = 'Watch intro',
  introDisabled = false,
  caseStudyHref,
  readLabel = 'Read the full case study',
  readDisabled = false,
}: CaseStudyMediaProps) {
  const hasIntro = Boolean(videoSrc || onWatchIntro);
  const hasMedia = Boolean(posterSrc || hasIntro);
  return (
    <>
      {hasMedia && (
        <div
          className={clsx(
            'enj-case-study-card__media',
            !hasIntro && 'enj-case-study-card__media--static'
          )}
        >
          <div className="enj-case-study-card__mediaFrame">
          <InteractiveImage
            className="enj-case-study-card__image"
            variant="case-study"
            src={posterSrc}
            alt={posterAlt}
            loading="lazy"
            decoding="async"
            action={
              hasIntro
                ? { onClick: onWatchIntro, disabled: introDisabled }
                : undefined
            }
            href={!hasIntro && !readDisabled ? caseStudyHref : undefined}
            interactionLabel={hasIntro ? introLabel : readLabel}
            aria-label={`${hasIntro ? introLabel : readLabel}: ${title}`}
          />
          </div>
        </div>
      )}
    </>
  );
}
