import React from 'react';
import { CustomIconProps } from '../../CustomIcon';

/**
 * Props validations rules
 * ----------
 * If "linksTo" and "linkTarget" are provided, "showsModal" cannot be provided and vice versa
 * Note: TypeScript will flag validation errors
 **/
export type CustomTileExclusiveProps =
  | {
      linksTo?: string;
      linkTarget?: LinkTargetType['name'];
      showsModal?: never;
    }
  | { linksTo?: never; linkTarget?: never; showsModal?: boolean };

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
