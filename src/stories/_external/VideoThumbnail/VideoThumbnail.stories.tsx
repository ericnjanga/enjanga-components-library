import type { Meta, StoryObj } from '@storybook/react';
import { VideoThumbnail } from '../../../components/VideoThumbnail';
import { heroVideoMappedArgs } from '../HeroVideo/HeroVideo.stories';

const normalizeAssetUrl = (url?: string) => {
  if (!url) return undefined;
  if (url.startsWith('//')) return `https:${url}`;
  return url;
};

const resolveAsset = (asset?: {
  url?: string;
  title?: string;
  description?: string;
  width?: number;
  height?: number;
  contentType?: string;
}) => ({
  url: normalizeAssetUrl(asset?.url),
  title: asset?.title,
  description: asset?.description,
  width: asset?.width,
  height: asset?.height,
  contentType: asset?.contentType,
});

const videoAsset = resolveAsset(heroVideoMappedArgs.featuredObject.video);
const posterAsset = resolveAsset(heroVideoMappedArgs.featuredObject.videoImage);

const meta: Meta<typeof VideoThumbnail> = {
  title: 'External Components/VideoThumbnail',
  component: VideoThumbnail,
  tags: [],
  args: {
    title: heroVideoMappedArgs.featuredObject.title,
    hasPosterImage: Boolean(posterAsset.url),
    hasVideo: Boolean(videoAsset.url),
    posterAsset,
    videoAsset,
    businessDomains: heroVideoMappedArgs.featuredObject.businessDomain ?? [],
    stackValues: heroVideoMappedArgs.featuredObject.teckStack ?? [],
    caseStudyHref: `/case-studies/${heroVideoMappedArgs.featuredObject.slug}`,
  },
};

export default meta;

type Story = StoryObj<typeof VideoThumbnail>;

export const Default: Story = {};

export const HeroVideoStyle: Story = {
  args: {
    showHeading: true,
    styleVariant: 'heroVideo',
  },
};

export const VideoFallback: Story = {
  args: {
    hasPosterImage: false,
  },
};

export const WithoutBusinessDomainsAndStackValues: Story = {
  render: ({ businessDomains, stackValues, ...args }) => {
    void businessDomains;
    void stackValues;

    return <VideoThumbnail {...args} />;
  },
};
