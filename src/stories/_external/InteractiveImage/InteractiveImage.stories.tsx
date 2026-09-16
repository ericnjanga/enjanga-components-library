import type { Meta, StoryObj } from '@storybook/react';
import { InteractiveImage } from '../../../components/InteractiveImage';
import product from '../HomePage/assets/enterprise-dashboard.png';
import portrait from '../HomePage/assets/eric-njanga-portrait.jpeg';
import poster from '../CaseStudyCard/assets/intro-poster.png';
import './review.scss';

const meta = {
  title: 'External Components/InteractiveImage',
  component: InteractiveImage,
  parameters: { layout: 'fullscreen' },
  args: { src: product, alt: 'Product preview', href: '#preview', interactionLabel: 'CTA message' },
  render: (args) => <div className="image-hover-review"><div className="image-hover-review__frame"><InteractiveImage {...args} /></div></div>,
} satisfies Meta<typeof InteractiveImage>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Product: Story = {};
export const Portrait: Story = { args: { variant: 'portrait', src: portrait, alt: 'Portrait' } };
export const CaseStudy: Story = { args: { variant: 'case-study', src: poster, alt: 'Case study preview', interactionLabel: 'Watch intro', href: undefined, action: { onClick: () => {} } } };
export const Comparison: Story = {
  render: () => <div className="image-hover-comparison">
    <h1>Image hover treatments</h1>
    <p>Hover or keyboard-focus each image. Move the cursor within each image: the circular label eases from the center to the cursor, follows smoothly, and returns to center on exit. Case studies become clear; portrait and product images become blurred and darkened.</p>
    <div className="image-hover-comparison__grid">
      {([
        ['case-study', poster, 'Case study', 'Watch intro'],
        ['portrait', portrait, 'Portrait', 'CTA message'],
        ['product', product, 'Product image', 'CTA message'],
      ] as const).map(([variant, src, title, label]) => <section key={variant}><h2>{title}</h2><div className="image-hover-review__frame">
        <InteractiveImage variant={variant} src={src} alt={title} interactionLabel={label} action={{ onClick: () => {} }} />
      </div></section>)}
    </div>
  </div>,
};
