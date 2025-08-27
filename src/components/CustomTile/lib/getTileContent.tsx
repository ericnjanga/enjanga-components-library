import clsx from 'clsx';
import { CTL_globalContentPropsType } from './types';
import { CustomPictogram } from '@/components/CustomPictogram';
import { CI_isValidMediaIcon } from '@/components/CustomPictogram/libs/helpers';
import { FeatureText } from '@/components/FeatureText';
import { getHeadingContent } from './getHeadingContent';
import { AIC_propsType } from '@/components/ArrowIcon/libs/types';
import { getIconContent } from './getIconContent';

// Puts together component's core content
export const getTileContent = ({
  featuredText,

  layoutStyle,

  media,
  mediaIcon,
  mediaImage,

  modalIsAvailable,

  link,
}: CTL_globalContentPropsType) => {
  // ...
  const mediaIconIsValid =
    media === 'icon' ? CI_isValidMediaIcon(mediaIcon) : false;
  let arrowIconOrientation = 'UpRight' as AIC_propsType['orientation'];
  let arrowIconTitle = '';

  // Conditions for displaying the icon ...
  const pictogramIsOnDisplay =
    media === 'icon' &&
    layoutStyle !== 'banner' &&
    mediaIcon &&
    mediaIconIsValid;

  // Conditions for displaying the image ...
  const imageIsOnDisplay = media === 'image' && layoutStyle !== 'banner';

  // Conditions for displaying the icon ...
  const iconIsOnDisplay = link.isAvailable || modalIsAvailable;

  // ...
  if (link.isAvailable) {
    arrowIconOrientation = link.isExternal ? 'UpRight' : 'Right';
    arrowIconTitle = getHeadingContent(featuredText);
  }

  // ...
  const iconContent = getIconContent({
    title: arrowIconTitle,
    modalIsAvailable,
    arrowIconOrientation,
    link,
  });

  // Passing custom classes down the pipeline ...
  const featuredTextLocalProps = {
    ...featuredText,
    heading: {
      ...featuredText.heading,
      className: 'enj-CustomTile-title',
    },
  };

  return (
    <>
      {pictogramIsOnDisplay && (
        <CustomPictogram
          name={mediaIcon}
          className={clsx('enj-CustomTile-pictogram')}
        />
      )}

      {imageIsOnDisplay && (
        <img
          className={clsx('enj-CustomTile-image img-fluid')}
          src={mediaImage}
          alt=""
          aria-hidden="true"
        />
      )}

      <FeatureText {...featuredTextLocalProps} />

      {iconIsOnDisplay && iconContent}
    </>
  );
};
