import { BNN_propsType } from '@/components/Banner/libs/types';
import { argsFeatureTextWithPlainText } from './argsFeatureText';

// For Banner.stories.tsx ...
export const argsBanner = {
  className: '',
  featuredText: {
    ...argsFeatureTextWithPlainText,
  },
} as BNN_propsType;
