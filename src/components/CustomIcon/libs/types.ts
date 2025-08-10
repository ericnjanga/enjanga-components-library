// CustomIcon props type
// ----------------

import { Hills, AppDeveloper, Leadership } from '@carbon/pictograms-react';
import type { ComponentType, SVGProps } from 'react';

export const CI_nameOpt = ['Hills', 'App Developer', 'Leadership'] as const;
export type CI_nameType = (typeof CI_nameOpt)[number]; // Creating union type 'aaa' | 'bbb' | '...

export interface CI_propsType {
  name: CI_nameType;
  className?: string;
}

// Fixed type guard function
export const isValidIconName = (name: unknown): name is CI_nameType => {
  return CI_nameOpt.includes(name as CI_nameType);
};

export const pictogramMap: Record<
  CI_propsType['name'],
  ComponentType<SVGProps<SVGSVGElement>>
> = {
  Hills,
  'App Developer': AppDeveloper,
  Leadership,
};
