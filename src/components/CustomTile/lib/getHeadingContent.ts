import { FTX_propsType } from '@/components/FeatureText/libs/types';

export const getHeadingContent = (featuredText: FTX_propsType) =>
  typeof featuredText?.heading?.children === 'string'
    ? featuredText?.heading?.children
    : '';
