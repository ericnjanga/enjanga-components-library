import clsx from 'clsx';
import { CTL_globalContentPropsType } from './types';
import { CustomPictogram } from '@/components/CustomPictogram';
import { FeatureText } from '@/components/FeatureText';

// Puts together component's core content
export const getTileContent = ({
  featuredText,
  mediaPictogram,
  mediaImage,
  iconContent,
}: CTL_globalContentPropsType) => {
  // Passing custom classes down the pipeline ...
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
        <img
          className={clsx('enj-CustomTile-image img-fluid')}
          src={mediaImage}
          alt=""
          aria-hidden="true"
        />
      )}

      <FeatureText {...featuredTextLocalProps} />

      {iconContent && iconContent}
    </>
  );
};
