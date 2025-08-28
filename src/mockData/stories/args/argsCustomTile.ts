import {
  CTL_LinkTargetType,
  CTL_LayoutStyleType,
  CTL_propsType,
  CTL_MediaType,
} from '@/components/CustomTile/lib/types';
import {
  argsFeatureTextWithPlainText,
  argsFeatureTextWithRichText,
} from './argsFeatureText';
import { CP_nameType } from '@/components/CustomPictogram/libs/types';
import { mockHeading } from '@/mockData/mixed';
import { mockRichTextLarge, mockRichTextSmall } from '@/mockData/mockRichText';

// For CustomTile.stories.tsx ...     argsFeatureTextWithRichText
// Default ...
const argsCustomTileDefaultWithPlainT = {
  className: '',
  featuredText: {
    ...argsFeatureTextWithPlainText,
    heading: {
      ...argsFeatureTextWithPlainText.heading,
      level: 2,
    },
  },
  layoutStyle: 'card' as CTL_LayoutStyleType, // Card by default

  media: undefined, // No media by default
  mediaPictogram: undefined,
  mediaImage: undefined,

  modalIsAvailable: undefined,
  modalPlainDescription: undefined,
  modalRichDescription: undefined,

  linksTo: undefined,
  linkTarget: '_self' as CTL_LinkTargetType,
} as CTL_propsType;

const argsCustomTileDefaultWithRichT = {
  ...argsCustomTileDefaultWithPlainT,
  featuredText: {
    ...argsFeatureTextWithRichText,
    heading: {
      ...argsFeatureTextWithRichText.heading,
      level: 2,
    },
  },
  // modalRichDescription: mockRichTextLarge.description
} as CTL_propsType;

export const argsCustomTile = {
  /**
   * Card .....
   * -------------------------
   */
  card: {
    default: {
      // ...
      ...argsCustomTileDefaultWithPlainT,
    } as CTL_propsType,

    withIcon: {
      // ...
      ...argsCustomTileDefaultWithPlainT,
      media: 'pictogram' as CTL_MediaType,
      mediaPictogram: 'Leadership' as CP_nameType,
    } as CTL_propsType,

    withImage: {
      // ...
      ...argsCustomTileDefaultWithPlainT,
      media: 'image' as CTL_MediaType,
      mediaImage: '/img/cust-tile-1.png',
    } as CTL_propsType,

    withLocalLink: {
      // ...
      ...argsCustomTileDefaultWithPlainT,
      linksTo: '/local/route',
      linkTarget: '_self' as CTL_LinkTargetType,
    } as CTL_propsType,

    withExternalLink: {
      // ...
      ...argsCustomTileDefaultWithPlainT,
      linksTo: 'https://carbondesignsystem.com',
      linkTarget: '_blank' as CTL_LinkTargetType,
    } as CTL_propsType,

    withModal: {
      // ...
      ...argsCustomTileDefaultWithPlainT,
      modalIsAvailable: true,
      modalPlainDescription: mockHeading.plain,
      modalRichDescription: undefined,
    } as CTL_propsType,

    empty: {
      // ...
      ...argsCustomTileDefaultWithPlainT,
      featuredText: {
        heading: {},
        smartText: {},
      },

      layoutStyle: 'card' as CTL_LayoutStyleType,
    } as CTL_propsType,

    /**
     * Compositions .....
     * -------------------------
     */
    withExternalLinkAndIcon: {
      // ...
      ...argsCustomTileDefaultWithPlainT,
      linksTo: 'https://carbondesignsystem.com',
      linkTarget: '_blank' as CTL_LinkTargetType,
      media: 'pictogram' as CTL_MediaType,
      mediaPictogram: 'Leadership' as CP_nameType,
    } as CTL_propsType,

    withExternalLinkAndImage: {
      // ...
      ...argsCustomTileDefaultWithPlainT,
      linksTo: 'https://carbondesignsystem.com',
      linkTarget: '_blank' as CTL_LinkTargetType,
      media: 'image' as CTL_MediaType,
      mediaImage: '/img/cust-tile-1.png',
    } as CTL_propsType,

    withModalAndIcon: {
      // ...
      ...argsCustomTileDefaultWithPlainT,
      modalIsAvailable: true,
      modalPlainDescription: mockHeading.plain,
      modalRichDescription: undefined,
      media: 'pictogram' as CTL_MediaType,
      mediaPictogram: 'Leadership' as CP_nameType,
    } as CTL_propsType,

    withModalAndImage: {
      // ...
      ...argsCustomTileDefaultWithPlainT,
      modalIsAvailable: true,
      modalPlainDescription: mockHeading.plain,
      modalRichDescription: undefined,
      media: 'image' as CTL_MediaType,
      mediaImage: '/img/cust-tile-1.png',
    } as CTL_propsType,

    /**
     * Specificities with rich text .....
     * -------------------------
     */
    withExternalLinkAndIconAndRichText: {
      // ...
      ...argsCustomTileDefaultWithRichT,
      linksTo: 'https://carbondesignsystem.com',
      linkTarget: '_blank' as CTL_LinkTargetType,
      media: 'pictogram' as CTL_MediaType,
      mediaPictogram: 'Leadership' as CP_nameType,
    } as CTL_propsType,

    withExternalLinkAndImageAndRichText: {
      // ...
      ...argsCustomTileDefaultWithRichT,
      linksTo: 'https://carbondesignsystem.com',
      linkTarget: '_blank' as CTL_LinkTargetType,
      media: 'image' as CTL_MediaType,
      mediaImage: '/img/cust-tile-1.png',
    } as CTL_propsType,

    withModalAndIconAndRichText: {
      // ...
      ...argsCustomTileDefaultWithRichT,
      modalIsAvailable: true,
      modalPlainDescription: undefined,
      modalRichDescription: mockRichTextLarge.description,
      media: 'pictogram' as CTL_MediaType,
      mediaPictogram: 'Leadership' as CP_nameType,
    } as CTL_propsType,

    withModalAndImageAndRichText: {
      // ...
      ...argsCustomTileDefaultWithRichT,
      modalIsAvailable: true,
      modalPlainDescription: undefined,
      modalRichDescription: mockRichTextLarge.description,
      media: 'image' as CTL_MediaType,
      mediaImage: '/img/cust-tile-1.png',
    } as CTL_propsType,
  },

  /**
   * Banner .....
   * -------------------------
   */
  banner: {
    default: {
      // ...
      ...argsCustomTileDefaultWithPlainT,
      layoutStyle: 'banner' as CTL_LayoutStyleType,
    } as CTL_propsType,

    withIcon: {
      // ...
      ...argsCustomTileDefaultWithPlainT,
      media: 'pictogram' as CTL_MediaType,
      mediaPictogram: 'Leadership' as CP_nameType,
      layoutStyle: 'banner' as CTL_LayoutStyleType,
    } as CTL_propsType,

    withImage: {
      // ...
      ...argsCustomTileDefaultWithPlainT,
      media: 'image' as CTL_MediaType,
      mediaImage: '/img/cust-tile-1.png',
      layoutStyle: 'banner' as CTL_LayoutStyleType,
    } as CTL_propsType,

    withLocalLink: {
      // ...
      ...argsCustomTileDefaultWithPlainT,
      linksTo: '/local/route',
      linkTarget: '_self' as CTL_LinkTargetType,
      layoutStyle: 'banner' as CTL_LayoutStyleType,
    } as CTL_propsType,

    withExternalLink: {
      // ...
      ...argsCustomTileDefaultWithPlainT,
      linksTo: 'https://carbondesignsystem.com',
      linkTarget: '_blank' as CTL_LinkTargetType,
      layoutStyle: 'banner' as CTL_LayoutStyleType,
    } as CTL_propsType,

    withModal: {
      // ...
      ...argsCustomTileDefaultWithPlainT,
      modalIsAvailable: true,
      modalPlainDescription: mockHeading.plain,
      modalRichDescription: undefined,
      layoutStyle: 'banner' as CTL_LayoutStyleType,
    } as CTL_propsType,

    empty: {
      // ...
      ...argsCustomTileDefaultWithPlainT,
      featuredText: {
        heading: {},
        smartText: {},
      },
      layoutStyle: 'banner' as CTL_LayoutStyleType,
    } as CTL_propsType,

    /**
     * Compositions .....
     * -------------------------
     */
    withExternalLinkAndIcon: {
      // ...
      ...argsCustomTileDefaultWithPlainT,
      linksTo: 'https://carbondesignsystem.com',
      linkTarget: '_blank' as CTL_LinkTargetType,
      media: 'pictogram' as CTL_MediaType,
      mediaPictogram: 'Leadership' as CP_nameType,
      layoutStyle: 'banner' as CTL_LayoutStyleType,
    } as CTL_propsType,

    withExternalLinkAndImage: {
      // ...
      ...argsCustomTileDefaultWithPlainT,
      linksTo: 'https://carbondesignsystem.com',
      linkTarget: '_blank' as CTL_LinkTargetType,
      media: 'image' as CTL_MediaType,
      mediaImage: '/img/cust-tile-1.png',
      layoutStyle: 'banner' as CTL_LayoutStyleType,
    } as CTL_propsType,

    withModalAndIcon: {
      // ...
      ...argsCustomTileDefaultWithPlainT,
      modalIsAvailable: true,
      modalPlainDescription: mockHeading.plain,
      modalRichDescription: undefined,
      media: 'pictogram' as CTL_MediaType,
      mediaPictogram: 'Leadership' as CP_nameType,
      layoutStyle: 'banner' as CTL_LayoutStyleType,
    } as CTL_propsType,

    withModalAndImage: {
      // ...
      ...argsCustomTileDefaultWithPlainT,
      modalIsAvailable: true,
      modalPlainDescription: mockHeading.plain,
      modalRichDescription: undefined,
      media: 'image' as CTL_MediaType,
      mediaImage: '/img/cust-tile-1.png',
      layoutStyle: 'banner' as CTL_LayoutStyleType,
    } as CTL_propsType,

    /**
     * Specificities with rich text .....
     * -------------------------
     */
    withExternalLinkAndIconAndRichText: {
      // ...
      ...argsCustomTileDefaultWithRichT,
      linksTo: 'https://carbondesignsystem.com',
      linkTarget: '_blank' as CTL_LinkTargetType,
      media: 'pictogram' as CTL_MediaType,
      mediaPictogram: 'Leadership' as CP_nameType,
      layoutStyle: 'banner' as CTL_LayoutStyleType,
    } as CTL_propsType,

    withExternalLinkAndImageAndRichText: {
      // ...
      ...argsCustomTileDefaultWithRichT,
      linksTo: 'https://carbondesignsystem.com',
      linkTarget: '_blank' as CTL_LinkTargetType,
      media: 'image' as CTL_MediaType,
      mediaImage: '/img/cust-tile-1.png',
      layoutStyle: 'banner' as CTL_LayoutStyleType,
    } as CTL_propsType,

    withModalAndIconAndRichText: {
      // ...
      ...argsCustomTileDefaultWithRichT,
      modalIsAvailable: true,
      modalPlainDescription: undefined,
      modalRichDescription: mockRichTextLarge.description,
      media: 'pictogram' as CTL_MediaType,
      mediaPictogram: 'Leadership' as CP_nameType,
      layoutStyle: 'banner' as CTL_LayoutStyleType,
    } as CTL_propsType,

    withModalAndImageAndRichText: {
      // ...
      ...argsCustomTileDefaultWithRichT,
      modalIsAvailable: true,
      modalPlainDescription: undefined,
      modalRichDescription: mockRichTextLarge.description,
      media: 'image' as CTL_MediaType,
      mediaImage: '/img/cust-tile-1.png',
      layoutStyle: 'banner' as CTL_LayoutStyleType,
    } as CTL_propsType,
  },
};
