import clsx from 'clsx';
import { PGL_globalContentPropsType } from './types';
import { CustomPictogram } from '@/components/CustomPictogram';
import { FeatureText } from '@/components/FeatureText';
import { Information } from '@carbon/icons-react';

export const getTileContent = ({
  featuredText,
  pictogram,
  modalIsAvailable,
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
      {pictogram && (
        <CustomPictogram
          name={pictogram}
          className={clsx('enj-PictogramTile-pictogram')}
        />
      )} 

      <FeatureText {...featuredTextLocalProps} />

      {modalIsAvailable && <Information className="enj-CustomTile-icon" />}
    </>
  );
};
