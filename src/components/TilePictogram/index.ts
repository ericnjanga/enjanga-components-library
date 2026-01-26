/**
 * TilePictogram
 */
import { memo } from 'react';
import TilePictogram from './TilePictogram';

// Memoized version (opt-in)
export const MemoizedTilePictogram = memo(TilePictogram);

export { default as TilePictogram } from './TilePictogram';
export { type PGL_valid_linkTo } from './lib/types';

// Provide a default export for consumers importing the folder directly
import TilePictogramDefault from './TilePictogram';
export default TilePictogramDefault;
