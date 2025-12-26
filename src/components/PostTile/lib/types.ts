// CustomTil props type
// ----------------
import React from 'react';
import { CP_nameType } from '@/components/CustomPictogram/libs/types';
import type { Node } from '@contentful/rich-text-types'; 

export const CTL_LayoutStyleOpt = ['card', 'banner'] as const;
export const CTL_LinkTargetOpt = ['_blank', '_self'] as const;
export const CTL_MediaOpt = ['pictogram', 'image'] as const;  
 
import { FTX_propsType } from '@/components/FeatureText/libs/types';
import { AIC_nameOptPropsType } from '@/components/ArrowIcon/libs/types';

export interface PTL_CSSClassesPropsType {
  linksTo?: CTL_valid_linkTo;  
  iconIsOnDisplay?: boolean;
  imageIsOnDisplay?: boolean; 
}

export interface PTL_linkWrapperPropsType {
  heading?: string;
  linksTo?: CTL_valid_linkTo;
}

export type LinkWrapperType = React.ReactElement<{
  className: string;
  'aria-label': string;
  children?: React.ReactNode;
}>;

export type CTL_mediaImg = {
  url: string;
  alt: string;
  width?: number;
  height?: number;
};

// Proptypes for heading, blurb, icon, and link
export interface CTL_globalContentPropsType {
  featuredText: FTX_propsType;
  mediaPictogram?: CP_nameType;
  mediaImage?: CTL_mediaImg;
  iconContent: React.ReactNode | undefined;
}

export interface PTL_iconContentPropsType {
  title: string; 
  iconName: AIC_nameOptPropsType | undefined;
}

export type ValidRoute = `/${string}`;
export type ExternalLink = `https://${string}` | `http://${string}`;
export type CTL_valid_linkTo = ValidRoute | ExternalLink;

// Props types ...
export type PTL_propsType = {
  className?: string;
  featuredText: FTX_propsType;
  mediaImage?: CTL_mediaImg;
  linksTo?: CTL_valid_linkTo;
};
