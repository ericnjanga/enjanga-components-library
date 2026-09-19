'use client';

import { useContext, type ComponentPropsWithoutRef } from 'react';
import clsx from 'clsx';
import { LinkContext } from '../../providers/LinkProvider';

export interface FooterLink {
  label: string;
  href: string;
  accessibleLabel?: string;
  openInNewTab?: boolean;
}

export interface FooterProps
  extends Omit<ComponentPropsWithoutRef<'footer'>, 'children'> {
  siteName: string;
  homeHref?: string;
  brandLabel?: string;
  links?: readonly FooterLink[];
  copyright?: string;
  navigationLabel?: string;
}

/** Presentation only. Supply data from your application and routing via LinkProvider. */
export function Footer({
  siteName,
  homeHref = '/',
  brandLabel = `${siteName} home`,
  links = [],
  copyright,
  navigationLabel = 'Footer navigation',
  className,
  ...props
}: FooterProps) {
  const Link = useContext(LinkContext) ?? 'a';
  return (
    <footer {...props} className={clsx('enj-footer', className)}>
      <div className="enj-footer__inner">
        <Link
          href={homeHref}
          aria-label={brandLabel}
          className="enj-footer__brand"
        >
          {siteName}
        </Link>
        {(links.length > 0 || copyright) && (
          <div className="enj-footer__details">
            {links.length > 0 && (
              <nav aria-label={navigationLabel}>
                <ul className="enj-footer__links">
                  {links.map((link) => (
                    <li key={`${link.label}-${link.href}`}>
                      <Link
                        href={link.href}
                        aria-label={link.accessibleLabel || link.label}
                        target={link.openInNewTab ? '_blank' : undefined}
                        rel={
                          link.openInNewTab ? 'noopener noreferrer' : undefined
                        }
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
            {copyright && <p className="enj-footer__copyright">{copyright}</p>}
          </div>
        )}
      </div>
    </footer>
  );
}
