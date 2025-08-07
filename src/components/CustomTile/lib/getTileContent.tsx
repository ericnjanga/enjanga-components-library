import clsx from 'clsx';
import { CustomTileGlobalContentProps } from './../parts/ct-types';
import CustomIcon from '@/components/CustomIcon';
import { isValidIconName } from '@/components/CustomIcon/CustomIcon';
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
  const iconNameIsValid = isValidIconName(iconName);
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
        blurb={blurb}
        titleLength={titleLength}
        blurbLength={blurbLength}
      />

      {link.isAvailable && (
        <CustomTileArrowIcon title={title} orientation={arrowIconOrientation} />
      )}
    </>
  );
};
