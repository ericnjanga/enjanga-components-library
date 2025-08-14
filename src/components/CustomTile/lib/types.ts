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

export interface CTL_CSSClassesPropsType {
  layoutStyle?: CTL_LayoutStyleType;
  linksTo?: string;
  linkTarget?: CTL_LinkTargetType;
}

export interface CTL_linkWrapperPropsType {
  heading?: string;
  linksTo?: string;
  linkTarget?: CTL_LinkTargetType;
  linkIsExternal: boolean;
}

export interface CustomTileArrowIconProps {
  title: string;
  orientation: 'Right' | 'UpRight';
}

export type LinkWrapperType = React.ReactElement<{
  className: string;
  'aria-label': string;
  children?: React.ReactNode;
}>;

// Proptypes for heading, blurb, icon, and link
export interface CTL_globalContentPropsType {
  heading?: string;
  headingLevel?: HDG_levelPropsType;
  headingMaxLength?: number;

  media?: CTL_MediaType;
  mediaIcon?: CI_nameType;
  mediaImage?: string;

  blurb?: string;
  blurbMaxLength?: number;

  link: {
    isAvailable: boolean;
    isExternal: boolean;
  };
}

// Props types ...
export type CTL_propsType = {
  className?: string;
  heading?: string;
  headingLevel?: HDG_levelPropsType;
  headingMaxLength?: number;

  layoutStyle?: CTL_LayoutStyleType;

  media?: CTL_MediaType;
  mediaIcon?: CI_nameType;
  mediaImage?: string;

  blurb?: string;
  blurbMaxLength?: number;

  modalIsAvailable?: boolean;
  modalPlainDescription?: string;
  modalRichDescription?: { json: { content: Node[] } };

  linksTo?: string;
  linkTarget?: CTL_LinkTargetType;
} & CTL_propsType1Validation;
