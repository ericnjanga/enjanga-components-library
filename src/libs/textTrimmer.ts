import { useMemo } from 'react';

/**
 * Optimized blurb trimmer hook
 * - Only trims when necessary
 * - Memoizes result to prevent unnecessary recalculations
 * - Preserves original blurb if under length limit
 */
export const textTrimmer = ({
  text,
  length,
}: {
  text: string;
  length?: number;
}): string => {
  return useMemo(() => {
    if (!length || text.length <= length) return text;
    return `${text.slice(0, length)}...`;
  }, [text, length]);
};
