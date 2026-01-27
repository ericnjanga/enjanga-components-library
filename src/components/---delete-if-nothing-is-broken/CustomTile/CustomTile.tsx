/**
 * CustomTile:
 * ---------------------------------------------
 * A customizable tile component that can optionally link to internal (arrow right) or external links (arrow up right)
 *
 */
import { useState } from 'react';
import React from 'react';
import { Tile } from '@carbon/react';
import { getCustomTileCSSClasses } from './lib/getCustomTileCSSClasses';
import { getLinkWrapper } from './lib/getLinkwrapper';
import { getTileContent } from './lib/getTileContent';
import {
  CTL_propsType,
  CTL_LinkTargetType,
  CTL_LayoutStyleType,
} from './lib/types';
import { ContentModal } from '../../ContentModal/ContentModal';
import SmartText from '../../SmartText/SmartText';
import { handleCustomTileClick } from './parts/utils';
import { validateCTL_propsType } from './lib/propsValidation';
// Legacy CustomTile removed. Use TileVariants component instead.
export default null as any;
        </ContentModal>
      )}
    </div>
  );
};

export default TileVariants;
