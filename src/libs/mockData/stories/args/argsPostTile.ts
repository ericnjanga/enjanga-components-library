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
    orgTitle: `Ontario's Ministry of Public and Business Service Delivery and Procurement`,
    orgSlug: 'organization-1',
    orgPictogramName: 'IbmEloEngineeringInsights',
  } as PTL_propsType,
  knowledgeCatalogPremium: {
    ...argsPostTileDefaultWithPlainT,
    orgTitle: `Mungo Digital Labs: Web Engineering & UX Innovation Practice`,
    orgSlug: 'organization-2',
    orgPictogramName: 'IbmKnowledgeCatalogPremium',
  } as PTL_propsType,
};
