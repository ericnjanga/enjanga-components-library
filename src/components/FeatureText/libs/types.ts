import type { Node } from '@contentful/rich-text-types';

export interface FeatureTextProps {
  className?: string;
  title: string;
  plainText?: string;
  richText?: { json: { content: Node[] } };
  titleLength?: number;
  blurbLength?: number;
}
