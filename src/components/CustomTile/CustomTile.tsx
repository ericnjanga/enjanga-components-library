/**
 * CustomTile:
 * ---------------------------------------------
 * A customizable tile component that can optionally link to internal (arrow right) or external links (arrow up right)
 *
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
import { CI_isValidPictogram } from '@/components/CustomPictogram/libs/helpers';
import { getIconContent } from './lib/getIconContent';
import { get_CTL_role } from './lib/accessibility';

const CustomTile = ({
  className,
  featuredText,

  layoutStyle = 'card' as CTL_LayoutStyleType, // card by default

  media,
  mediaPictogram,
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

  // [*] Props validation: Throw errors if props aren't consistent with the rules ...
  // ----------------------------
  validateCTL_propsType({ linksTo, linkTarget, modalIsAvailable });

  // [*] Calculate key elements necessary to generate the content
  // ----------------------------
  // Conditions for displaying the pictogram ...
  const pictogramIsOnDisplay =
    layoutStyle !== 'banner' &&
    media === 'pictogram' &&
    CI_isValidPictogram(mediaPictogram);

  // Getting heading stripped from any JSX ...
  const componentTitle = getHeadingContent(featuredText);

  // Checking the externality of a link
  const linkIsExternal =
    linksTo && linkTarget && linkTarget === '_blank' ? true : false;

  // Conditions for displaying the image ...
  const imageIsOnDisplay = media === 'image' && layoutStyle !== 'banner';

  // [*] Generate the anchor that that wrapps around the content
  // (If it applies)
  // ----------------------------
  const LinkWrapper = getLinkWrapper({
    heading: componentTitle,
    linksTo,
    linkTarget,
    linkIsExternal,
  });

  // [*] Get the CSS classes that will dictate the layout's styling ...
  // ----------------------------
  const wrapperClassNames = getCustomTileCSSClasses({
    layoutStyle,
    linksTo,
    linkIsExternal:
      linksTo && linkTarget && linkTarget === '_blank' ? true : false,
    modalIsAvailable,
    // Conditions apply these classes ...
    iconIsOnDisplay: isValidLinkTo(linksTo) || modalIsAvailable,
    imageIsOnDisplay,
    pictogramIsOnDisplay,
  });

  // [*] Generate the icon content ...
  // ----------------------------
  const iconContent = getIconContent({
    title: getHeadingContent(featuredText),
    modalIsAvailable,
    // If the modal is not available and link (this means it's an arrow icon), dictate the arrow direction
    iconName: !modalIsAvailable
      ? linksTo
        ? linkIsExternal
          ? 'UpRight'
          : 'Right'
        : undefined
      : undefined,
  });

  // [*] Generate the content
  // ----------------------------
  const tileContent = getTileContent({
    featuredText,
    mediaPictogram: pictogramIsOnDisplay ? mediaPictogram : undefined,
    mediaImage: imageIsOnDisplay ? mediaImage : undefined,
    iconContent,
  });

  // [*] Accessibility: role
  // ----------------------------
  const ctl_role = get_CTL_role({ layoutStyle });

  // [*] Activate container size responsiveness
  // ----------------------------
  const {
    containerRef, // Reference to component wrapper
    activeBreakpoint, // Closest possible breakpoint to wrapper's width
  } = useContainerSize();

  return (
    <div className="enj-CustomTile-wrapper" ref={containerRef}>
      <Tile
        className={`${wrapperClassNames} ${className} enj-CustomTile-${activeBreakpoint}`}
        aria-label={`${componentTitle} tile`}
        role={ctl_role}
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
