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
    const argsDefault = {
      ...argsCustomTile.card.default,
    };
    const argsWithIcon = {
      ...argsCustomTile.card.withIcon,
    };
    const argsWithImage = {
      ...argsCustomTile.card.withImage,
    };
    const argsWithLocalLink = {
      ...argsCustomTile.card.withLocalLink,
    };
    const argsWithExternalLink = {
      ...argsCustomTile.card.withExternalLink,
    };
    const argsWithModal = {
      ...argsCustomTile.card.withModal,
    };

    // Compositions ...
    const argsWithExternalLinkAndIcon = {
      ...argsCustomTile.card.withExternalLinkAndIcon,
    };
    const argsWithExternalLinkAndImage = {
      ...argsCustomTile.card.withExternalLinkAndImage,
    };
    const argsWithModalAndIcon = {
      ...argsCustomTile.card.withModalAndIcon,
    };
    const argsWithModalAndImage = {
      ...argsCustomTile.card.withModalAndImage,
    };

    // Specificities with rich text ...
    const argsWithExternalLinkAndIconAndRichText = {
      ...argsCustomTile.card.withExternalLinkAndIconAndRichText,
    };
    const argsWithExternalLinkAndImageAndRichText = {
      ...argsCustomTile.card.withExternalLinkAndImageAndRichText,
    };
    const argsWithModalAndIconAndRichText = {
      ...argsCustomTile.card.withModalAndIconAndRichText,
    };
    const argsWithModalAndImageAndRichText = {
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
              <CustomTile {...argsDefault} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>With Icon</span>
              <CustomTile {...argsWithIcon} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>With Image</span>
              <CustomTile {...argsWithImage} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>With local Link</span>
              <CustomTile {...argsWithLocalLink} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>With Link (external)</span>
              <CustomTile {...argsWithExternalLink} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>With Modal</span>
              <CustomTile {...argsWithModal} />
            </div>
          </section>

          <section id="compositions">
            <h1 style={{ marginTop: '4.5rem' }}>Compositions</h1>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>With Link and Icon</span>
              <CustomTile {...argsWithExternalLinkAndIcon} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>With Link and Image</span>
              <CustomTile {...argsWithExternalLinkAndImage} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>With Modal and Icon</span>
              <CustomTile {...argsWithModalAndIcon} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>With Modal and Image</span>
              <CustomTile {...argsWithModalAndImage} />
            </div>
          </section>

          <section id="specificities-with-rich-text">
            <h1 style={{ marginTop: '4.5rem' }}>
              Specificities with rich text
            </h1>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>
                With Link and Icon and rich text
              </span>
              <CustomTile {...argsWithExternalLinkAndIconAndRichText} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>
                With Link and Image and rich text
              </span>
              <CustomTile {...argsWithExternalLinkAndImageAndRichText} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>
                With Modal and Icon and rich text
              </span>
              <CustomTile {...argsWithModalAndIconAndRichText} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>
                With Modal and Image and rich text
              </span>
              <CustomTile {...argsWithModalAndImageAndRichText} />
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
    const argsDefault = {
      ...argsCustomTile.banner.default,
    };
    const argsWithIcon = {
      ...argsCustomTile.banner.withIcon,
    };
    const argsWithImage = {
      ...argsCustomTile.banner.withImage,
    };
    const argsWithLocalLink = {
      ...argsCustomTile.banner.withLocalLink,
    };
    const argsWithExternalLink = {
      ...argsCustomTile.banner.withExternalLink,
    };
    const argsWithModal = {
      ...argsCustomTile.banner.withModal,
    };

    // Compositions ...
    const argsWithExternalLinkAndIcon = {
      ...argsCustomTile.banner.withExternalLinkAndIcon,
    };
    const argsWithExternalLinkAndImage = {
      ...argsCustomTile.banner.withExternalLinkAndImage,
    };
    const argsWithModalAndIcon = {
      ...argsCustomTile.banner.withModalAndIcon,
    };
    const argsWithModalAndImage = {
      ...argsCustomTile.banner.withModalAndImage,
    };

    // Specificities with rich text ...
    const argsWithExternalLinkAndIconAndRichText = {
      ...argsCustomTile.banner.withExternalLinkAndIconAndRichText,
    };
    const argsWithExternalLinkAndImageAndRichText = {
      ...argsCustomTile.banner.withExternalLinkAndImageAndRichText,
    };
    const argsWithModalAndIconAndRichText = {
      ...argsCustomTile.banner.withModalAndIconAndRichText,
    };
    const argsWithModalAndImageAndRichText = {
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
              <CustomTile {...argsDefault} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>With Icon</span>
              <CustomTile {...argsWithIcon} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>With Image</span>
              <CustomTile {...argsWithImage} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>With local Link</span>
              <CustomTile {...argsWithLocalLink} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>With Link (external)</span>
              <CustomTile {...argsWithExternalLink} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>With Modal</span>
              <CustomTile {...argsWithModal} />
            </div>
          </section>

          <section id="compositions">
            <h1 style={{ marginTop: '4.5rem' }}>Compositions</h1>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>With Link and Icon</span>
              <CustomTile {...argsWithExternalLinkAndIcon} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>With Link and Image</span>
              <CustomTile {...argsWithExternalLinkAndImage} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>With Modal and Icon</span>
              <CustomTile {...argsWithModalAndIcon} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>With Modal and Image</span>
              <CustomTile {...argsWithModalAndImage} />
            </div>
          </section>

          <section id="specificities-with-rich-text">
            <h1 style={{ marginTop: '4.5rem' }}>
              Specificities with rich text
            </h1>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>
                With Link and Icon and rich text
              </span>
              <CustomTile {...argsWithExternalLinkAndIconAndRichText} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>
                With Link and Image and rich text
              </span>
              <CustomTile {...argsWithExternalLinkAndImageAndRichText} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>
                With Modal and Icon and rich text
              </span>
              <CustomTile {...argsWithModalAndIconAndRichText} />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ ...styleHeadingLabel }}>
                With Modal and Image and rich text
              </span>
              <CustomTile {...argsWithModalAndImageAndRichText} />
            </div>
          </section>
        </Column>
      </Grid>
    );
  },
};

export const EmptyCards: Story = {
  render: (args) => {
    const customArgs = {
      ...argsCustomTile.card.empty,
    };

    return (
      <Grid>
        <Column lg={16} md={8} sm={4} style={{ marginBottom: '1.5rem' }}>
          <div style={{ marginBottom: '2.5rem' }}>
            <span style={{ ...styleHeadingLabel }}>Default</span>
            <CustomTile {...customArgs} />
          </div>
        </Column>
      </Grid>
    );
  },
};

export const EmptyBanners: Story = {
  args: {
    ...argsCustomTile.banner.empty,
  },
  render: (args) => {
    return (
      <Grid>
        <Column lg={16} md={8} sm={4} style={{ marginBottom: '1.5rem' }}>
          <div style={{ marginBottom: '2.5rem' }}>
            <span style={{ ...styleHeadingLabel }}>Default</span>
            <CustomTile {...args} />
          </div>
        </Column>
      </Grid>
    );
  },
};

export const ResponsivenessCard: Story = {
  args: {
    ...argsCustomTile.card.default,
  },
  render: (args) => {
    return (
      <>
        <Grid>
          <Column lg={16}>
            <h3 style={{ textAlign: 'center' }}>Card's adaptive size</h3>
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

export const ResponsivenessBanner: Story = {
  args: {
    ...argsCustomTile.banner.default,
  },
  render: (args) => {
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
// export const RichTextModal: Story = {
//   args: {
//     ...mockCustomTile,
//     layoutStyle: 'card',
//     modalIsAvailable: true,
//     modalRichDescription: { ...mockRichText.description },
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
