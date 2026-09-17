import type { ComponentPropsWithoutRef, ComponentType, ReactNode } from 'react';
import clsx from 'clsx';
import { ScrollReveal } from '../ScrollReveal';
import { PageHero } from '../PageHero';

export interface HomePageProps
  extends Omit<
    ComponentPropsWithoutRef<'main'>,
    'title' | 'children' | 'about'
  > {
  title: string;
  description?: string;
  heroAction?: ReactNode;
  /** Enable the lightweight Expertise silhouette prototype. */
  expertisePreview?: boolean;
  expertise: {
    title: string;
    items: readonly { title: string; description: string }[];
    action?: ReactNode;
    image?: ReactNode;
  };
  about: {
    title: string;
    paragraphs: readonly string[];
    action?: ReactNode;
    image?: ReactNode;
  };
  /** Optional application-owned animation wrapper for each lower section. */
  SectionWrapper?: ComponentType<{ children: ReactNode; preview?: boolean }>;
}

/** Presentational home page. The application supplies content, links and media. */
export function HomePage({
  title,
  description,
  heroAction,
  expertisePreview = true,
  expertise,
  about,
  SectionWrapper = ScrollReveal,
  className,
  ...props
}: HomePageProps) {
  return (
    <main {...props} className={clsx('enj-home-page', className)}>
      <div className="enj-home-page__container">
        <section
          id="home"
          className="enj-home-page__hero"
          aria-label="Introduction"
        >
          <PageHero title={title} description={description} action={heroAction} />
        </section>
        <SectionWrapper preview={expertisePreview}>
          <section id="expertise" className="enj-home-page__expertise">
            <div className="enj-home-page__expertiseCopy">
              <h2>{expertise.title}</h2>
              <ul className="enj-home-page__expertiseList">
                {expertise.items.map((item, index) => (
                  <li key={index}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </li>
                ))}
              </ul>
              {expertise.action}
            </div>
            {expertise.image && (
              <div className="enj-home-page__productImage">
                <div className="enj-home-page__productImageFrame">{expertise.image}</div>
              </div>
            )}
          </section>
        </SectionWrapper>
        <SectionWrapper>
          <section id="about" className="enj-home-page__about">
            {about.image && (
              <div className="enj-home-page__portrait">{about.image}</div>
            )}
            <div className="enj-home-page__aboutCopy">
              <h2>{about.title}</h2>
              <div className="enj-home-page__bodyCopy">
                {about.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
              {about.action}
            </div>
          </section>
        </SectionWrapper>
      </div>
    </main>
  );
}
