import React from 'react';
import { CP_nameType } from '@/components/CustomPictogram/libs/types';
import type { Node } from '@contentful/rich-text-types';

export const CTL_LayoutStyleOpt = ['card', 'banner'] as const;
export const CTL_LinkTargetOpt = ['_blank', '_self'] as const;
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

export type PTL_propsType = {
  className?: string;
  featuredText: FTX_propsType;
  onClick?: React.MouseEventHandler<HTMLElement>;
  orgTitle: string;
  orgSlug: string;
  orgPictogramName: string;
};
