import clsx from 'clsx';

const CustomTileSkeleton = () => (
  <div className="content">
    <div className="enj-CustomTile-title">
      <h3 className={clsx('skeleton skeleton-title')}></h3>
      <h3 className={clsx('skeleton skeleton-title')}></h3>
    </div>
    <div className="enj-CustomTile-text skeleton-text-wrapper">
      <p className={clsx('skeleton skeleton-text')}></p>
      <p className={clsx('skeleton skeleton-text')}></p>
      <p className={clsx('skeleton skeleton-text')}></p>
      <p className={clsx('skeleton skeleton-text')}></p>
    </div>
  </div>
);

export default CustomTileSkeleton;
