/**
 * PictogramTile
 * ...
 */
import { memo } from 'react';
import PictogramTile from './PictogramTile';
import { PGL_valid_linkTo } from './lib/types';

// Memoized version (opt-in)
export const MemoizedPictogramTile = memo(PictogramTile);

export { default as PictogramTile } from './PictogramTile';
export { type PGL_valid_linkTo } from './lib/types';