import { Grid, Column } from '@carbon/react';

interface BannerSkeletonProps {
  className: string;
  subtitleIsVisible: boolean;
}

const BannerSkeleton = ({
  className,
  subtitleIsVisible,
}: BannerSkeletonProps) => (
  <header className={className}>
    <Grid fullWidth>
      <Column lg={8} md={6} sm={4}>
        <h1 className="skeleton skeleton-title"></h1>
        {subtitleIsVisible && (
          <div className="skeleton-text-wrapper">
            <p className="skeleton skeleton-text"></p>
            <p className="skeleton skeleton-text"></p>
            <p className="skeleton skeleton-text"></p>
          </div>
        )}
      </Column>
    </Grid>
  </header>
);

export default BannerSkeleton;
