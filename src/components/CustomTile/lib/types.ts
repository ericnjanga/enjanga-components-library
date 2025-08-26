// CustomTil props type
// ----------------
import React from 'react';
import { CI_nameType } from '@/components/CustomIcon/libs/types';
import type { Node } from '@contentful/rich-text-types';
import { CTL_propsType1Validation } from './types-validation';

export const CTL_LayoutStyleOpt = ['card', 'banner'] as const;
export const CTL_LinkTargetOpt = ['_blank', '_self'] as const;
export const CTL_MediaOpt = ['icon', 'image'] as const;
export type CTL_LayoutStyleType = (typeof CTL_LayoutStyleOpt)[number]; // Creating union type 'aaa' | 'bbb' | '...
export type CTL_LinkTargetType = (typeof CTL_LinkTargetOpt)[number]; // Creating union type 'aaa' | 'bbb' | '...
export type CTL_MediaType = (typeof CTL_MediaOpt)[number]; // Creating union type 'aaa' | 'bbb' | '...

import { HDG_levelPropsType } from '@/components/Heading/libs/types';
import { FTX_propsType } from '@/components/FeatureText/libs/types';

export interface CTL_CSSClassesPropsType {
  layoutStyle?: CTL_LayoutStyleType;
  linksTo?: string;
  linkTarget?: CTL_LinkTargetType;
  modalIsAvailable?: boolean;
}

export interface CTL_linkWrapperPropsType {
  heading?: string;
  linksTo?: string;
  linkTarget?: CTL_LinkTargetType;
  linkIsExternal: boolean;
}

export type LinkWrapperType = React.ReactElement<{
  className: string;
  'aria-label': string;
  children?: React.ReactNode;
}>;

// Proptypes for heading, blurb, icon, and link
export interface CTL_globalContentPropsType {
  featuredText: FTX_propsType;

  layoutStyle?: CTL_LayoutStyleType;

  media?: CTL_MediaType;
  mediaIcon?: CI_nameType;
  mediaImage?: string;

  link: {
    isAvailable: boolean;
    isExternal: boolean;
  };
}

export type ValidRoute = `/${string}`; // Any string starting with /
export type ExternalLink = `https://${string}` | `http://${string}`;

// Props types ...
export type CTL_propsType = {
  className?: string;
  featuredText: FTX_propsType;

  layoutStyle?: CTL_LayoutStyleType;

  media?: CTL_MediaType;
  mediaIcon?: CI_nameType;
  mediaImage?: string;

  modalIsAvailable?: boolean;
  modalPlainDescription?: string;
  modalRichDescription?: { json: { content: Node[] } };

  linksTo?: ValidRoute | ExternalLink;
  linkTarget?: CTL_LinkTargetType;
} & CTL_propsType1Validation;
