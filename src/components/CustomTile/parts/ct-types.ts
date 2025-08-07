import React from 'react';
import { CustomIconProps } from '../../CustomIcon';
import type { Node } from '@contentful/rich-text-types';

export interface CustomTileDescriptionProps {
  plainDescription?: string;
  richDescription?: { json: { content: Node[] } };
}

export type CustomTileStackOrder = {
  name: 'vertical' | 'horizontal';
};

// Interface ...
export type LinkTargetType = {
  name?: '_blank' | '_self';
};
export const LinkTargetList = ['_blank', '_self'];

export interface CustomTileCSSClassesProps {
  stackOrder?: CustomTileStackOrder['name'];
  linksTo?: string;
  linkTarget?: LinkTargetType['name'];
}

export interface CustomTileLinkWrapperProps {
  title?: string;
  linksTo?: string;
  linkTarget?: LinkTargetType['name'];
  linkIsExternal: boolean;
}

export interface CustomTileGlobalContentProps {
  title?: string;
  blurb?: string;
  iconName?: CustomIconProps['name'];
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
