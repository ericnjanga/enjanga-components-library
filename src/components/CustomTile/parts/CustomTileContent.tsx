import clsx from 'clsx';
import { CustomTileContentProps } from './ct-types';
import { textTrimmer } from '@/libs/textTrimmer';

export const CustomTileContent = ({
  title,
  blurb,
  titleLength,
  blurbLength,
}: CustomTileContentProps) => {
  // ...
  const trimmedTitle = textTrimmer({ text: title, length: titleLength });
  const trimmedText = textTrimmer({ text: blurb, length: blurbLength });

  return (
    <div className="content">
      <h3 className={clsx('enj-CustomTile-title')}>{trimmedTitle}</h3>
      <p className={clsx('enj-CustomTile-blurb')}>{trimmedText}</p>
    </div>
  );
};
