import type { Meta, StoryObj } from '@storybook/react';
import { ListItem } from '../../../components/ListItem';
import CustomIcon from '@/components/CustomIcon/CustomIcon';

const sharedArgs = {
  cssClass: '',
  content:
    'Danish ice cream dragée wafer topping topping icing chocolate chupa chups.',
  href: undefined,
  children: undefined,
};

const meta: Meta<typeof ListItem> = {
  title: 'Internal Components/ListItem',
  component: ListItem,
  args: {
    ...sharedArgs,
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
    ...sharedArgs,
    content: undefined,
  },
};

export const Linked: Story = {
  args: {
    ...sharedArgs,
    content: 'NextJS: The React Framework for the Web',
    href: 'https://nextjs.org',
  },
};

export const WithRandomChildren: Story = {
  args: {
    ...sharedArgs,
    content: 'NextJS: The React Framework for the Web',
    href: 'https://nextjs.org',
    children: (
      <>
        <span>🔔</span> Notify Me {/* JSX Fragment */}
      </>
    ),
  },
};

export const WithChildrenComponent: Story = {
  args: {
    ...sharedArgs,
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
