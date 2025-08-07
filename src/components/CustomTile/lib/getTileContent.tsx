import clsx from 'clsx';
import { CustomTileGlobalContentProps } from './../parts/ct-types';
import CustomIcon from '@/components/CustomIcon';
import { isValidIconName } from '@/components/CustomIcon/CustomIcon';
import { CustomTileContent, CustomTileIcon } from './../parts/ct-atom-parts';
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
  const iconNameIsValid = isValidIconName(iconName);

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
      {link.isActive && (
        <CustomTileIcon title={title} linkIsExternal={link.isExternal} />
      )}
    </>
  );
};
