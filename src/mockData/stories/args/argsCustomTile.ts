import {
  CTL_LinkTargetType,
  CTL_LayoutStyleType,
  CTL_propsType,
  CTL_MediaType,
} from '@/components/CustomTile/lib/types';
import { argsFeatureText } from './argsFeatureText';
import { CP_nameType } from '@/components/CustomPictogram/libs/types';
import { mockHeading } from '@/mockData/mixed';

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
  linkTarget: '_self' as CTL_LinkTargetType,
} as CTL_propsType;

export const argsCustomTile = {
  card: {
    default: {
      // ...
      ...argsCustomTileDefault,
    } as CTL_propsType,

    withIcon: {
      // ...
      ...argsCustomTileDefault,
      media: 'icon' as CTL_MediaType,
      mediaIcon: 'Leadership' as CP_nameType,
    } as CTL_propsType,

    withImage: {
      // ...
      ...argsCustomTileDefault,
      media: 'image' as CTL_MediaType,
      mediaImage: '/img/cust-tile-1.png',
    } as CTL_propsType,

    withLocalLink: {
      // ...
      ...argsCustomTileDefault,
      linksTo: '/local/route',
      linkTarget: '_self' as CTL_LinkTargetType,
    } as CTL_propsType,

    withExternalLink: {
      // ...
      ...argsCustomTileDefault,
      linksTo: 'https://carbondesignsystem.com',
      linkTarget: '_blank' as CTL_LinkTargetType,
    } as CTL_propsType,

    withModal: {
      // ...
      ...argsCustomTileDefault,
      modalIsAvailable: true,
      modalPlainDescription: mockHeading.plain,
      modalRichDescription: undefined,
    } as CTL_propsType,

    empty: {
      // ...
      ...argsCustomTileDefault,
      featuredText: {
        heading: {},
        smartText: {},
      },

      layoutStyle: 'card' as CTL_LayoutStyleType,
    } as CTL_propsType,
  },
  banner: {
    default: {
      // ...
      ...argsCustomTileDefault,
      layoutStyle: 'banner' as CTL_LayoutStyleType,
    } as CTL_propsType,

    withIcon: {
      // ...
      ...argsCustomTileDefault,
      layoutStyle: 'banner' as CTL_LayoutStyleType,
      media: 'icon' as CTL_MediaType,
      mediaIcon: 'Leadership' as CP_nameType,
    } as CTL_propsType,

    withImage: {
      // ...
      ...argsCustomTileDefault,
      layoutStyle: 'banner' as CTL_LayoutStyleType,
      media: 'image' as CTL_MediaType,
      mediaImage: '/img/cust-tile-1.png',
    } as CTL_propsType,

    withLocalLink: {
      // ...
      ...argsCustomTileDefault,
      layoutStyle: 'banner' as CTL_LayoutStyleType,
      linksTo: '/local/route',
      linkTarget: '_self' as CTL_LinkTargetType,
    } as CTL_propsType,

    withExternalLink: {
      // ...
      ...argsCustomTileDefault,
      layoutStyle: 'banner' as CTL_LayoutStyleType,
      linksTo: 'https://carbondesignsystem.com',
      linkTarget: '_blank' as CTL_LinkTargetType,
    } as CTL_propsType,

    withModal: {
      // ...
      ...argsCustomTileDefault,
      layoutStyle: 'banner' as CTL_LayoutStyleType,
      modalIsAvailable: true,
      modalPlainDescription: mockHeading.plain,
      modalRichDescription: undefined,
    } as CTL_propsType,

    empty: {
      // ...
      ...argsCustomTileDefault,
      layoutStyle: 'banner' as CTL_LayoutStyleType,
      featuredText: {
        heading: {},
        smartText: {},
      },
    } as CTL_propsType,
  },
};
