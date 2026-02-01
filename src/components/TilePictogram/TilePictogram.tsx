/**
 * TilePictogram (renamed from PictogramTile)
 */
import React, { useState } from 'react';
import { Tile } from '@carbon/react';
import { getPictogramTileCSSClasses } from './lib/getPictogramTileCSSClasses';
import { getLinkWrapper } from './lib/getLinkwrapper';
import { getTileContent } from './lib/getTileContent';
import {
  PGL_propsType,
  PGL_LinkTargetType,
} from './lib/types';
import { handlePictogramTileClick } from './parts/utils';
import { ContentModal } from '../ContentModal/ContentModal';
import SmartText from '../SmartText/SmartText';
import { usePictogramBreakpoint } from './hooks/usePictogramBreakpoint';
import { validatePGL_propsType } from './lib/propsValidation';
import { getHeadingContent } from './lib/getHeadingContent';
import { isValidLinkTo } from './lib/mix';
import { getIconContent } from './lib/getIconContent';
import { get_PGL_role } from './lib/accessibility';

const TilePictogram = ({
  className,
  featuredText, 
  pictogram,
  modal,
  linksTo,
  linkTarget = '_self' as PGL_LinkTargetType,
}: PGL_propsType) => {
  // Modal support removed for this component

  // Props validation
  validatePGL_propsType({ linksTo, linkTarget, modal });

  // Pictograms are displayed by default; no gating logic required.

  const [modalIsOpen, setModalIsOpen] = useState(
    modal !== undefined ? false : undefined
  );

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
    modal,
    iconIsOnDisplay: isValidLinkTo(linksTo) || !!modal,
    pictogramIsOnDisplay: true,
  });

  const iconContent = getIconContent({
    title: getHeadingContent(featuredText),
    iconName: !modal
      ? linksTo
        ? linkIsExternal
          ? 'UpRight'
          : 'Right'
        : undefined
      : undefined,
  });

  const tileContent = getTileContent({
    featuredText,
    pictogram: pictogram,
    iconContent,
  });

  const pgl_role = get_PGL_role();

  const { containerRef, activeClass } = usePictogramBreakpoint();

  return (
    <div className="enj-PictogramTile-wrapper" ref={containerRef}>
      <Tile
        className={`${wrapperClassNames} ${className} ${activeClass}`}
        aria-label={`${componentTitle} tile`}
        role={pgl_role}
        onClick={() => {
          handlePictogramTileClick({ modal, setModalIsOpen });
        }}
      >
        {linksTo ? <>{React.cloneElement(LinkWrapper, {}, tileContent)}</> : tileContent}
      </Tile>

      {modal && modalIsOpen !== undefined && (
        <ContentModal
          isOpen={!!modalIsOpen}
          modalHeading={featuredText.heading.children}
          modalSecondaryButtonText="Cancel"
          setIsOpen={setModalIsOpen}
        >
          <SmartText
            plainText={modal.plainDescription}
            richText={modal.richDescription}
          />
        </ContentModal>
      )}
    </div>
  );
};

export default TilePictogram;
