/**
 * CustomTile:
 * ---------------
 * The CustomTile ...
 */

import { Tile } from '@carbon/react';
import clsx from 'clsx';
// Styles are imported globally
import { useMemo } from 'react';
import CustomIcon, { CustomIconProps } from '../CustomIcon';

interface CustomTileProps {
  title: string;
  text: string;
  textLength?: number;
  stackOrder?: 'vertical' | 'horizontal';
  iconName?: CustomIconProps['name'];
}

/**
 * Optimized text trimmer hook
 * - Only trims when necessary
 * - Memoizes result to prevent unnecessary recalculations
 * - Preserves original text if under length limit
 */
const useTextTrimmer = (text: string, length?: number): string => {
  return useMemo(() => {
    if (!length || text.length <= length) return text;
    return `${text.slice(0, length)}...`;
  }, [text, length]);
};

const CustomTile = ({
  iconName,
  title,
  text,
  textLength,
  stackOrder = 'vertical',
}: CustomTileProps) => {
  const trimmedText = useTextTrimmer(text, textLength);

  return (
    <Tile
      className={clsx('enj-CustomTile', `enj-customTile--${stackOrder}`)}
      aria-label={`${title} tile`}
    >
      {iconName && (
        <CustomIcon name={iconName} className={clsx('enj-CustomTile-icon')} />
      )}

      <h3 className={clsx('enj-CustomTile-title')}>{title}</h3>
      <p className={clsx('enj-CustomTile-text')}>{trimmedText}</p>
    </Tile>
  );
};

export default CustomTile;
