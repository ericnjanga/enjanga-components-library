import clsx from 'clsx';
import Link from 'next/link';
import {
  CustomTileGlobalContentProps,
  CustomTileContentProps,
  CustomTileCSSClassesProps,
  CustomTileLinkWrapperProps,
  LinkWrapperType,
} from './ct-types';
import CustomIcon from '@/components/CustomIcon';
import { isValidIconName } from '@/components/CustomIcon/CustomIcon';
import { CustomTileContent, CustomTileIcon } from './ct-atom-parts';

import CustomTileSkeleton from './CustomTileSkeleton';

// Component's CSS classes
/**
 * APPLY ONLY HOVER CLASS WHEN:
 * 1) THE COMPONENT NEEDS AN ARTIFICIAL HOVER STATE
 * 2) THERE IS VALID REASON TO CLICK
 *
 * ..... enj-CustomTile-has-hover-effect
 */
export const getCustomTileCSSClasses = ({
  stackOrder,
  linksTo,
  linkTarget,
}: CustomTileCSSClassesProps) =>
  clsx('enj-CustomTile', `enj-CustomTile--${stackOrder}`, {
    'enj-CustomTile--link': linksTo,
    'enj-CustomTile--external': linksTo && linkTarget === '_blank', // Only apply if link exists
  });

// LinkWrapper pattern for cleanliness and maintainability of all functionality
export const getLinkWrapper = ({
  title,
  linksTo,
  linkTarget,
  linkIsExternal,
}: CustomTileLinkWrapperProps): LinkWrapperType => {
  const customProps = {
    className: 'enj-CustomTile-anchor-tag',
    'aria-label': `Navigate to ${title}${
      linkIsExternal ? ' (opens in new tab)' : ''
    }`,
  };

  return linksTo ? (
    <a
      href={linksTo}
      target={linkTarget}
      rel={linkIsExternal ? 'noopener noreferrer' : undefined}
      {...customProps}
    />
  ) : (
    <></>
  );
};

// Puts together component's core content
export const getTileContent = ({
  iconName,
  title,
  text,
  titleLength,
  textLength,
  link,
}: CustomTileGlobalContentProps) => {
  const iconNameIsValid = isValidIconName(iconName);

  if (!title || !text) {
    return <CustomTileSkeleton />;
  }

  return (
    <>
      {iconName && iconNameIsValid && (
        <CustomIcon name={iconName} className={clsx('enj-CustomTile-icon')} />
      )}
      <CustomTileContent
        title={title}
        text={text}
        titleLength={titleLength}
        textLength={textLength}
      />
      {link.isActive && (
        <CustomTileIcon title={title} linkIsExternal={link.isExternal} />
      )}
    </>
  );
};
