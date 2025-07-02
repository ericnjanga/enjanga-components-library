import clsx from 'clsx';
import Link from 'next/link';
import {
  CustomTileContentProps,
  CustomTileCSSClassesProps,
  CustomTileLinkWrapperProps,
  LinkWrapperType,
} from './ct-types';
import CustomIcon from '@/components/CustomIcon';
import { CustomTileContent, CustomTileIcon } from './ct-atom-parts';

// Component's CSS classes
export const getCustomTileCSSClasses = ({
  stackOrder,
  route,
  isExternal,
}: CustomTileCSSClassesProps) =>
  clsx('enj-CustomTile', `enj-CustomTile--${stackOrder}`, {
    'enj-CustomTile--link': route,
    'enj-CustomTile--external': isExternal && route, // Only apply if route exists
  });

// LinkWrapper pattern for cleanliness and maintainability of all functionality
export const getLinkWrapper = ({
  title,
  route,
  isExternal,
  target,
}: CustomTileLinkWrapperProps): LinkWrapperType => {
  const customProps = {
    className: 'enj-CustomTile-link',
    'aria-label': `Navigate to ${title}${
      target === '_blank' ? ' (opens in new tab)' : ''
    }`,
  };

  return route ? (
    isExternal ? (
      <a
        href={route}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        {...customProps}
      />
    ) : (
      <Link
        href={route}
        passHref
        legacyBehavior
        target={target}
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
}: CustomTileContentProps) => (
  <>
    {iconName && (
      <CustomIcon name={iconName} className={clsx('enj-CustomTile-icon')} />
    )}
    <CustomTileContent title={title} text={text} textLength={textLength} />
    <CustomTileIcon title={title} />
  </>
);
