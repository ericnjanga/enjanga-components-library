import type { Meta, StoryObj } from '@storybook/react';
import { PageHero } from '../../../components/PageHero';
import { homeHeroFixture } from './fixtures';

const meta = {
  title: 'External Components/PageHero',
  component: PageHero,
  args: homeHeroFixture,
} satisfies Meta<typeof PageHero>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Home: Story = {};
export const Mobile: Story = { parameters: { viewport: { defaultViewport: 'mobile1' } } };
export const Dark: Story = { globals: { theme: 'dark' } };
