import {
  PGL_LinkTargetType,
  PGL_LayoutStyleType,
  PGL_propsType,
  PGL_MediaType,
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
  layoutStyle: 'card' as PGL_LayoutStyleType, // Card by default

  media: undefined, // No media by default
  mediaPictogram: undefined,
  mediaImage: undefined,

  modalIsAvailable: undefined,
  modalPlainDescription: undefined,
  modalRichDescription: undefined,

  linksTo: undefined,
  linkTarget: '_self' as PGL_LinkTargetType,
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
  /**
   * Card .....
   * -------------------------
   */
  card: {

    withIcon: {
      // ...
      ...argsPictogramTileDefaultWithPlainT,
      media: 'pictogram' as PGL_MediaType,
      mediaPictogram: 'Leadership' as CP_nameType,
    } as PGL_propsType,
  },
};