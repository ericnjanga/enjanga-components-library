import { Grid, Column } from '@carbon/react';
import { SkeletonAnimation } from '@/components/SkeletonAnimation';

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
        <SkeletonAnimation part="heading" />
        {subtitleIsVisible && <SkeletonAnimation part="body" />}
      </Column>
    </Grid>
  </header>
);

export default BannerSkeleton;
