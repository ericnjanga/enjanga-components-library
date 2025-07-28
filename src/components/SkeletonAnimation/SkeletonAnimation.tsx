import clsx from 'clsx';

interface SkeletonAnimationProps {
  className?: string;
  part: 'heading' | 'body';
}

const SkeletonAnimation = ({ className, part }: SkeletonAnimationProps) => {
  return (
    <>
      {part === 'heading' && (
        <h1 className={clsx(className, 'skeleton skeleton-title')}></h1>
      )}
      {part === 'body' && (
        <div className={clsx(className, 'skeleton-text-wrapper')}>
          <p className="skeleton skeleton-text"></p>
          <p className="skeleton skeleton-text"></p>
          <p className="skeleton skeleton-text"></p>
          <p className="skeleton skeleton-text"></p>
        </div>
      )}
    </>
  );
};

export default SkeletonAnimation;
