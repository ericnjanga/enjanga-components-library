import { ArrowIcon } from '@/components/ArrowIcon/ArrowIcon';
import { Information } from '@carbon/icons-react';
import { CTL_iconContentPropsType } from './types';

export const getIconContent = ({
  title,
  modalIsAvailable,
  arrowIconOrientation,
  link,
}: CTL_iconContentPropsType) => {
  const onlyLinkIsOnDisplay = link.isAvailable && !modalIsAvailable;
  const onlyModalIsOnDisplay = !link.isAvailable && modalIsAvailable;

  return (
    <div className="enj-CustomTile-icon-wrapper">
      {onlyLinkIsOnDisplay && (
        <ArrowIcon
          className="enj-CustomTile-icon"
          title={title}
          orientation={arrowIconOrientation}
        />
      )}

      {onlyModalIsOnDisplay && <Information />}
    </div>
  );
};
