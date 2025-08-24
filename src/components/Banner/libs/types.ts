// Banner props type
// ----------------
import type { Node } from '@contentful/rich-text-types';
import { HDG_levelPropsType } from '@/components/Heading/libs/types';
import { FTX_propsType } from '@/components/FeatureText/libs/types';

export interface BNN_propsType {
  // FeatureText propsType ...
  ...FTX_propsType,
  // className?: string;
  // heading?: string;
  // headingLevel?: HDG_levelPropsType;
  // headingMaxLength?: number;
  // plainDescription?: string | 'none';
  // richDescription?: { json: { content: Node[] } };
  // blurbMaxLength?: number;

  // Local propsType ...
  isHuge?: boolean;

  // showPlainDescription?: boolean;
  // showRichDescription?: boolean;
}
