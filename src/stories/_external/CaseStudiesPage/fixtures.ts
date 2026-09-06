import contentful from './contentful.json';
import type { CaseStudiesPageProps } from '../../../components/CaseStudiesPage';

/** Public Contentful Delivery API snapshot, 2026-09-06. No credentials or draft content. */
export const caseStudiesPageFixture: CaseStudiesPageProps = {
  title: 'Engineering complex workflows into clear experiences.',
  caseStudies: contentful.blogPostCollection.items.map(study => ({
    id: study.sys.id,
    title: study.title,
    description: study.blurb,
    posterSrc: study.introVideoImage?.url,
    posterAlt: study.introVideoImage?.description || '',
    videoSrc: study.introVideo?.url,
    videoType: study.introVideo?.contentType,
    caseStudyHref: `http://localhost:3000/case-studies/${encodeURIComponent(study.slug)}`,
  })),
};
