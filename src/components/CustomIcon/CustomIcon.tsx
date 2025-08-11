/**
 * CustomIcon:
 * ---------------
 * The CustomIcon ...
 */

import clsx from 'clsx';
import { CI_propsType } from './libs/types';
import { CI_pictogramMap, CI_getSize } from './libs/helpers';

const CustomIcon = ({ name, size = 'md', className }: CI_propsType) => {
  const Pictogram = CI_pictogramMap[name];
  const { sizeWidth, sizeHeight } = CI_getSize(size);

  console.log('????*******', sizeWidth, sizeHeight);

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
