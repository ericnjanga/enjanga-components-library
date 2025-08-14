// Banner props type
// ----------------
import type { Node } from '@contentful/rich-text-types';
import { HDG_levelPropsType } from '@/components/Heading/libs/types';

export interface BNN_propsType {
  className?: string;
  heading?: string;
  headingLevel?: HDG_levelPropsType;
  headingMaxLength?: number;

  isHuge?: boolean;

  plainDescription?: string | 'none';
  richDescription?: { json: { content: Node[] } };
  blurbMaxLength?: number;

  showPlainDescription?: boolean;
  showRichDescription?: boolean;
}
