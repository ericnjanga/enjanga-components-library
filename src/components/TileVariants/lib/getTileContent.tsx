import clsx from 'clsx';
import { CTL_globalContentPropsType } from './types';
import { CustomPictogram } from '@/components/CustomPictogram';
import { FeatureText } from '@/components/FeatureText';
import Image from 'next/image';

export const getTileContent = ({
  featuredText,
  mediaPictogram,
  mediaImage,
  iconContent,
}: CTL_globalContentPropsType) => {
  const featuredTextLocalProps = {
    ...featuredText,
    heading: {
      ...featuredText.heading,
      className: 'enj-CustomTile-title',
    },
  };

  return (
    <>
      {mediaPictogram && (
        <CustomPictogram
          name={mediaPictogram}
          className={clsx('enj-CustomTile-pictogram')}
        />
      )}

      {mediaImage && (
        <Image
          className='enj-CustomTile-image object-cover'
          width={mediaImage.width}
          height={mediaImage.height}
          src={mediaImage.url}
          alt={mediaImage.alt}
          aria-hidden="true"
        />
      )}

      <FeatureText {...featuredTextLocalProps} />

      {iconContent && iconContent}
    </>
  );
};
