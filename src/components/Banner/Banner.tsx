/**
 * Banner:
 * ---------------
 * The Banner ...
 */

import { subscribe } from 'diagnostics_channel';
import clsx from 'clsx';
// Styles are imported globally
import { Grid, Column } from '@carbon/react';

interface BannerProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const Banner = ({ title, subtitle, className }: BannerProps) => {
  return (
    <header className={clsx('enj-Banner', className)}>
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
