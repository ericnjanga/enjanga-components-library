import type { Node } from '@contentful/rich-text-types';
import type { CP_nameType } from '@/components/CustomPictogram';

export interface TVL_descriptionType {
  json: {
    content: Node[];
  };
}

export interface TVL_propsType {
  className?: string;
  pictogramName: CP_nameType;
  title: string;
  slug: string;
  description: TVL_descriptionType;
}
