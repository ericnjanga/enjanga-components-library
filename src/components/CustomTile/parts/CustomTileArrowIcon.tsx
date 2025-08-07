/**
 * TODO:
 * ----------
 * Move this icon as a separate component in the library
 */

import { CustomTileArrowIconProps } from './ct-types';
import { ArrowRight, ArrowUpRight } from '@carbon/icons-react';

export const CustomTileArrowIcon = ({
  title,
  orientation,
}: CustomTileArrowIconProps) => {
  const C = orientation === 'Right' ? ArrowRight : ArrowUpRight;

  return (
    <C
      className="enj-icon"
      width="1.3rem"
      height="1.3rem"
      aria-label={`${title} pictogram`}
      aria-hidden="true"
    />
  );
};
