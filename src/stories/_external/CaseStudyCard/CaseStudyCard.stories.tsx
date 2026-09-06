import poster from './assets/intro-poster.png';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';
import { CaseStudyCard } from '../../../components/CaseStudyCard';

const meta = {
  title: 'External Components/CaseStudyCard', component: CaseStudyCard,
  parameters: { layout: 'fullscreen' },
  decorators: [Story => <div style={{ padding: '24px', background: 'var(--enj-case-study-background)' }}><Story /></div>],
  args: {
    title: 'Modernizing the Way Financial Records Are Retrieved',
    description: 'Designed and implemented a scalable search results workflow for financial correction notices, enabling front- and back-office operators to quickly locate, review, and manage transaction amendments while supporting future API integration.',
    posterSrc: poster,
    posterAlt: 'Case study video preview', onWatchIntro: fn(), onReadCaseStudy: fn(),
  },
} satisfies Meta<typeof CaseStudyCard>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Desktop: Story = {
  parameters: { chromatic: { viewports: [1440] } },
};
export const Tablet: Story = {
  parameters: { viewport: { defaultViewport: 'tablet' }, chromatic: { viewports: [768] } },
};
export const Mobile: Story = {
  parameters: { viewport: { defaultViewport: 'mobile1' }, chromatic: { viewports: [320, 390] } },
};
export const ResponsiveBoundaries: Story = {
  parameters: { chromatic: { viewports: [671, 672, 1055, 1056] } },
  play: async ({ canvasElement }) => {
    await document.fonts.load('500 18px "Mona Sans"');
    await document.fonts.ready;
    const card = within(canvasElement).getByRole('article');
    const media = card.querySelector<HTMLElement>('.enj-case-study-card__media')!;
    const content = card.querySelector<HTMLElement>('.enj-case-study-card__content')!;
    const desktop = window.matchMedia('(min-width: 66rem)').matches;
    if (desktop) await expect(content.getBoundingClientRect().left).toBeGreaterThan(media.getBoundingClientRect().right);
    else await expect(content.getBoundingClientRect().top).toBeGreaterThanOrEqual(media.getBoundingClientRect().bottom);
    await expect(card.scrollWidth).toBeLessThanOrEqual(card.clientWidth);
    const heading = within(card).getByRole('heading', { level: 2 });
    await expect(getComputedStyle(heading).fontSize).toBe(getComputedStyle(document.documentElement).getPropertyValue('--enj-h2-font-size').trim());
    // Verified Figma reference values, independent of the implementation tokens.
    const tablet = window.matchMedia('(min-width: 42rem)').matches;
    const [size, line, margin, gap] = desktop ? ['40px', '48px', '25px', '79px']
      : tablet ? ['36px', '44px', '21px', '40px'] : ['33px', '38px', '17px', '25px'];
    await expect(getComputedStyle(heading).fontSize).toBe(size);
    await expect(getComputedStyle(heading).lineHeight).toBe(line);
    await expect(getComputedStyle(heading).marginBottom).toBe(margin);
    await expect(getComputedStyle(card).gap).toBe(gap);
    await expect(media.getBoundingClientRect().height).toBeGreaterThanOrEqual(tablet ? 469 : 349);
  },
};
export const DisabledActions: Story = { args: { introDisabled: true, readDisabled: true } };
export const LongContent: Story = {
  args: { title: 'A longer case study title that wraps naturally across multiple lines on smaller screens', description: 'Long content and identifiers like SuperLongUnbrokenProjectIdentifierThatMustNeverOverflowTheCard demonstrate wrapping.', readLabel: 'Explore the complete project and its implementation details' },
  parameters: { chromatic: { viewports: [320, 768, 1440] } },
};
export const CustomLabels: Story = { args: { introLabel: 'Play video', readLabel: 'Explore project', posterAlt: '' } };
export const KeyboardActions: Story = {
  play: async ({ canvasElement, args }) => {
    const buttons = within(canvasElement).getAllByRole('button');
    buttons[0].focus(); await userEvent.keyboard('{Enter}');
    await expect(args.onWatchIntro).toHaveBeenCalledOnce();
    await userEvent.tab(); await expect(buttons[1]).toHaveFocus();
    await userEvent.keyboard(' '); await expect(args.onReadCaseStudy).toHaveBeenCalledOnce();
  },
};

export const MultipleParagraphs: Story = {
  args: { description: Array(3).fill(meta.args.description) },
  parameters: { chromatic: { viewports: [1440, 898, 448] } },
};
