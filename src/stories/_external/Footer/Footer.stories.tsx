import { footerFixture } from './fixtures';
import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from '../../../components/Footer';
import '../../../components/Footer/_Footer.scss';

const meta = {
  title: 'External Components/Footer',
  component: Footer,
  parameters: { layout: 'fullscreen' },
  args: footerFixture,
} satisfies Meta<typeof Footer>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Mobile: Story = {
  parameters: { viewport: { defaultViewport: 'mobile1' } },
};
export const Dark: Story = { globals: { theme: 'dark' } };
export const BrandOnly: Story = { args: { links: [], copyright: undefined } };
