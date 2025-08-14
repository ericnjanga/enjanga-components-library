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
      `Invalid props: Use either "plain" OR "rich" text description, never both (see the component's API for more information`
    );
  }

  if (!plainText && !richText) {
    throw new Error(
      `Missing content: You must provide either "plain" OR "rich" text description (see the component's API for more information`
    );
  }
}

// type FTX_propsType =
//   | { plainText: string; richText?: never }
//   | { richText: { json: { content: Node[] } }; plainText?: never }
//   | { plainText?: never; richText?: never }; // Optional empty state
