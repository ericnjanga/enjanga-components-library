// FeatureText props type
// ----------------
import type { Node } from '@contentful/rich-text-types';

export interface FTX_propsType {
  className?: string;
  title: string;
  plainText?: string;
  richText?: { json: { content: Node[] } };
  titleLength?: number;
  blurbLength?: number;
}
