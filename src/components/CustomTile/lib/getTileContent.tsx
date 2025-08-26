import clsx from 'clsx';
import { CTL_globalContentPropsType } from './types';
import { CustomPictogram } from '@/components/CustomPictogram';
import { CI_isValidMediaIcon } from '@/components/CustomPictogram/libs/helpers';
import { ArrowIcon } from '@/components/ArrowIcon/ArrowIcon';
import { FeatureText } from '@/components/FeatureText';
import { getHeadingContent } from './getHeadingContent';
import { AIC_propsType } from '@/components/ArrowIcon/libs/types';

// Puts together component's core content
export const getTileContent = ({
  featuredText,

  layoutStyle,

  media,
  mediaIcon,
  mediaImage,

  link,
}: CTL_globalContentPropsType) => {
  // ...
  const mediaIconIsValid =
    media === 'icon' ? CI_isValidMediaIcon(mediaIcon) : false;
  let arrowIconOrientation = 'UpRight' as AIC_propsType['orientation'];
  let arrowIconTitle = '';

  // Conditions for displaying the icon ...
  const iconIsOnDisplay =
    media === 'icon' &&
    layoutStyle !== 'banner' &&
    mediaIcon &&
    mediaIconIsValid;

  // Conditions for displaying the image ...
  const imageIsOnDisplay = media === 'image' && layoutStyle !== 'banner'; // &&
  // mediaIcon &&
  // mediaIconIsValid;

  // ...
  if (link.isAvailable) {
    arrowIconOrientation = link.isExternal ? 'UpRight' : 'Right';
    arrowIconTitle = getHeadingContent(featuredText);
  }

  return (
    <>
      {iconIsOnDisplay && (
        <CustomPictogram
          name={mediaIcon}
          className={clsx('enj-CustomTile-icon')}
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

      <FeatureText {...featuredText} />

      {link.isAvailable && (
        <ArrowIcon title={arrowIconTitle} orientation={arrowIconOrientation} />
      )}
    </>
  );
};
