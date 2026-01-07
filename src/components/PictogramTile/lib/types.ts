// CustomTil props type
// ----------------
import React from 'react';
import { CP_nameType } from '@/components/CustomPictogram/libs/types';
import type { Node } from '@contentful/rich-text-types';
import { PGL_propsType1Validation } from './types-validation';

export const PGL_LayoutStyleOpt = ['card', 'banner'] as const;
export const PGL_LinkTargetOpt = ['_blank', '_self'] as const;
export const PGL_MediaOpt = ['pictogram', 'image'] as const;
export type PGL_LayoutStyleType = (typeof PGL_LayoutStyleOpt)[number]; // Creating union type 'aaa' | 'bbb' | '...
export type PGL_LinkTargetType = (typeof PGL_LinkTargetOpt)[number]; // Creating union type 'aaa' | 'bbb' | '...
export type PGL_MediaType = (typeof PGL_MediaOpt)[number]; // Creating union type 'aaa' | 'bbb' | '...

import { HDG_levelPropsType } from '@/components/Heading/libs/types';
import { FTX_propsType } from '@/components/FeatureText/libs/types';
import { AIC_nameOptPropsType } from '@/components/ArrowIcon/libs/types';

export interface PGL_CSSClassesPropsType {
  layoutStyle?: PGL_LayoutStyleType;
  linksTo?: PGL_valid_linkTo;
  linkIsExternal: boolean;
  modalIsAvailable?: boolean;
  iconIsOnDisplay?: boolean;
  imageIsOnDisplay?: boolean;
  pictogramIsOnDisplay?: boolean;
}

export interface PGL_linkWrapperPropsType {
  heading?: string;
  linksTo?: PGL_valid_linkTo;
  linkTarget?: PGL_LinkTargetType;
  linkIsExternal: boolean;
}

export type LinkWrapperType = React.ReactElement<{
  className: string;
  'aria-label': string;
  children?: React.ReactNode;
}>;

export type PGL_mediaImg = {
  url: string;
  alt: string;
  width?: number;
  height?: number;
};

// Proptypes for heading, blurb, icon, and link
export interface PGL_globalContentPropsType {
  featuredText: FTX_propsType;
  mediaPictogram?: CP_nameType;
  mediaImage?: PGL_mediaImg;
  iconContent: React.ReactNode | undefined;
}

export interface PGL_iconContentPropsType {
  title: string;
  modalIsAvailable: boolean;
  iconName: AIC_nameOptPropsType | undefined;
}

export type ValidRoute = `/${string}`;
export type ExternalLink = `https://${string}` | `http://${string}`;
export type PGL_valid_linkTo = ValidRoute | ExternalLink;

// Props types ...
export type PGL_propsType = {
  className?: string;
  featuredText: FTX_propsType;

  layoutStyle?: PGL_LayoutStyleType;

  media?: PGL_MediaType;
  mediaPictogram?: CP_nameType;
  mediaImage?: PGL_mediaImg;

  modalIsAvailable?: boolean;
  modalPlainDescription?: string;
  modalRichDescription?: { json: { content: Node[] } };

  linksTo?: PGL_valid_linkTo;
  linkTarget?: PGL_LinkTargetType;
} & PGL_propsType1Validation;