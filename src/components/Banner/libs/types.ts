// Banner props type
// ----------------
import type { Node } from '@contentful/rich-text-types';
import { HDG_levelPropsType } from '@/components/Heading/libs/types';
import { FTX_propsType } from '@/components/FeatureText/libs/types';

export interface BNN_propsType {
  className?: string;
  featuredText: FTX_propsType;

  // Local propsType ...
  isHuge?: boolean;
}
