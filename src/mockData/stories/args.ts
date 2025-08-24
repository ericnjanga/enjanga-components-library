import { mockHeading } from '../mixed';
import { HDG_propsType } from '@/components/Heading/libs/types';
import {
  LST_typeOpt,
  LST_typePropsType,
  LST_propsType,
} from '@/components/List/libs/types';
import { mockListUnlinked } from '../mockLists';

// Heading.stories.tsx ...
export const argsHeading: Partial<HDG_propsType> = {
  className: '',
  level: 1,
  children: mockHeading.plain,
};

// List.stories.tsx ...
export const argsList = {
  type: LST_typeOpt[0] as LST_typePropsType,
  cssClass: '',
  content: [...mockListUnlinked],
} as LST_propsType;
