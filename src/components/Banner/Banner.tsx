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
  isHuge = false, // Small banner by default
}: BNN_propsType) => {
  const cssClasses = clsx('enj-Banner', className, {
    'enj-Banner--isHuge': isHuge,
  });

  // [*] Activate container size responsiveness
  // ----------------------------
  const {
    containerRef, // Reference to component wrapper
    activeBreakpoint, // Closest possible breakpoint to wrapper's width
  } = useContainerSize();

  return (
    <header
      className={`${cssClasses} enj-Banner-${activeBreakpoint}`}
      ref={containerRef}
    >
      <div className="cds--css-grid">
        <div className="cds--sm:col-span-4 cds--md:col-span-6 cds--lg:col-span-8 cds--css-grid-column">
          <FeatureText {...featuredText} />
        </div>
      </div>

      {/* 
        I'm not using <Grid /> because it becomes a subgrid under another <Grid /> and loses all its formatting.
      
        <Grid fullWidth>
        <Column lg={8} md={6} sm={4}>
          <FeatureText {...featuredText} />
        </Column>
      </Grid> */}
    </header>
  );
};

export default Banner;
