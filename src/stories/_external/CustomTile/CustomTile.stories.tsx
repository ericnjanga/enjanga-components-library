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

    return (
      <Grid>
        <Column lg={16} md={8} sm={4} style={{ marginBottom: '1.5rem' }}>
          <div style={{ marginBottom: '2.5rem' }}>
            <span style={{ ...styleHeadingLabel }}>Default</span>
            <CustomTile {...args} />
          </div>

          <div style={{ marginBottom: '2.5rem' }}>
            <span style={{ ...styleHeadingLabel }}>With icon</span>
            <CustomTile {...argsWithIcon} />
          </div>

          <div style={{ marginBottom: '2.5rem' }}>
            <span style={{ ...styleHeadingLabel }}>With image</span>
            <CustomTile {...argsWithImage} />
          </div>

          <div style={{ marginBottom: '2.5rem' }}>
            <span style={{ ...styleHeadingLabel }}>With image local link</span>
            <CustomTile {...argsWithLocalLink} />
          </div>

          <div style={{ marginBottom: '2.5rem' }}>
            <span style={{ ...styleHeadingLabel }}>
              With image external link
            </span>
            <CustomTile {...argsWithExternalLink} />
          </div>

          <div style={{ marginBottom: '2.5rem' }}>
            <span style={{ ...styleHeadingLabel }}>With modal</span>
            <CustomTile {...argsWithModal} />
          </div>
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
  args: {
    ...argsCustomTile.banner.default,
  },
  render: (args) => {
    const argsWithIcon = {
      // bannerWithIcon
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
    return (
      <Grid>
        <Column lg={16} md={8} sm={4} style={{ marginBottom: '1.5rem' }}>
          <div style={{ marginBottom: '2.5rem' }}>
            <span style={{ ...styleHeadingLabel }}>Default</span>
            <CustomTile {...args} />
          </div>

          <div style={{ marginBottom: '2.5rem' }}>
            <span style={{ ...styleHeadingLabel }}>
              With icon <i>(No icon in design prototypes)</i>
            </span>
            <CustomTile {...argsWithIcon} />
          </div>

          <div style={{ marginBottom: '2.5rem' }}>
            <span style={{ ...styleHeadingLabel }}>
              With image <i>(No icon in design prototypes)</i>
            </span>
            <CustomTile {...argsWithImage} />
          </div>

          <div style={{ marginBottom: '2.5rem' }}>
            <span style={{ ...styleHeadingLabel }}>With image local link</span>
            <CustomTile {...argsWithLocalLink} />
          </div>

          <div style={{ marginBottom: '2.5rem' }}>
            <span style={{ ...styleHeadingLabel }}>
              With image external link
            </span>
            <CustomTile {...argsWithExternalLink} />
          </div>

          <div style={{ marginBottom: '2.5rem' }}>
            <span style={{ ...styleHeadingLabel }}>With modal</span>
            <CustomTile {...argsWithModal} />
          </div>
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

// export const ResponsivenessCard: Story = {
//   args: {
//     ...mockCustomTile,
//     layoutStyle: 'card',
//   },
//   render: (args) => {
//     return (
//       <>
//         <Grid>
//           <Column lg={16}>
//             <h3 style={{ textAlign: 'center' }}>Card's adaptive size</h3>
//           </Column>
//         </Grid>
//         <Grid>
//           {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
//             (index) => (
//               <Column
//                 key={index}
//                 style={{ marginBottom: '1.5rem' }}
//                 lg={index}
//                 md={8}
//                 sm={4}
//               >
//                 <CustomTile {...args} />
//               </Column>
//             )
//           )}
//         </Grid>
//       </>
//     );
//   },
// };

// export const ResponsivenessBanner: Story = {
//   args: {
//     ...mockCustomTile,
//     layoutStyle: 'banner',
//   },
//   render: (args) => {
//     return (
//       <>
//         <Grid>
//           <Column lg={16}>
//             <h3 style={{ textAlign: 'center' }}>Banner's adaptive size</h3>
//           </Column>
//         </Grid>
//         <Grid>
//           {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
//             (index) => (
//               <Column
//                 key={index}
//                 style={{ marginBottom: '1.5rem' }}
//                 lg={index}
//                 md={8}
//                 sm={4}
//               >
//                 <CustomTile {...args} />
//               </Column>
//             )
//           )}
//         </Grid>
//       </>
//     );
//   },
// };

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
