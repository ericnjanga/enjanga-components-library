import { memo } from 'react';
import TileBanner from './TileBanner';
import { TBN_valid_linkTo } from './lib/types';

export const MemoizedTileBanner = memo(TileBanner);

export { default as TileBanner } from './TileBanner';
export { type TBN_valid_linkTo } from './lib/types';
