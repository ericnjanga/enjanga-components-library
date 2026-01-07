import { PGL_linkWrapperPropsType, LinkWrapperType } from './types';

// LinkWrapper pattern for cleanliness and maintainability of all functionality
export const getLinkWrapper = ({
  heading,
  linksTo,
  linkTarget,
  linkIsExternal,
}: PGL_linkWrapperPropsType): LinkWrapperType => {
  const customProps = {
    className: 'enj-PictogramTile-anchor-tag',
    'aria-label': `Navigate to ${heading}${
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