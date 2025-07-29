/**
 * Banner:
 * ---------------
 * A flexible header component that can serve as either a standard banner or jumbotron-style hero section.
 *
 * Features:
 * - Responsive grid layout (using Carbon's Grid/Column)
 * - Optional plainDescription
 * - Jumbotron styling toggle
 * - Custom class support
 *
 * @param {boolean} [isHuge=true] - Determines whether to apply jumbotron styling (larger, more prominent display)
 * @param {boolean} [showPlainDescription] - ...
 * @param {boolean} [showRichDescription] - ...
 * @param {string} title - Main heading text (required)
 * @param {string} [plainDescription] - Optional supporting text displayed below the title
 * @param {string} [className] - Additional custom CSS classes to apply
 *
 * Usage Examples:
 * ---------------
 * // Default jumbotron banner
 * <Banner
 *   title="Welcome to our Platform"
 *   plainDescription="Discover amazing features"
 * />
 *
 * // Standard banner (non-jumbotron)
 * <Banner
 *   isHuge={false}
 *   title="Account Settings"
 *   className="custom-banner-style"
 * />
 *
 * // Minimal implementation
 * <Banner title="Announcements" />
 */

import clsx from 'clsx';
import { Grid, Column } from '@carbon/react';
import BannerSkeleton from './parts/BannerSkeleton';
import { CMSRichText } from '../CMSRichText';
import type { Node } from '@contentful/rich-text-types';

interface BannerProps {
  isHuge?: boolean;
  showPlainDescription?: boolean;
  showRichDescription?: boolean;
  title?: string;
  plainDescription?: string | 'none';
  richDescription?: { json: { content: Node[] } };
  className?: string;
}

const Banner = ({
  isHuge = false, // Small banner by default
  showPlainDescription = false, // Do not show the plainDescription by default
  showRichDescription = false, // Do not show the richDescription by default
  title,
  plainDescription,
  richDescription,
  className,
}: BannerProps) => {
  const cssClasses = clsx('enj-Banner', className, {
    'enj-Banner--jumbotron': isHuge,
  });

  if (!title) {
    return (
      <BannerSkeleton
        className={cssClasses}
        showDescription={showPlainDescription || showRichDescription}
      />
    );
  }

  return (
    <header className={cssClasses}>
      <Grid fullWidth>
        <Column lg={8} md={6} sm={4}>
          <h1>{title}</h1>
          {showPlainDescription && plainDescription && (
            <p>{plainDescription}</p>
          )}
          {showRichDescription && richDescription && (
            <CMSRichText data={richDescription} />
          )}
        </Column>
      </Grid>
    </header>
  );
};

export default Banner;
