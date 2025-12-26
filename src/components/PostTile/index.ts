/**
 * PostTile
 * ...
 */
import { memo } from 'react';
import PostTile from './PostTile'; 

// Memoized version (opt-in)
export const MemoizedPostTile = memo(PostTile);

export { default as PostTile } from './PostTile'; 
