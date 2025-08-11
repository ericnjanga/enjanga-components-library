// CustomTil props type
// ----------------
import React from 'react';
import { CI_nameType } from '@/components/CustomIcon/libs/types';
import type { Node } from '@contentful/rich-text-types';
import { CTL_propsType1Validation } from './types-validation';

export const CTL_LayoutStyleOpt = ['card', 'banner'] as const;
export const CTL_LinkTargetOpt = ['_blank', '_self'] as const;
export type CTL_LayoutStyleType = (typeof CTL_LayoutStyleOpt)[number]; // Creating union type 'aaa' | 'bbb' | '...
export type CTL_LinkTargetType = (typeof CTL_LinkTargetOpt)[number]; // Creating union type 'aaa' | 'bbb' | '...

export interface CTL_CSSClassesPropsType {
  layoutStyle?: CTL_LayoutStyleType;
  linksTo?: string;
  linkTarget?: CTL_LinkTargetType;
}

export interface CustomTileLinkWrapperProps {
  title?: string;
  linksTo?: string;
  linkTarget?: CTL_LinkTargetType;
  linkIsExternal: boolean;
}

export interface CustomTileGlobalContentProps {
  title?: string;
  blurb?: string;
  iconName?: CI_nameType;
  titleLength?: number;
  blurbLength?: number;
  link: {
    isAvailable: boolean;
    isExternal: boolean;
  };
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

// Props types ...
export type CTL_propsType = {
  className?: string;
  layoutStyle?: CTL_LayoutStyleType;
  titleLength?: number;
  blurbLength?: number;
  iconName?: CI_nameType;
  showsModal?: boolean;
  title?: string;
  blurb?: string;
  plainDescription?: string;
  richDescription?: { json: { content: Node[] } };
  linksTo?: string;
  linkTarget?: CTL_LinkTargetType;
} & CTL_propsType1Validation;
