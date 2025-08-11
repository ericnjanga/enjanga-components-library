import clsx from 'clsx';
import { CustomTileGlobalContentProps } from './types';
import { CustomIcon } from '@/components/CustomIcon';
import { CI_isValidIconName } from '@/components/CustomIcon/libs/helpers';
import { CustomTileArrowIcon } from '../parts/CustomTileArrowIcon';
import CustomTileSkeleton from '../parts/CustomTileSkeleton';
import { FeatureText } from '@/components/FeatureText';

// Puts together component's core content
export const getTileContent = ({
  iconName,
  title,
  blurb,
  titleLength,
  blurbLength,
  link,
}: CustomTileGlobalContentProps) => {
  // ...
  const iconNameIsValid = CI_isValidIconName(iconName);
  const arrowIconOrientation = link.isExternal ? 'UpRight' : 'Right';

  if (!title || !blurb) {
    return <CustomTileSkeleton />;
  }

  return (
    <>
      {iconName && iconNameIsValid && (
        <CustomIcon name={iconName} className={clsx('enj-CustomTile-icon')} />
      )}

      <FeatureText
        title={title}
        plainText={blurb}
        titleLength={titleLength}
        blurbLength={blurbLength}
      />

      {link.isAvailable && (
        <CustomTileArrowIcon title={title} orientation={arrowIconOrientation} />
      )}
    </>
  );
};
