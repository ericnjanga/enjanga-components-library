import { ArrowIcon } from '@/components/ArrowIcon/ArrowIcon';
import { CTL_iconContentPropsType } from './types';

export const getIconContent = ({
  title,
  modalIsAvailable,
  arrowIconOrientation,
  link,
}: CTL_iconContentPropsType) => {
  return (
    <div className="enj-CustomTile-icon-wrapper">
      {link.isAvailable && !modalIsAvailable && (
        <ArrowIcon
          className="enj-CustomTile-icon"
          title={title}
          orientation={arrowIconOrientation}
        />
      )}

      {modalIsAvailable && (
        <ArrowIcon title={title} orientation={arrowIconOrientation} />
      )}
    </div>
  );
};
