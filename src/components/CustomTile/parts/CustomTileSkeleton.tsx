import { SkeletonAnimation } from '@/components/SkeletonAnimation';

const CustomTileSkeleton = () => (
  <div className="content">
    <div className="enj-CustomTile-title">
      <SkeletonAnimation part="heading" />
      <SkeletonAnimation part="heading" />
    </div>
    <SkeletonAnimation className="enj-CustomTile-blurb" part="body" />
  </div>
);

export default CustomTileSkeleton;
