import { ArgTypes } from '@storybook/react';
import { HDG_levelOpt, HDG_propsType } from '@/components/Heading/libs/types';
import { LST_propsType, LST_typeOpt } from '@/components/List/libs/types';
import { SMT_propsType } from '@/components/SmartText/libs/types';
import { BNN_propsType } from '@/components/Banner/libs/types';
import { AIC_propsType } from '@/components/ArrowIcon/libs/types';
import {
  CTL_propsType,
  CTL_LayoutStyleOpt,
  CTL_MediaOpt,
  CTL_LinkTargetOpt,
} from '@/components/TileVariants/lib/types';
import {
  PGL_propsType, 
  PGL_LinkTargetOpt,
} from '@/components/TilePictogram/lib/types';
import { PTL_propsType } from '@/components/PostTile/lib/types';
import { CP_nameOpt } from '@/components/CustomPictogram/libs/types';

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
  ...classNameStoryArgType,
  title: { control: 'text' },
  name: {
    control: 'select',
    options: ['Right', 'UpRight'],
    description: '... soon ...',
  },
};

export const argsTypesPostTileStories: Partial<ArgTypes<PTL_propsType>> = {
  ...classNameStoryArgType,
  featuredText: {
    ...argTypesFeatureTextStories,
  },
  orgTitle: {
    control: 'text',
    description: '... soon ...',
  },
  orgSlug: {
    control: 'text',
    description: '... soon ...',
  },
  orgPictogramName: {
    control: 'text',
    description: 'Carbon icon name from @carbon/icons-react (e.g. IbmKnowledgeCatalogPremium)',
  },
  onClick: {
    control: false,
    description: 'Click event handler for the tile.',
  }
};

export const argTypesCustomTileStories: Partial<ArgTypes<CTL_propsType>> = {
  ...classNameStoryArgType,
  featuredText: {
    ...argTypesFeatureTextStories,
  },
  layoutStyle: {
    control: 'select',
    options: [...CTL_LayoutStyleOpt],
    description: '... soon ...',
  },
  media: {
    control: 'select',
    options: [...CTL_MediaOpt],
    description: '... soon ...',
  },
  mediaPictogram: {
    control: 'select',
    options: [...CP_nameOpt],
    description: '... soon ...',
  },
  mediaImage: {
    control: 'text',
    description: '... soon ...',
  },
  modal: {
    control: 'object',
    description: 'Modal content object: { plainDescription, richDescription }',
  },
  linksTo: {
    control: 'text',
    description: '... soon ...',
  },
  linkTarget: {
    control: 'select',
    options: [...CTL_LinkTargetOpt],
    description: '... soon ...',
  },
};

export const argTypesPictogramTileStories: Partial<ArgTypes<PGL_propsType>> = {
  ...classNameStoryArgType,
  featuredText: {
    ...argTypesFeatureTextStories,
  },
  pictogram: {
    control: 'select',
    options: [...CP_nameOpt],
    description: '... soon ...',
  }, 
  modal: {
    control: 'object',
    description: 'Modal content object: { plainDescription, richDescription }',
  }
};
