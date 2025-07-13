/**
 * CustomTile:
 * ---------------------------------------------
 * A customizable tile component that can optionally link to internal or external links
 * 
 * @param {string} title - The main title/text of the tile
 * @param {string} text - Descriptive text content
 * @param {number} [textLength] - Optional character limit for text
 * @param {'vertical'|'horizontal'} [stackOrder='vertical'] - Content arrangement
 * @param {string} [iconName] - Optional icon to display
 * @param {string} [linksTo] - Optional linksTo/link destination
 * @param {'_blank'|'_self'|'_parent'|'_top'} [linkTarget='_self'] - Link linkTarget behavior
 * @param {boolean} [linkIsExternal=false] - Whether the link is external
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
    linkIsExternal
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
import { CustomTileProps } from './parts/ct-types';
import { ContentModal } from '../ContentModal/ContentModal';

const CustomTile = ({
  stackOrder = 'vertical',
  textLength,
  iconName,
  showsModal,
  title,
  text,
  linksTo,
  linkTarget = '_self',
  linkIsExternal = false,
}: CustomTileProps) => {
  // ...
  const tileClassNames = getCustomTileCSSClasses({
    stackOrder,
    linksTo,
    linkIsExternal,
  });
  const tileContent = getTileContent({ iconName, title, text, textLength });
  const LinkWrapper = getLinkWrapper({
    title,
    linksTo,
    linkIsExternal,
    linkTarget,
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

  return (
    <>
      <Tile
        className={tileClassNames}
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
