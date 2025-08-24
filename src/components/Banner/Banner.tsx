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
import { Grid, Column } from '@carbon/react';
import { BNN_propsType } from './libs/types';
import { FeatureText } from '../FeatureText';

const Banner = ({
  className,
  featuredText,
  isHuge = false, // Small banner by default
}: BNN_propsType) => {
  const cssClasses = clsx('enj-Banner', className, {
    'enj-Banner--jumbotron': isHuge,
  });

  return (
    <header className={cssClasses}>
      <Grid fullWidth>
        <Column lg={8} md={6} sm={4}>
          <FeatureText {...featuredText} />
        </Column>
      </Grid>
    </header>
  );
};

export default Banner;
