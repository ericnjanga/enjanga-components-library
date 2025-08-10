// Banner props type
// ----------------
import type { Node } from '@contentful/rich-text-types';

export interface BNN_propsType {
  isHuge?: boolean;
  showPlainDescription?: boolean;
  showRichDescription?: boolean;
  title?: string;
  plainDescription?: string | 'none';
  richDescription?: { json: { content: Node[] } };
  className?: string;
}
