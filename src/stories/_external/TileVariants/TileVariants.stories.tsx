import type { Meta, StoryObj } from '@storybook/react';
import TileVariants from '../../../components/TileVariants/TileVariants';
import { Grid, Column } from '@carbon/react';
import { argTypesCustomTileStories } from '@/mockData/stories/argTypes';
import { argsCustomTile } from '@/mockData/stories/args/argsCustomTile';
import { styleHeadingLabel } from '@/mockData/mixed';

const meta: Meta<typeof TileVariants> = {
  title: 'External Components/TileVariants',
  component: TileVariants,
  args: {
    ...argsCustomTile.card.default,
  },
  argTypes: {
    ...argTypesCustomTileStories,
  },
};
 
 
  

export default meta; 

/**
 * Cards versions
 * -------------------------------
 */
export const Cards: Story = {
  render: (args) => {
    const argsCards_Default = {
      ...argsCustomTile.card.default,
    };
    const argsCards_WithIcon = {
      ...argsCustomTile.card.withIcon,
    };
    const argsCards_WithImage = {
      ...argsCustomTile.card.withImage,
    };
    const argsCards_WithLocalLink = {
      ...argsCustomTile.card.withLocalLink,
    };
    const argsCards_WithExternalLink = {
      ...argsCustomTile.card.withExternalLink,
    };
    const argsCards_WithModal = {
      ...argsCustomTile.card.withModal,
    };

    // Compositions ...
    const argsCards_WithExternalLinkAndIcon = {
      ...argsCustomTile.card.withExternalLinkAndIcon,
    };
    const argsCards_WithExternalLinkAndImage = {
      ...argsCustomTile.card.withExternalLinkAndImage,
    };
    const argsCards_WithModalAndIcon = {
      ...argsCustomTile.card.withModalAndIcon,
    };
    const argsCards_WithModalAndImage = {
      ...argsCustomTile.card.withModalAndImage,
    };

    // Specificities with rich text ...
    const argsCards_WithExternalLinkAndIconAndRichText = {
      ...argsCustomTile.card.withExternalLinkAndIconAndRichText,
    };
    const argsCards_WithExternalLinkAndImageAndRichText = {
      ...argsCustomTile.card.withExternalLinkAndImageAndRichText,
    };
    const argsCards_WithModalAndIconAndRichText = {
      ...argsCustomTile.card.withModalAndIconAndRichText,
    };
    const argsCards_WithModalAndImageAndRichText = {
      ...argsCustomTile.card.withModalAndImageAndRichText,
    };

    return (
      <Grid>
        <Column lg={16} md={8} sm={4} style={{ marginBottom: '1.5rem' }}>
          <section id="specificities">
            <h1 style={{ marginTop: '2.5rem' }}>Specificities</h1>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>Default</span>
              <TileVariants {...argsCards_Default} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>With Pictogram</span>
              <TileVariants {...argsCards_WithIcon} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>With Image</span>
              <TileVariants {...argsCards_WithImage} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>With local Link</span>
              <TileVariants {...argsCards_WithLocalLink} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>With Link (external)</span>
              <TileVariants {...argsCards_WithExternalLink} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>With Modal</span>
              <TileVariants {...argsCards_WithModal} />
            </div>
          </section>

          <section id="compositions">
            <h1 style={{ marginTop: '4.5rem' }}>Compositions</h1>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>
                With Link and Pictogram
              </span>
              <TileVariants {...argsCards_WithExternalLinkAndIcon} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>With Link and Image</span>
              <TileVariants {...argsCards_WithExternalLinkAndImage} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>
                With Modal and Pictogram
              </span>
              <TileVariants {...argsCards_WithModalAndIcon} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>With Modal and Image</span>
              <TileVariants {...argsCards_WithModalAndImage} />
            </div>
          </section>

          <section id="specificities-with-rich-text">
            <h1 style={{ marginTop: '4.5rem' }}>
              Specificities with rich text
            </h1>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>
                With Link and Pictogram and rich text
              </span>
              <TileVariants {...argsCards_WithExternalLinkAndIconAndRichText} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>
                With Link and Image and rich text
              </span>
              <TileVariants {...argsCards_WithExternalLinkAndImageAndRichText} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>
                With Modal and Pictogram and rich text
              </span>
              <TileVariants {...argsCards_WithModalAndIconAndRichText} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>
                With Modal and Image and rich text
              </span>
              <TileVariants {...argsCards_WithModalAndImageAndRichText} />
            </div>
          </section>
        </Column>
      </Grid>
    );
  },
};

/**
 * Banners versions
 * -------------------------------
 */
export const Banners: Story = {
  render: (args) => {
    const argsBanner_Default = {
      ...argsCustomTile.banner.default,
    };
    const argsBanner_WithIcon = {
      ...argsCustomTile.banner.withIcon,
    };
    const argsBanner_WithImage = {
      ...argsCustomTile.banner.withImage,
    };
    const argsBanner_WithLocalLink = {
      ...argsCustomTile.banner.withLocalLink,
    };
    const argsBanner_WithExternalLink = {
      ...argsCustomTile.banner.withExternalLink,
    };
    const argsBanner_WithModal = {
      ...argsCustomTile.banner.withModal,
    };

    // Compositions ...
    const argsBanner_WithExternalLinkAndIcon = {
      ...argsCustomTile.banner.withExternalLinkAndIcon,
    };
    const argsBanner_WithExternalLinkAndImage = {
      ...argsCustomTile.banner.withExternalLinkAndImage,
    };
    const argsBanner_WithModalAndIcon = {
      ...argsCustomTile.banner.withModalAndIcon,
    };
    const argsBanner_WithModalAndImage = {
      ...argsCustomTile.banner.withModalAndImage,
    };

    // Specificities with rich text ...
    const argsBanner_WithExternalLinkAndIconAndRichText = {
      ...argsCustomTile.banner.withExternalLinkAndIconAndRichText,
    };
    const argsBanner_WithExternalLinkAndImageAndRichText = {
      ...argsCustomTile.banner.withExternalLinkAndImageAndRichText,
    };
    const argsBanner_WithModalAndIconAndRichText = {
      ...argsCustomTile.banner.withModalAndIconAndRichText,
    };
    const argsBanner_WithModalAndImageAndRichText = {
      ...argsCustomTile.banner.withModalAndImageAndRichText,
    };

    return (
      <Grid>
        <Column lg={16} md={8} sm={4} style={{ marginBottom: '1.5rem' }}>
          <section id="specificities">
            <h1 style={{ marginTop: '2.5rem' }}>Specificities</h1>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>Default</span>
              <TileVariants {...argsBanner_Default} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>With Pictogram</span>
              <TileVariants {...argsBanner_WithIcon} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>With Image</span>
              <TileVariants {...argsBanner_WithImage} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>With local Link</span>
              <TileVariants {...argsBanner_WithLocalLink} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>With Link (external)</span>
              <TileVariants {...argsBanner_WithExternalLink} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>With Modal</span>
              <TileVariants {...argsBanner_WithModal} />
            </div>
          </section>

          <section id="compositions">
            <h1 style={{ marginTop: '4.5rem' }}>Compositions</h1>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>
                With Link and Pictogram
              </span>
              <TileVariants {...argsBanner_WithExternalLinkAndIcon} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>With Link and Image</span>
              <TileVariants {...argsBanner_WithExternalLinkAndImage} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>
                With Modal and Pictogram
              </span>
              <TileVariants {...argsBanner_WithModalAndIcon} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>With Modal and Image</span>
              <TileVariants {...argsBanner_WithModalAndImage} />
            </div>
          </section>

          <section id="specificities-with-rich-text">
            <h1 style={{ marginTop: '4.5rem' }}>
              Specificities with rich text
            </h1>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>
                With Link and Pictogram and rich text
              </span>
              <TileVariants {...argsBanner_WithExternalLinkAndIconAndRichText} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>
                With Link and Image and rich text
              </span>
              <TileVariants {...argsBanner_WithExternalLinkAndImageAndRichText} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>
                With Modal and Pictogram and rich text
              </span>
              <TileVariants {...argsBanner_WithModalAndIconAndRichText} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>
                With Modal and Image and rich text
              </span>
              <TileVariants {...argsBanner_WithModalAndImageAndRichText} />
            </div>
          </section>
        </Column>
      </Grid>
    );
  },
};

export const ResponsivenessCard: Story = {
  render: (args) => {
    const argsDefault = {
      ...argsCustomTile.card.default,
    };
    const argsBanner_WithIcon = {
      ...argsCustomTile.card.withIcon,
    };
    const argsBanner_WithImage = {
      ...argsCustomTile.card.withImage,
    };
    const argsBanner_WithExternalLink = {
      ...argsCustomTile.card.withExternalLink,
    };
    const argsBanner_WithModal = {
      ...argsCustomTile.card.withModal,
    };

    // Compositions ...
    const argsBanner_WithExternalLinkAndIcon = {
      ...argsCustomTile.card.withExternalLinkAndIcon,
    };
    const argsBanner_WithExternalLinkAndImage = {
      ...argsCustomTile.card.withExternalLinkAndImage,
    };
    const argsBanner_WithModalAndIcon = {
      ...argsCustomTile.card.withModalAndIcon,
    };
    const argsBanner_WithModalAndImage = {
      ...argsCustomTile.card.withModalAndImage,
    };

    // Specificities with rich text ...
    const argsBanner_WithExternalLinkAndIconAndRichText = {
      ...argsCustomTile.card.withExternalLinkAndIconAndRichText,
    };
    const argsBanner_WithExternalLinkAndImageAndRichText = {
      ...argsCustomTile.card.withExternalLinkAndImageAndRichText,
    };
    const argsBanner_WithModalAndIconAndRichText = {
      ...argsCustomTile.card.withModalAndIconAndRichText,
    };
    const argsBanner_WithModalAndImageAndRichText = {
      ...argsCustomTile.card.withModalAndImageAndRichText,
    };

    return (
      <>
        <Grid>
          <Column lg={16}>
            <h1 style={{ textAlign: 'center' }}>Card's adaptive size</h1>
          </Column>
        </Grid>

        <section>
          <Grid>
            <Column lg={16}>
              <h3 style={{ textAlign: 'center' }}>Default Card</h3>
            </Column>
          </Grid>
          <Grid>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
              (index) => (
                <Column
                  key={index}
                  style={{ marginBottom: '1.5rem' }}
                  lg={index}
                  md={8}
                  sm={4}
                >
                  <TileVariants {...argsDefault} />
                </Column>
              )
            )}
          </Grid>
        </section>

        <section>
          <Grid>
            <Column lg={16}>
              <h3 style={{ textAlign: 'center', marginTop: '4rem' }}>
                With Pictogram
              </h3>
            </Column>
          </Grid>
          <Grid>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
              (index) => (
                <Column
                  key={index}
                  style={{ marginBottom: '1.5rem' }}
                  lg={index}
                  md={8}
                  sm={4}
                >
                  <TileVariants {...argsBanner_WithIcon} />
                </Column>
              )
            )}
          </Grid>
        </section>

        <section>
          <Grid>
            <Column lg={16}>
              <h3 style={{ textAlign: 'center', marginTop: '4rem' }}>
                With Image
              </h3>
            </Column>
          </Grid>
          <Grid>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
              (index) => (
                <Column
                  key={index}
                  style={{ marginBottom: '1.5rem' }}
                  lg={index}
                  md={8}
                  sm={4}
                >
                  <TileVariants {...argsBanner_WithImage} />
                </Column>
              )
            )}
          </Grid>
        </section>

        <section>
          <Grid>
            <Column lg={16}>
              <h3 style={{ textAlign: 'center', marginTop: '4rem' }}>
                With local/external Link
              </h3>
            </Column>
          </Grid>
          <Grid>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
              (index) => (
                <Column
                  key={index}
                  style={{ marginBottom: '1.5rem' }}
                  lg={index}
                  md={8}
                  sm={4}
                >
                  <TileVariants {...argsBanner_WithExternalLink} />
                </Column>
              )
            )}
          </Grid>
        </section>

        <section>
          <Grid>
            <Column lg={16}>
              <h3 style={{ textAlign: 'center', marginTop: '4rem' }}>
                With Modal
              </h3>
            </Column>
          </Grid>
          <Grid>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
              (index) => (
                <Column
                  key={index}
                  style={{ marginBottom: '1.5rem' }}
                  lg={index}
                  md={8}
                  sm={4}
                >
                  <TileVariants {...argsBanner_WithModal} />
                </Column>
              )
            )}
          </Grid>
        </section>

        <section>
          <Grid>
            <Column lg={16}>
              <h3 style={{ textAlign: 'center', marginTop: '4rem' }}>
                With Link (local/external) and Pictogram
              </h3>
            </Column>
          </Grid>
          <Grid>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
              (index) => (
                <Column
                  key={index}
                  style={{ marginBottom: '1.5rem' }}
                  lg={index}
                  md={8}
                  sm={4}
                >
                  <TileVariants {...argsBanner_WithExternalLinkAndIcon} />
                </Column>
              )
            )}
          </Grid>
        </section>

        <section>
          <Grid>
            <Column lg={16}>
              <h3 style={{ textAlign: 'center', marginTop: '4rem' }}>
                With Link (local/external) and Image
              </h3>
            </Column>
          </Grid>
          <Grid>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
              (index) => (
                <Column
                  key={index}
                  style={{ marginBottom: '1.5rem' }}
                  lg={index}
                  md={8}
                  sm={4}
                >
                  <TileVariants {...argsBanner_WithExternalLinkAndImage} />
                </Column>
              )
            )}
          </Grid>
        </section>

        <section>
          <Grid>
            <Column lg={16}>
              <h3 style={{ textAlign: 'center', marginTop: '4rem' }}>
                With Modal and Pictogram
              </h3>
            </Column>
          </Grid>
          <Grid>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
              (index) => (
                <Column
                  key={index}
                  style={{ marginBottom: '1.5rem' }}
                  lg={index}
                  md={8}
                  sm={4}
                >
                  <TileVariants {...argsBanner_WithModalAndIcon} />
                </Column>
              )
            )}
          </Grid>
        </section>

        <section>
          <Grid>
            <Column lg={16}>
              <h3 style={{ textAlign: 'center', marginTop: '4rem' }}>
                With Modal and Image
              </h3>
            </Column>
          </Grid>
          <Grid>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
              (index) => (
                <Column
                  key={index}
                  style={{ marginBottom: '1.5rem' }}
                  lg={index}
                  md={8}
                  sm={4}
                >
                  <TileVariants {...argsBanner_WithModalAndImage} />
                </Column>
              )
            )}
          </Grid>
        </section>

        <section>
          <Grid>
            <Column lg={16}>
              <h3 style={{ textAlign: 'center', marginTop: '4rem' }}>
                With Link (local/external) and Pictogram and rich text
              </h3>
            </Column>
          </Grid>
          <Grid>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
              (index) => (
                <Column
                  key={index}
                  style={{ marginBottom: '1.5rem' }}
                  lg={index}
                  md={8}
                  sm={4}
                >
                  <TileVariants
                    {...argsBanner_WithExternalLinkAndIconAndRichText}
                  />
                </Column>
              )
            )}
          </Grid>
        </section>

        <section>
          <Grid>
            <Column lg={16}>
              <h3 style={{ textAlign: 'center', marginTop: '4rem' }}>
                With Link (local/external) and Image and rich text
              </h3>
            </Column>
          </Grid>
          <Grid>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
              (index) => (
                <Column
                  key={index}
                  style={{ marginBottom: '1.5rem' }}
                  lg={index}
                  md={8}
                  sm={4}
                >
                  <TileVariants
                    {...argsBanner_WithExternalLinkAndImageAndRichText}
                  />
                </Column>
              )
            )}
          </Grid>
        </section>

        <section>
          <Grid>
            <Column lg={16}>
              <h3 style={{ textAlign: 'center', marginTop: '4rem' }}>
                With Modal and Pictogram and rich text
              </h3>
            </Column>
          </Grid>
          <Grid>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
              (index) => (
                <Column
                  key={index}
                  style={{ marginBottom: '1.5rem' }}
                  lg={index}
                  md={8}
                  sm={4}
                >
                  <TileVariants {...argsBanner_WithModalAndIconAndRichText} />
                </Column>
              )
            )}
          </Grid>
        </section>

        <section>
          <Grid>
            <Column lg={16}>
              <h3 style={{ textAlign: 'center', marginTop: '4rem' }}>
                With Modal and Image and rich text
              </h3>
            </Column>
          </Grid>
          <Grid>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
              (index) => (
                <Column
                  key={index}
                  style={{ marginBottom: '1.5rem' }}
                  lg={index}
                  md={8}
                  sm={4}
                >
                  <TileVariants {...argsBanner_WithModalAndImageAndRichText} />
                </Column>
              )
            )}
          </Grid>
        </section>
      </>
    );
  },
};

export const ResponsivenessBanner: Story = {
  args: {
    ...argsCustomTile.banner.withModalAndImageAndRichText,
  },
  render: (args) => {
    console.log('???????*****', args);

    return (
      <>
        <Grid>
          <Column lg={16}>
            <h3 style={{ textAlign: 'center' }}>Banner's adaptive size</h3>
          </Column>
        </Grid>
        <Grid>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
            (index) => (
              <Column
                key={index}
                style={{ marginBottom: '1.5rem' }}
                lg={index}
                md={8}
                sm={4}
              >
                <TileVariants {...args} />
              </Column>
            )
          )}
        </Grid>
      </>
    );
  },
};
export const EmptyCards: Story = {
  render: (args) => {
    // empty heading ...
    const argsCards_Default_empty1 = {
      ...argsCustomTile.card.default,
      // empty heading ...
      featuredText: {
        ...argsCustomTile.card.default.featuredText,
        heading: {
          ...argsCustomTile.card.default.featuredText.heading,
          children: undefined,
        },
      },
    };
    // empty heading & smartText ...
    const argsCards_Default_empty2 = {
      ...argsCustomTile.card.default,
      // empty heading & smartText ...
      featuredText: {
        ...argsCustomTile.card.default.featuredText,
        heading: {
          ...argsCustomTile.card.default.featuredText.heading,
          children: undefined,
        },
        smartText: {
          ...argsCustomTile.card.default.featuredText.smartText,
          plainText: undefined,
        },
      },
    };
    // [with icon] empty heading & smartText ...
    const argsCards_WithIcon_empty2 = {
      ...argsCustomTile.card.withIcon,
      // empty heading & smartText ...
      featuredText: {
        ...argsCustomTile.card.default.featuredText,
        heading: {
          ...argsCustomTile.card.default.featuredText.heading,
          children: undefined,
        },
        smartText: {
          ...argsCustomTile.card.default.featuredText.smartText,
          plainText: undefined,
        },
      },
    };
    // [with image] empty heading & smartText ...
    const argsCards_WithImage_empty2 = {
      ...argsCustomTile.card.withImage,
      // empty heading & smartText ...
      featuredText: {
        ...argsCustomTile.card.default.featuredText,
        heading: {
          ...argsCustomTile.card.default.featuredText.heading,
          children: undefined,
        },
        smartText: {
          ...argsCustomTile.card.default.featuredText.smartText,
          plainText: undefined,
        },
      },
    };
    const argsCards_WithLocalLink = {
      ...argsCustomTile.card.withLocalLink,
    };
    const argsCards_WithExternalLink = {
      ...argsCustomTile.card.withExternalLink,
    };
    const argsCards_WithModal = {
      ...argsCustomTile.card.withModal,
    };

    // Compositions ...
    const argsCards_WithExternalLinkAndIcon = {
      ...argsCustomTile.card.withExternalLinkAndIcon,
    };
    const argsCards_WithExternalLinkAndImage = {
      ...argsCustomTile.card.withExternalLinkAndImage,
    };
    const argsCards_WithModalAndIcon = {
      ...argsCustomTile.card.withModalAndIcon,
    };
    const argsCards_WithModalAndImage = {
      ...argsCustomTile.card.withModalAndImage,
    };

    // Specificities with rich text ...
    const argsCards_WithExternalLinkAndIconAndRichText = {
      ...argsCustomTile.card.withExternalLinkAndIconAndRichText,
    };
    const argsCards_WithExternalLinkAndImageAndRichText = {
      ...argsCustomTile.card.withExternalLinkAndImageAndRichText,
    };
    const argsCards_WithModalAndIconAndRichText = {
      ...argsCustomTile.card.withModalAndIconAndRichText,
    };
    const argsCards_WithModalAndImageAndRichText = {
      ...argsCustomTile.card.withModalAndImageAndRichText,
    };

    return (
      <Grid>
        <Column lg={16} md={8} sm={4} style={{ marginBottom: '1.5rem' }}>
          <header style={{ marginBottom: '2.5rem' }}>
            <h1 style={{ color: 'blue' }}>
              What happens if the expected props aren't there yet?
            </h1>
            <p style={{ fontSize: '1.3rem', color: 'blue' }}>
              Assuming a delayed API response request for instance. Some props
              may be arriving sooner than the others or they might all be
              absent.
            </p>
          </header>

          <section id="specificities">
            <h1 style={{ marginTop: '2.5rem' }}>Specificities</h1>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>
                Default (empty heading)
              </span>
              <TileVariants {...argsCards_Default_empty1} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>
                Default (empty heading & smartText)
              </span>
              <TileVariants {...argsCards_Default_empty2} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>
                With Pictogram (empty heading & smartText)
              </span>
              <TileVariants {...argsCards_WithIcon_empty2} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>
                With Image (empty heading & smartText)
              </span>
              <span style={{ ...styleHeadingLabel }}>
                Note: The image field is also coming from the API
              </span>
              <TileVariants {...argsCards_WithImage_empty2} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>With local Link</span>
              <TileVariants {...argsCards_WithLocalLink} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>With Link (external)</span>
              <TileVariants {...argsCards_WithExternalLink} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>With Modal</span>
              <TileVariants {...argsCards_WithModal} />
            </div>
          </section>

          <section id="compositions">
            <h1 style={{ marginTop: '4.5rem' }}>Compositions</h1>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>
                With Link and Pictogram
              </span>
              <TileVariants {...argsCards_WithExternalLinkAndIcon} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>With Link and Image</span>
              <TileVariants {...argsCards_WithExternalLinkAndImage} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>
                With Modal and Pictogram
              </span>
              <TileVariants {...argsCards_WithModalAndIcon} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>With Modal and Image</span>
              <TileVariants {...argsCards_WithModalAndImage} />
            </div>
          </section>

          <section id="specificities-with-rich-text">
            <h1 style={{ marginTop: '4.5rem' }}>
              Specificities with rich text
            </h1>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>
                With Link and Pictogram and rich text
              </span>
              <TileVariants {...argsCards_WithExternalLinkAndIconAndRichText} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>
                With Link and Image and rich text
              </span>
              <TileVariants {...argsCards_WithExternalLinkAndImageAndRichText} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>
                With Modal and Pictogram and rich text
              </span>
              <TileVariants {...argsCards_WithModalAndIconAndRichText} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>
                With Modal and Image and rich text
              </span>
              <TileVariants {...argsCards_WithModalAndImageAndRichText} />
            </div>
          </section>
        </Column>
      </Grid>
    );
  },
};

/**
 * Banners versions
 * -------------------------------
 */
export const EmptyBanners: Story = {
  render: (args) => {
    const argsBanner_Default = {
      ...argsCustomTile.banner.default,
      featuredText: {
        ...argsCustomTile.banner.default.featuredText,
        heading: {
          ...argsCustomTile.banner.default.featuredText.heading,
          children: undefined,
        },
      },
    };
    const argsBanner_WithIcon = {
      ...argsCustomTile.banner.withIcon,
    };
    const argsBanner_WithImage = {
      ...argsCustomTile.banner.withImage,
    };
    const argsBanner_WithLocalLink = {
      ...argsCustomTile.banner.withLocalLink,
    };
    const argsBanner_WithExternalLink = {
      ...argsCustomTile.banner.withExternalLink,
    };
    const argsBanner_WithModal = {
      ...argsCustomTile.banner.withModal,
    };

    // Compositions ...
    const argsBanner_WithExternalLinkAndIcon = {
      ...argsCustomTile.banner.withExternalLinkAndIcon,
    };
    const argsBanner_WithExternalLinkAndImage = {
      ...argsCustomTile.banner.withExternalLinkAndImage,
    };
    const argsBanner_WithModalAndIcon = {
      ...argsCustomTile.banner.withModalAndIcon,
    };
    const argsBanner_WithModalAndImage = {
      ...argsCustomTile.banner.withModalAndImage,
    };

    // Specificities with rich text ...
    const argsBanner_WithExternalLinkAndIconAndRichText = {
      ...argsCustomTile.banner.withExternalLinkAndIconAndRichText,
    };
    const argsBanner_WithExternalLinkAndImageAndRichText = {
      ...argsCustomTile.banner.withExternalLinkAndImageAndRichText,
    };
    const argsBanner_WithModalAndIconAndRichText = {
      ...argsCustomTile.banner.withModalAndIconAndRichText,
    };
    const argsBanner_WithModalAndImageAndRichText = {
      ...argsCustomTile.banner.withModalAndImageAndRichText,
    };

    return (
      <Grid>
        <Column lg={16} md={8} sm={4} style={{ marginBottom: '1.5rem' }}>
          <section id="specificities">
            <h1 style={{ marginTop: '2.5rem' }}>Specificities</h1>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>Default</span>
              <TileVariants {...argsBanner_Default} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>With Pictogram</span>
              <TileVariants {...argsBanner_WithIcon} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>With Image</span>
              <TileVariants {...argsBanner_WithImage} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>With local Link</span>
              <TileVariants {...argsBanner_WithLocalLink} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>With Link (external)</span>
              <TileVariants {...argsBanner_WithExternalLink} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>With Modal</span>
              <TileVariants {...argsBanner_WithModal} />
            </div>
          </section>

          <section id="compositions">
            <h1 style={{ marginTop: '4.5rem' }}>Compositions</h1>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>
                With Link and Pictogram
              </span>
              <TileVariants {...argsBanner_WithExternalLinkAndIcon} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>With Link and Image</span>
              <TileVariants {...argsBanner_WithExternalLinkAndImage} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>
                With Modal and Pictogram
              </span>
              <TileVariants {...argsBanner_WithModalAndIcon} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>With Modal and Image</span>
              <TileVariants {...argsBanner_WithModalAndImage} />
            </div>
          </section>

          <section id="specificities-with-rich-text">
            <h1 style={{ marginTop: '4.5rem' }}>
              Specificities with rich text
            </h1>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>
                With Link and Pictogram and rich text
              </span>
              <TileVariants {...argsBanner_WithExternalLinkAndIconAndRichText} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>
                With Link and Image and rich text
              </span>
              <TileVariants {...argsBanner_WithExternalLinkAndImageAndRichText} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>
                With Modal and Pictogram and rich text
              </span>
              <TileVariants {...argsBanner_WithModalAndIconAndRichText} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>
                With Modal and Image and rich text
              </span>
              <TileVariants {...argsBanner_WithModalAndImageAndRichText} />
            </div>
          </section>
        </Column>
      </Grid>
    );
  },
};

export const EmptyResponsiveCards: Story = {
  render: (args) => {
    const customArgs = {
      ...argsCustomTile.card.empty,
    };

    return (
      <Grid>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
          (index) => (
            <Column
              key={index}
              style={{ marginBottom: '1.5rem' }}
              lg={index}
              md={8}
              sm={4}
            >
              <div style={{ marginBottom: '2.5rem' }}>
                <span style={{ ...styleHeadingLabel }}>Default</span>
                <TileVariants {...customArgs} />
              </div>
            </Column>
          )
        )}
      </Grid>
    );
  },
};

export const EmptyResponsiveBanners: Story = {
  args: {
    ...argsCustomTile.banner.empty,
  },
  render: (args) => {
    return (
      <Grid>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
          (index) => (
            <Column
              key={index}
              style={{ marginBottom: '1.5rem' }}
              lg={index}
              md={8}
              sm={4}
            >
              <div style={{ marginBottom: '2.5rem' }}>
                <span style={{ ...styleHeadingLabel }}>Default</span>
                <TileVariants {...args} />
              </div>
            </Column>
          )
        )}
      </Grid>
    );
  },
};