import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { VideoThumbnail } from '../../../components/VideoThumbnail';
import TilePost from '../../../components/TilePost/TilePost';
import { collectionCaseStudies } from '@/libs/mockData/collectionCaseStudies';

type CaseStudyMedia = {
  url?: string;
  title?: string;
  description?: string;
  width?: number | null;
  height?: number | null;
  contentType?: string;
};

type CaseStudyItem = {
  sys: { id: string };
  slug: string;
  title: string;
  blurb?: string | null;
  businessDomain?: string[] | null;
  techstack?: string[] | null;
  introVideo?: CaseStudyMedia | null;
  introVideoImage?: CaseStudyMedia | null;
};

const caseStudies = (collectionCaseStudies?.data?.en?.items ?? []) as CaseStudyItem[];

const toAsset = (asset?: CaseStudyMedia | null) => ({
  url: asset?.url,
  title: asset?.title,
  description: asset?.description,
  width: typeof asset?.width === 'number' ? asset.width : undefined,
  height: typeof asset?.height === 'number' ? asset.height : undefined,
  contentType: asset?.contentType,
});

const meta: Meta = {
  title: 'Pages for testing/CaseStudyPage',
  tags: [],
};

export default meta;

type Story = StoryObj;

export const MixedCaseStudiesGrid: Story = {
  render: () => (
    <div style={{ padding: '1.5rem', background: '#0f1030' }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
          gap: '1.25rem',
          alignItems: 'stretch',
        }}
      >
        {caseStudies.map((item) => {
          const hasVideo = Boolean(item.introVideo?.url);
          const hasPosterImage = Boolean(item.introVideoImage?.url);

          if (hasVideo && hasPosterImage) {
            return (
              <VideoThumbnail
                key={item.sys.id}
                title={item.title}
                hasPosterImage={hasPosterImage}
                hasVideo={hasVideo}
                posterAsset={toAsset(item.introVideoImage)}
                videoAsset={toAsset(item.introVideo)}
                businessDomains={item.businessDomain ?? []}
                stackValues={item.techstack ?? []}
                caseStudyHref={`/case-studies/${item.slug}`}
                ariaLabel={`Open featured case study for ${item.title}`}
              />
            );
          }

          return (
            <TilePost
              key={item.sys.id}
              orgTitle={item.businessDomain?.[0] || 'Case study'}
              orgSlug={item.slug}
              orgPictogramName="Leadership"
              featuredText={{
                heading: {
                  level: 3,
                  children: item.title,
                },
                smartText: {
                  plainText: item.blurb || 'No summary available for this case study.',
                },
              }}
            />
          );
        })}
      </div>
    </div>
  ),
};
