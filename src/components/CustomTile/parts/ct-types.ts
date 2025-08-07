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
    isActive: boolean;
    isExternal: boolean;
  };
}

export interface CustomTileContentProps {
  title: string;
  blurb: string;
  titleLength?: number;
  blurbLength?: number;
}
export interface CustomTileIconProps {
  title: string;
  linkIsExternal: boolean;
}

export type LinkWrapperType = React.ReactElement<{
  className: string;
  'aria-label': string;
  children?: React.ReactNode;
}>;
