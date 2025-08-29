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

export const EmptyVersion: Story = {
  args: {
    data: undefined,
    // The animated skeleton will show up if "title" or "text" props are undefined
  },
  render: (args) => {
    return (
      <>
        <header style={{ marginBottom: '2.5rem' }}>
          <h1 style={{ color: 'blue' }}>
            What happens if the expected props aren't there yet?
          </h1>
          <p style={{ fontSize: '1.3rem', color: 'blue' }}>
            Assuming a delayed API response request for instance. Some props may
            be arriving sooner than the others or they might all be absent.
          </p>
        </header>

        <CMSRichText {...args} />
      </>
    );
  },
};
