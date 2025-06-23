import type { Meta, StoryObj } from '@storybook/react';
import ContactButton, {
  contactButtonIconsList,
  contactButtonKindProps,
  contactButtonSizeProps,
} from '../../components/ContactButton/ContactButton';

const meta: Meta<typeof ContactButton> = {
  title: 'Components/ContactButton',
  component: ContactButton,
  argTypes: {
    btnText: { control: 'text' },
    btnIcon: {
      control: 'select',
      options: [...contactButtonIconsList],
    },
    btnKind: {
      control: 'select',
      options: [...contactButtonKindProps],
    },
    btnSize: {
      control: 'select',
      options: [...contactButtonSizeProps],
    },
    // Modal controls...
  },
  args: {
    btnText: 'Contact Us',
    btnIcon: 'Email',
    btnKind: 'primary',
    btnSize: 'md',
    modalLabel: 'Contact Form',
    modalHeading: 'Get in touch with Eric',
    modalSubHeading:
      'Biscuit tootsie roll fruitcake gummies marshmallow bear claw pie cotton candy tootsie roll. ',
    modalPrimaryButtonText: 'Send Message',
    modalSecondaryButtonText: 'Cancel',
  },
};

export default meta;

type Story = StoryObj<typeof ContactButton>;

export const Default: Story = {};
