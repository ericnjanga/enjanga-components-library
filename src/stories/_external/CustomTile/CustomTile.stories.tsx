import type { Meta, StoryObj } from '@storybook/react';
import CustomTile from '../../../components/CustomTile/CustomTile';
import { Grid, Column } from '@carbon/react';
import { mockRichText } from '@/mockData/mockRichText';
import { argTypesCustomTileStories } from '@/mockData/stories/argTypes';
import { argsCustomTile } from '@/mockData/stories/args/argsCustomTile';

const activeLang = 'en';

const meta: Meta<typeof CustomTile> = {
  title: 'External Components/CustomTile',
  component: CustomTile,
  args: {
    ...argsCustomTile,
  },
  argTypes: {
    ...argTypesCustomTileStories,
  },
};

export default meta;
type Story = StoryObj<typeof CustomTile>;

export const Card: Story = {};

// export const Banner: Story = {
//   args: {
//     ...mockCustomTile,
//     layoutStyle: 'banner',
//   },
// };

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
//     iconName: 'Hills' as CI_nameType,
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

// export const OpensExternalLinkUp: Story = {
//   args: {
//     ...mockCustomTile,
//     linksTo: 'https://carbondesignsystem.com',
//     linkTarget: '_blank' as CTL_LinkTargetType,
//   },
// };

// export const OpensLocalLinkUp: Story = {
//   args: {
//     ...mockCustomTile,
//     linksTo: 'link/param',
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
