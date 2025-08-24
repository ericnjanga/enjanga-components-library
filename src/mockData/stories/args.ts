import { mockHeading, mockSmartTextwPlainT } from '../mixed';
import { HDG_propsType } from '@/components/Heading/libs/types';
import {
  LST_typeOpt,
  LST_typePropsType,
  LST_propsType,
} from '@/components/List/libs/types';
import { FTX_propsType } from '@/components/FeatureText/libs/types';
import { mockListUnlinked } from '../mockLists';
import { mockRichText } from '../mockRichText';
import { BNN_propsType } from '@/components/Banner/libs/types';

// Heading.stories.tsx ...
export const argsHeadingPlain: Partial<HDG_propsType> = {
  className: '',
  level: 1,
  children: mockHeading.plain,
};
export const argsHeadingJSX: Partial<HDG_propsType> = {
  className: '',
  level: 1,
  children: mockHeading.jsx,
};

// SmartText.stories.tsx ...
export const argsSmartTextPlain = {
  className: '',
  plainText: mockHeading.plain,
  richText: undefined,
};
export const argsSmartTextRich = {
  className: '',
  plainText: undefined,
  richText: {
    ...mockRichText.description,
  },
};

// List.stories.tsx ...
export const argsList = {
  type: LST_typeOpt[0] as LST_typePropsType,
  cssClass: '',
  content: [...mockListUnlinked],
} as LST_propsType;

// For FeatureText.stories.tsx ...
export const argsFeatureText = {
  className: '',
  heading: {
    ...argsHeadingPlain,
    level: 1,
  },
  smartText: {
    ...mockSmartTextwPlainT,
  },
  headingMaxLength: 50,
  plainTextMaxLength: 200,
} as FTX_propsType;

// For Banner.stories.tsx ...
export const argsBanner = {
  className: '',
  featuredText: {
    ...argsFeatureText,
  },
} as BNN_propsType;
