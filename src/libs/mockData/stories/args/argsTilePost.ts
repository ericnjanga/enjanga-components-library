import type { PTL_propsType } from '@/components/TilePost/lib/types';
import { argsFeatureTextWithPlainText } from './argsFeatureText';

const defaultTilePost = {
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

export const argsTilePost = {
  default: defaultTilePost,
  engineeringInsights: {
    ...defaultTilePost,
    orgTitle:
      "Ontario's Ministry of Public and Business Service Delivery and Procurement",
    orgSlug: 'organization-1',
    orgPictogramName: 'IbmEloEngineeringInsights',
  } as PTL_propsType,
  knowledgeCatalogPremium: {
    ...defaultTilePost,
    orgTitle: 'Mungo Digital Labs: Web Engineering & UX Innovation Practice',
    orgSlug: 'organization-2',
    orgPictogramName: 'IbmKnowledgeCatalogPremium',
  } as PTL_propsType,
};
