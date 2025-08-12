/**
 * CustomTile:
 * ---------------------------------------------
 * A customizable tile component that can optionally link to internal (arrow right) or external links (arrow up right)
 *  
 * @param {string} className  - Custom CSS class
 * @param {string} heading      - The main heading/text of the tile
 * @param {string} blurb      - Text content's blurb
 * @param {string} plainDescription   - Text content's description (in string format)
 * @param {json} richDescription      - Text content's description (in rich format from a headless CMS like ContentFul)
 * @param {number} [headingMaxLength]      - Optional character limit for title
 * @param {number} [blurbLength]      - Optional character limit for text
 * @param {'card'|'banner'} [layoutStyle='card'] - Content arrangement
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
    ...
  />
 */
import { useState } from 'react';
import React from 'react';
import { Tile } from '@carbon/react';
import { getCustomTileCSSClasses } from './lib/getCustomTileCSSClasses';
import { getLinkWrapper } from './lib/getLinkwrapper';
import { getTileContent } from './lib/getTileContent';
import {
  CTL_propsType,
  CTL_LinkTargetType,
  CTL_LayoutStyleType,
} from './lib/types';
import { ContentModal } from '../ContentModal/ContentModal';
import SmartText from '../SmartText/SmartText';
import { handleCustomTileClick } from './parts/utils';
import { validateCTL_propsType } from './lib/propsValidation';
import { useContainerSize } from '@/libs/useContainerSize';

const CustomTile = ({
  className,
  heading,
  headingLevel = 3, // h3 by default
  headingMaxLength,

  layoutStyle = 'card' as CTL_LayoutStyleType, // card by default
  iconName,
  showsModal,

  blurb,
  blurbLength,

  plainDescription,
  richDescription,

  linksTo,
  linkTarget = '_self' as CTL_LinkTargetType,
}: CTL_propsType) => {
  // Controlling modal appearance:
  // (The state is only created if showsModal is provided)
  const [modalIsOpen, setModalIsOpen] = useState(
    showsModal !== undefined ? false : undefined
  );

  // Get all the CSS classes the component's wrapper needs ...
  const wrapperClassNames = getCustomTileCSSClasses({
    layoutStyle,
    linksTo,
    linkTarget,
  });

  // ...
  const linkIsActive = showsModal !== undefined || linksTo !== undefined;
  const linkIsExternal =
    linksTo && linkTarget && linkTarget === '_blank' ? true : false;

  // ...
  const tileContent = getTileContent({
    heading,
    headingLevel,
    headingMaxLength,

    iconName,
    blurb,
    blurbLength,
    link: {
      isAvailable: linkIsActive,
      isExternal: linkIsExternal,
    },
  });

  const LinkWrapper = getLinkWrapper({
    heading,
    linksTo,
    linkTarget,
    linkIsExternal,
  });

  // Throw errors if props aren't consistent with the rules ...
  validateCTL_propsType({ linksTo, linkTarget, showsModal });

  const {
    containerRef, // Reference to component wrapper
    activeBreakpoint, // Closest possible breakpoint to wrapper's width
  } = useContainerSize();

  return (
    <div className="enj-CustomTile-wrapper" ref={containerRef}>
      <Tile
        className={`${wrapperClassNames} ${className} enj-CustomTile-${activeBreakpoint}`}
        aria-label={`${heading} tile`}
        onClick={() => handleCustomTileClick({ showsModal, setModalIsOpen })}
      >
        {linksTo ? (
          <>{React.cloneElement(LinkWrapper, {}, tileContent)}</>
        ) : (
          tileContent
        )}
      </Tile>

      {showsModal && heading && modalIsOpen !== undefined && (
        <ContentModal
          isOpen={modalIsOpen}
          modalHeading={heading}
          modalSecondaryButtonText="Cancel"
          setIsOpen={setModalIsOpen}
        >
          <SmartText plainText={plainDescription} richText={richDescription} />
        </ContentModal>
      )}
    </div>
  );
};

export default CustomTile;
