import type { ComponentPropsWithoutRef } from 'react';
import clsx from 'clsx';
import { CaseStudyCard, type CaseStudyCardProps } from '../CaseStudyCard';

export type CaseStudyListItem = CaseStudyCardProps & { id: string };
export interface CaseStudiesPageProps extends Omit<ComponentPropsWithoutRef<'main'>, 'title' | 'children'> {
  title: string;
  caseStudies: readonly CaseStudyListItem[];
  emptyMessage?: string;
}

/** Presentational page: the consuming application owns CMS fetching and routing. */
export function CaseStudiesPage({ title, caseStudies, emptyMessage = 'Case studies are coming soon. Check back for new work.', className, ...props }: CaseStudiesPageProps) {
  return <main {...props} className={clsx('enj-case-studies-page', className)}>
    <div className="enj-case-studies-page__container">
      <header className="enj-case-studies-page__hero"><h1 className="enj-h1">{title}</h1></header>
      <div className="enj-case-studies-page__list">
        {caseStudies.map(study => <CaseStudyCard key={study.id} {...study} />)}
        {!caseStudies.length && <p>{emptyMessage}</p>}
      </div>
    </div>
  </main>;
}
