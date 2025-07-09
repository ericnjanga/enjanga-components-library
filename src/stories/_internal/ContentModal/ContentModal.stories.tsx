import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test'; // Correct import for Storybook 7+
import ContentModal from '../../../components/ContentModal/ContentModal';

const meta: Meta<typeof ContentModal> = {
  title: 'Internal Components/ContentModal',
  component: ContentModal,
  argTypes: {
    isOpen: {
      control: 'select',
      options: [true, false],
    },
    setIsOpen: {
      action: 'setIsOpen', // This will show the calls in the actions panel
      table: {
        disable: true, // Hides from controls table since it's not configurable
      },
    },
    modalLabel: { control: 'text' },
    modalHeading: { control: 'text' },
    modalSubHeading: { control: 'text' },
    modalSecondaryButtonText: { control: 'text' },
  },
  args: {
    isOpen: true,
    setIsOpen: fn(),
    modalHeading: 'Shortbread brownie gingerbread caramels',
    modalSecondaryButtonText: 'Cancel',
  },
};

export default meta;

type Story = StoryObj<typeof ContentModal>;

export const Default: Story = {
  render: (args) => {
    // This modal is primarily made to receive ReactNode children
    return (
      <ContentModal {...args}>
        <h3>Liquorice gingerbread lollipop oat cake</h3>
        <p>
          Ice cream brownie dragée marshmallow pie jelly-o candy cake biscuit.
          Sesame snaps marshmallow tootsie roll cheesecake gummies icing
          gingerbread bonbon. Sesame snaps pie brownie oat cake wafer sesame
          snaps fruitcake.
        </p>
        <br />
        <p>
          Liquorice gingerbread lollipop oat cake gingerbread toffee topping.
          Shortbread brownie gingerbread caramels chocolate cake tart cookie
          wafer. Danish soufflé cake jelly beans danish wafer shortbread. Jelly
          chupa chups sweet pie chocolate donut carrot cake brownie croissant.
        </p>

        <br />
        <br />

        <h3>Liquorice gingerbread lollipop oat cake</h3>
        <p>
          Liquorice gingerbread lollipop oat cake gingerbread toffee topping.
          Shortbread brownie gingerbread caramels chocolate cake tart cookie
          wafer. Danish soufflé cake jelly beans danish wafer shortbread. Jelly
          chupa chups sweet pie chocolate donut carrot cake brownie croissant.
        </p>
      </ContentModal>
    );
  },
};

export const WithLabel: Story = {
  args: {
    isOpen: true,
    setIsOpen: fn(),
    modalHeading: 'Shortbread brownie gingerbread caramels',
    modalLabel: '*** Modal label ***',
    modalSecondaryButtonText: 'Cancel',
  },
  render: (args) => {
    // This modal is primarily made to receive ReactNode children
    return (
      <ContentModal {...args}>
        <h3>Liquorice gingerbread lollipop oat cake</h3>
        <p>
          Ice cream brownie dragée marshmallow pie jelly-o candy cake biscuit.
          Sesame snaps marshmallow tootsie roll cheesecake gummies icing
          gingerbread bonbon. Sesame snaps pie brownie oat cake wafer sesame
          snaps fruitcake.
        </p>
        <br />
        <p>
          Liquorice gingerbread lollipop oat cake gingerbread toffee topping.
          Shortbread brownie gingerbread caramels chocolate cake tart cookie
          wafer. Danish soufflé cake jelly beans danish wafer shortbread. Jelly
          chupa chups sweet pie chocolate donut carrot cake brownie croissant.
        </p>

        <br />
        <br />

        <h3>Liquorice gingerbread lollipop oat cake</h3>
        <p>
          Liquorice gingerbread lollipop oat cake gingerbread toffee topping.
          Shortbread brownie gingerbread caramels chocolate cake tart cookie
          wafer. Danish soufflé cake jelly beans danish wafer shortbread. Jelly
          chupa chups sweet pie chocolate donut carrot cake brownie croissant.
        </p>
      </ContentModal>
    );
  },
};

export const WithSubHeading: Story = {
  args: {
    isOpen: true,
    setIsOpen: fn(),
    modalSubHeading: '*** Modal SubHeading ***',
    modalHeading: 'Shortbread brownie gingerbread caramels',
    modalSecondaryButtonText: 'Cancel',
  },
  render: (args) => {
    // This modal is primarily made to receive ReactNode children
    return (
      <ContentModal {...args}>
        <h3>Liquorice gingerbread lollipop oat cake</h3>
        <p>
          Ice cream brownie dragée marshmallow pie jelly-o candy cake biscuit.
          Sesame snaps marshmallow tootsie roll cheesecake gummies icing
          gingerbread bonbon. Sesame snaps pie brownie oat cake wafer sesame
          snaps fruitcake.
        </p>
        <br />
        <p>
          Liquorice gingerbread lollipop oat cake gingerbread toffee topping.
          Shortbread brownie gingerbread caramels chocolate cake tart cookie
          wafer. Danish soufflé cake jelly beans danish wafer shortbread. Jelly
          chupa chups sweet pie chocolate donut carrot cake brownie croissant.
        </p>

        <br />
        <br />

        <h3>Liquorice gingerbread lollipop oat cake</h3>
        <p>
          Liquorice gingerbread lollipop oat cake gingerbread toffee topping.
          Shortbread brownie gingerbread caramels chocolate cake tart cookie
          wafer. Danish soufflé cake jelly beans danish wafer shortbread. Jelly
          chupa chups sweet pie chocolate donut carrot cake brownie croissant.
        </p>
      </ContentModal>
    );
  },
};

export const WithLabelAndSubHeading: Story = {
  args: {
    isOpen: true,
    setIsOpen: fn(),
    modalLabel: '*** Modal label ***',
    modalSubHeading: '*** Modal SubHeading ***',
    modalHeading: 'Shortbread brownie gingerbread caramels',
    modalSecondaryButtonText: 'Cancel',
  },
  render: (args) => {
    // This modal is primarily made to receive ReactNode children
    return (
      <ContentModal {...args}>
        <h3>Liquorice gingerbread lollipop oat cake</h3>
        <p>
          Ice cream brownie dragée marshmallow pie jelly-o candy cake biscuit.
          Sesame snaps marshmallow tootsie roll cheesecake gummies icing
          gingerbread bonbon. Sesame snaps pie brownie oat cake wafer sesame
          snaps fruitcake.
        </p>
        <br />
        <p>
          Liquorice gingerbread lollipop oat cake gingerbread toffee topping.
          Shortbread brownie gingerbread caramels chocolate cake tart cookie
          wafer. Danish soufflé cake jelly beans danish wafer shortbread. Jelly
          chupa chups sweet pie chocolate donut carrot cake brownie croissant.
        </p>

        <br />
        <br />

        <h3>Liquorice gingerbread lollipop oat cake</h3>
        <p>
          Liquorice gingerbread lollipop oat cake gingerbread toffee topping.
          Shortbread brownie gingerbread caramels chocolate cake tart cookie
          wafer. Danish soufflé cake jelly beans danish wafer shortbread. Jelly
          chupa chups sweet pie chocolate donut carrot cake brownie croissant.
        </p>
      </ContentModal>
    );
  },
};
