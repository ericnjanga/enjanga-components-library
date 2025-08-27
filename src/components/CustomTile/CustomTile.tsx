/**
 * CustomTile:
 * ---------------------------------------------
 * A customizable tile component that can optionally link to internal (arrow right) or external links (arrow up right)
 *  
 * @param {string} className  - Custom CSS class
 * @param {FTX_propsType} featuredText      - .....

 
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
import { getHeadingContent } from './lib/getHeadingContent';
import { isValidLinkTo } from './lib/mix';

const CustomTile = ({
  className,
  featuredText,

  layoutStyle = 'card' as CTL_LayoutStyleType, // card by default

  media,
  mediaIcon,
  mediaImage,

  modalIsAvailable = false,
  modalPlainDescription,
  modalRichDescription,

  linksTo,
  linkTarget = '_self' as CTL_LinkTargetType,
}: CTL_propsType) => {
  // Controlling modal appearance:
  // (The state is only created if modalIsAvailable is provided)
  const [modalIsOpen, setModalIsOpen] = useState(
    modalIsAvailable !== undefined ? false : undefined
  );

  // Get all the CSS classes the component's wrapper needs ...
  const wrapperClassNames = getCustomTileCSSClasses({
    layoutStyle,
    linksTo,
    linkTarget,
    modalIsAvailable,
  });

  // ...
  const linkIsActive = isValidLinkTo(linksTo); // modalIsAvailable !== undefined ||
  const linkIsExternal =
    linksTo && linkTarget && linkTarget === '_blank' ? true : false;

  // Getting heading stripped from any JSX ...
  const headingStringyfied = getHeadingContent(featuredText);

  // ...
  const tileContent = getTileContent({
    featuredText,

    layoutStyle,

    media,
    mediaIcon,
    mediaImage,

    modalIsAvailable,

    link: {
      isAvailable: linkIsActive,
      isExternal: linkIsExternal,
    },
  });

  const LinkWrapper = getLinkWrapper({
    heading: headingStringyfied,
    linksTo,
    linkTarget,
    linkIsExternal,
  });

  // Throw errors if props aren't consistent with the rules ...
  validateCTL_propsType({ linksTo, linkTarget, modalIsAvailable });

  const {
    containerRef, // Reference to component wrapper
    activeBreakpoint, // Closest possible breakpoint to wrapper's width
  } = useContainerSize();

  return (
    <div className="enj-CustomTile-wrapper" ref={containerRef}>
      <Tile
        className={`${wrapperClassNames} ${className} enj-CustomTile-${activeBreakpoint}`}
        aria-label={`${headingStringyfied} tile`}
        onClick={() =>
          handleCustomTileClick({ modalIsAvailable, setModalIsOpen })
        }
      >
        {linksTo ? (
          <>{React.cloneElement(LinkWrapper, {}, tileContent)}</>
        ) : (
          tileContent
        )}
      </Tile>

      {modalIsAvailable && modalIsOpen !== undefined && (
        <ContentModal
          isOpen={modalIsOpen}
          modalHeading={featuredText.heading.children}
          modalSecondaryButtonText="Cancel"
          setIsOpen={setModalIsOpen}
        >
          <SmartText
            plainText={modalPlainDescription}
            richText={modalRichDescription}
          />
        </ContentModal>
      )}
    </div>
  );
};

export default CustomTile;
