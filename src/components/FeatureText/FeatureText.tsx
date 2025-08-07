import clsx from 'clsx';
import { textTrimmer } from '@/libs/textTrimmer';

export interface FeatureTextProps {
  className?: string;
  title: string;
  blurb: string;
  titleLength?: number;
  blurbLength?: number;
}

const FeatureText = ({
  className,
  title,
  blurb,
  titleLength,
  blurbLength,
}: FeatureTextProps) => {
  // ...
  const trimmedTitle = textTrimmer({ text: title, length: titleLength });
  const trimmedText = textTrimmer({ text: blurb, length: blurbLength });

  return (
    <div className={clsx(`enj-FeatureText`, className)}>
      <h3 className={clsx('enj-FeatureText-title')}>{trimmedTitle}</h3>
      <article className={clsx('enj-FeatureText-blurb')}>
        <p>{trimmedText}</p>
      </article>
    </div>
  );
};

export default FeatureText;
