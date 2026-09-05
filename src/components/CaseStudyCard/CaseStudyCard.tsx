import { forwardRef, useId, type ComponentPropsWithoutRef, type MouseEventHandler } from 'react';
import clsx from 'clsx';
import { Button } from '../Button';
import { introCircle } from './introCircle';

export interface CaseStudyCardProps extends Omit<ComponentPropsWithoutRef<'article'>, 'title' | 'children'> {
  /** Always rendered as an h2 using the core heading preset. */
  title: string;
  /** A paragraph, or an ordered collection of paragraphs. */
  description: string | readonly string[];
  posterSrc: string;
  /** Use an empty string when the poster is purely decorative. */
  posterAlt: string;
  onWatchIntro: MouseEventHandler<HTMLButtonElement>;
  onReadCaseStudy: MouseEventHandler<HTMLButtonElement>;
  introLabel?: string;
  readLabel?: string;
  introDisabled?: boolean;
  readDisabled?: boolean;
}

export const CaseStudyCard = forwardRef<HTMLElement, CaseStudyCardProps>(function CaseStudyCard(
  {
    title, description, posterSrc, posterAlt, onWatchIntro, onReadCaseStudy,
    introLabel = 'Watch intro', readLabel = 'Read the full case study',
    introDisabled = false, readDisabled = false, className, ...props
  },
  ref,
) {
  const titleId = useId();
  const paragraphs = typeof description === 'string' ? [description] : description;

  return (
    <article {...props} ref={ref} aria-labelledby={titleId} className={clsx('enj-case-study-card', className)}>
      <div className="enj-case-study-card__media">
        <img className="enj-case-study-card__poster" src={posterSrc} alt={posterAlt} loading="lazy" decoding="async" />
        <button
          type="button"
          className="enj-case-study-card__intro"
          aria-label={`${introLabel}: ${title}`}
          onClick={onWatchIntro}
          disabled={introDisabled}
        >
          <span className="enj-case-study-card__intro-circle" style={{ maskImage: `url("${introCircle}")` }} aria-hidden="true" />
          <span className="enj-case-study-card__intro-label">{introLabel}</span>
        </button>
      </div>
      <div className="enj-case-study-card__content">
        <h2 id={titleId} className="enj-h2">{title}</h2>
        <div className="enj-case-study-card__description">
          {paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
        </div>
        <Button
          className="enj-case-study-card__action"
          variant="secondary"
          icon="chevron-right"
          aria-label={`${readLabel}: ${title}`}
          onClick={onReadCaseStudy}
          disabled={readDisabled}
        >
          {readLabel}
        </Button>
      </div>
    </article>
  );
});
