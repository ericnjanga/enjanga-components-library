import {
  LST_typeOpt,
  LST_typePropsType,
  LST_propsType,
} from '@/components/List/libs/types';
import { mockListUnlinked } from '@/mockData/mockLists';

// List.stories.tsx ...
export const argsList = {
  type: LST_typeOpt[0] as LST_typePropsType,
  cssClass: '',
  content: [...mockListUnlinked],
} as LST_propsType;
