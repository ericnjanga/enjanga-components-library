import { Node } from '@contentful/rich-text-types';
export interface SMT_propsTypeVal {
  plainText?: string;
  richText?: { json: { content: Node[] } };
}

// Type-safe validation ...
// Rule: both properties cannot be displayed at the same time
export function smartTextPropsValidation({
  plainText,
  richText,
}: SMT_propsTypeVal) {
  if (plainText && richText) {
    throw new Error(
      'Invalid props: Use either "plainText" OR "richText", never both.'
    );
  }

  if (!plainText && !richText) {
    throw new Error(
      'Missing content: You must provide either "plainText" OR "richText"'
    );
  }
}

// type FTX_propsType =
//   | { plainText: string; richText?: never }
//   | { richText: { json: { content: Node[] } }; plainText?: never }
//   | { plainText?: never; richText?: never }; // Optional empty state
