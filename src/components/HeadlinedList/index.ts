import { memo } from 'react';
import HeadlinedList from './HeadlinedList';

// Standard version (unmemoized)
export { HeadlinedList };

// Memoized version (opt-in)
export const MemoizedHeadlinedList = memo(HeadlinedList);

// Default export (unmemoized, backward-compatible)
export default HeadlinedList;
