/**
 * Trim text without introducing hook state.
 * - Only trims when necessary
 * - Preserves original blurb if under length limit
 */
export const textTrimmer = ({
  text,
  length,
}: {
  text?: string | undefined;
  length?: number;
}): string | undefined => {
  if (!text) return undefined;
  if (!length || text.length <= length) return text;
  return `${text.slice(0, length)}...`;
};
