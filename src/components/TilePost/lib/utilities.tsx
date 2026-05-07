import clsx from 'clsx';
import { ArrowIcon } from '@/components/ArrowIcon/ArrowIcon';
import { PTL_iconContentPropsType } from './types';
import { CTL_globalContentPropsType } from './types';
import { FeatureText } from '@/components/FeatureText';

export const getPostTileCSSClasses = () => 
  clsx('enj-postTile', `enj-postTile--card`, {
    'enj-postTile--has-link': true,
    'enj-postTile--has-icon': true,
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
      <FeatureText {...featuredTextLocalProps} />

      {iconContent && iconContent}
    </>
  );
};
