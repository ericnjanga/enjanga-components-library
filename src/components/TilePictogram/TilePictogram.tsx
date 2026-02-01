/**
 * TilePictogram (renamed from PictogramTile)
 */
import React from 'react';
import { Tile } from '@carbon/react';
import { getPictogramTileCSSClasses } from './lib/getPictogramTileCSSClasses';
import { getLinkWrapper } from './lib/getLinkwrapper';
import { getTileContent } from './lib/getTileContent';
import {
  PGL_propsType,
  PGL_LinkTargetType,
} from './lib/types';
import { handlePictogramTileClick } from './parts/utils';
import { validatePGL_propsType } from './lib/propsValidation';
import { useContainerSize } from '@/libs/useContainerSize';
import { getHeadingContent } from './lib/getHeadingContent';
import { isValidLinkTo } from './lib/mix';
import { getIconContent } from './lib/getIconContent';
import { get_PGL_role } from './lib/accessibility';

const TilePictogram = ({
  className,
  featuredText, 
  pictogram,
  linksTo,
  linkTarget = '_self' as PGL_LinkTargetType,
}: PGL_propsType) => {
  // Modal support removed for this component

  // Props validation
  validatePGL_propsType({ linksTo, linkTarget });

  // Pictograms are displayed by default; no gating logic required.

  const componentTitle = getHeadingContent(featuredText);

  const linkIsExternal = linksTo && linkTarget && linkTarget === '_blank' ? true : false;

  const LinkWrapper = getLinkWrapper({
    heading: componentTitle,
    linksTo,
    linkTarget,
    linkIsExternal,
  });

  const wrapperClassNames = getPictogramTileCSSClasses({
    linksTo,
    linkIsExternal: linksTo && linkTarget && linkTarget === '_blank' ? true : false,
    iconIsOnDisplay: isValidLinkTo(linksTo),
    pictogramIsOnDisplay: true,
  });

  const iconContent = getIconContent({
    title: getHeadingContent(featuredText),
    iconName: linksTo ? (linkIsExternal ? 'UpRight' : 'Right') : undefined,
  });

  const tileContent = getTileContent({
    featuredText,
    pictogram: pictogram,
    iconContent,
  });

  const pgl_role = get_PGL_role();

  const { containerRef, activeBreakpoint } = useContainerSize<HTMLDivElement>();

  return (
    <div className="enj-PictogramTile-wrapper" ref={containerRef}>
      <Tile
        className={`${wrapperClassNames} ${className} enj-PictogramTile-${activeBreakpoint}`}
        aria-label={`${componentTitle} tile`}
        role={pgl_role}
        onClick={() => {
          handlePictogramTileClick();
        }}
      >
        {linksTo ? <>{React.cloneElement(LinkWrapper, {}, tileContent)}</> : tileContent}
      </Tile>

      {/* modal removed */}
    </div>
  );
};

export default TilePictogram;
