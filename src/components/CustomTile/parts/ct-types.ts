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

//   /**
//    * Custom CSS class ..===^^^===
//    */
//   className?: string;
//   /**
//    * Layout direction for tile content ???
//    * @default 'vertical'
//    */
//   stackOrder?: CustomTileStackOrder['name'];

//   /**
//    * Maximum character count for title content
//    * @remarks Truncates with ellipsis if exceeded
//    */
//   titleLength?: number;

//   /**
//    * Maximum character count for blurb content
//    * @remarks Truncates with ellipsis if exceeded
//    */
//   blurbLength?: number;

//   /**
//    * Icon identifier (matches CustomIcon component)
//    * @see {@link CustomIconProps}
//    */
//   iconName?: CustomIconProps['name'];

//   /**
//    * Enables modal behavior when tile is clicked. If "true", "title" and "text" props will be rendered as modal content.
//    * @remarks Modal content will show the tile's title and text
//    */
//   showsModal?: boolean;

//   /**
//    * Primary heading text
//    * @required
//    */
//   title?: string;

//   /**
//    * Descriptive content text
//    * @required
//    */
//   blurb?: string;

//   /**
//    * Modal main content text (in string format)
//    * @required
//    */
//   plainDescription?: string;

//   /**
//    * Modal main content text (in rich format from a headless CMS like ContentFul)
//    * @required
//    */
//   richDescription?: { json: { content: Node[] } };

//   /**
//    * Destination URL/path when tile is clickable
//    * @remarks Requires either linksTo or showsModal
//    */
//   linksTo?: string;

//   /**
//    * Link target behavior
//    * @default '_self'
//    * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#target}
//    */
//   linkTarget?: LinkTargetType['name'];
// } & CustomTileProps1Validation;
