/**
 * CustomIcon:
 * ---------------
 * The CustomIcon ...
 */

import clsx from 'clsx';
import { CI_propsType, pictogramMap } from './libs/types';

/**
 * NOTE:
 * -----
 * width="3rem" height="3rem" must be controlled externally
 */

const CustomIcon = ({ name, className }: CI_propsType) => {
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
