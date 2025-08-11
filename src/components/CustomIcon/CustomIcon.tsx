/**
 * CustomIcon:
 * ---------------
 * The CustomIcon ...
 */

import clsx from 'clsx';
import { CI_propsType, pictogramMap } from './libs/types';

const CustomIcon = ({ name, size = 'md', className }: CI_propsType) => {
  const Pictogram = pictogramMap[name];
  let sizeDim, sizeWidth, sizeHeight;

  /**
   * NOTE: Optimize this later
   * -------------
   */
  switch (size) {
    case 'sm':
      sizeDim = 1.5;
      break;
    case 'md':
      sizeDim = 3;
      break;
    case 'lg':
      sizeDim = 4.5;
      break;
    case 'xl':
      sizeDim = 6;
      break;
  }

  // ...
  sizeWidth = sizeDim;
  sizeHeight = sizeDim;
  /** ------------- */

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

export default CustomIcon;
