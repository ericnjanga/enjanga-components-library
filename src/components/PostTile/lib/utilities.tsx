import clsx from 'clsx';  
import { ArrowIcon } from '@/components/ArrowIcon/ArrowIcon'; 
import { PTL_iconContentPropsType } from './types'; 
import { PTL_linkWrapperPropsType, LinkWrapperType } from './types'; 
import { CTL_globalContentPropsType } from './types'; 
import { FeatureText } from '@/components/FeatureText';
import { Image } from 'enjanga-core-setup/next';

// Component's CSS classes
/**
 * APPLY ONLY HOVER CLASS WHEN:
 * 1) THE COMPONENT NEEDS AN ARTIFICIAL HOVER STATE
 * 2) THERE IS VALID REASON TO CLICK
 *
 * ..... enj-postTile-has-hover-effect
 */
 

export const getPostTileCSSClasses = () => 
  clsx('enj-postTile', `enj-postTile--card`, {
    'enj-postTile--has-link': true, // Indicates that component opens a link  
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




// Puts together component's core content
export const getTileContent = ({
  featuredText, 
  mediaImage,
  iconContent,
}: CTL_globalContentPropsType) => {
  // Passing custom classes down the pipeline ...
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








// LinkWrapper pattern for cleanliness and maintainability of all functionality
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
