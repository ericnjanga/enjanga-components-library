/**
 * CustomTile
 * ...
 */
import { memo } from 'react';
import CustomTile from './CustomTile';

// Memoized version (opt-in)
export const MemoizedCustomTile = memo(CustomTile);

export { default as CustomTile } from './CustomTile';
