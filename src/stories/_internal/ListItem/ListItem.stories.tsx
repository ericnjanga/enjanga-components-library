import type { Meta, StoryObj } from '@storybook/react';
import { ListItem } from '../../../components/ListItem';
import CustomIcon from '@/components/CustomIcon/CustomIcon';
import { mockListItemArgs } from '@/mockData/mockLists';

const meta: Meta<typeof ListItem> = {
  title: 'Internal Components/ListItem',
  component: ListItem,
  args: {
    ...mockListItemArgs,
  },
  argTypes: {
    cssClass: {
      control: 'text',
      description: '###',
    },
    href: {
      control: 'text',
      description: '###',
    },
    children: {
      control: 'object',
      description: '###',
    },
  },
  parameters: {
    docs: {
      description: {
        component: '###',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ListItem>;

export const Default: Story = {};

export const Empty: Story = {
  args: {
    ...mockListItemArgs,
    content: undefined,
  },
};

export const Linked: Story = {
  args: {
    ...mockListItemArgs,
    content: 'NextJS: The React Framework for the Web',
    href: 'https://nextjs.org',
  },
};

export const WithRandomChildren: Story = {
  args: {
    ...mockListItemArgs,
    content: 'NextJS: The React Framework for the Web',
    href: 'https://nextjs.org',
    children: (
      <>
        <span> </span>
        <span>🔔</span>
        Notify Me {/* JSX Fragment */}
      </>
    ),
  },
};

export const WithChildrenComponent: Story = {
  args: {
    ...mockListItemArgs,
    content: 'NextJS: The React Framework for the Web',
    href: 'https://nextjs.org',
    children: (
      <>
        <span> </span>
        <CustomIcon name="Leadership" /> {/* JSX Fragment */}
      </>
    ),
  },
};
