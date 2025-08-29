import type { Meta, StoryObj } from '@storybook/react';
import CustomTile from '../../../components/CustomTile/CustomTile';
import { Grid, Column } from '@carbon/react';
import { argTypesCustomTileStories } from '@/mockData/stories/argTypes';
import { argsCustomTile } from '@/mockData/stories/args/argsCustomTile';
import { styleHeadingLabel } from '@/mockData/mixed';

const activeLang = 'en';

const meta: Meta<typeof CustomTile> = {
  title: 'External Components/CustomTile',
  component: CustomTile,
  args: {
    ...argsCustomTile.card.default,
  },
  argTypes: {
    ...argTypesCustomTileStories,
  },
};

export default meta;
type Story = StoryObj<typeof CustomTile>;

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
          <nav>
            <h3>Summary</h3>
            <p>TODO: Fix this in-page navigation.</p>
            <ol>
              <li>
                <a href="#specificities">Specificities</a>
              </li>
              <li>
                <a href="#compositions">Compositions</a>
              </li>
              <li>
                <a href="#specificities-with-rich-text">
                  Specificities with rich text
                </a>
              </li>
            </ol>
          </nav>

          <section id="specificities">
            <h1 style={{ marginTop: '2.5rem' }}>Specificities</h1>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>Default</span>
              <CustomTile {...argsCards_Default} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>With Pictogram</span>
              <CustomTile {...argsCards_WithIcon} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>With Image</span>
              <CustomTile {...argsCards_WithImage} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>With local Link</span>
              <CustomTile {...argsCards_WithLocalLink} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>With Link (external)</span>
              <CustomTile {...argsCards_WithExternalLink} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>With Modal</span>
              <CustomTile {...argsCards_WithModal} />
            </div>
          </section>

          <section id="compositions">
            <h1 style={{ marginTop: '4.5rem' }}>Compositions</h1>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>
                With Link and Pictogram
              </span>
              <CustomTile {...argsCards_WithExternalLinkAndIcon} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>With Link and Image</span>
              <CustomTile {...argsCards_WithExternalLinkAndImage} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>
                With Modal and Pictogram
              </span>
              <CustomTile {...argsCards_WithModalAndIcon} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>With Modal and Image</span>
              <CustomTile {...argsCards_WithModalAndImage} />
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
              <CustomTile {...argsCards_WithExternalLinkAndIconAndRichText} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>
                With Link and Image and rich text
              </span>
              <CustomTile {...argsCards_WithExternalLinkAndImageAndRichText} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>
                With Modal and Pictogram and rich text
              </span>
              <CustomTile {...argsCards_WithModalAndIconAndRichText} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>
                With Modal and Image and rich text
              </span>
              <CustomTile {...argsCards_WithModalAndImageAndRichText} />
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
          <nav>
            <h3>Summary</h3>
            <p>TODO: Fix this in-page navigation.</p>
            <ol>
              <li>
                <a href="#specificities">Specificities</a>
              </li>
              <li>
                <a href="#compositions">Compositions</a>
              </li>
              <li>
                <a href="#specificities-with-rich-text">
                  Specificities with rich text
                </a>
              </li>
            </ol>
          </nav>

          <section id="specificities">
            <h1 style={{ marginTop: '2.5rem' }}>Specificities</h1>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>Default</span>
              <CustomTile {...argsBanner_Default} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>With Pictogram</span>
              <CustomTile {...argsBanner_WithIcon} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>With Image</span>
              <CustomTile {...argsBanner_WithImage} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>With local Link</span>
              <CustomTile {...argsBanner_WithLocalLink} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>With Link (external)</span>
              <CustomTile {...argsBanner_WithExternalLink} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>With Modal</span>
              <CustomTile {...argsBanner_WithModal} />
            </div>
          </section>

          <section id="compositions">
            <h1 style={{ marginTop: '4.5rem' }}>Compositions</h1>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>
                With Link and Pictogram
              </span>
              <CustomTile {...argsBanner_WithExternalLinkAndIcon} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>With Link and Image</span>
              <CustomTile {...argsBanner_WithExternalLinkAndImage} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>
                With Modal and Pictogram
              </span>
              <CustomTile {...argsBanner_WithModalAndIcon} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>With Modal and Image</span>
              <CustomTile {...argsBanner_WithModalAndImage} />
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
              <CustomTile {...argsBanner_WithExternalLinkAndIconAndRichText} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>
                With Link and Image and rich text
              </span>
              <CustomTile {...argsBanner_WithExternalLinkAndImageAndRichText} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>
                With Modal and Pictogram and rich text
              </span>
              <CustomTile {...argsBanner_WithModalAndIconAndRichText} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>
                With Modal and Image and rich text
              </span>
              <CustomTile {...argsBanner_WithModalAndImageAndRichText} />
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
                  <CustomTile {...argsDefault} />
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
                  <CustomTile {...argsBanner_WithIcon} />
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
                  <CustomTile {...argsBanner_WithImage} />
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
                  <CustomTile {...argsBanner_WithExternalLink} />
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
                  <CustomTile {...argsBanner_WithModal} />
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
                  <CustomTile {...argsBanner_WithExternalLinkAndIcon} />
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
                  <CustomTile {...argsBanner_WithExternalLinkAndImage} />
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
                  <CustomTile {...argsBanner_WithModalAndIcon} />
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
                  <CustomTile {...argsBanner_WithModalAndImage} />
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
                  <CustomTile
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
                  <CustomTile
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
                  <CustomTile {...argsBanner_WithModalAndIconAndRichText} />
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
                  <CustomTile {...argsBanner_WithModalAndImageAndRichText} />
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
                <CustomTile {...args} />
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
          {/* <nav>
            <h3>Summary</h3>
            <p>TODO: Fix this in-page navigation.</p>
            <ol>
              <li>
                <a href="#specificities">Specificities</a>
              </li>
              <li>
                <a href="#compositions">Compositions</a>
              </li>
              <li>
                <a href="#specificities-with-rich-text">
                  Specificities with rich text
                </a>
              </li>
            </ol>
          </nav> */}

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
              <CustomTile {...argsCards_Default_empty1} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>
                Default (empty heading & smartText)
              </span>
              <CustomTile {...argsCards_Default_empty2} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>
                With Pictogram (empty heading & smartText)
              </span>
              <CustomTile {...argsCards_WithIcon_empty2} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>With Image</span>
              <CustomTile {...argsCards_WithImage_empty2} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>With local Link</span>
              <CustomTile {...argsCards_WithLocalLink} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>With Link (external)</span>
              <CustomTile {...argsCards_WithExternalLink} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>With Modal</span>
              <CustomTile {...argsCards_WithModal} />
            </div>
          </section>

          <section id="compositions">
            <h1 style={{ marginTop: '4.5rem' }}>Compositions</h1>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>
                With Link and Pictogram
              </span>
              <CustomTile {...argsCards_WithExternalLinkAndIcon} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>With Link and Image</span>
              <CustomTile {...argsCards_WithExternalLinkAndImage} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>
                With Modal and Pictogram
              </span>
              <CustomTile {...argsCards_WithModalAndIcon} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>With Modal and Image</span>
              <CustomTile {...argsCards_WithModalAndImage} />
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
              <CustomTile {...argsCards_WithExternalLinkAndIconAndRichText} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>
                With Link and Image and rich text
              </span>
              <CustomTile {...argsCards_WithExternalLinkAndImageAndRichText} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>
                With Modal and Pictogram and rich text
              </span>
              <CustomTile {...argsCards_WithModalAndIconAndRichText} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>
                With Modal and Image and rich text
              </span>
              <CustomTile {...argsCards_WithModalAndImageAndRichText} />
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
          <nav>
            <h3>Summary</h3>
            <p>TODO: Fix this in-page navigation.</p>
            <ol>
              <li>
                <a href="#specificities">Specificities</a>
              </li>
              <li>
                <a href="#compositions">Compositions</a>
              </li>
              <li>
                <a href="#specificities-with-rich-text">
                  Specificities with rich text
                </a>
              </li>
            </ol>
          </nav>

          <section id="specificities">
            <h1 style={{ marginTop: '2.5rem' }}>Specificities</h1>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>Default</span>
              <CustomTile {...argsBanner_Default} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>With Pictogram</span>
              <CustomTile {...argsBanner_WithIcon} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>With Image</span>
              <CustomTile {...argsBanner_WithImage} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>With local Link</span>
              <CustomTile {...argsBanner_WithLocalLink} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>With Link (external)</span>
              <CustomTile {...argsBanner_WithExternalLink} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>With Modal</span>
              <CustomTile {...argsBanner_WithModal} />
            </div>
          </section>

          <section id="compositions">
            <h1 style={{ marginTop: '4.5rem' }}>Compositions</h1>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>
                With Link and Pictogram
              </span>
              <CustomTile {...argsBanner_WithExternalLinkAndIcon} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>With Link and Image</span>
              <CustomTile {...argsBanner_WithExternalLinkAndImage} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>
                With Modal and Pictogram
              </span>
              <CustomTile {...argsBanner_WithModalAndIcon} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>With Modal and Image</span>
              <CustomTile {...argsBanner_WithModalAndImage} />
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
              <CustomTile {...argsBanner_WithExternalLinkAndIconAndRichText} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>
                With Link and Image and rich text
              </span>
              <CustomTile {...argsBanner_WithExternalLinkAndImageAndRichText} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>
                With Modal and Pictogram and rich text
              </span>
              <CustomTile {...argsBanner_WithModalAndIconAndRichText} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>
                With Modal and Image and rich text
              </span>
              <CustomTile {...argsBanner_WithModalAndImageAndRichText} />
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
                <CustomTile {...customArgs} />
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
                <CustomTile {...args} />
              </div>
            </Column>
          )
        )}
      </Grid>
    );
  },
};

// // /**
// //  * Shows modal
// //  * ---------------
// //  */
// export const PlainTextModal: Story = {
//   args: {
//     ...mockCustomTile,
//     layoutStyle: 'card',
//     modalIsAvailable: true,
//     modalPlainDescription: mockCustomTile.blurb,
//   },
//   render: (args) => {
//     return (
//       <Grid>
//         <Column lg={8}>
//           <h3>Card</h3>
//           <CustomTile {...args} />
//         </Column>
//         <Column lg={8}>
//           <h3>Banner</h3>
//           <CustomTile {...args} layoutStyle="banner" />
//         </Column>
//       </Grid>
//     );
//   },
// };

// /**
//  * Props validation errors
//  * ---------------
//  */
// export const ErrorModal1: Story = {
//   args: {
//     ...mockCustomTile,
//     layoutStyle: 'banner',
//     modalIsAvailable: true,
//   },
// };

// export const ErrorsPropsValidation1: Story = {
//   args: {
//     ...mockCustomTile,
//     // An error will be thrown because both "modalPlainDescription" and "modalRichDescription" have been provided

//     modalPlainDescription:
//       'Marzipan halvah topping chocolate bonbon chocolate cake cupcake jujubes. Soufflé tiramisu gummies brownie bonbon. Dragée lemon drops jelly-o powder marzipan chocolate cake candy canes pastry. Tiramisu apple pie halvah tootsie roll apple pie. Chocolate pie gummi bears danish wafer cake shortbread. Dessert cake lemon drops toffee apple pie. Donut lemon drops caramels oat cake sweet roll chupa chups cake carrot cake. Muffin cake wafer cheesecake tart cotton candy jelly.',
//     modalRichDescription: project?.data[activeLang]?.description,
//     modalIsAvailable: true,
//     linkTarget: undefined,
//   },
// };

// export const ErrorsPropsValidation2: Story = {
//   args: {
//     ...mockCustomTile,
//     // An error will be thrown because both "modalPlainDescription" and "modalRichDescription" have been provided
//     modalPlainDescription:
//       'Marzipan halvah topping chocolate bonbon chocolate cake cupcake jujubes. Soufflé tiramisu gummies brownie bonbon. Dragée lemon drops jelly-o powder marzipan chocolate cake candy canes pastry. Tiramisu apple pie halvah tootsie roll apple pie. Chocolate pie gummi bears danish wafer cake shortbread. Dessert cake lemon drops toffee apple pie. Donut lemon drops caramels oat cake sweet roll chupa chups cake carrot cake. Muffin cake wafer cheesecake tart cotton candy jelly.',
//     modalRichDescription: undefined,
//     linksTo: 'https://carbondesignsystem.com',
//     linkTarget: '_blank' as CTL_LinkTargetType,
//     modalIsAvailable: true,
//   },
// };

// export const VerticalNoIconNoImgNoLinking: Story = {};

// export const VerticalIconNoImgNoLinking: Story = {
//   args: {
//     ...mockCustomTile,
//     iconName: 'Hills' as CP_nameType,
//   },
// };

// export const HorizontalNoIconNoImgNoLinking: Story = {
//   args: {
//     ...mockCustomTile,
//     layoutStyle: 'banner' as CTL_LayoutStyleType,
//   },
// };

// export const SkeletonVerticalNoIconNoImg: Story = {
//   args: {
//     title: undefined,
//     blurb: undefined,
//     // The animated skeleton will show up if "title" or "blurb" props are undefined
//   },
// };

// export const SkeletonHorizontalNoIconNoImg: Story = {
//   args: {
//     title: undefined,
//     blurb: undefined,
//     layoutStyle: 'banner' as CTL_LayoutStyleType,
//     // The animated skeleton will show up if "title" or "blurb" props are undefined
//   },
// };

// export const OpensModalUpWithPlainText: Story = {
//   args: {
//     ...mockCustomTile,
//     // The modal will display plain text
//     modalPlainDescription:
//       'Marzipan halvah topping chocolate bonbon chocolate cake cupcake jujubes. Soufflé tiramisu gummies brownie bonbon. Dragée lemon drops jelly-o powder marzipan chocolate cake candy canes pastry. Tiramisu apple pie halvah tootsie roll apple pie. Chocolate pie gummi bears danish wafer cake shortbread. Dessert cake lemon drops toffee apple pie. Donut lemon drops caramels oat cake sweet roll chupa chups cake carrot cake. Muffin cake wafer cheesecake tart cotton candy jelly.',
//     modalRichDescription: undefined, // Must remain undefined when "modalPlainDescription" is specified
//     // TypeScript will be raise if both props are specified (See CTL_propsType1Validation for more info)
//     modalIsAvailable: true,
//     linkTarget: undefined, // Must remain undefined when "modalIsAvailable" is specified
//     // TypeScript will be raise if both props are specified (See CTL_propsType1Validation for more info)
//   },
// };

// export const OpensModalUpWithRichText: Story = {
//   args: {
//     ...mockCustomTile,
//     // The modal will display rich text
//     modalPlainDescription: undefined, // Must remain undefined when "modalPlainDescription" is specified
//     modalRichDescription: project?.data[activeLang]?.description,
//     // TypeScript will be raise if both props are specified (See CTL_propsType1Validation for more info)
//     modalIsAvailable: true,
//     linkTarget: undefined, // Must remain undefined when "modalIsAvailable" is specified
//     // TypeScript will be raise if both props are specified (See CTL_propsType1Validation for more info)
//   },
// };
