import clsx from 'clsx';
import { CTL_globalContentPropsType } from './types';
import { CustomIcon } from '@/components/CustomIcon';
import { CI_isValidMediaIcon } from '@/components/CustomIcon/libs/helpers';
import { ArrowIcon } from '@/components/ArrowIcon/ArrowIcon';
import { FeatureText } from '@/components/FeatureText';
import { getHeadingContent } from './getHeadingContent';

// Puts together component's core content
export const getTileContent = ({
  featuredText,

  media,
  mediaIcon,
  mediaImage,

  link,
}: CTL_globalContentPropsType) => {
  // ...
  const mediaIconIsValid = CI_isValidMediaIcon(mediaIcon);
  const arrowIconOrientation = link.isExternal ? 'UpRight' : 'Right';
  const arrowIconTitle = getHeadingContent(featuredText);

  return (
    <>
      {mediaIcon && mediaIconIsValid && (
        <CustomIcon name={mediaIcon} className={clsx('enj-CustomTile-icon')} />
      )}

      <FeatureText {...featuredText} />

      {link.isAvailable && (
        <ArrowIcon title={arrowIconTitle} orientation={arrowIconOrientation} />
      )}
    </>
  );
};
