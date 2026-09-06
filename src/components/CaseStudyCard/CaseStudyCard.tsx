import { forwardRef, useId, useState, type ComponentPropsWithoutRef, type MouseEventHandler } from 'react';
import clsx from 'clsx';
import { Button } from '../Button';
import { CaseStudyVideoDialog } from '../CaseStudyVideoDialog';
import { CaseStudyMedia } from '../CaseStudyMedia';

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
  const [videoOpen, setVideoOpen] = useState(false);
  const watchIntro: MouseEventHandler<HTMLButtonElement> = event => {
    onWatchIntro?.(event);
    if (!event.defaultPrevented && videoSrc) setVideoOpen(true);
  };
  const hasMedia = Boolean(posterSrc || videoSrc || onWatchIntro);
  const paragraphs = typeof description === 'string' ? [description] : description;

  return (
    <article {...props} ref={ref} aria-labelledby={titleId} className={clsx('enj-case-study-card', !hasMedia && 'enj-case-study-card--text-only', className)}>
      <CaseStudyMedia title={title} posterSrc={posterSrc} posterAlt={posterAlt}
        videoSrc={videoSrc} videoType={videoType} onWatchIntro={videoSrc || onWatchIntro ? watchIntro : undefined}
        introLabel={introLabel} introDisabled={introDisabled} />
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
      {videoSrc && <CaseStudyVideoDialog title={title} videoSrc={videoSrc} videoType={videoType}
        posterSrc={posterSrc} caseStudyHref={caseStudyHref} onReadCaseStudy={onReadCaseStudy}
        readLabel={readLabel} readDisabled={readDisabled} open={videoOpen} onClose={() => setVideoOpen(false)} />}
    </article>
  );
});
