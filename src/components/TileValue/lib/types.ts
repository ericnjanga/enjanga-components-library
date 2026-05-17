import type { Node } from '@contentful/rich-text-types';
import type { CP_nameType } from '@/components/CustomPictogram';

export interface TVL_descriptionType {
  json: {
    content: Node[];
  };
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
}

export interface TVL_propsType {
  className?: string;
  pictogramName: CP_nameType;
  title: string;
  slug: string;
  description: TVL_descriptionType;
}
