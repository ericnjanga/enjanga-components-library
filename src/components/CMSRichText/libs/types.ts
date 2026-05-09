// CMSRichText props type
// ----------------
import type { Node } from '@contentful/rich-text-types';

/** Metadata for an entry used as an inline hyperlink target. */
export interface CRT_EntryHyperlink {
  sys: { id: string };
  /** Contentful __typename (e.g. "BlogPost", "CaseStudy", "Organization"). */
  __typename: string;
  slug: string;
}

/** Metadata for a resource (cross-space) hyperlink entry. */
export interface CRT_ResourceHyperlink {
  sys: { id: string; urn: string };
  /** Contentful __typename (e.g. "BlogPost", "CaseStudy", "Organization"). */
  __typename: string;
  slug: string;
}

export interface CRT_propsType {
  className?: string;
  data?: {
    json: { content: Node[] };
    links?: {
      assets: {
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
        hyperlink?: CRT_EntryHyperlink[];
        resourceHyperlink?: CRT_ResourceHyperlink[];
      };
    };
  };
}
