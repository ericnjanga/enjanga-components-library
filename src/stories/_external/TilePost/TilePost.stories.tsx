import type { Meta, StoryObj } from '@storybook/react';
import TilePost from '../../../components/TilePost/TilePost';
import { argTypesTilePostStories } from '@/libs/mockData/stories/argTypes';
import { argsTilePost } from '@/libs/mockData/stories/args/argsTilePost';
import { styleHeadingLabel } from '@/libs/mockData/mixed';

const meta: Meta<typeof TilePost> = {
  title: 'External Components/TilePost',
  component: TilePost,
  args: {
    ...argsTilePost.default,
  },
  argTypes: {
    ...argTypesTilePostStories,
  },
};

export default meta;
type Story = StoryObj<typeof TilePost>;

export const Default: Story = {
  render: (args) => {
    const randomUrls = [
      'https://www.ibm.com',
      'https://www.mozilla.org',
      'https://www.wikipedia.org',
      'https://www.bbc.com',
      'https://www.nationalgeographic.com',
    ];

    const handleTileClick = () => {
      const randomUrl =
        randomUrls[Math.floor(Math.random() * randomUrls.length)];
      window.location.assign(randomUrl);
    };

    return (
      <div style={{ margin: '0 auto', maxWidth: '800px' }}>
        <section id="specificities">
          <h1 style={{ marginTop: '2.5rem' }}>Specificities</h1>

          <div style={{ marginBottom: '2.5rem' }}>
            <span style={{ ...styleHeadingLabel }}>Default</span>
            <TilePost
              {...argsTilePost.default}
              linksTo="https://www.ibm.com"
              linkTarget="_blank"
            />
          </div>

          <div style={{ marginBottom: '2.5rem' }}>
            <span style={{ ...styleHeadingLabel }}>
              IBM® Engineering Lifecycle Optimization Engineering Insights
            </span>
            <TilePost
              {...argsTilePost.engineeringInsights}
              onClick={handleTileClick}
            />
          </div>

          <div style={{ marginBottom: '2.5rem' }}>
            <span style={{ ...styleHeadingLabel }}>
              IBM® Knowledge Catalog Premium
            </span>
            <TilePost
              {...argsTilePost.knowledgeCatalogPremium}
              onClick={handleTileClick}
            />
          </div>
        </section>
      </div>
    );
  },
};
