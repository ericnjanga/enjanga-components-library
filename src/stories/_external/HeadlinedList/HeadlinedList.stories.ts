import type { Meta, StoryObj } from '@storybook/react';
import HeadlinedList from '../../../components/HeadlinedList';
import {
  HDG_levelPropsType,
  HDG_levelOpt,
} from '@/components/Heading/libs/types';
import {
  HDL_tagPropsType,
  HDL_tagOpt,
} from '@/components/HeadlinedList/libs/types';
import { LST_typeOpt, LST_typePropsType } from '@/components/List/libs/types';

const sharedArgs = {
  wrapper: {
    tag: HDL_tagOpt[0] as HDL_tagPropsType,
    cssClass: '',
  },
  heading: {
    content: 'My Awesome List',
    level: 3 as HDG_levelPropsType,
    cssClass: 'custom-heading-class',
  },
  list: {
    type: LST_typeOpt[0] as LST_typePropsType,
    cssClass: 'custom-list-class',
    content: [
      { id: '1', name: 'First Item', href: '#' },
      { id: '2', name: 'Second Item', href: '#' },
      { id: '3', name: 'Third Item', href: '#' },
    ],
  },
};

const meta: Meta<typeof HeadlinedList> = {
  title: 'External Components/HeadlinedList',
  component: HeadlinedList,

  /**
   * NOTE:
   * ---------
   * It's best to use control: { type: 'object' } when we have nested args like:
   * - wrapper.tag, wrapper.cssClass
   * - heading.content
   */
  argTypes: {
    wrapper: {
      description: 'Wrapper configuration',
      control: {
        type: 'object',
      },
    },
    heading: {
      description: 'heading configuration',
      control: {
        type: 'object',
      },
    },
    list: {
      description: 'list configuration',
      control: {
        type: 'object',
      },
    },
  },
  args: {
    ...sharedArgs,
  },
  parameters: {
    docs: {
      description: {
        component:
          'HeadlinedList displays a semantic heading followed by a list (ordered or unordered). Customize layout and structure using wrapper and list options.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof HeadlinedList>;

export const Default: Story = {
  args: { ...sharedArgs },
};

export const EmptyList: Story = {
  args: {
    list: undefined,
  },
};

export const EmptyListAndHeading: Story = {
  args: {
    list: undefined,
    heading: {
      ...sharedArgs.heading,
      content: undefined,
    },
  },
};

export const H1List: Story = {
  args: {
    ...sharedArgs,
    heading: {
      ...sharedArgs.heading,
      level: 1,
    },
  },
};

export const H2List: Story = {
  args: {
    ...sharedArgs,
    heading: {
      ...sharedArgs.heading,
      level: 2,
    },
  },
};

export const H3List: Story = {
  args: {
    ...sharedArgs,
    heading: {
      ...sharedArgs.heading,
      level: 3,
    },
  },
};

export const H4List: Story = {
  args: {
    ...sharedArgs,
    heading: {
      ...sharedArgs.heading,
      level: 4,
    },
  },
};

export const H5List: Story = {
  args: {
    ...sharedArgs,
    heading: {
      ...sharedArgs.heading,
      level: 5,
    },
  },
};

export const H6List: Story = {
  args: {
    ...sharedArgs,
    heading: {
      ...sharedArgs.heading,
      level: 6,
    },
  },
};

// export const CustomWrapperAndHeading: Story = {
//   args: {
//     wrapper: {
//       tag: 'div',
//       cssClass: 'bg-gray-100 p-4',
//     },
//     heading: {
//       content: 'Custom Layout',
//       level: HDG_levelOpt[0] as HDG_levelPropsType,
//       cssClass: 'text-blue-600',
//     },
//   },
// };
