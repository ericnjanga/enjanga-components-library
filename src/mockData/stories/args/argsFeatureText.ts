import { FTX_propsType } from '@/components/FeatureText/libs/types';
import { argsHeadingPlain, argsHeadingJSX } from './argsHeading';
import { argsSmartTextwPlainT, argsSmartTextwRichT } from './argsSmartText';

// For FeatureText.stories.tsx ...
export const argsFeatureTextWithPlainText = {
  className: '',
  heading: {
    ...argsHeadingPlain,
    level: 1,
  },
  smartText: {
    ...argsSmartTextwPlainT,
  },
  headingMaxLength: 50,
  plainTextMaxLength: 200,
} as FTX_propsType;

export const argsFeatureTextWithRichText = {
  className: '',
  heading: {
    ...argsHeadingJSX,
    level: 1,
  },
  smartText: {
    ...argsSmartTextwRichT,
  },
  headingMaxLength: 50,
  plainTextMaxLength: 200,
} as FTX_propsType;
