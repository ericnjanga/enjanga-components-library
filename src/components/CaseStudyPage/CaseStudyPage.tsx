import { useRef, useState, type ComponentPropsWithoutRef, type ReactNode, type MouseEvent } from 'react';
import { CaseStudyVideoDialog } from '../CaseStudyVideoDialog';
import clsx from 'clsx';
import { PageHero } from '../PageHero';

export interface CaseStudyPageProps extends Omit<ComponentPropsWithoutRef<'main'>, 'title' | 'children'> {
  title: string;
  /** Optional short introduction beneath the page title. */
  description?: string;
  /** Rendered article markup, for example from a Contentful rich-text renderer. */
  children: ReactNode;
}

/** Presentational detail page. The application owns CMS rendering, navigation and footer. */
export function CaseStudyPage({ title, description, children, className, ...props }: CaseStudyPageProps) {
  const [video, setVideo] = useState<{ src: string; title: string; type: string } | null>(null);
  const trigger = useRef<HTMLAnchorElement | null>(null);
  function openVideo(event: MouseEvent<HTMLElement>) {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const link = (event.target as Element).closest<HTMLAnchorElement>('a[href]');
    if (!link || !event.currentTarget.contains(link) || link.hasAttribute('download')) return;
    const url = new URL(link.href);
    if (!['http:', 'https:'].includes(url.protocol)) return;
    const extension = url.pathname.match(/\.(mp4|webm|ogv)$/i)?.[1].toLowerCase();
    if (!extension) return;
    event.preventDefault();
    trigger.current = link;
    setVideo({ src: link.href, title: link.textContent?.trim() || 'Video walkthrough', type: extension === 'ogv' ? 'video/ogg' : `video/${extension}` });
  }
  return (
    <main {...props} className={clsx('enj-case-study-page', className)}>
      <div className="enj-case-study-page__container">
        <PageHero title={title} description={description} className="enj-case-study-page__hero" />
        <article className="enj-case-study-page__article" aria-label={title} onClick={openVideo}>{children}</article>
      </div>
      {video && <CaseStudyVideoDialog key={video.src} variant="walkthrough" title={video.title}
        videoSrc={video.src} videoType={video.type} open onClose={() => {
          setVideo(null);
          trigger.current?.focus();
        }} />}
    </main>
  );
}
