import { ArrowIcon } from '@/components/ArrowIcon/ArrowIcon';
import { PGL_iconContentPropsType } from './types';

export const getIconContent = ({ title, iconName }: PGL_iconContentPropsType) => {
  return (
    <div className="enj-PictogramTile-icon-wrapper">
      {iconName && (
        <ArrowIcon className="enj-PictogramTile-icon" title={title} name={iconName} />
      )}
    </div>
  );
};
