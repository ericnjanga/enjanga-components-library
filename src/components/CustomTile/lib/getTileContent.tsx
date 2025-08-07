import clsx from 'clsx';
import { CustomTileGlobalContentProps } from './../parts/ct-types';
import CustomIcon from '@/components/CustomIcon';
import { isValidIconName } from '@/components/CustomIcon/CustomIcon';
import { CustomTileContent } from '../parts/CustomTileContent';
import { CustomTileArrowIcon } from '../parts/CustomTileArrowIcon';
import CustomTileSkeleton from '../parts/CustomTileSkeleton';

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

      <CustomTileContent
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
