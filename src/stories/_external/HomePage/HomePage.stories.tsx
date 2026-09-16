import type { Meta, StoryObj } from '@storybook/react';
import { HomePage } from '../../../components/HomePage';
import { PortfolioPreview } from '../PortfolioNavigation/PortfolioPreview';
import { homePageFixture } from './fixtures';

const meta = {
  title: 'Pages/Home', component: HomePage,
  parameters: { layout: 'fullscreen' },
  args: homePageFixture,
  render: args => <PortfolioPreview home={args} />,
} satisfies Meta<typeof HomePage>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { parameters: { chromatic: { viewports: [1440, 1280, 1024, 1000, 768, 390] } } };
export const Mobile: Story = { parameters: { viewport: { defaultViewport: 'mobile1' } } };
export const Dark: Story = { globals: { theme: 'dark' } };
