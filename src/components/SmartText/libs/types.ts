// SmartText props type
// ----------------

import type { Node } from '@contentful/rich-text-types';

export interface SMT_propsType {
  className?: string;
  plainText?: string;
  richText?: { json: { content: Node[] } };
}
