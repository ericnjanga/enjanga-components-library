/**
 * Banner:
 * ---------------
 * A flexible and reusable header component that functions as either a compact banner or a jumbotron-style hero section.
 *
 * Features:
 * - Accepts custom CSS classes via `className`
 * - Inherits features from FeatureText component
 * - Container-based responsiveness
 * - Supports both plain text and rich text descriptions
 * - Height can be increased (`isHuge`)
 *
 * Props:
 * -------
 * @param {boolean} [isHuge=false]
 *   - Enables jumbotron styling with a larger and more prominent visual appearance.
 *   - Default is `false`, rendering a standard banner.
 *
 * @param {FeatureText} [featuredText]
 *   - Featured text component properties
 *
 * @param {string} [className]
 *   - Additional custom CSS classes to apply to the banner container.
 */

import clsx from 'clsx';
// import { Grid, Column } from '@carbon/react';
import { BNN_propsType } from './libs/types';
import { FeatureText } from '../FeatureText';
import { useContainerSize } from '@/libs/useContainerSize';

const Banner = ({
  className,
  featuredText,
  isHuge = false,

  //  * A banner is usually a page-level landmark (site-wide header, hero, jumbotron, etc.).
  // 👉 Use role="banner" if it’s the primary page banner.
  role = 'banner', // ✅ default to banner
}: BNN_propsType) => {
  const cssClasses = clsx('enj-Banner', className, {
    'enj-Banner--isHuge': isHuge,
  });

  const { containerRef, activeBreakpoint } = useContainerSize();

  // Determine the correct HTML element based on the role
  const Tag = role === 'banner' ? 'header' : 'div';

  return (
    <Tag // ✅ Now uses <header> for banner, <div> for presentation
      className={`${cssClasses} enj-Banner-${activeBreakpoint}`}
      ref={containerRef}
      role={role} // role is still explicitly set for clarity and for cases where Tag is 'div'
    >
      <div className="cds--css-grid">
        <div className="cds--sm:col-span-4 cds--md:col-span-6 cds--lg:col-span-8 cds--css-grid-column">
          <FeatureText {...featuredText} />
        </div>
      </div>
    </Tag>
  );
};

export default Banner;
