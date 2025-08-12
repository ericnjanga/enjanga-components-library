// FeatureText props type
// ----------------
import type { Node } from '@contentful/rich-text-types';
import { HDG_levelPropsType } from '@/components/Heading/libs/types';

export interface FTX_propsType {
  className?: string;
  heading: string;
  headingLevel?: HDG_levelPropsType;
  headingMaxLength?: number;
  plainText?: string;
  richText?: { json: { content: Node[] } };
  blurbLength?: number;
}
