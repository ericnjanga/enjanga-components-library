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
  text?: string | undefined;
  length?: number;
}): string | undefined => {
  return useMemo(() => {
    let trimmed;

    if (text) {
      if (!length || text.length <= length) return text;
      trimmed = `${text.slice(0, length)}...`;
    }

    return trimmed;
  }, [text, length]);
};
