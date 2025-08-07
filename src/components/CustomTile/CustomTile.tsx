/**
 * CustomTile:
 * ---------------------------------------------
 * A customizable tile component that can optionally link to internal (arrow right) or external links (arrow up right)
 *  
 * @param {string} className  - Custom CSS class
 * @param {string} title      - The main title/text of the tile
 * @param {string} blurb      - Text content's blurb
 * @param {string} plainDescription   - Text content's description (in string format)
 * @param {json} richDescription      - Text content's description (in rich format from a headless CMS like ContentFul)
 * @param {number} [titleLength]      - Optional character limit for title
 * @param {number} [blurbLength]      - Optional character limit for text
 * @param {'vertical'|'horizontal'} [stackOrder='vertical'] - Content arrangement
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
import { CustomIconProps } from '../CustomIcon';
import { CustomTileStackOrder, LinkTargetType } from './parts/ct-types';
import { CustomTileProps1Validation } from './parts/ct-types-validation';
import { ContentModal } from '../ContentModal/ContentModal';
import type { Node } from '@contentful/rich-text-types';
import CustomTileDescription from './parts/CustomTileDescription';
import { handleCustomTileClick } from './parts/utils';
import { validateCustomTileProps } from './lib/propsValidation';

// Props types ...
export type CustomTileProps = {
  /**
   * Custom CSS class
   */
  className?: string;
  /**
   * Layout direction for tile content
   * @default 'vertical'
   */
  stackOrder?: CustomTileStackOrder['name'];

  /**
   * Maximum character count for title content
   * @remarks Truncates with ellipsis if exceeded
   */
  titleLength?: number;

  /**
   * Maximum character count for blurb content
   * @remarks Truncates with ellipsis if exceeded
   */
  blurbLength?: number;

  /**
   * Icon identifier (matches CustomIcon component)
   * @see {@link CustomIconProps}
   */
  iconName?: CustomIconProps['name'];

  /**
   * Enables modal behavior when tile is clicked. If "true", "title" and "text" props will be rendered as modal content.
   * @remarks Modal content will show the tile's title and text
   */
  showsModal?: boolean;

  /**
   * Primary heading text
   * @required
   */
  title?: string;

  /**
   * Descriptive content text
   * @required
   */
  blurb?: string;

  /**
   * Modal main content text (in string format)
   * @required
   */
  plainDescription?: string;

  /**
   * Modal main content text (in rich format from a headless CMS like ContentFul)
   * @required
   */
  richDescription?: { json: { content: Node[] } };

  /**
   * Destination URL/path when tile is clickable
   * @remarks Requires either linksTo or showsModal
   */
  linksTo?: string;

  /**
   * Link target behavior
   * @default '_self'
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#target}
   */
  linkTarget?: LinkTargetType['name'];
} & CustomTileProps1Validation;

const CustomTile = ({
  className,
  stackOrder = 'vertical',
  titleLength,
  blurbLength,
  iconName,
  showsModal,
  title,
  blurb,
  plainDescription,
  richDescription,
  linksTo,
  linkTarget = '_self' as LinkTargetType['name'],
}: CustomTileProps) => {
  // Controlling modal appearance:
  // (The state is only created if showsModal is provided)
  const [modalIsOpen, setModalIsOpen] = useState(
    showsModal !== undefined ? false : undefined
  );

  // Get all the CSS classes the component's wrapper needs ...
  const wrapperClassNames = getCustomTileCSSClasses({
    stackOrder,
    linksTo,
    linkTarget,
  });

  // ...
  const linkIsActive = showsModal !== undefined || linksTo !== undefined;
  const linkIsExternal =
    linksTo && linkTarget && linkTarget === '_blank' ? true : false;

  // ...
  const tileContent = getTileContent({
    iconName,
    title,
    blurb,
    titleLength,
    blurbLength,
    link: {
      isActive: linkIsActive,
      isExternal: linkIsExternal,
    },
  });

  const LinkWrapper = getLinkWrapper({
    title,
    linksTo,
    linkTarget,
    linkIsExternal,
  });

  // ...
  validateCustomTileProps({ linksTo, linkTarget, showsModal });

  return (
    <div className="enj-CustomTile-wrapper">
      <Tile
        className={`${wrapperClassNames} ${className}`}
        aria-label={`${title} tile`}
        onClick={() => handleCustomTileClick({ showsModal, setModalIsOpen })}
      >
        {linksTo ? (
          <>{React.cloneElement(LinkWrapper, {}, tileContent)}</>
        ) : (
          tileContent
        )}
      </Tile>

      {showsModal && title && modalIsOpen !== undefined && (
        <ContentModal
          isOpen={modalIsOpen}
          modalHeading={title}
          modalSecondaryButtonText="Cancel"
          setIsOpen={setModalIsOpen}
        >
          <CustomTileDescription
            plainDescription={plainDescription}
            richDescription={richDescription}
          />
        </ContentModal>
      )}
    </div>
  );
};

export default CustomTile;
