import { ArgTypes } from '@storybook/react';
import { HDG_levelOpt, HDG_propsType } from '@/components/Heading/libs/types';

// Heading.stories.tsx
export const headingArgTypes: Partial<ArgTypes<HDG_propsType>> = {
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
