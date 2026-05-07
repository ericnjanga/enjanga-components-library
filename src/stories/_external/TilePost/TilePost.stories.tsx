import type { Meta, StoryObj } from '@storybook/react';
import TilePost from '../../../components/TilePost/TilePost';
import { argsTypesPostTileStories } from '@/mockData/stories/argTypes';
import { argsPostTile } from '@/mockData/stories/args/argsPostTile';
import { styleHeadingLabel } from '@/mockData/mixed';

const meta: Meta<typeof TilePost> = {
  title: 'External Components/TilePost',
  component: TilePost,
  args: {
    ...argsPostTile.default,
  },
  argTypes: {
    ...argsTypesPostTileStories,
  },
};

export default meta;
type Story = StoryObj<typeof TilePost>;

export const Default: Story = {
  render: (args) => {
    const argsCards_Default = {
      ...argsPostTile.default,
    };

    return (
      <div style={{ margin: '0 auto', maxWidth: '800px' }}>
        <section id="specificities">
          <h1 style={{ marginTop: '2.5rem' }}>Specificities</h1>

          <div style={{ marginBottom: '2.5rem' }}>
            <span style={{ ...styleHeadingLabel }}>Default</span>
            <TilePost {...argsCards_Default} />
          </div>

          <div style={{ marginBottom: '2.5rem' }}>
            <span style={{ ...styleHeadingLabel }}>IBM® Engineering Lifecycle Optimization Engineering Insights</span>
            <TilePost {...argsPostTile.engineeringInsights} />
          </div>

          <div style={{ marginBottom: '2.5rem' }}>
            <span style={{ ...styleHeadingLabel }}>IBM® Knowledge Catalog Premium</span>
            <TilePost {...argsPostTile.knowledgeCatalogPremium} />
          </div>
        </section>
      </div>
    );
  },
};
