import clsx from 'clsx';
import Link from 'next/link';
import {
  CustomTileContentProps,
  CustomTileCSSClassesProps,
  CustomTileLinkWrapperProps,
  LinkWrapperType,
} from './ct-types';
import CustomIcon from '@/components/CustomIcon';
import { isValidIconName } from '@/components/CustomIcon/CustomIcon';
import { CustomTileContent, CustomTileIcon } from './ct-atom-parts';

// Component's CSS classes
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
}: CustomTileLinkWrapperProps): LinkWrapperType => {
  const linkIsExternal = linksTo && linkTarget && linkTarget === '_blank';
  const customProps = {
    className: 'enj-CustomTile-link',
    'aria-label': `Navigate to ${title}${
      linkIsExternal ? ' (opens in new tab)' : ''
    }`,
  };

  console.log(`.....${linksTo}....${linkIsExternal}....`);

  return linksTo ? (
    linkIsExternal ? (
      <a
        href={linksTo}
        target={linkTarget}
        rel={linkTarget === '_blank' ? 'noopener noreferrer' : undefined}
        {...customProps}
      />
    ) : (
      <Link
        href={linksTo}
        passHref
        legacyBehavior
        target={linkTarget}
        {...customProps}
      />
    )
  ) : (
    <></>
  );
};

// Puts together component's core content
export const getTileContent = ({
  iconName,
  title,
  text,
  textLength,
}: CustomTileContentProps) => {
  const iconNameIsValid = isValidIconName(iconName);

  return (
    <div>
      {iconName && iconNameIsValid && (
        <CustomIcon name={iconName} className={clsx('enj-CustomTile-icon')} />
      )}
      <CustomTileContent title={title} text={text} textLength={textLength} />
      <CustomTileIcon title={title} />
    </div>
  );
};
