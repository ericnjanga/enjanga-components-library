import { FTX_propsType } from '@/components/FeatureText/libs/types';
import { argsHeadingPlain } from './argsHeading';
import { argsSmartTextwPlainT } from './argsSmartText';

// For FeatureText.stories.tsx ...
export const argsFeatureText = {
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
