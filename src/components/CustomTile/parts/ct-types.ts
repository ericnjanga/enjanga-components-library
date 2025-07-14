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

export interface CustomTileCSSClassesProps {
  stackOrder?: CustomTileStackOrder['name'];
  linksTo?: string;
  linkTarget?: LinkTargetType['name'];
}

export interface CustomTileLinkWrapperProps {
  title: string;
  linksTo?: string;
  linkTarget?: LinkTargetType['name'];
}

export interface CustomTileContentProps {
  title: string;
  text: string;
  iconName?: CustomIconProps['name'];
  textLength?: number;
}

export interface CustomTileIconProps {
  title: string;
}

export type LinkWrapperType = React.ReactElement<{
  className: string;
  'aria-label': string;
  children?: React.ReactNode;
}>;
