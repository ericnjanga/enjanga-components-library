import { ArgTypes } from '@storybook/react';
import { HDG_levelOpt, HDG_propsType } from '@/components/Heading/libs/types';
import { LST_propsType, LST_typeOpt } from '@/components/List/libs/types';
// Heading.stories.tsx
export const argTypesHeading: Partial<ArgTypes<HDG_propsType>> = {
  className: { control: 'text' },
  level: {
    control: 'select',
    options: [...HDG_levelOpt],
    description: '... soon ...',
  },
  children: {
    control: 'object',
    description: '... soon ...',
  },
};
export const argTypesList: Partial<ArgTypes<LST_propsType>> = {
  type: {
    control: 'radio',
    options: [...LST_typeOpt],
    description: 'Type of list to render (ordered or unordered)',
  },
  cssClass: {
    control: 'text',
    description: 'Custom CSS class applied to the list wrapper',
  },
  content: {
    control: 'object',
    description: 'Array of list items',
  },
};
