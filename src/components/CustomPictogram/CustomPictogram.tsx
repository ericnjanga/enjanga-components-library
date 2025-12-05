/**
 * CustomPictogram:
 * ---------------
 * The CustomPictogram ...
 */

import clsx from 'clsx';
import { CP_propsType } from './libs/types';
import { CP_getPictogram, CI_getSize } from './libs/helpers';

const CustomPictogram = ({ name, size = 'md', className }: CP_propsType) => {
  const Pictogram = CP_getPictogram({ name });
  const { sizeWidth, sizeHeight } = CI_getSize(size);

  return (
    <Pictogram
      className={clsx(className)}
      width={`${sizeWidth}rem`}
      height={`${sizeHeight}rem`}
      aria-label={`${name} pictogram`}
      aria-hidden="true"
    />
  );
};

export default CustomPictogram;
