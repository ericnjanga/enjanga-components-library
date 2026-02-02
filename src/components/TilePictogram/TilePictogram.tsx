/**
 * TilePictogram
 */
import React, { useState } from 'react';
import { Tile } from '@carbon/react';
import { getPictogramTileCSSClasses } from './lib/getPictogramTileCSSClasses'; 
import { getTileContent } from './lib/getTileContent';
import { PGL_propsType } from './lib/types';
import { handlePictogramTileClick } from './parts/utils';
import { ContentModal } from '../ContentModal/ContentModal';
import SmartText from '../SmartText/SmartText';
import { usePictogramBreakpoint } from './hooks/usePictogramBreakpoint';
import { validatePGL_propsType } from './lib/propsValidation';
import { getHeadingContent } from './lib/getHeadingContent';
import { get_PGL_role } from './lib/accessibility';

const TilePictogram = ({
  className,
  featuredText, 
  pictogram,
  modal,
}: PGL_propsType) => { 

  // Props validation
  validatePGL_propsType({ modal }); 

  const [modalIsOpen, setModalIsOpen] = useState(
    modal !== undefined ? false : undefined
  );

  const componentTitle = getHeadingContent(featuredText);

  

  const wrapperClassNames = getPictogramTileCSSClasses({
    modal,
    iconIsOnDisplay: !!modal,
    pictogramIsOnDisplay: true,
  });

  const modalIsAvailable = !!modal;

  const tileContent = getTileContent({
    featuredText,
    pictogram: pictogram,
    modalIsAvailable,
  });

  const pgl_role = get_PGL_role();

  const { containerRef, activeClass } = usePictogramBreakpoint();

  return (
    <div className={`enj-PictogramTile-wrapper  ${className}`} ref={containerRef}>
      <Tile
        className={`${wrapperClassNames} ${activeClass}`}
        aria-label={`${componentTitle} tile`}
        role={pgl_role}
        onClick={() => {
          handlePictogramTileClick({ modal, setModalIsOpen });
        }}
      >
        {tileContent}
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
