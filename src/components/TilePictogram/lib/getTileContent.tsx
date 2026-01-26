import clsx from 'clsx';
import { PGL_globalContentPropsType } from './types';
import { CustomPictogram } from '@/components/CustomPictogram';
import { FeatureText } from '@/components/FeatureText';
import { Image } from 'enjanga-core-setup/next';

export const getTileContent = ({
  featuredText,
  mediaPictogram,
  mediaImage,
  iconContent,
}: PGL_globalContentPropsType) => {
  const featuredTextLocalProps = {
    ...featuredText,
    heading: {
      ...featuredText.heading,
      className: 'enj-PictogramTile-title',
    },
  };

  return (
    <>
      {mediaPictogram && (
        <CustomPictogram
          name={mediaPictogram}
          className={clsx('enj-PictogramTile-pictogram')}
        />
      )}

      {mediaImage && (
        <Image
          className='enj-PictogramTile-image object-cover'
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
