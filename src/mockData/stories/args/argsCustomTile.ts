import {
  CTL_LinkTargetType,
  CTL_LayoutStyleType,
  CTL_propsType,
} from '@/components/CustomTile/lib/types';
import { argsFeatureText } from './argsFeatureText';

// For CustomTile.stories.tsx ...
export const argsCustomTile = {
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
