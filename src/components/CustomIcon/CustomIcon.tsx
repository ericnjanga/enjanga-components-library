import clsx from 'clsx';
import { Hills, AppDeveloper, Leadership } from '@carbon/pictograms-react';
import type { ComponentType, SVGProps } from 'react';

export interface CustomIconProps {
  name: 'Hills' | 'App Developer' | 'Leadership';
  className?: string;
}

export const customIconsList = ['Hills', 'App Developer', 'Leadership'];

const pictogramMap: Record<
  CustomIconProps['name'],
  ComponentType<SVGProps<SVGSVGElement>>
> = {
  Hills,
  'App Developer': AppDeveloper,
  Leadership,
};

/**
 * NOTE:
 * -----
 * width="3rem" height="3rem" must be controlled externally
 */

const CustomIcon = ({ name, className }: CustomIconProps) => {
  const Pictogram = pictogramMap[name];

  return (
    <Pictogram
      className={clsx(className)}
      width="3rem"
      height="3rem"
      aria-label={`${name} pictogram`}
      aria-hidden="true"
    />
  );
};

export default CustomIcon;
