// CustomTil props type
// ----------------
import React from 'react';
export const TBN_LinkTargetOpt = ['_blank', '_self'] as const;
export type TBN_LinkTargetType = (typeof TBN_LinkTargetOpt)[number];

import { FTX_propsType } from '@/components/FeatureText/libs/types';
import { AIC_nameOptPropsType } from '@/components/ArrowIcon/libs/types';

export interface TBN_CSSClassesPropsType {
  linksTo?: TBN_valid_linkTo;
  iconIsOnDisplay?: boolean;
}

export interface TBN_linkWrapperPropsType {
  heading?: string;
  linksTo?: TBN_valid_linkTo;
  linkTarget?: TBN_LinkTargetType;
  linkIsExternal: boolean;
}

export type LinkWrapperType = React.ReactElement<{
  className: string;
  'aria-label': string;
  children?: React.ReactNode;
}>;

export interface TBN_globalContentPropsType {
  featuredText: FTX_propsType;
  iconContent: React.ReactNode | undefined;
  pictogramName?: string;
}

export interface TBN_iconContentPropsType {
  title: string;
  iconName: AIC_nameOptPropsType | undefined;
}

export type ValidRoute = `/${string}`;
export type ExternalLink = `https://${string}` | `http://${string}`;
export type TBN_valid_linkTo = ValidRoute | ExternalLink;

export type TBN_propsType = {
  className?: string;
  featuredText: FTX_propsType;
  pictogramName?: string;

  linksTo?: TBN_valid_linkTo;
  linkTarget?: TBN_LinkTargetType;
};
