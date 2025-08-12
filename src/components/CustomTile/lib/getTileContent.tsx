import clsx from 'clsx';
import { CTL_globalContentPropsType } from './types';
import { CustomIcon } from '@/components/CustomIcon';
import { CI_isValidIconName } from '@/components/CustomIcon/libs/helpers';
import { CustomTileArrowIcon } from '../parts/CustomTileArrowIcon';
import CustomTileSkeleton from '../parts/CustomTileSkeleton';
import { FeatureText } from '@/components/FeatureText';

// Puts together component's core content
export const getTileContent = ({
  heading,
  headingLevel,
  headingMaxLength,

  iconName,
  blurb,
  blurbLength,
  link,
}: CTL_globalContentPropsType) => {
  // ...
  const iconNameIsValid = CI_isValidIconName(iconName);
  const arrowIconOrientation = link.isExternal ? 'UpRight' : 'Right';

  if (!heading || !blurb) {
    return <CustomTileSkeleton />;
  }

  return (
    <>
      {iconName && iconNameIsValid && (
        <CustomIcon name={iconName} className={clsx('enj-CustomTile-icon')} />
      )}

      <FeatureText
        heading={heading}
        headingLevel={headingLevel}
        headingMaxLength={headingMaxLength}
        plainText={blurb}
        blurbLength={blurbLength}
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
