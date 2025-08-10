import clsx from 'clsx';
import { Sk_propsType } from './libs/types';

const SkeletonListItem = () => (
  <div className="skeleton-list-item skeleton-bot-spacing-2">
    <p className="skeleton skeleton-dot"></p>
    <p className="skeleton skeleton-text"></p>
  </div>
);

const SkeletonAnimation = ({ className, part }: Sk_propsType) => {
  return (
    <>
      {part === 'heading' && (
        <h1
          className={clsx(
            className,
            'skeleton skeleton-title skeleton-bot-spacing-1'
          )}
        ></h1>
      )}
      {part === 'body' && (
        <div className={clsx(className, 'skeleton-text-wrapper')}>
          <p className="skeleton skeleton-text skeleton-bot-spacing-2"></p>
          <p className="skeleton skeleton-text skeleton-bot-spacing-2"></p>
          <p className="skeleton skeleton-text skeleton-bot-spacing-2"></p>
          <p className="skeleton skeleton-text skeleton-bot-spacing-2"></p>
        </div>
      )}
      {part === 'list' && (
        <div className={clsx(className, 'skeleton-text-wrapper')}>
          <SkeletonListItem />
          <SkeletonListItem />
          <SkeletonListItem />
        </div>
      )}
    </>
  );
};

export default SkeletonAnimation;
