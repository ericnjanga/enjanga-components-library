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
}
