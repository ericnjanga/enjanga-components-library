import clsx from 'clsx';
import { PGL_globalContentPropsType } from './types';
import { CustomPictogram } from '@/components/CustomPictogram';
import { FeatureText } from '@/components/FeatureText';

export const getTileContent = ({
  featuredText,
  mediaPictogram,
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

      {/* image support removed */}

      <FeatureText {...featuredTextLocalProps} />

      {iconContent && iconContent}
    </>
  );
};
