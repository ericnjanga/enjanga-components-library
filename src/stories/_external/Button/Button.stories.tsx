import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';
import { Button } from '../../../components/Button';

const meta = {
  title: 'External Components/Button',
  component: Button,
  parameters: { layout: 'centered' },
  args: { children: 'Primary', onClick: fn() },
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary', 'tertiary'] },
    icon: { control: 'select', options: [undefined, 'chevron-right', 'close'] },
  },
} satisfies Meta<typeof Button>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
export const Secondary: Story = { args: { variant: 'secondary', children: 'Secondary' } };
export const Tertiary: Story = { args: { variant: 'tertiary', children: 'Tertiary' } };
export const WithChevron: Story = { args: { icon: 'chevron-right' } };
export const WithClose: Story = { args: { variant: 'tertiary', children: 'Tertiary', icon: 'close' } };
export const Disabled: Story = { args: { disabled: true, icon: 'chevron-right' } };
export const DesignVariants: Story = {
  render: () => <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, max-content)', gap: '2rem', alignItems: 'center', justifyItems: 'start' }}>
    {(['primary', 'secondary', 'tertiary'] as const).map(variant => <div key={variant} style={{ display: 'contents' }}>
      <Button variant={variant}>{variant[0].toUpperCase() + variant.slice(1)}</Button>
      <Button variant={variant} icon={variant === 'tertiary' ? 'close' : 'chevron-right'}>{variant[0].toUpperCase() + variant.slice(1)}</Button>
    </div>)}
  </div>,
};
export const KeyboardFocus: Story = {
  play: async ({ canvasElement, args }) => {
    const button = within(canvasElement).getByRole('button');
    button.focus();
    await expect(button).toHaveFocus();
    await userEvent.keyboard('{Enter}');
    await expect(args.onClick).toHaveBeenCalledOnce();
  },
};

export const NavigationLink: Story = {
  args: { href: 'http://localhost:3000/case-studies', children: 'Explore case studies', variant: 'secondary', icon: 'chevron-right' },
};
