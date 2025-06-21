import { memo } from 'react';
import List from './List';

// Standard version (unmemoized)
export { List };

// Memoized version (opt-in)
export const MemoizedList = memo(List);

// Default export (unmemoized, backward-compatible)
export default List;
