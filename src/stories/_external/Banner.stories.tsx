import type { Meta, StoryObj } from '@storybook/react';
import Banner from '../../components/Banner/Banner';

const meta: Meta<typeof Banner> = {
  title: 'External Components/Banner',
  component: Banner,
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
  },
  args: {
    title: 'Bridging Design & Code',
    subtitle: `With 15+ years of experience, I specialize in transforming complex 
    business requirements into intuitive, high-performance web applications. 
    I lead end-to-end UX and front-end development through agile, cross-functional 
    collaboration—delivering results that drive business impact.`,
  },
};

export default meta;

type Story = StoryObj<typeof Banner>;

export const Default: Story = {};
