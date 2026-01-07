import type { Meta, StoryObj } from '@storybook/react';
import PictogramTile from '../../../components/PictogramTile/PictogramTile';
import { Grid, Column } from '@carbon/react';
import { argTypesPictogramTileStories } from '@/mockData/stories/argTypes';
import { argsPictogramTile } from '@/mockData/stories/args/argsPictogramTile';
import { styleHeadingLabel } from '@/mockData/mixed';

const activeLang = 'en';

const meta: Meta<typeof PictogramTile> = {
  title: 'External Components/PictogramTile',
  component: PictogramTile,
  args: {
    ...argsPictogramTile.card.default,
  },
  argTypes: {
    ...argTypesPictogramTileStories,
  },
};

export default meta;
type Story = StoryObj<typeof PictogramTile>;

/**
 * Cards versions
 * -------------------------------
 */
export const Cards: Story = {
  render: (args) => {
    const argsCards_Default = {
      ...argsPictogramTile.card.default,
    };
    const argsCards_WithIcon = {
      ...argsPictogramTile.card.withIcon,
    };
    const argsCards_WithImage = {
      ...argsPictogramTile.card.withImage,
    };
    const argsCards_WithLocalLink = {
      ...argsPictogramTile.card.withLocalLink,
    };
    const argsCards_WithExternalLink = {
      ...argsPictogramTile.card.withExternalLink,
    };
    const argsCards_WithModal = {
      ...argsPictogramTile.card.withModal,
    };

    // Compositions ...
    const argsCards_WithExternalLinkAndIcon = {
      ...argsPictogramTile.card.withExternalLinkAndIcon,
    };
    const argsCards_WithExternalLinkAndImage = {
      ...argsPictogramTile.card.withExternalLinkAndImage,
    };
    const argsCards_WithModalAndIcon = {
      ...argsPictogramTile.card.withModalAndIcon,
    };
    const argsCards_WithModalAndImage = {
      ...argsPictogramTile.card.withModalAndImage,
    };

    // Specificities with rich text ...
    const argsCards_WithExternalLinkAndIconAndRichText = {
      ...argsPictogramTile.card.withExternalLinkAndIconAndRichText,
    };
    const argsCards_WithExternalLinkAndImageAndRichText = {
      ...argsPictogramTile.card.withExternalLinkAndImageAndRichText,
    };
    const argsCards_WithModalAndIconAndRichText = {
      ...argsPictogramTile.card.withModalAndIconAndRichText,
    };
    const argsCards_WithModalAndImageAndRichText = {
      ...argsPictogramTile.card.withModalAndImageAndRichText,
    };

    return (
      <Grid>
        <Column lg={16} md={8} sm={4} style={{ marginBottom: '1.5rem' }}>
          <section id="specificities">
            <h1 style={{ marginTop: '2.5rem' }}>Specificities</h1>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>Default</span>
              <PictogramTile {...argsCards_Default} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>With Pictogram</span>
              <PictogramTile {...argsCards_WithIcon} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>With Image</span>
              <PictogramTile {...argsCards_WithImage} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>With local Link</span>
              <PictogramTile {...argsCards_WithLocalLink} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>With external Link</span>
              <PictogramTile {...argsCards_WithExternalLink} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>With Modal</span>
              <PictogramTile {...argsCards_WithModal} />
            </div>
          </section>

          <section id="compositions">
            <h1 style={{ marginTop: '2.5rem' }}>Compositions</h1>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>External Link + Icon</span>
              <PictogramTile {...argsCards_WithExternalLinkAndIcon} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>External Link + Image</span>
              <PictogramTile {...argsCards_WithExternalLinkAndImage} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>Modal + Icon</span>
              <PictogramTile {...argsCards_WithModalAndIcon} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>Modal + Image</span>
              <PictogramTile {...argsCards_WithModalAndImage} />
            </div>
          </section>

          <section id="rich-text">
            <h1 style={{ marginTop: '2.5rem' }}>Rich Text</h1>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>External Link + Icon + Rich Text</span>
              <PictogramTile {...argsCards_WithExternalLinkAndIconAndRichText} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>External Link + Image + Rich Text</span>
              <PictogramTile {...argsCards_WithExternalLinkAndImageAndRichText} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>Modal + Icon + Rich Text</span>
              <PictogramTile {...argsCards_WithModalAndIconAndRichText} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>Modal + Image + Rich Text</span>
              <PictogramTile {...argsCards_WithModalAndImageAndRichText} />
            </div>
          </section>
        </Column>
      </Grid>
    );
  },
};

/**
 * Banner versions
 * -------------------------------
 */
export const Banners: Story = {
  render: (args) => {
    const argsBanners_Default = {
      ...argsPictogramTile.banner.default,
    };
    const argsBanners_WithIcon = {
      ...argsPictogramTile.banner.withIcon,
    };
    const argsBanners_WithImage = {
      ...argsPictogramTile.banner.withImage,
    };
    const argsBanners_WithLocalLink = {
      ...argsPictogramTile.banner.withLocalLink,
    };
    const argsBanners_WithExternalLink = {
      ...argsPictogramTile.banner.withExternalLink,
    };
    const argsBanners_WithModal = {
      ...argsPictogramTile.banner.withModal,
    };

    // Compositions ...
    const argsBanners_WithExternalLinkAndIcon = {
      ...argsPictogramTile.banner.withExternalLinkAndIcon,
    };
    const argsBanners_WithExternalLinkAndImage = {
      ...argsPictogramTile.banner.withExternalLinkAndImage,
    };
    const argsBanners_WithModalAndIcon = {
      ...argsPictogramTile.banner.withModalAndIcon,
    };
    const argsBanners_WithModalAndImage = {
      ...argsPictogramTile.banner.withModalAndImage,
    };

    // Specificities with rich text ...
    const argsBanners_WithExternalLinkAndIconAndRichText = {
      ...argsPictogramTile.banner.withExternalLinkAndIconAndRichText,
    };
    const argsBanners_WithExternalLinkAndImageAndRichText = {
      ...argsPictogramTile.banner.withExternalLinkAndImageAndRichText,
    };
    const argsBanners_WithModalAndIconAndRichText = {
      ...argsPictogramTile.banner.withModalAndIconAndRichText,
    };
    const argsBanners_WithModalAndImageAndRichText = {
      ...argsPictogramTile.banner.withModalAndImageAndRichText,
    };

    return (
      <Grid>
        <Column lg={16} md={8} sm={4} style={{ marginBottom: '1.5rem' }}>
          <section id="specificities">
            <h1 style={{ marginTop: '2.5rem' }}>Specificities</h1>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>Default</span>
              <PictogramTile {...argsBanners_Default} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>With Pictogram</span>
              <PictogramTile {...argsBanners_WithIcon} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>With Image</span>
              <PictogramTile {...argsBanners_WithImage} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>With local Link</span>
              <PictogramTile {...argsBanners_WithLocalLink} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>With external Link</span>
              <PictogramTile {...argsBanners_WithExternalLink} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>With Modal</span>
              <PictogramTile {...argsBanners_WithModal} />
            </div>
          </section>

          <section id="compositions">
            <h1 style={{ marginTop: '2.5rem' }}>Compositions</h1>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>External Link + Icon</span>
              <PictogramTile {...argsBanners_WithExternalLinkAndIcon} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>External Link + Image</span>
              <PictogramTile {...argsBanners_WithExternalLinkAndImage} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>Modal + Icon</span>
              <PictogramTile {...argsBanners_WithModalAndIcon} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>Modal + Image</span>
              <PictogramTile {...argsBanners_WithModalAndImage} />
            </div>
          </section>

          <section id="rich-text">
            <h1 style={{ marginTop: '2.5rem' }}>Rich Text</h1>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>External Link + Icon + Rich Text</span>
              <PictogramTile {...argsBanners_WithExternalLinkAndIconAndRichText} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>External Link + Image + Rich Text</span>
              <PictogramTile {...argsBanners_WithExternalLinkAndImageAndRichText} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>Modal + Icon + Rich Text</span>
              <PictogramTile {...argsBanners_WithModalAndIconAndRichText} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>Modal + Image + Rich Text</span>
              <PictogramTile {...argsBanners_WithModalAndImageAndRichText} />
            </div>
          </section>
        </Column>
      </Grid>
    );
  },
};