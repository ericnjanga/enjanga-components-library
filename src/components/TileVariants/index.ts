import { memo } from 'react';
import TileVariants from './TileVariants';
import { CTL_valid_linkTo } from './lib/types';

export const MemoizedTileVariants = memo(TileVariants);

export { default as TileVariants } from './TileVariants';
export { type CTL_valid_linkTo } from './lib/types';
