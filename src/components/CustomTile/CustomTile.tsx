/**
 * CustomTile:
 * ---------------------------------------------
 * A customizable tile component that can optionally link to internal (arrow right) or external links (arrow up right)
 *  
 * @param {string} className - Custom CSS class
 * @param {string} title - The main title/text of the tile
 * @param {string} text - Descriptive text content
 * @param {number} [titleLength] - Optional character limit for title
 * @param {number} [textLength] - Optional character limit for text
 * @param {'vertical'|'horizontal'} [stackOrder='vertical'] - Content arrangement
 * @param {string} [iconName] - Optional icon to display
 * 
 * EITHER:
 * @param {boolean} [showsModal] - When true, clicking opens a modal
 * 
 * OR:
 * @param {string} [linksTo] - Optional linksTo/link destination
 * @param {'_blank'|'_self'} [linkTarget='_self'] - Link linkTarget behavior (We won't be using |'_parent'|'_top' as they deal with legacy frames/iframes)
 * 
 * Usage Examples:
 * ---------------
 * // Internal link (default)
  <CustomTile 
    linksTo="/dashboard" 
    title="Dashboard" 
    text="Go to your dashboard"
  />

  // External link with new tab
  <CustomTile
    linksTo="https://external.site"
    linkTarget="_blank"
    title="External Site"
    text="Visit our partner site"
  />

  // Regular tile without link
  <CustomTile
    title="Information"
    text="Static content tile"
  />
 */
import { useState } from 'react';
import React from 'react';
import { Tile } from '@carbon/react';
import {
  getTileContent,
  getCustomTileCSSClasses,
  getLinkWrapper,
} from './parts/ct-core-parts';
import { CustomIconProps } from '../CustomIcon';
import {
  CustomTileStackOrder,
  LinkTargetType,
  CustomTileExclusiveProps,
} from './parts/ct-types';
import { ContentModal } from '../ContentModal/ContentModal';

export type CustomTileProps = {
  /**
   * Custom CSS class
   */
  className?: string;
  /**
   * Layout direction for tile content
   * @default 'vertical'
   */
  stackOrder?: CustomTileStackOrder['name'];

  /**
   * Maximum character count for title content
   * @remarks Truncates with ellipsis if exceeded
   */
  titleLength?: number;

  /**
   * Maximum character count for text content
   * @remarks Truncates with ellipsis if exceeded
   */
  textLength?: number;

  /**
   * Icon identifier (matches CustomIcon component)
   * @see {@link CustomIconProps}
   */
  iconName?: CustomIconProps['name'];

  /**
   * Enables modal behavior when tile is clicked. If "true", "title" and "text" props will be rendered as modal content.
   * @remarks Modal content will show the tile's title and text
   */
  showsModal?: boolean;

  /**
   * Primary heading text
   * @required
   */
  title: string;

  /**
   * Descriptive content text
   * @required
   */
  text: string;

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
  linkTarget?: LinkTargetType['name'];
} & CustomTileExclusiveProps;

const CustomTile = ({
  className,
  stackOrder = 'vertical',
  titleLength,
  textLength,
  iconName,
  showsModal,
  title,
  text,
  linksTo,
  linkTarget = '_self' as LinkTargetType['name'],
}: CustomTileProps) => {
  // ...
  const tileClassNames = getCustomTileCSSClasses({
    stackOrder,
    linksTo,
    linkTarget,
  });
  const linkIsExternal =
    linksTo && linkTarget && linkTarget === '_blank' ? true : false;
  const tileContent = getTileContent({
    iconName,
    title,
    text,
    titleLength,
    textLength,
    linkIsExternal,
  });
  const LinkWrapper = getLinkWrapper({
    title,
    linksTo,
    linkTarget,
    linkIsExternal,
  });
  // State is only created if showsModal is provided
  const [isOpen, setIsOpen] = useState(
    showsModal !== undefined ? false : undefined
  );

  const handleClick = () => {
    if (showsModal !== undefined) {
      setIsOpen(true);
      // ...
      // ...
    }
  };

  if (linksTo && linkTarget && showsModal !== undefined) {
    throw new Error(
      `Invalid props: CustomTile cannot be both a link and a modal trigger. Use either "showsModal" OR "linksTo", never both.`
    );
  }

  return (
    <>
      <Tile
        className={`${tileClassNames} ${className}`}
        aria-label={`${title} tile`}
        onClick={handleClick}
      >
        {linksTo ? (
          <>{React.cloneElement(LinkWrapper, {}, tileContent)}</>
        ) : (
          tileContent
        )}
      </Tile>
      {showsModal && isOpen !== undefined && (
        <ContentModal
          isOpen={isOpen}
          modalHeading={title}
          modalSecondaryButtonText="Cancel"
          setIsOpen={setIsOpen}
        >
          <div>
            <h3>{title}</h3>
            <article>{title}</article>
          </div>
        </ContentModal>
      )}
    </>
  );
};

export default CustomTile;
