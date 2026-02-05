import { ArrowIcon } from '@/components/ArrowIcon/ArrowIcon';
import { TBN_iconContentPropsType } from './types';

export const getIconContent = ({
  title,
  iconName,
}: TBN_iconContentPropsType) => {
  return (
    <div className="enj-TileBanner-icon-wrapper">
      {iconName && (
        <ArrowIcon
          className="enj-TileBanner-icon"
          title={title}
          name={iconName}
        />
      )}
    </div>
  );
};
