// CustomTil props type
// ----------------
import React from 'react';
import { CP_nameType } from '@/components/CustomPictogram/libs/types';
import type { Node } from '@contentful/rich-text-types';
import { FTX_propsType } from '@/components/FeatureText/libs/types';
import { AIC_nameOptPropsType } from '@/components/ArrowIcon/libs/types';

export const PGL_LinkTargetOpt = ['_blank', '_self'] as const;
export type PGL_LinkTargetType = (typeof PGL_LinkTargetOpt)[number];

export type ValidRoute = `/${string}`;
export type ExternalLink = `https://${string}` | `http://${string}`;
export type PGL_valid_linkTo = ValidRoute | ExternalLink;

import { PGL_propsType1Validation } from './types-validation';

export interface PGL_CSSClassesPropsType {
  modal?: PGL_modalPropsType;
  iconIsOnDisplay?: boolean;
}

export interface PGL_globalContentPropsType {
  featuredText: FTX_propsType;
  pictogram?: CP_nameType;
  modalIsAvailable?: boolean;
}

export interface PGL_modalPropsType {
  plainDescription?: string;
  richDescription?: { json: { content: Node[] } };
}

export interface PGL_iconContentPropsType {
  title: string;
  iconName: AIC_nameOptPropsType | undefined;
}

export type PGL_propsType = {
  className?: string;
  featuredText: FTX_propsType;
  pictogram?: CP_nameType;
  modal?: PGL_modalPropsType;
  
} & PGL_propsType1Validation;
