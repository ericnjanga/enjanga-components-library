import clsx from 'clsx';
import { useMemo } from 'react';
import { ArrowRight } from '@carbon/icons-react';

interface CustomTileContentProps {
  title: string;
  text: string;
  textLength?: number;
}
interface CustomTileIconProps {
  title: string;
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

export const CustomTileContent = ({
  title,
  text,
  textLength,
}: CustomTileContentProps) => {
  const trimmedText = useTextTrimmer(text, textLength);

  return (
    <div className="content">
      <h3 className={clsx('enj-CustomTile-title')}>{title}</h3>
      <p className={clsx('enj-CustomTile-text')}>{trimmedText}</p>
    </div>
  );
};

export const CustomTileIcon = ({ title }: CustomTileIconProps) => {
  return (
    <ArrowRight
      className="enj-icon"
      width="1.3rem"
      height="1.3rem"
      aria-label={`${title} pictogram`}
      aria-hidden="true"
    />
  );
};
