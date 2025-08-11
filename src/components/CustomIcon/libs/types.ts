// CustomIcon props type
// ----------------

import { Hills, AppDeveloper, Leadership } from '@carbon/pictograms-react';
import type { ComponentType, SVGProps } from 'react';

export const CI_nameOpt = ['Hills', 'App Developer', 'Leadership'] as const;
export const CI_sizeOpt = ['sm', 'md', 'lg', 'xl'] as const;
export type CI_nameType = (typeof CI_nameOpt)[number]; // Creating union type 'aaa' | 'bbb' | '...
export type CI_sizeType = (typeof CI_sizeOpt)[number]; // Creating union type 'sm' | 'md' | '...

export interface CI_propsType {
  name: CI_nameType;
  size?: CI_sizeType;
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
