// FeatureText props type
// ----------------
import type { Node } from '@contentful/rich-text-types';
import { HDG_levelPropsType } from '@/components/Heading/libs/types';
import { HDG_propsType } from '@/components/Heading/libs/types';
import { SMT_propsType } from '@/components/SmartText/libs/types';

export interface FTX_propsType {
  className?: string;
  heading: HDG_propsType;
  smartText: SMT_propsType;
}
