import type { Meta, StoryObj } from '@storybook/react';
import { BrandLogo } from '../../components/BrandLogo';
import { SampleSVGLogo, ClickableComponent } from './utils';

const meta: Meta<typeof BrandLogo> = {
  title: 'External Components/BrandLogo',
  component: BrandLogo,
  argTypes: {
    value: {
      // string, number, JSX, component, etc ...
      control: 'select',
      description: 'Can be string, SVG, img, or React component',
      options: ['text', 'SVG', 'image', 'Custom component'],
      mapping: {
        // Mapping options to actual values
        text: 'Sample text LOGO',
        SVG: <SampleSVGLogo />,
        image: (
          <img
            src="https://placehold.co/130x60?text=Logo"
            alt="Placeholder logo"
          />
        ),
        'Custom component': (
          <ClickableComponent
            onClickHandler={() => alert('clicked on component')}
            prop1="Click"
            prop2="me ..."
          />
        ),
      },
    },
    className: { control: 'text' },
    alt: { control: 'text' },
  },
  args: {
    value: 'text',
    className: '',
    alt: '',
  },
};

export default meta;

type Story = StoryObj<typeof BrandLogo>;

export const Default: Story = {
  render: (args) => {
    // You can transform args here if needed
    return <BrandLogo {...args} />;
  },
};
