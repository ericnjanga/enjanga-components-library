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
import clsx from 'clsx';
// Styles are imported globally
import CustomIcon, { CustomIconProps } from '../CustomIcon';
import { CustomTileContent, CustomTileIcon } from './CustomTileContent';
import Link from 'next/link';

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
  const tileContent = (
    <>
      {iconName && (
        <CustomIcon name={iconName} className={clsx('enj-CustomTile-icon')} />
      )}
      <CustomTileContent title={title} text={text} textLength={textLength} />
      <CustomTileIcon title={title} />
    </>
  );

  // Component's CSS classes
  const tileClassNames = clsx(
    'enj-CustomTile',
    `enj-CustomTile--${stackOrder}`,
    {
      'enj-CustomTile--link': route,
      'enj-CustomTile--external': isExternal && route, // Only apply if route exists
    }
  );

  // LinkWrapper pattern for cleanliness and maintainability of all functionality
  const LinkWrapper = route ? (
    isExternal ? (
      <a
        href={route}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        className="enj-CustomTile-link"
        aria-label={`Navigate to ${title}${
          target === '_blank' ? ' (opens in new tab)' : ''
        }`}
      />
    ) : (
      <Link
        href={route}
        passHref
        legacyBehavior
        target={target}
        className="enj-CustomTile-link"
        aria-label={`Navigate to ${title}${
          target === '_blank' ? ' (opens in new tab)' : ''
        }`}
      />
    )
  ) : (
    <></>
  );

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
