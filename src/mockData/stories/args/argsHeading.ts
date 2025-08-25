import { mockHeading } from '@/mockData/mixed';
import { HDG_propsType } from '@/components/Heading/libs/types';

// Heading.stories.tsx ...
export const argsHeadingPlain: Partial<HDG_propsType> = {
  className: '',
  level: 1,
  children: mockHeading.plain,
};
export const argsHeadingJSX: Partial<HDG_propsType> = {
  className: '',
  level: 1,
  children: mockHeading.jsx,
};
