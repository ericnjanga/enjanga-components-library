import { Hills, AppDeveloper, Leadership } from '@carbon/pictograms-react';
import type { ComponentType, SVGProps } from 'react';
import {
  CI_nameOpt,
  CI_nameType,
  CI_sizeType,
  CI_sizeDimensions,
} from './types';

// Fixed type guard function
export const CI_isValidIconName = (name: unknown): name is CI_nameType => {
  return CI_nameOpt.includes(name as CI_nameType);
};

export const CI_pictogramMap: Record<
  CI_nameType, // CI_propsType['name'],
  ComponentType<SVGProps<SVGSVGElement>>
> = {
  Hills,
  'App Developer': AppDeveloper,
  Leadership,
};

// Calculates the icon width and height based on the size type provided
export const CI_getSize = (size: CI_sizeType): CI_sizeDimensions => {
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
