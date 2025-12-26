import { 
  PTL_propsType, 
} from '@/components/PostTile/lib/types';
import {
  argsFeatureTextWithPlainText,
  argsFeatureTextWithRichText,
} from './argsFeatureText'; 

const mediaImg = {
  url: '/img/cust-tile-1.png',
  alt: '',
  width: 607,
  height: 348
};

// Default ...
const argsPostTileDefaultWithPlainT = {
  className: '',
  featuredText: {
    ...argsFeatureTextWithPlainText,
    heading: {
      ...argsFeatureTextWithPlainText.heading,
      level: 2,
    },
  },  
  mediaImage: undefined,  
  linksTo: undefined, 
} as PTL_propsType;

export const argsPostTile = {
  default: {
    // ...
    ...argsPostTileDefaultWithPlainT,
    mediaImage: {...mediaImg},
    linksTo: '/local/route', 
  } as PTL_propsType,  
};
