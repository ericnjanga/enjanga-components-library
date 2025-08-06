import clsx from 'clsx';
import { useMemo } from 'react';
import { ArrowRight, ArrowUpRight } from '@carbon/icons-react';
import { CustomTileIconProps, CustomTileContentProps } from './ct-types';

/**
 * Optimized blurb trimmer hook
 * - Only trims when necessary
 * - Memoizes result to prevent unnecessary recalculations
 * - Preserves original blurb if under length limit
 */
const useTextTrimmer = (blurb: string, length?: number): string => {
  return useMemo(() => {
    if (!length || blurb.length <= length) return blurb;
    return `${blurb.slice(0, length)}...`;
  }, [blurb, length]);
};

export const CustomTileContent = ({
  title,
  blurb,
  titleLength,
  blurbLength,
}: CustomTileContentProps) => {
  const trimmedTitle = useTextTrimmer(title, titleLength);
  const trimmedText = useTextTrimmer(blurb, blurbLength);

  return (
    <div className="content">
      <h3 className={clsx('enj-CustomTile-title')}>{trimmedTitle}</h3>
      <p className={clsx('enj-CustomTile-blurb')}>{trimmedText}</p>
    </div>
  );
};

export const CustomTileIcon = ({
  title,
  linkIsExternal,
}: CustomTileIconProps) => {
  const C = linkIsExternal ? ArrowUpRight : ArrowRight;
  return (
    <C
      className="enj-icon"
      width="1.3rem"
      height="1.3rem"
      aria-label={`${title} pictogram`}
      aria-hidden="true"
    />
  );
};
