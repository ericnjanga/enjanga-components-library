import { ArrowIcon } from '@/components/ArrowIcon/ArrowIcon';
import { Information } from '@carbon/icons-react';
import { CTL_iconContentPropsType } from './types';

export const getIconContent = ({
  title,
  modalIsAvailable,
  iconName,
}: CTL_iconContentPropsType) => {
  return (
    <div className="enj-CustomTile-icon-wrapper">
      {iconName && (
        <ArrowIcon
          className="enj-CustomTile-icon"
          title={title}
          name={iconName}
        />
      )}

      {modalIsAvailable && (
        <Information className="enj-CustomTile-icon" aria-label={title} />
      )}
    </div>
  );
};
