import type { Meta, StoryObj } from '@storybook/react';
import List from '../../../components/List';
import { LST_typeOpt, LST_typePropsType } from '@/components/List/libs/types';

const listLinked = [
  {
    id: '1',
    name: 'Carbon Design System',
    href: 'https://carbondesignsystem.com',
  },
  {
    id: '2',
    name: 'NextJS: The React Framework for the Web',
    href: 'https://nextjs.org',
  },
  {
    id: '3',
    name: 'Cloud-Native — Create digital experiences at scale',
    href: 'https://www.contentful.com/',
  },
];
const listUnlinked = [
  { id: '1', name: 'Carbon Design System', href: undefined },
  { id: '2', name: 'NextJS: The React Framework for the Web', href: undefined },
  {
    id: '3',
    name: 'Cloud-Native — Create digital experiences at scale',
    href: undefined,
  },
];
const listMixed = [
  { id: '1', name: 'Carbon Design System', href: undefined },
  {
    id: '2',
    name: 'NextJS: The React Framework for the Web',
    href: 'https://nextjs.org',
  },
  {
    id: '3',
    name: 'Cloud-Native — Create digital experiences at scale',
    href: undefined,
  },
];

const sharedArgs = {
  type: LST_typeOpt[0] as LST_typePropsType,
  cssClass: '',
  content: [...listLinked],
};

const meta: Meta<typeof List> = {
  title: 'External Components/List',
  component: List,
  args: { ...sharedArgs },
  parameters: {
    docs: {
      description: {
        component:
          'The `List` component renders an ordered or unordered list with support for links. Each item is rendered using a `ListItem` component.',
      },
    },
  },
  argTypes: {
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
  },
};

export default meta;
type Story = StoryObj<typeof List>;

export const EmptyList: Story = {
  args: {
    content: [],
  },
};

export const ListWithLinks: Story = {};

export const ListWithoutLinks: Story = {
  args: {
    ...sharedArgs,
    content: [...listUnlinked],
  },
};

export const ListWithMixedData: Story = {
  args: {
    ...sharedArgs,
    content: [...listMixed],
  },
};
export const OrderedList: Story = {
  args: {
    type: 'ordered',
  },
};

export const UnorderedList: Story = {
  args: {
    type: 'unordered',
  },
};
