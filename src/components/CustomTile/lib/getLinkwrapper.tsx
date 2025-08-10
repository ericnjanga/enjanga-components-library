import { CustomTileLinkWrapperProps, LinkWrapperType } from './ct-types';

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
