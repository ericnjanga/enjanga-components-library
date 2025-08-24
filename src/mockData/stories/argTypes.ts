import { ArgTypes } from '@storybook/react';
import { HDG_levelOpt, HDG_propsType } from '@/components/Heading/libs/types';
import { LST_propsType, LST_typeOpt } from '@/components/List/libs/types';

// generic
export const classNameStoryArgType: Partial<ArgTypes> = {
  className: {
    control: 'text',
    description: 'Custom CSS class applied to the component wrapper',
  },
};

// Heading.stories.tsx
export const headingStoryArgTypes: Partial<ArgTypes<HDG_propsType>> = {
  ...classNameStoryArgType,
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

// List.stories.tsx
export const listStoryArgTypes: Partial<ArgTypes<LST_propsType>> = {
  ...classNameStoryArgType,
  type: {
    control: 'radio',
    options: [...LST_typeOpt],
    description: 'Type of list to render (ordered or unordered)',
  },
  content: {
    control: 'object',
    description: 'Array of list items',
  },
};
