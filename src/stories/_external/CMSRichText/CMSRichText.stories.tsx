import type { Meta, StoryObj } from '@storybook/react';
import CMSRichText from '../../../components/CMSRichText/CMSRichText';
import { project } from '@/mockData/project';

const activeLang = 'en';
const meta: Meta<typeof CMSRichText> = {
  title: 'External Components/CMSRichText',
  component: CMSRichText,
  tags: [],
  args: {
    data: {
      ...project?.data[activeLang]?.description,
    },
  },
  argTypes: {
    data: {
      control: 'object',
      description:
        'Contentful Rich Text data object containing a `json` field with an array of rich text `content` nodes. Used to render formatted content from the CMS.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof CMSRichText>;

export const Default: Story = {};

export const SkeletonLoader: Story = {
  args: {
    data: undefined,
    // The animated skeleton will show up if "title" or "text" props are undefined
  },
};
