// HeadlinedList props type
// ----------------

import { HDG_propsType } from '@/components/Heading/libs/types';
import { LST_propsType } from '@/components/List/libs/types';

export const HDL_tagOpt = ['div', 'section'] as const;
export type HDL_tagPropsType = (typeof HDL_tagOpt)[number]; // Creating union type 'div' | ...

export interface HDL_propsType {
  wrapper?: {
    tag: HDL_tagPropsType;
    cssClass?: string;
  };
  heading: HDG_propsType;
  list?: LST_propsType;
}
