import type { Meta, StoryObj } from '@storybook/react';
import PostTile from '../../../components/PostTile/PostTile';
import { Grid, Column } from '@carbon/react';
import { argsTypesPostTileStories } from '@/mockData/stories/argTypes'; 
import { argsPostTile } from '@/mockData/stories/args/argsPostTile';
import { styleHeadingLabel } from '@/mockData/mixed';

const activeLang = 'en';

const meta: Meta<typeof PostTile> = {
  title: 'External Components/PostTile',
  component: PostTile,
  args: {
    ...argsPostTile.default,
  },
  argTypes: {
    ...argsTypesPostTileStories,
  },
};

export default meta;
type Story = StoryObj<typeof PostTile>;

/**
 * Cards versions
 * -------------------------------
 */
export const Cards: Story = {
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
              <PostTile {...argsCards_Default} />
            </div>   
          </section>  
      </div>
    );
  },
};

  