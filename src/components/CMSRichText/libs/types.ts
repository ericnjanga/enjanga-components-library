// CMSRichText props type
// ----------------
import type { Node } from '@contentful/rich-text-types';

export interface CRT_propsType {
  className?: string;
  data?: { json: { content: Node[] } };
}
