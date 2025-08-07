import type { Node } from '@contentful/rich-text-types';

export interface SmartTextProps {
  className?: string;
  plainText?: string;
  richText?: { json: { content: Node[] } };
}
