/**
 * CustomTile:
 * ---------------
 * CustomTile is meant to be clicked on:
 * 🔹 It has a hover state and an -> arrow (because it's meant to be interacted with, clicked on)
 * 🔹 stackOrder: Dictates in which direction its content flows (vertically or horizontaly)
 *
 */

import { Tile } from '@carbon/react';
import clsx from 'clsx';
// Styles are imported globally
import { useMemo } from 'react';
import CustomIcon, { CustomIconProps } from '../CustomIcon';
import { ArrowRight } from '@carbon/icons-react';

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
      className={clsx('enj-CustomTile', `enj-CustomTile--${stackOrder}`)}
      aria-label={`${title} tile`}
    >
      {iconName && (
        <CustomIcon name={iconName} className={clsx('enj-CustomTile-icon')} />
      )}

      <div className="content">
        <h3 className={clsx('enj-CustomTile-title')}>{title}</h3>
        <p className={clsx('enj-CustomTile-text')}>{trimmedText}</p>
      </div>

      <ArrowRight
        className="enj-icon"
        width="1.3rem"
        height="1.3rem"
        aria-label={`${name} pictogram`}
        aria-hidden="true"
      />
    </Tile>
  );
};

export default CustomTile;
