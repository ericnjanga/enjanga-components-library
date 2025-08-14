/**
 * Banner:
 * ---------------
 * A flexible and reusable header component that functions as either a compact banner or a jumbotron-style hero section.
 *
 * Features:
 * - Responsive layout using Carbon's Grid/Column
 * - Supports both plain text and rich text descriptions
 * - Toggleable jumbotron mode (`isHuge`)
 * - Displays skeleton fallback when `title` is not provided
 * - Accepts custom CSS classes via `className`
 *
 * Props:
 * -------
 * @param {boolean} [isHuge=false]
 *   - Enables jumbotron styling with a larger and more prominent visual appearance.
 *   - Default is `false`, rendering a standard banner.
 *
 * @param {boolean} [showPlainDescription=false]
 *   - Controls whether the `plainDescription` is rendered.
 *   - Default is `false`.
 *
 * @param {boolean} [showRichDescription=false]
 *   - Controls whether the `richDescription` (Contentful Rich Text) is rendered using `CMSRichText`.
 *   - Default is `false`.
 *
 * @param {string} [title]
 *   - The main heading text for the banner.
 *   - If not provided, a skeleton version of the banner is rendered instead.
 *
 * @param {string | 'none'} [plainDescription]
 *   - Optional plain text displayed below the title.
 *   - Rendered only when `showPlainDescription` is `true` and a valid value is provided.
 *
 * @param {{ json: { content: Node[] } }} [richDescription]
 *   - Optional rich text content (in Contentful Rich Text format) displayed below the title.
 *   - Rendered only when `showRichDescription` is `true`.
 *
 * @param {string} [className]
 *   - Additional custom CSS classes to apply to the banner container.
 *
 * Behavior:
 * ---------
 * - If `title` is not set, `BannerSkeleton` is rendered in place of the main content.
 * - If both `showPlainDescription` and `showRichDescription` are true, both descriptions will appear in order under the title.
 *
 * Usage Examples:
 * ---------------
 * // Default jumbotron banner
 * <Banner
 *   isHuge
 *   title="Welcome to our Platform"
 *   plainDescription="Discover amazing features"
 *   showPlainDescription
 * />
 *
 * // Standard banner with custom class
 * <Banner
 *   isHuge={false}
 *   title="Account Settings"
 *   className="custom-banner-style"
 * />
 *
 * // Banner with rich content
 * <Banner
 *   title="Our Story"
 *   showRichDescription
 *   richDescription={...}
 * />
 *
 * // Fallback state (skeleton)
 * <Banner />
 */

import clsx from 'clsx';
import { Grid, Column } from '@carbon/react';
import BannerSkeleton from './parts/BannerSkeleton';
import { CMSRichText } from '../CMSRichText';
import { BNN_propsType } from './libs/types';
import { FeatureText } from '../FeatureText';

const Banner = ({
  className,
  heading,
  headingLevel = 1,
  headingMaxLength,

  isHuge = false, // Small banner by default

  plainDescription,
  richDescription,
  blurbMaxLength,

  showPlainDescription = false, // Do not show the plainDescription by default
  showRichDescription = false, // Do not show the richDescription by default
 
}: BNN_propsType) => {
  const cssClasses = clsx('enj-Banner', className, {
    'enj-Banner--jumbotron': isHuge,
  });

  // if (!title) {
  //   return (
  //     <BannerSkeleton
  //       className={cssClasses}
  //       showDescription={showPlainDescription || showRichDescription}
  //     />
  //   );
  // }

  return (
    <header className={cssClasses}>
      <Grid fullWidth>
        <Column lg={8} md={6} sm={4}>
          <FeatureText
            heading={heading}
            headingLevel={headingLevel}
            headingMaxLength={headingMaxLength}
            plainText={plainDescription}
            richText={richDescription}
            blurbMaxLength?: number;
          />
          {/* <h1>{title}</h1>
          {showPlainDescription && plainDescription && (
            <p>{plainDescription}</p>
          )}
          {showRichDescription && richDescription && (
            <CMSRichText data={richDescription} />
          )} */}
        </Column>
      </Grid>
    </header>
  );
};

export default Banner;
