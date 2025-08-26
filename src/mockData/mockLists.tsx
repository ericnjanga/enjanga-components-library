import { LIT_propsType } from '@/components/ListItem/libs/types';
import {
  LST_propsType,
  LST_typeOpt,
  LST_typePropsType,
} from '@/components/List/libs/types';
import CustomPictogram from '@/components/CustomPictogram/CustomPictogram';
import {
  HDL_tagPropsType,
  HDL_tagOpt,
} from '@/components/HeadlinedList/libs/types';
import { HDG_levelPropsType } from '@/components/Heading/libs/types';
import { HDL_propsType } from '@/components/HeadlinedList/libs/types';

// Mock lists ...
export const mockListUnlinked = [
  { id: '1', content: 'Carbon Design System', href: undefined },
  {
    id: '2',
    content: 'NextJS: The React Framework for the Web',
    href: undefined,
  },
  {
    id: '3',
    content: 'Cloud-Native — Create digital experiences at scale',
    href: undefined,
  },
] as LIT_propsType[];

export const mockListLinked = [
  {
    id: '1',
    content: 'Carbon Design System',
    href: 'https://carbondesignsystem.com',
  },
  {
    id: '2',
    content: 'NextJS: The React Framework for the Web',
    href: 'https://nextjs.org',
  },
  {
    id: '3',
    content: 'Cloud-Native — Create digital experiences at scale',
    href: 'https://www.contentful.com/',
  },
] as LIT_propsType[];

export const mockListMixed = [
  {
    id: '1',
    content: 'NextJS: The React Framework for the Web',
    href: 'https://nextjs.org',
  },
  {
    id: '2',
    content: 'Cloud-Native — Create digital experiences at scale',
    href: undefined,
    children: (
      <>
        <span> </span>
        <span>🔔</span>
        Notify Me {/* JSX Fragment */}
      </>
    ),
  },
  {
    id: '3',
    content: 'Carbon Design System',
    href: undefined,
    children: (
      <>
        <span> </span>
        <CustomPictogram name="Leadership" size="sm" /> {/* JSX Fragment */}
      </>
    ),
  },
] as LIT_propsType[];

// For ListItem.stories.tsx ...
export const mockListItemArgs = {
  cssClass: '',
  content:
    'Danish ice cream dragée wafer topping topping icing chocolate chupa chups.',
  href: undefined,
  children: undefined,
} as LIT_propsType;

// For HeadlinedLis.stories.tsx ...
export const mockHeadlinedListArgs = {
  wrapper: {
    tag: HDL_tagOpt[0] as HDL_tagPropsType,
    cssClass: '',
  },
  heading: {
    children: 'My Awesome List',
    level: 3 as HDG_levelPropsType,
    cssClass: 'custom-heading-class',
  },
  list: {
    type: LST_typeOpt[0] as LST_typePropsType,
    cssClass: 'custom-list-class',
    content: [...mockListUnlinked],
  },
} as HDL_propsType;
