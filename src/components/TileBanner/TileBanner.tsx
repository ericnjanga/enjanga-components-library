/**
 * TileBanner:
 * Copy of TileVariants component
 */
import React from 'react';
import { Tile } from '@carbon/react';
import { getCustomTileCSSClasses } from './lib/getCustomTileCSSClasses';
import { getLinkWrapper } from './lib/getLinkwrapper';
import { getTileContent } from './lib/getTileContent';
import {
  TBN_propsType,
  TBN_LinkTargetType,
} from './lib/types';
import { useTBNContainerSize } from './lib/useTBNContainerSize';
import { getHeadingContent } from './lib/getHeadingContent';
import { getIconContent } from './lib/getIconContent';
import { get_TBN_role } from './lib/accessibility';

const TileBanner = ({
  className,
  featuredText,
  pictogramName,
  linksTo,
  linkTarget = '_self' as TBN_LinkTargetType,
}: TBN_propsType) => {
  const componentTitle = getHeadingContent(featuredText);

  const linkIsExternal =
    linksTo && linkTarget && linkTarget === '_blank' ? true : false;

  const LinkWrapper = getLinkWrapper({
    heading: componentTitle,
    linksTo,
    linkTarget,
    linkIsExternal,
  });

  const wrapperClassNames = getCustomTileCSSClasses({
    linksTo,
    iconIsOnDisplay: !!linksTo,
  });

  const iconContent = getIconContent({
    title: getHeadingContent(featuredText),
    iconName: linksTo
      ? linkIsExternal
        ? 'UpRight'
        : 'Right'
      : undefined,
  });

  const tileContent = getTileContent({
    featuredText,
    iconContent,
    pictogramName,
  });

  const tbn_role = get_TBN_role();

  const {
    containerRef,
    activeBreakpoint,
  } = useTBNContainerSize<HTMLDivElement>();

  return (
    <div className="enj-TileBanner-wrapper" ref={containerRef}>
      <Tile
        className={`${wrapperClassNames} ${className} enj-TileBanner-${activeBreakpoint}`}
        aria-label={`${componentTitle} tile`}
        role={tbn_role}
      >
        {linksTo ? (
          <>{React.cloneElement(LinkWrapper, {}, tileContent)}</>
        ) : (
          tileContent
        )}
      </Tile>

    </div>
  );
};

export default TileBanner;
