import React from 'react';
import { CustomIconProps } from '../../CustomIcon';
import Link from 'next/link';

// Interface ...
export interface CustomTileProps {
  title: string;
  text: string;
  textLength?: number;
  stackOrder?: 'vertical' | 'horizontal';
  iconName?: CustomIconProps['name'];
  route?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  isExternal?: boolean; // Flag to indicate external links
}

export interface CustomTileCSSClassesProps {
  stackOrder?: 'vertical' | 'horizontal';
  route?: string;
  isExternal?: boolean; // Flag to indicate external links
}

export interface CustomTileLinkWrapperProps {
  title: string;
  route?: string;
  isExternal?: boolean; // Flag to indicate external links
  target?: '_blank' | '_self' | '_parent' | '_top';
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
