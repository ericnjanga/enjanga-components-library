import clsx from 'clsx';
import { Sk_propsType } from './libs/types';

const SkeletonListItem = () => (
  <div
    className="skeleton-list-item skeleton-bot-spacing-2"
    role="presentation"
  >
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
          role="presentation"
        ></h1>
      )}
      {part === 'body' && (
        <div className={clsx(className, 'skeleton-text-wrapper')}>
          {[1, 2, 3, 4].map((index) => (
            <p
              key={index}
              className="skeleton skeleton-text skeleton-bot-spacing-2"
              role="presentation"
            ></p>
          ))}
        </div>
      )}
      {part === 'list' && (
        <div className={clsx(className, 'skeleton-text-wrapper')}>
          {[1, 2, 3].map((index) => (
            <SkeletonListItem key={index} />
          ))}
        </div>
      )}
      {part === 'list-item' && (
        <div className={clsx(className, 'skeleton-text-wrapper')}>
          <SkeletonListItem />
        </div>
      )}
    </>
  );
};

export default SkeletonAnimation;
