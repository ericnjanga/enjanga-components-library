/**
 * TilePictogram
 *
 * Renders a simple card-style tile containing a pictogram and
 * featured text. Optionally opens a modal when clicked if the
 * `modal` prop is provided.
 */
import React, { useState } from 'react';
import { Tile } from '@carbon/react';
// Style and content builders
import { getPictogramTileCSSClasses } from './lib/getPictogramTileCSSClasses';
import { getTileContent } from './lib/getTileContent';

// Types and helpers
import { PGL_propsType } from './lib/types';
import { handlePictogramTileClick } from './parts/utils';

// Modal + text components used when `modal` prop is provided
import { ContentModal } from '../ContentModal/ContentModal';
import SmartText from '../SmartText/SmartText';

// Hook for component-specific responsive breakpoint
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

  // Validate props (placeholder for future param checks)
  validatePGL_propsType({ modal });

  // Modal state: `undefined` indicates no modal configured; boolean
  // indicates open/closed when a modal exists.
  const [modalIsOpen, setModalIsOpen] = useState(
    modal !== undefined ? false : undefined
  );

  // Accessible title extracted from `featuredText`
  const componentTitle = getHeadingContent(featuredText);

  // Compute CSS classes for the Tile based on modal/pictogram state
  const tileClassNames = getPictogramTileCSSClasses({
    modal,
    iconIsOnDisplay: !!modal,
  });

  // Flag passed to content renderer so it can show/hide the info icon
  const modalIsAvailable = !!modal;

  // Compose inner tile content: pictogram + featured text (+ info icon)
  const tileContent = getTileContent({
    featuredText,
    pictogram: pictogram,
    modalIsAvailable,
  });

  // Accessibility role for the tile
  const pgl_role = get_PGL_role();

  // Component-level breakpoint helper: attach `containerRef` to the
  // wrapper and apply `activeClass` to change layout at small widths.
  const { containerRef, activeClass } = usePictogramBreakpoint();

  const wrapperClassNames = `enj-PictogramTile-wrapper${className ? ` ${className}` : ''}`;

  return (
    <div className={wrapperClassNames} ref={containerRef}>
      <Tile
        className={`${tileClassNames} ${activeClass}`}
        aria-label={`${componentTitle} tile`}
        role={pgl_role}
        // Clicking the tile triggers modal open when configured.
        onClick={() => {
          handlePictogramTileClick({ modal, setModalIsOpen });
        }}
      >
        {tileContent}
      </Tile>

      {/* Modal: only render when `modal` is provided. Guarding against
          `modalIsOpen === undefined` prevents rendering modal markup
          for tiles that do not support modals. */}
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
