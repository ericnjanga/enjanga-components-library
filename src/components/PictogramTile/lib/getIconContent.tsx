import { ArrowIcon } from '@/components/ArrowIcon/ArrowIcon';
import { Information } from '@carbon/icons-react';
import { PGL_iconContentPropsType } from './types';

export const getIconContent = ({
  title,
  modalIsAvailable,
  iconName,
}: PGL_iconContentPropsType) => {
  return (
    <div className="enj-PictogramTile-icon-wrapper">
      {iconName && (
        <ArrowIcon
          className="enj-PictogramTile-icon"
          title={title}
          name={iconName}
        />
      )}

      {modalIsAvailable && (
        <Information className="enj-PictogramTile-icon" aria-label={title} />
      )}
    </div>
  );
};