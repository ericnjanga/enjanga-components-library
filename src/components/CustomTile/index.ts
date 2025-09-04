/**
 * CustomTile
 * ...
 */
import { memo } from 'react';
import CustomTile from './CustomTile';
import { CTL_valid_linkTo } from './lib/types';

// Memoized version (opt-in)
export const MemoizedCustomTile = memo(CustomTile);

export { default as CustomTile } from './CustomTile';
export { type CTL_valid_linkTo } from './lib/types';
