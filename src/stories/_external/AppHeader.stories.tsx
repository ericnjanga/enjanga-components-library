import type { Meta, StoryObj } from '@storybook/react';
import AppHeader from '../../components/AppHeader/AppHeader';
import {
  Navigation1,
  Navigation2,
  GlobalBarItems1,
  GlobalBarItems2,
  ClickableComponent,
} from './utils';

const meta: Meta<typeof AppHeader> = {
  title: 'External Components/AppHeader',
  component: AppHeader,
  argTypes: {
    brand: {
      // string, number, JSX, component, etc ...
      control: 'select',
      options: ['text', 'number', 'jsx', 'component'],
      mapping: {
        // Mapping options to actual values
        text: 'Sample text',
        number: 38,
        jsx: (
          <span style={{ color: 'green', border: '1px solid blue' }}>
            JSX content
          </span>
        ),
        component: (
          <ClickableComponent
            onClickHandler={() => alert('clicked on component')}
            prop1="Click"
            prop2="me ..."
          />
        ),
      },
    },
    navigation: {
      control: 'select',
      options: ['Using Carbon HeaderMenuItem', 'Using custom components'],
      mapping: {
        'Using Carbon HeaderMenuItem': <Navigation1 />,
        'Using custom components': <Navigation2 />,
      },
    },
    globalBarItems: {
      control: 'select',
      options: ['Using Carbon HeaderGlobalAction', 'Using custom components'],
      mapping: {
        'Using Carbon HeaderGlobalAction': <GlobalBarItems1 />,
        'Using custom components': <GlobalBarItems2 />,
      },
    },
    brandLabel: { control: 'text' },
    brandRoute: { control: 'text' },
  },
  args: {
    brand: 'text',
    brandLabel: 'Eric Njanga **',
    brandRoute: '',
    navigation: 'Using Carbon HeaderMenuItem',
    globalBarItems: 'Using Carbon HeaderGlobalAction',
  },
};

export default meta;

type Story = StoryObj<typeof AppHeader>;

export const Default: Story = {
  render: (args) => {
    // You can transform args here if needed
    return <AppHeader {...args} />;
  },
};

/*
--- In case we need custom logic ---

export const WithCustomLogic: Story = {
  args: {
    brand: 'jsx', // Override default
  },
  render: (args) => {
    // Conditional rendering based on brand
    return (
      <div style={{ border: '1px dashed #ccc', padding: '1rem' }}>
        <AppHeader {...args} />
        {typeof args.brand === 'string' && (
          <p>Current type: {args.brand}</p>
        )}
      </div>
    );
  }
};
*/
