import { Node } from '@contentful/rich-text-types';

type SmartTextRichText = {
  json: { content: Node[] };
  links?: {
    assets?: {
      block: {
        sys: { id: string };
        url: string;
        title: string;
        description?: string;
        width: number;
        height: number;
      }[];
    };
    entries?: {
      inline?: {
        sys: { id: string };
        __typename: string;
        slug: string;
      }[];
      hyperlink?: {
        sys: { id: string };
        __typename: string;
        slug: string;
      }[];
      resourceHyperlink?: {
        sys: { id: string; urn: string };
        __typename: string;
        slug: string;
      }[];
    };
  };
};

export interface SMT_propsTypeVal {
  plainText?: string;
  richText?: SmartTextRichText;
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
