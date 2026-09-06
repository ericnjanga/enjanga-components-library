import type { Meta, StoryObj } from '@storybook/react';
import { CaseStudyMedia } from '../../../components/CaseStudyMedia';
import { caseStudiesPageFixture } from '../CaseStudiesPage/fixtures';
import '../../../components/CaseStudyMedia/_CaseStudyMedia.scss';

const study = caseStudiesPageFixture.caseStudies[0];
const meta = {
  title: 'External Components/CaseStudyMedia',
  component: CaseStudyMedia,
  decorators: [Story => <div style={{ width: 'min(100%, 489px)' }}><Story /></div>],
  args: { title: study.title, posterSrc: study.posterSrc, posterAlt: study.posterAlt, videoSrc: study.videoSrc },
} satisfies Meta<typeof CaseStudyMedia>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Video: Story = {};
export const StaticPoster: Story = { args: { videoSrc: undefined } };
export const Disabled: Story = { args: { introDisabled: true } };
