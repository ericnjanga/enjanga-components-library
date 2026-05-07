import { 
  PTL_propsType, 
} from '@/components/PostTile/lib/types';
import {
  argsFeatureTextWithPlainText,
} from './argsFeatureText'; 

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
  onClick: undefined,
  orgTitle: 'IBM',
  orgSlug: 'ibm',
  orgPictogramName: 'Leadership',
} as PTL_propsType;

export const argsPostTile = {
  default: {
    ...argsPostTileDefaultWithPlainT,
  } as PTL_propsType,
  engineeringInsights: {
    ...argsPostTileDefaultWithPlainT,
    orgTitle: 'Organization 1',
    orgSlug: 'organization-1',
    orgPictogramName: 'IbmEloEngineeringInsights',
  } as PTL_propsType,
  knowledgeCatalogPremium: {
    ...argsPostTileDefaultWithPlainT,
    orgTitle: 'Organization 2',
    orgSlug: 'organization-2',
    orgPictogramName: 'IbmKnowledgeCatalogPremium',
  } as PTL_propsType,
};
