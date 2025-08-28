import { Hills, AppDeveloper, Leadership } from '@carbon/pictograms-react';
import type { ComponentType, SVGProps } from 'react';
import {
  CP_nameOpt,
  CP_nameType,
  CP_sizeType,
  CP_sizeDimensions,
} from './types';

// Fixed type guard function
export const CI_isValidPictogram = (name: unknown): name is CP_nameType => {
  return CP_nameOpt.includes(name as CP_nameType);
};

export const CI_pictogramMap: Record<
  CP_nameType, // CP_propsType['name'],
  ComponentType<SVGProps<SVGSVGElement>>
> = {
  Hills,
  'App Developer': AppDeveloper,
  Leadership,
};

// Calculates the icon width and height based on the size type provided
export const CI_getSize = (size: CP_sizeType): CP_sizeDimensions => {
  let sizeDim;

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
  return { sizeWidth: sizeDim, sizeHeight: sizeDim };
};
