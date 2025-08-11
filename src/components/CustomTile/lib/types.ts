// CustomTil props type
// ----------------
import React from 'react';
import { CI_nameType } from '@/components/CustomIcon/libs/types';
import type { Node } from '@contentful/rich-text-types';
import { CTL_propsType1Validation } from './types-validation';

export const CTL_StackOrderOpt = ['vertical', 'horizontal'] as const;
export const CTL_LinkTargetOpt = ['_blank', '_self'] as const;
export type CTL_StackOrderType = (typeof CTL_StackOrderOpt)[number]; // Creating union type 'aaa' | 'bbb' | '...
export type CTL_LinkTargetType = (typeof CTL_LinkTargetOpt)[number]; // Creating union type 'aaa' | 'bbb' | '...

export interface CTL_CSSClassesPropsType {
  stackOrder?: CTL_StackOrderType;
  linksTo?: string;
  linkTarget?: CTL_LinkTargetType;
}

export interface CustomTileLinkWrapperProps {
  title?: string;
  linksTo?: string;
  linkTarget?: CTL_LinkTargetType;
  linkIsExternal: boolean;
}

export interface CustomTileGlobalContentProps {
  title?: string;
  blurb?: string;
  iconName?: CI_nameType;
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

// Props types ...
export type CTL_propsType = {
  /**
   * Custom CSS class
   */
  className?: string;
  /**
   * Layout direction for tile content
   * @default 'vertical'
   */
  stackOrder?: CTL_StackOrderType;

  /**
   * Maximum character count for title content
   * @remarks Truncates with ellipsis if exceeded
   */
  titleLength?: number;

  /**
   * Maximum character count for blurb content
   * @remarks Truncates with ellipsis if exceeded
   */
  blurbLength?: number;

  /**
   * Icon identifier (matches CustomIcon component)
   * @see {@link CI_nameType}
   */
  iconName?: CI_nameType;

  /**
   * Enables modal behavior when tile is clicked. If "true", "title" and "text" props will be rendered as modal content.
   * @remarks Modal content will show the tile's title and text
   */
  showsModal?: boolean;

  /**
   * Primary heading text
   * @required
   */
  title?: string;

  /**
   * Descriptive content text
   * @required
   */
  blurb?: string;

  /**
   * Modal main content text (in string format)
   * @required
   */
  plainDescription?: string;

  /**
   * Modal main content text (in rich format from a headless CMS like ContentFul)
   * @required
   */
  richDescription?: { json: { content: Node[] } };

  /**
   * Destination URL/path when tile is clickable
   * @remarks Requires either linksTo or showsModal
   */
  linksTo?: string;

  /**
   * Link target behavior
   * @default '_self'
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#target}
   */
  linkTarget?: CTL_LinkTargetType;
} & CTL_propsType1Validation;
