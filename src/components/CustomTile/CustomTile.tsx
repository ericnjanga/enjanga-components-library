/**
 * CustomTile:
 * ---------------------------------------------
 * A customizable tile component that can optionally link to internal or external routes
 * 
 * @param {string} title - The main title/text of the tile
 * @param {string} text - Descriptive text content
 * @param {number} [textLength] - Optional character limit for text
 * @param {'vertical'|'horizontal'} [stackOrder='vertical'] - Content arrangement
 * @param {string} [iconName] - Optional icon to display
 * @param {string} [route] - Optional route/link destination
 * @param {'_blank'|'_self'|'_parent'|'_top'} [target='_self'] - Link target behavior
 * @param {boolean} [isExternal=false] - Whether the link is external
 * 
 * Usage Examples:
 * ---------------
 * // Internal route (default)
  <CustomTile 
    route="/dashboard" 
    title="Dashboard" 
    text="Go to your dashboard"
  />

  // External link with new tab
  <CustomTile
    route="https://external.site"
    isExternal
    target="_blank"
    title="External Site"
    text="Visit our partner site"
  />

  // Regular tile without link
  <CustomTile
    title="Information"
    text="Static content tile"
  />
 */

import React from 'react';
import { Tile } from '@carbon/react';
import {
  getTileContent,
  getCustomTileCSSClasses,
  getLinkWrapper,
} from './parts/ct-core-parts';
import { CustomTileProps } from './parts/ct-types';

const CustomTile = ({
  iconName,
  title,
  text,
  textLength,
  stackOrder = 'vertical',
  route,
  target = '_self',
  isExternal = false,
}: CustomTileProps) => {
  // ...
  const tileClassNames = getCustomTileCSSClasses({
    stackOrder,
    route,
    isExternal,
  });
  const tileContent = getTileContent({ iconName, title, text, textLength });
  const LinkWrapper = getLinkWrapper({ title, route, isExternal, target });

  return (
    <Tile className={tileClassNames} aria-label={`${title} tile`}>
      {route ? (
        <>{React.cloneElement(LinkWrapper, {}, tileContent)}</>
      ) : (
        tileContent
      )}
    </Tile>
  );
};

export default CustomTile;
