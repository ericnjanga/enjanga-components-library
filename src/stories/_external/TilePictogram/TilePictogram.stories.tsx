import type { Meta, StoryObj } from '@storybook/react';
import TilePictogram from '../../../components/TilePictogram';
import { argTypesPictogramTileStories } from '@/mockData/stories/argTypes';
import { argsPictogramTile } from '@/mockData/stories/args/argsPictogramTile';
import { styleHeadingLabel } from '@/mockData/mixed';
import { mockRichTextSmall } from '@/mockData/mockRichText';

const meta: Meta<typeof TilePictogram> = {
  title: 'External Components/TilePictogram',
  component: TilePictogram,
  args: {
    ...argsPictogramTile,
  },
  argTypes: {
    ...argTypesPictogramTileStories,
  },
};

export default meta;
type Story = StoryObj<typeof TilePictogram>;

export const Default: Story = {
  render: () => (
    <div style={{ margin: '0 auto', maxWidth: '800px' }}>
      <TilePictogram {...argsPictogramTile} />
    </div>
  ),
};

export const WithModal: Story = {
  render: () => (
    <div style={{ margin: '0 auto', maxWidth: '800px' }}>
        <TilePictogram
          {...argsPictogramTile}
          modal={{
            richDescription: mockRichTextSmall.description,
          }}
        />
    </div>
  ),
};
