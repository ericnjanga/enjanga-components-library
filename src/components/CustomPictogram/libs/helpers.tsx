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
  Carbon,
  Multitask,
  PoughkeepsieBridge,
  AssetManagement,
  Presenter,
} from '@carbon/pictograms-react';
import * as CarbonPictograms from '@carbon/pictograms-react';
import * as CarbonIcons from '@carbon/icons-react';
import type { ComponentType, SVGProps } from 'react';
import {
  CP_nameOpt,
  CP_nameType,
  CP_sizeType,
  CP_sizeDimensions,
} from './types';

const CP_dynamicPictograms = CarbonPictograms as Record<
  string,
  ComponentType<SVGProps<SVGSVGElement>>
>;

const CP_dynamicIcons = CarbonIcons as Record<
  string,
  ComponentType<SVGProps<SVGSVGElement>>
>;

const CP_resolveDynamicPictogram = (
  exportName: string,
): ComponentType<SVGProps<SVGSVGElement>> => {
  const pictogram = CP_dynamicPictograms[exportName];

  if (pictogram) {
    return pictogram;
  }

  const nodeEnv = (globalThis as { process?: { env?: { NODE_ENV?: string } } })
    .process?.env?.NODE_ENV;

  if (nodeEnv !== 'production') {
    console.warn(
      `[CustomPictogram] Missing Carbon pictogram export "${exportName}". Falling back to "Question". Ensure @carbon/pictograms-react version supports this pictogram.`,
    );
  }

  return Question;
};

const Containers_02 = CP_resolveDynamicPictogram('Containers_02');
const DataStore = CP_resolveDynamicPictogram('DataStore');
const DataPrivacyKey = CP_resolveDynamicPictogram('DataPrivacyKey');

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
  Carbon,
  Multitask,
  PoughkeepsieBridge,
  AssetManagement,
  Presenter,
  Containers_02,
  DataStore,
  DataPrivacyKey,
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
  if (isValidPictogramName(name)) {
    return CP_pictogramMap[name];
  }

  const dynamicPictogram = CP_dynamicPictograms[name];

  if (dynamicPictogram) {
    return dynamicPictogram;
  }

  const dynamicIcon = CP_dynamicIcons[name];

  if (dynamicIcon) {
    return dynamicIcon;
  }

  return CP_pictogramMap.Question;
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
