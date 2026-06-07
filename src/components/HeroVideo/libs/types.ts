import { CRT_propsType } from '@/components/CMSRichText/libs/types';

export const HVD_roleOpt = ['banner', 'presentation', 'none'] as const;
export type HVD_roleOptPropsType = (typeof HVD_roleOpt)[number];

export type HVD_tagListType = string | string[];

export interface HVD_assetType {
  url?: string;
  title?: string;
  description?: string;
  width?: number;
  height?: number;
  contentType?: string;
  file?: {
    url?: string;
    contentType?: string;
    details?: {
      image?: {
        width?: number;
        height?: number;
      };
    };
  };
  fields?: {
    title?: string;
    description?: string;
    file?: {
      url?: string;
      contentType?: string;
      details?: {
        image?: {
          width?: number;
          height?: number;
        };
      };
    };
  };
}

export interface HVD_informationBlockType {
  title: string;
  description?: CRT_propsType['data'];
}

export interface HVD_featuredObjectType {
  title: string;
  slug: string;
  video?: string | HVD_assetType;
  videoImage?: string | HVD_assetType;
  businessDomain?: HVD_tagListType;
  teckStack?: HVD_tagListType;
  techStack?: HVD_tagListType;
}

export interface HVD_propsType {
  id?: string;
  style?: React.CSSProperties;
  className?: string;
  informationBlock: HVD_informationBlockType;
  featuredObject: HVD_featuredObjectType;
  controls?: boolean;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  role?: HVD_roleOptPropsType;
}
