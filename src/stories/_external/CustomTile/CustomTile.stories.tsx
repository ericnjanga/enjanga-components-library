import type { Meta, StoryObj } from '@storybook/react';
import CustomTile from '../../../components/CustomTile/CustomTile';
import { Grid, Column } from '@carbon/react';
import { customIconsList } from '../../../components/CustomIcon/CustomIcon';
import { CustomTileStackOrder } from '@/components/CustomTile/parts/ct-types';

const sharedArgs = {
  stackOrder: 'vertical' as CustomTileStackOrder['name'],
  textLength: 100,
  iconName: undefined,
  linksTo: undefined,
  linkTarget: undefined,
  linkIsExternal: undefined,
  title:
    'Dragée lemon drops jelly-o powder marzipan chocolate cake candy Marzipan halvah topping chocolate bonbon chocolate cake cupcake jujubes.',
  text: 'Marzipan halvah topping chocolate bonbon chocolate cake cupcake jujubes. Soufflé tiramisu gummies brownie bonbon. Dragée lemon drops jelly-o powder marzipan chocolate cake candy canes pastry. Tiramisu apple pie halvah tootsie roll apple pie. Chocolate pie gummi bears danish wafer cake shortbread. Dessert cake lemon drops toffee apple pie. Donut lemon drops caramels oat cake sweet roll chupa chups cake carrot cake. Muffin cake wafer cheesecake tart cotton candy jelly.',
};

const meta: Meta<typeof CustomTile> = {
  title: 'External Components/CustomTile',
  component: CustomTile,
  argTypes: {
    stackOrder: {
      control: 'select',
      options: ['vertical', 'horizontal'],
    },
    textLength: {
      control: 'select',
      options: [50, 100, 200, 500, 1000],
    },
    iconName: {
      control: 'select',
      options: ['...', ...customIconsList],
    },
    linkTarget: {
      control: 'select',
      options: ['_blank', '_self', '_parent', '_top'],
    },
    linkIsExternal: {
      control: 'select',
      options: [true, false],
    },
  },
  args: {
    ...sharedArgs,
  },
};

export default meta;
type Story = StoryObj<typeof CustomTile>;

export const Default: Story = {};

export const WhenStacked: Story = {
  render: (args) => {
    return (
      <Grid className="">
        <Column lg={5} md={4} sm={4}>
          <CustomTile {...args} />
        </Column>
        <Column lg={5} md={4} sm={4}>
          <CustomTile {...args} />
        </Column>
        <Column lg={5} md={4} sm={4}>
          <CustomTile {...args} />
        </Column>
      </Grid>
    );
  },
};

export const WithExternalLink: Story = {
  args: {
    ...sharedArgs,
    linksTo: 'https://carbondesignsystem.com',
    linkIsExternal: true,
    linkTarget: '_blank',
  },
};

export const WithLocallink: Story = {
  args: {
    ...sharedArgs,
    linksTo: 'link/param',
  },
};

export const WithModal: Story = {
  args: {
    ...sharedArgs,
  },
};
