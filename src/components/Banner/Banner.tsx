/**
 * Banner:
 * ---------------
 * A flexible header component that can serve as either a standard banner or jumbotron-style hero section.
 *
 * Features:
 * - Responsive grid layout (using Carbon's Grid/Column)
 * - Optional subtitle
 * - Jumbotron styling toggle
 * - Custom class support
 *
 * @param {boolean} [isJumbtron=true] - Determines whether to apply jumbotron styling (larger, more prominent display)
 * @param {string} title - Main heading text (required)
 * @param {string} [subtitle] - Optional supporting text displayed below the title
 * @param {string} [className] - Additional custom CSS classes to apply
 *
 * Usage Examples:
 * ---------------
 * // Default jumbotron banner
 * <Banner
 *   title="Welcome to our Platform"
 *   subtitle="Discover amazing features"
 * />
 *
 * // Standard banner (non-jumbotron)
 * <Banner
 *   isJumbtron={false}
 *   title="Account Settings"
 *   className="custom-banner-style"
 * />
 *
 * // Minimal implementation
 * <Banner title="Announcements" />
 */

import clsx from 'clsx';
import { Grid, Column } from '@carbon/react';

interface BannerProps {
  isJumbtron?: boolean;
  title: string;
  subtitle?: string;
  className?: string;
}

const Banner = ({
  isJumbtron = true,
  title,
  subtitle,
  className,
}: BannerProps) => {
  const cssClasses = clsx('enj-Banner', className, {
    'enj-Banner--jumbotron': isJumbtron,
  });

  return (
    <header className={cssClasses}>
      <Grid fullWidth>
        <Column lg={8} md={6} sm={4}>
          <h1>{title}</h1>
          {subtitle && <p>{subtitle}</p>}
        </Column>
      </Grid>
    </header>
  );
};

export default Banner;
