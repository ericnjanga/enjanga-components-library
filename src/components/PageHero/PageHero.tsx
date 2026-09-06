import type { ComponentPropsWithoutRef } from 'react';
import clsx from 'clsx';

export interface PageHeroProps extends Omit<ComponentPropsWithoutRef<'header'>, 'title' | 'children'> {
  title: string;
  description?: string;
}

/** Shared page introduction. The containing page controls its outer spacing. */
export function PageHero({ title, description, className, ...props }: PageHeroProps) {
  return (
    <header {...props} className={clsx('enj-page-hero', className)}>
      <h1 className="enj-page-hero__title">{title}</h1>
      {description?.trim() && <p className="enj-page-hero__description">{description}</p>}
    </header>
  );
}
