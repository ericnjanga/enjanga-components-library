import clsx from 'clsx';
import { ArrowIcon } from '@/components/ArrowIcon/ArrowIcon';
import { PTL_iconContentPropsType } from './types';
import { PTL_linkWrapperPropsType, LinkWrapperType } from './types';
import { CTL_globalContentPropsType } from './types';
import { FeatureText } from '@/components/FeatureText';
import { Image } from 'enjanga-core-setup/next';

export const getPostTileCSSClasses = () => 
  clsx('enj-postTile', `enj-postTile--card`, {
    'enj-postTile--has-link': true,
    'enj-postTile--has-icon': true,
    'enj-postTile--has-img': true,
  });


export const getIconContent = ({
  title,
  iconName,
}: PTL_iconContentPropsType) => {
  return (
    <div className="enj-postTile-icon-wrapper">
      {iconName && (
        <ArrowIcon
          className="enj-postTile-icon"
          title={title}
          name={iconName}
        />
      )}
    </div>
  );
};

export const getTileContent = ({
  featuredText,
  mediaImage,
  iconContent,
}: CTL_globalContentPropsType) => {
  const featuredTextLocalProps = {
    ...featuredText,
    heading: {
      ...featuredText.heading,
      className: 'enj-postTile-title',
    },
  };

  return (
    <>
      <Image
        className='enj-postTile-image object-cover'
        width={mediaImage?.width}
        height={mediaImage?.height}
        src={mediaImage?.url}
        alt={mediaImage?.alt}
        aria-hidden="true"
      />

      <FeatureText {...featuredTextLocalProps} />

      {iconContent && iconContent}
    </>
  );
};

export const getLinkWrapper = ({
  heading,
  linksTo,
}: PTL_linkWrapperPropsType): LinkWrapperType => {
  const customProps = {
    className: 'enj-postTile-anchor-tag',
    'aria-label': `Navigate to ${heading}`,
  };

  return linksTo ? (
    <a
      href={linksTo}
      target="_self"
      {...customProps}
    />
  ) : (
    <></>
  );
};
