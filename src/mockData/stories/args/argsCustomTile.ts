import {
  CTL_LinkTargetType,
  CTL_LayoutStyleType,
  CTL_propsType,
} from '@/components/CustomTile/lib/types';
import { argsFeatureText } from './argsFeatureText';
import { mockRichText } from '@/mockData/mockRichText';

// For CustomTile.stories.tsx ...
// Default (card) ...
const argsCustomTileDefault = {
  className: '',
  featuredText: {
    ...argsFeatureText,
  },
  layoutStyle: 'card' as CTL_LayoutStyleType,

  media: undefined, // No media by default
  mediaIcon: undefined,
  mediaImage: undefined,

  modalIsAvailable: undefined,
  modalPlainDescription: undefined,
  modalRichDescription: undefined,

  linksTo: undefined,
  linkTarget: undefined, // = '_self' as CTL_LinkTargetType
} as CTL_propsType;

export const argsCustomTile = {
  card: {
    // ...
    ...argsCustomTileDefault,
  },
  banner: {
    // ...
    ...argsCustomTileDefault,
    layoutStyle: 'banner' as CTL_LayoutStyleType,
  },
  emptyCard: {
    // ...
    ...argsCustomTileDefault,
    featuredText: {
      heading: {},
      smartText: {},
    },
    layoutStyle: 'card' as CTL_LayoutStyleType,
  },
  emptyBanner: {
    // ...
    ...argsCustomTileDefault,
    featuredText: {
      heading: {},
      smartText: {},
    },
    layoutStyle: 'banner' as CTL_LayoutStyleType,
  },
};

// // Banner
// export const argsCustomTile = {
//   className: '',
//   featuredText: {
//     ...argsFeatureText,
//   },
//   layoutStyle: 'banner' as CTL_LayoutStyleType,

//   media: undefined, // No media by default
//   mediaIcon: undefined,
//   mediaImage: undefined,

//   modalIsAvailable: undefined,
//   modalPlainDescription: undefined,
//   modalRichDescription: undefined,

//   linksTo: undefined,
//   linkTarget: undefined, // = '_self' as CTL_LinkTargetType
// } as CTL_propsType;
