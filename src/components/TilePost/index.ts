/**
 * TilePost
 */
import { memo } from 'react';
import TilePost from './TilePost';

// Memoized version (opt-in)
export const MemoizedTilePost = memo(TilePost);

export { default as TilePost } from './TilePost';

// Provide default export for folder import
import TilePostDefault from './TilePost';
export default TilePostDefault;
