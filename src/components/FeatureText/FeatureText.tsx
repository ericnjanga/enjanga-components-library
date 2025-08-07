import clsx from 'clsx';
import { textTrimmer } from '@/libs/textTrimmer';

export interface FeatureTextProps {
  cssClass?: string;
  title: string;
  blurb: string;
  titleLength?: number;
  blurbLength?: number;
}

const FeatureText = ({
  cssClass,
  title,
  blurb,
  titleLength,
  blurbLength,
}: FeatureTextProps) => {
  // ...
  const trimmedTitle = textTrimmer({ text: title, length: titleLength });
  const trimmedText = textTrimmer({ text: blurb, length: blurbLength });

  return (
    <div className={clsx(`enj-FeatureText`, cssClass)}>
      <h3 className={clsx('enj-CustomTile-title')}>{trimmedTitle}</h3>
      <p className={clsx('enj-CustomTile-blurb')}>{trimmedText}</p>
    </div>
  );
};

export default FeatureText;
