import {
  PGL_LinkTargetType, 
  PGL_propsType, 
} from '@/components/TilePictogram/lib/types';

import {
  argsFeatureTextWithPlainText,
  argsFeatureTextWithRichText,
} from './argsFeatureText';
import { CP_nameType } from '@/components/CustomPictogram/libs/types';
import { mockHeading } from '@/mockData/mixed';
import { mockRichTextLarge, mockRichTextSmall } from '@/mockData/mockRichText';

const mediaImg = {
  url: '/img/cust-tile-1.png',
  alt: '',
  width: 607,
  height: 348
};

// For PictogramTile.stories.tsx ...     argsFeatureTextWithRichText
// Default ...
const argsPictogramTileDefaultWithPlainT = {
  className: '',
  featuredText: {
    ...argsFeatureTextWithPlainText,
    heading: {
      ...argsFeatureTextWithPlainText.heading,
      level: 2,
    },
  },  
  pictogram: undefined, 
  modal: undefined,
} as PGL_propsType;

const argsPictogramTileDefaultWithRichT = {
  ...argsPictogramTileDefaultWithPlainT,
  featuredText: {
    ...argsFeatureTextWithRichText,
    heading: {
      ...argsFeatureTextWithRichText.heading,
      level: 2,
    },
  },
  // modalRichDescription: mockRichTextLarge.description
} as PGL_propsType;

export const argsPictogramTile = { 
  ...argsPictogramTileDefaultWithPlainT,
  pictogram: 'Leadership' as CP_nameType,
} as PGL_propsType;