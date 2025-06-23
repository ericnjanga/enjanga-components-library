import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test'; // Correct import for Storybook 7+
import ContactModal from '../../components/ContactModal/ContactModal';

const meta: Meta<typeof ContactModal> = {
  title: 'Internal Components/ContactModal',
  component: ContactModal,
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
    modalPrimaryButtonText: { control: 'text' },
    modalSecondaryButtonText: { control: 'text' },
  },
  args: {
    isOpen: true,
    setIsOpen: fn(), // Creates a mock function that logs to actions panel
    modalLabel: 'Contact Form',
    modalHeading: 'Get in touch with Eric',
    modalSubHeading:
      'Biscuit tootsie roll fruitcake gummies marshmallow bear claw pie cotton candy tootsie roll. ',
    modalPrimaryButtonText: 'Send Message',
    modalSecondaryButtonText: 'Cancel',
  },
};

export default meta;

type Story = StoryObj<typeof ContactModal>;

export const Default: Story = {
  args: {
    isOpen: true,
  },
};
