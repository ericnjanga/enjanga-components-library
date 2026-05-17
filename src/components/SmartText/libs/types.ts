// SmartText props type
// ----------------

import type { Node } from '@contentful/rich-text-types';

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

export interface SMT_propsType {
  className?: string;
  plainText?: string;
  richText?: SmartTextRichText;
}
