import {
  PGL_LinkTargetType,
  PGL_LayoutStyleType,
  PGL_propsType,
  PGL_MediaType,
} from '@/components/PictogramTile/lib/types';
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
    default: {
      // ...
      ...argsPictogramTileDefaultWithPlainT,
    } as PGL_propsType,

    withIcon: {
      // ...
      ...argsPictogramTileDefaultWithPlainT,
      media: 'pictogram' as PGL_MediaType,
      mediaPictogram: 'Leadership' as CP_nameType,
    } as PGL_propsType,

    withImage: {
      // ...
      ...argsPictogramTileDefaultWithPlainT,
      media: 'image' as PGL_MediaType,
      mediaImage: {...mediaImg}
    } as PGL_propsType,

    withLocalLink: {
      // ...
      ...argsPictogramTileDefaultWithPlainT,
      linksTo: '/local/route',
      linkTarget: '_self' as PGL_LinkTargetType,
    } as PGL_propsType,

    withExternalLink: {
      // ...
      ...argsPictogramTileDefaultWithPlainT,
      linksTo: 'https://carbondesignsystem.com',
      linkTarget: '_blank' as PGL_LinkTargetType,
    } as PGL_propsType,

    withModal: {
      // ...
      ...argsPictogramTileDefaultWithPlainT,
      modalIsAvailable: true,
      modalPlainDescription: mockRichTextSmall.description,
    } as PGL_propsType,

    withExternalLinkAndIcon: {
      // ...
      ...argsPictogramTileDefaultWithPlainT,
      media: 'pictogram' as PGL_MediaType,
      mediaPictogram: 'Leadership' as CP_nameType,
      linksTo: 'https://carbondesignsystem.com',
      linkTarget: '_blank' as PGL_LinkTargetType,
    } as PGL_propsType,

    withExternalLinkAndImage: {
      // ...
      ...argsPictogramTileDefaultWithPlainT,
      media: 'image' as PGL_MediaType,
      mediaImage: {...mediaImg},
      linksTo: 'https://carbondesignsystem.com',
      linkTarget: '_blank' as PGL_LinkTargetType,
    } as PGL_propsType,

    withModalAndIcon: {
      // ...
      ...argsPictogramTileDefaultWithPlainT,
      media: 'pictogram' as PGL_MediaType,
      mediaPictogram: 'Leadership' as CP_nameType,
      modalIsAvailable: true,
      modalPlainDescription: mockRichTextSmall.description,
    } as PGL_propsType,

    withModalAndImage: {
      // ...
      ...argsPictogramTileDefaultWithPlainT,
      media: 'image' as PGL_MediaType,
      mediaImage: {...mediaImg},
      modalIsAvailable: true,
      modalPlainDescription: mockRichTextSmall.description,
    } as PGL_propsType,

    withExternalLinkAndIconAndRichText: {
      // ...
      ...argsPictogramTileDefaultWithRichT,
      media: 'pictogram' as PGL_MediaType,
      mediaPictogram: 'Leadership' as CP_nameType,
      linksTo: 'https://carbondesignsystem.com',
      linkTarget: '_blank' as PGL_LinkTargetType,
    } as PGL_propsType,

    withExternalLinkAndImageAndRichText: {
      // ...
      ...argsPictogramTileDefaultWithRichT,
      media: 'image' as PGL_MediaType,
      mediaImage: {...mediaImg},
      linksTo: 'https://carbondesignsystem.com',
      linkTarget: '_blank' as PGL_LinkTargetType,
    } as PGL_propsType,

    withModalAndIconAndRichText: {
      // ...
      ...argsPictogramTileDefaultWithRichT,
      media: 'pictogram' as PGL_MediaType,
      mediaPictogram: 'Leadership' as CP_nameType,
      modalIsAvailable: true,
      modalRichDescription: mockRichTextLarge,
    } as PGL_propsType,

    withModalAndImageAndRichText: {
      // ...
      ...argsPictogramTileDefaultWithRichT,
      media: 'image' as PGL_MediaType,
      mediaImage: {...mediaImg},
      modalIsAvailable: true,
      modalRichDescription: mockRichTextLarge,
    } as PGL_propsType,
  },

  /**
   * Banner .....
   * -------------------------
   */
  banner: {
    default: {
      // ...
      ...argsPictogramTileDefaultWithPlainT,
      layoutStyle: 'banner' as PGL_LayoutStyleType,
    } as PGL_propsType,

    withIcon: {
      // ...
      ...argsPictogramTileDefaultWithPlainT,
      layoutStyle: 'banner' as PGL_LayoutStyleType,
      media: 'pictogram' as PGL_MediaType,
      mediaPictogram: 'Leadership' as CP_nameType,
    } as PGL_propsType,

    withImage: {
      // ...
      ...argsPictogramTileDefaultWithPlainT,
      layoutStyle: 'banner' as PGL_LayoutStyleType,
      media: 'image' as PGL_MediaType,
      mediaImage: {...mediaImg}
    } as PGL_propsType,

    withLocalLink: {
      // ...
      ...argsPictogramTileDefaultWithPlainT,
      layoutStyle: 'banner' as PGL_LayoutStyleType,
      linksTo: '/local/route',
      linkTarget: '_self' as PGL_LinkTargetType,
    } as PGL_propsType,

    withExternalLink: {
      // ...
      ...argsPictogramTileDefaultWithPlainT,
      layoutStyle: 'banner' as PGL_LayoutStyleType,
      linksTo: 'https://carbondesignsystem.com',
      linkTarget: '_blank' as PGL_LinkTargetType,
    } as PGL_propsType,

    withModal: {
      // ...
      ...argsPictogramTileDefaultWithPlainT,
      layoutStyle: 'banner' as PGL_LayoutStyleType,
      modalIsAvailable: true,
      modalPlainDescription: mockRichTextSmall.description,
    } as PGL_propsType,

    withExternalLinkAndIcon: {
      // ...
      ...argsPictogramTileDefaultWithPlainT,
      layoutStyle: 'banner' as PGL_LayoutStyleType,
      media: 'pictogram' as PGL_MediaType,
      mediaPictogram: 'Leadership' as CP_nameType,
      linksTo: 'https://carbondesignsystem.com',
      linkTarget: '_blank' as PGL_LinkTargetType,
    } as PGL_propsType,

    withExternalLinkAndImage: {
      // ...
      ...argsPictogramTileDefaultWithPlainT,
      layoutStyle: 'banner' as PGL_LayoutStyleType,
      media: 'image' as PGL_MediaType,
      mediaImage: {...mediaImg},
      linksTo: 'https://carbondesignsystem.com',
      linkTarget: '_blank' as PGL_LinkTargetType,
    } as PGL_propsType,

    withModalAndIcon: {
      // ...
      ...argsPictogramTileDefaultWithPlainT,
      layoutStyle: 'banner' as PGL_LayoutStyleType,
      media: 'pictogram' as PGL_MediaType,
      mediaPictogram: 'Leadership' as CP_nameType,
      modalIsAvailable: true,
      modalPlainDescription: mockRichTextSmall.description,
    } as PGL_propsType,

    withModalAndImage: {
      // ...
      ...argsPictogramTileDefaultWithPlainT,
      layoutStyle: 'banner' as PGL_LayoutStyleType,
      media: 'image' as PGL_MediaType,
      mediaImage: {...mediaImg},
      modalIsAvailable: true,
      modalPlainDescription: mockRichTextSmall.description,
    } as PGL_propsType,

    withExternalLinkAndIconAndRichText: {
      // ...
      ...argsPictogramTileDefaultWithRichT,
      layoutStyle: 'banner' as PGL_LayoutStyleType,
      media: 'pictogram' as PGL_MediaType,
      mediaPictogram: 'Leadership' as CP_nameType,
      linksTo: 'https://carbondesignsystem.com',
      linkTarget: '_blank' as PGL_LinkTargetType,
    } as PGL_propsType,

    withExternalLinkAndImageAndRichText: {
      // ...
      ...argsPictogramTileDefaultWithRichT,
      layoutStyle: 'banner' as PGL_LayoutStyleType,
      media: 'image' as PGL_MediaType,
      mediaImage: {...mediaImg},
      linksTo: 'https://carbondesignsystem.com',
      linkTarget: '_blank' as PGL_LinkTargetType,
    } as PGL_propsType,

    withModalAndIconAndRichText: {
      // ...
      ...argsPictogramTileDefaultWithRichT,
      layoutStyle: 'banner' as PGL_LayoutStyleType,
      media: 'pictogram' as PGL_MediaType,
      mediaPictogram: 'Leadership' as CP_nameType,
      modalIsAvailable: true,
      modalRichDescription: mockRichTextLarge,
    } as PGL_propsType,

    withModalAndImageAndRichText: {
      // ...
      ...argsPictogramTileDefaultWithRichT,
      layoutStyle: 'banner' as PGL_LayoutStyleType,
      media: 'image' as PGL_MediaType,
      mediaImage: {...mediaImg},
      modalIsAvailable: true,
      modalRichDescription: mockRichTextLarge,
    } as PGL_propsType,
  },
};