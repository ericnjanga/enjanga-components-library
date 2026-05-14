import type { Meta, StoryObj } from '@storybook/react';
import TileValue from '../../../components/TileValue';
import { mockRichTextLarge, mockRichTextSmall } from '@/mockData/mockRichText';

const meta: Meta<typeof TileValue> = {
  title: 'External Components/TileValue',
  component: TileValue,
  args: {
    pictogramName: 'Leadership',
    title: 'Leadership principles',
    slug: 'leadership-principles',
    description: mockRichTextSmall.description,
  },
};

export default meta;
type Story = StoryObj<typeof TileValue>;

export const Default: Story = {
  render: (args) => (
    <div style={{ margin: '0 auto', maxWidth: '800px' }}>
      <TileValue {...args} />
    </div>
  ),
};

export const LongDescription: Story = {
  args: {
    description: mockRichTextLarge.description,
    title: 'Governance and accountability',
    slug: 'Transforming legacy applications into scalable, accessible, and maintainable platforms while preserving critical business workflows and minimizing operational disruption.',
    pictogramName: 'DataScience',
  },
  render: (args) => (
    <div style={{ margin: '0 auto', maxWidth: '800px' }}>
      <TileValue {...args} />
    </div>
  ),
};
