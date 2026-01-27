// CustomTil props type
// ----------------
import React from 'react';
import { CP_nameType } from '@/components/CustomPictogram/libs/types';
import type { Node } from '@contentful/rich-text-types';

export const CTL_LayoutStyleOpt = ['card', 'banner'] as const;
export const CTL_LinkTargetOpt = ['_blank', '_self'] as const;
export const CTL_MediaOpt = ['pictogram', 'image'] as const;
export type CTL_LayoutStyleType = (typeof CTL_LayoutStyleOpt)[number];
export type CTL_LinkTargetType = (typeof CTL_LinkTargetOpt)[number];
export type CTL_MediaType = (typeof CTL_MediaOpt)[number];

import { HDG_levelPropsType } from '@/components/Heading/libs/types';
import { FTX_propsType } from '@/components/FeatureText/libs/types';
import { AIC_nameOptPropsType } from '@/components/ArrowIcon/libs/types';

export interface CTL_CSSClassesPropsType {
  layoutStyle?: CTL_LayoutStyleType;
  linksTo?: CTL_valid_linkTo;
  linkIsExternal: boolean;
  modalIsAvailable?: boolean;
  iconIsOnDisplay?: boolean;
  imageIsOnDisplay?: boolean;
  pictogramIsOnDisplay?: boolean;
}

export interface CTL_linkWrapperPropsType {
  heading?: string;
  linksTo?: CTL_valid_linkTo;
  linkTarget?: CTL_LinkTargetType;
  linkIsExternal: boolean;
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

export interface CTL_globalContentPropsType {
  featuredText: FTX_propsType;
  mediaPictogram?: CP_nameType;
  mediaImage?: CTL_mediaImg;
  iconContent: React.ReactNode | undefined;
}

export interface CTL_iconContentPropsType {
  title: string;
  modalIsAvailable: boolean;
  iconName: AIC_nameOptPropsType | undefined;
}

export type ValidRoute = `/${string}`;
export type ExternalLink = `https://${string}` | `http://${string}`;
export type CTL_valid_linkTo = ValidRoute | ExternalLink;

export type CTL_propsType = {
  className?: string;
  featuredText: FTX_propsType;

  layoutStyle?: CTL_LayoutStyleType;

  media?: CTL_MediaType;
  mediaPictogram?: CP_nameType;
  mediaImage?: CTL_mediaImg;

  modalIsAvailable?: boolean;
  modalPlainDescription?: string;
  modalRichDescription?: { json: { content: Node[] } };

  linksTo?: CTL_valid_linkTo;
  linkTarget?: CTL_LinkTargetType;
};
