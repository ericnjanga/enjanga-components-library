/**
 * TileVariants:
 * Replacement for CustomTile component (renamed)
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

const TileVariants = ({
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
  const [modalIsOpen, setModalIsOpen] = useState(
    modalIsAvailable !== undefined ? false : undefined
  );

  validateCTL_propsType({ linksTo, linkTarget, modalIsAvailable });

  const pictogramIsOnDisplay =
    layoutStyle !== 'banner' &&
    media === 'pictogram' &&
    CI_isValidPictogram(mediaPictogram);

  const componentTitle = getHeadingContent(featuredText);

  const linkIsExternal =
    linksTo && linkTarget && linkTarget === '_blank' ? true : false;

  const imageIsOnDisplay = media === 'image' && layoutStyle !== 'banner';

  const LinkWrapper = getLinkWrapper({
    heading: componentTitle,
    linksTo,
    linkTarget,
    linkIsExternal,
  });

  const wrapperClassNames = getCustomTileCSSClasses({
    layoutStyle,
    linksTo,
    linkIsExternal:
      linksTo && linkTarget && linkTarget === '_blank' ? true : false,
    modalIsAvailable,
    iconIsOnDisplay: isValidLinkTo(linksTo) || modalIsAvailable,
    imageIsOnDisplay,
    pictogramIsOnDisplay,
  });

  const iconContent = getIconContent({
    title: getHeadingContent(featuredText),
    modalIsAvailable,
    iconName: !modalIsAvailable
      ? linksTo
        ? linkIsExternal
          ? 'UpRight'
          : 'Right'
        : undefined
      : undefined,
  });

  const tileContent = getTileContent({
    featuredText,
    mediaPictogram: pictogramIsOnDisplay ? mediaPictogram : undefined,
    mediaImage: imageIsOnDisplay ? mediaImage : undefined,
    iconContent,
  });

  const ctl_role = get_CTL_role({ layoutStyle });

  const {
    containerRef,
    activeBreakpoint,
  } = useContainerSize<HTMLDivElement>();

  return (
    <div className="enj-CustomTile-wrapper" ref={containerRef}>
      <Tile
        className={`${wrapperClassNames} ${className} enj-CustomTile-${activeBreakpoint}`}
        aria-label={`${componentTitle} tile`}
        role={ctl_role}
        onClick={() => {
          handleCustomTileClick({ modalIsAvailable, setModalIsOpen });
        }}
      >
        {linksTo ? (
          <>{React.cloneElement(LinkWrapper, {}, tileContent)}</>
        ) : (
          tileContent
        )}
      </Tile>

      {modalIsAvailable && modalIsOpen !== undefined && (
        <ContentModal
          isOpen={!!modalIsOpen}
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

export default TileVariants;
