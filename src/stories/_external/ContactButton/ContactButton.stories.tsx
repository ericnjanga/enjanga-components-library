import type { Meta, StoryObj } from '@storybook/react';
import ContactButton from '../../../components/ContactButton/ContactButton';
import {
  CB_Icons_opts,
  CB_kind_opts,
  CB_size_opts,
} from '@/components/ContactButton/libs/types';

const meta: Meta<typeof ContactButton> = {
  title: 'External Components/ContactButton',
  component: ContactButton,
  argTypes: {
    btnText: { control: 'text' },
    btnIcon: {
      control: 'select',
      options: [...CB_Icons_opts],
    },
    btnKind: {
      control: 'select',
      options: [...CB_kind_opts],
    },
    btnSize: {
      control: 'select',
      options: [...CB_size_opts],
    },
    // Modal controls...
  },
  args: {
    btnText: 'Get in touch with me',
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
