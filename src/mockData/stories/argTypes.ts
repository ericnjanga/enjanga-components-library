import { ArgTypes } from '@storybook/react';
import { HDG_levelOpt, HDG_propsType } from '@/components/Heading/libs/types';
import { LST_propsType, LST_typeOpt } from '@/components/List/libs/types';
import { SMT_propsType } from '@/components/SmartText/libs/types';
import { BNN_propsType } from '@/components/Banner/libs/types';
import { AIC_propsType } from '@/components/ArrowIcon/libs/types';

// generic
export const classNameStoryArgType: Partial<ArgTypes> = {
  className: {
    control: 'text',
    description: 'Custom CSS class applied to the component wrapper',
  },
};

// Heading.stories.tsx
export const argTypesHeadingStories: Partial<ArgTypes<HDG_propsType>> = {
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
export const argTypesListStories: Partial<ArgTypes<LST_propsType>> = {
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

// SmartText.stories.tsx
export const argTypesSmartTextStories: Partial<ArgTypes<SMT_propsType>> = {
  ...classNameStoryArgType,
  plainText: { control: 'text', description: '... soon ...' },
  richText: { control: 'object', description: '... soon ...' },
};

export const argTypesFeatureTextStories = {
  ...classNameStoryArgType,
  ...argTypesHeadingStories,
  ...argTypesSmartTextStories,
};

export const argTypesBannerStories: Partial<ArgTypes<BNN_propsType>> = {
  ...classNameStoryArgType,
  featuredText: {
    ...argTypesFeatureTextStories,
  },
  isHuge: {
    control: 'select',
    options: [true, false],
    description: '... soon ...',
  },
};

export const argTypesArrowIconStories: Partial<ArgTypes<AIC_propsType>> = {
  title: { control: 'text' },
  orientation: {
    control: 'select',
    options: ['Right', 'UpRight'],
    description: '... soon ...',
  },
};
