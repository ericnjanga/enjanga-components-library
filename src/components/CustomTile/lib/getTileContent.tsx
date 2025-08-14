import clsx from 'clsx';
import { CTL_globalContentPropsType } from './types';
import { CustomIcon } from '@/components/CustomIcon';
import { CI_isValidMediaIcon } from '@/components/CustomIcon/libs/helpers';
import { CustomTileArrowIcon } from '../parts/CustomTileArrowIcon';
import CustomTileSkeleton from '../parts/CustomTileSkeleton';
import { FeatureText } from '@/components/FeatureText';

// Puts together component's core content
export const getTileContent = ({
  heading,
  headingLevel,
  headingMaxLength,

  media,
  mediaIcon,
  mediaImage,

  blurb,
  blurbMaxLength,
  link,
}: CTL_globalContentPropsType) => {
  // ...
  const mediaIconIsValid = CI_isValidMediaIcon(mediaIcon);
  const arrowIconOrientation = link.isExternal ? 'UpRight' : 'Right';

  if (!heading || !blurb) {
    return <CustomTileSkeleton />;
  }

  return (
    <>
      {mediaIcon && mediaIconIsValid && (
        <CustomIcon name={mediaIcon} className={clsx('enj-CustomTile-icon')} />
      )}

      <FeatureText
        heading={heading}
        headingLevel={headingLevel}
        headingMaxLength={headingMaxLength}
        plainText={blurb}
        blurbMaxLength={blurbMaxLength}
      />

      {link.isAvailable && (
        <CustomTileArrowIcon
          title={heading}
          orientation={arrowIconOrientation}
        />
      )}
    </>
  );
};
