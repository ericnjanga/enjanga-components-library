import { memo } from 'react';
import TileValue from './TileValue';

export const MemoizedTileValue = memo(TileValue);

export { default as TileValue } from './TileValue';
export type { TVL_propsType } from './lib/types';

import TileValueDefault from './TileValue';
export default TileValueDefault;
