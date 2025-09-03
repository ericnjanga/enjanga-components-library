import {
  Question,
  Hills,
  AppDeveloper,
  Leadership,
  DevicePairing,
  CodeExplanation,
  MagicWand,
  User,
  UserInterface,
  Collaboration,
  Presentation,
  Transform_01,
  Networking_04,
  Goals,
  TransactionalTrust,
  Teacher,
} from '@carbon/pictograms-react';
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

// ...
export const isValidPictogramName = (name: string): name is CP_nameType => {
  return name in CP_pictogramMap;
};

// ...
export const CP_pictogramMap: Record<
  CP_nameType, // CP_propsType['name'],
  ComponentType<SVGProps<SVGSVGElement>>
> = {
  Question,
  Hills,
  'App Developer': AppDeveloper,
  Leadership,
  DevicePairing,
  CodeExplanation,
  MagicWand,
  User,
  UserInterface,
  Collaboration,
  Presentation,
  Transform_01,
  Networking_04,
  Goals,
  TransactionalTrust,
  Teacher,
};

// ...
export const CP_getPictogram = ({
  name, //, size
}: {
  name: string;
  // size?: {
  //   width: string,
  //   height: string
  // }
}): ComponentType<SVGProps<SVGSVGElement>> => {
  const PictogramComponent = isValidPictogramName(name)
    ? CP_pictogramMap[name]
    : CP_pictogramMap.Question;

  // if (size) {
  //   return <PictogramComponent style={{ width: size.width, height: size.height }} />;
  // }

  return PictogramComponent;
};

// Calculates the icon width and height based on the size type provided
export const CI_getSize = (size: CP_sizeType): CP_sizeDimensions => {
  let sizeDim;

  switch (size) {
    case 'sm':
      sizeDim = 1.25;
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
