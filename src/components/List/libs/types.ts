import { LIT_propsType } from '@/components/ListItem/libs/types';
// List props type
// ----------------

export const LST_typeOpt = ['unordered', 'ordered'] as const;
export type LST_typePropsType = (typeof LST_typeOpt)[number]; // Creating union type 'unordered' | ...

export interface LST_propsType {
  type?: LST_typePropsType;
  className?: string;
  content?: LIT_propsType[];
}
