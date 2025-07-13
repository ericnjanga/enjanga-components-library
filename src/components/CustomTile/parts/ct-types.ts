import React from 'react';
import { CustomIconProps } from '../../CustomIcon';
import Link from 'next/link';

export type CustomTileStackOrder = {
  name: 'vertical' | 'horizontal';
};

// Interface ...
export interface CustomTileProps {
  stackOrder?: CustomTileStackOrder['name'];
  textLength?: number;
  iconName?: CustomIconProps['name'];
  showsModal?: boolean;
  title: string;
  text: string;
  linksTo?: string;
  linkTarget?: '_blank' | '_self' | '_parent' | '_top';
  linkIsExternal?: boolean; // Flag to indicate external links
}

export interface CustomTileCSSClassesProps {
  stackOrder?: CustomTileStackOrder['name'];
  linksTo?: string;
  linkIsExternal?: boolean; // Flag to indicate external links
}

export interface CustomTileLinkWrapperProps {
  title: string;
  linksTo?: string;
  linkIsExternal?: boolean; // Flag to indicate external links
  linkTarget?: '_blank' | '_self' | '_parent' | '_top';
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
