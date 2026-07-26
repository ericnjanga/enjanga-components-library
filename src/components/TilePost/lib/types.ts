import React from 'react';
import { CP_nameType } from '@/components/CustomPictogram/libs/types';
import type { Node } from '@contentful/rich-text-types';

export const CTL_LayoutStyleOpt = ['card', 'banner'] as const;
export const CTL_LinkTargetOpt = ['_blank', '_self'] as const;
export type PTL_LinkTargetType = (typeof CTL_LinkTargetOpt)[number];
export const CTL_MediaOpt = ['pictogram', 'image'] as const;

import { FTX_propsType } from '@/components/FeatureText/libs/types';
import { AIC_nameOptPropsType } from '@/components/ArrowIcon/libs/types';

export interface PTL_CSSClassesPropsType {
  iconIsOnDisplay?: boolean;
  imageIsOnDisplay?: boolean;
}

export interface CTL_globalContentPropsType {
  featuredText: FTX_propsType;
  mediaPictogram?: CP_nameType;
  iconContent: React.ReactNode | undefined;
}

export interface PTL_iconContentPropsType {
  title: string;
  iconName: AIC_nameOptPropsType | undefined;
}

export type ValidRoute = `/${string}`;
export type ExternalLink = `https://${string}` | `http://${string}`;
export type PTL_valid_linkTo = ValidRoute | ExternalLink;

export type PTL_propsType = {
  className?: string;
  featuredText: FTX_propsType;
  /**
   * Use for navigation. TilePost renders a native anchor so browser link
   * features such as open in new tab and copy link remain available.
   */
  linksTo?: PTL_valid_linkTo;
  linkTarget?: PTL_LinkTargetType;
  /**
   * Use only for non-navigation actions. Prefer `linksTo` for routes and URLs.
   */
  onClick?: React.MouseEventHandler<HTMLElement>;
  orgTitle: string;
  orgSlug: string;
  orgPictogramName: string;
};
