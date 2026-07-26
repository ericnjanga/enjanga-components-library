import React, { useMemo } from 'react';
import clsx from 'clsx';
import { CMSRichText } from '@/components/CMSRichText';
import { VideoThumbnail } from '@/components/VideoThumbnail';
import { useContainerSize } from '@/libs/useContainerSize';
import { HVD_assetType, HVD_propsType, HVD_tagListType } from './libs/types';

type HVD_resolvedAssetType = {
  url?: string;
  title?: string;
  description?: string;
  width?: number;
  height?: number;
  contentType?: string;
};

const normalizeAssetUrl = (url?: string) => {
  if (!url) return undefined;
  if (url.startsWith('//')) return `https:${url}`;
  return url;
};

const resolveAsset = (asset?: string | HVD_assetType): HVD_resolvedAssetType => {
  if (!asset) return {};

  if (typeof asset === 'string') {
    return { url: normalizeAssetUrl(asset) };
  }

  const fieldsFile = asset.fields?.file;
  const rootFile = asset.file;

  return {
    url: normalizeAssetUrl(asset.url ?? rootFile?.url ?? fieldsFile?.url),
    title: asset.title ?? asset.fields?.title,
    description: asset.description ?? asset.fields?.description,
    width:
      asset.width ?? rootFile?.details?.image?.width ?? fieldsFile?.details?.image?.width,
    height:
      asset.height ?? rootFile?.details?.image?.height ?? fieldsFile?.details?.image?.height,
    contentType: asset.contentType ?? rootFile?.contentType ?? fieldsFile?.contentType,
  };
};

const normalizeTagList = (value?: HVD_tagListType): string[] => {
  if (!value) return [];

  if (Array.isArray(value)) {
    return value.map((item) => item.trim()).filter(Boolean);
  }

  return value
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);
};

const HeroVideo = ({
  id,
  style,
  className,
  informationBlock,
  featuredObject,
  controls = true,
  autoPlay = false,
  loop = false,
  muted = false,
  role = 'banner',
}: HVD_propsType) => {
  const { containerRef, activeBreakpoint } = useContainerSize<HTMLDivElement>();

  const videoAsset = resolveAsset(featuredObject.video);
  const posterAsset = resolveAsset(featuredObject.videoImage);

  const businessDomains = normalizeTagList(featuredObject.businessDomain);
  const stackValues = normalizeTagList(featuredObject.teckStack ?? featuredObject.techStack);

  const hasVideo = Boolean(videoAsset.url);
  const hasPosterImage = Boolean(posterAsset.url);
  const Tag = useMemo(() => (role === 'banner' ? 'header' : 'div'), [role]);
  const caseStudyHref = `/case-studies/${featuredObject.slug}`;

  const cssClasses = useMemo(
    () =>
      clsx('enj-HeroVideo', className, {
        'enj-HeroVideo--hasVideo': hasVideo,
        'enj-HeroVideo--hasPoster': hasPosterImage,
      }),
    [className, hasPosterImage, hasVideo]
  );

  return (
    <Tag
      id={id}
      className={`${cssClasses} enj-HeroVideo-${activeBreakpoint}`}
      style={style}
      ref={containerRef}
      role={role}
    >
      <div className="enj-container">
        <div className="enj-container-txt-wrapper">
          <div className="enj-HeroVideo-copy">
            <h1 className="enj-HeroVideo-informationTitle">{informationBlock.title}</h1>

            {informationBlock.description && (
              <CMSRichText
                className="enj-HeroVideo-informationDescription"
                data={informationBlock.description}
              />
            )}
          </div>
        </div>
        <VideoThumbnail
          title={featuredObject.title}
          hasPosterImage={hasPosterImage}
          hasVideo={hasVideo}
          posterAsset={posterAsset}
          videoAsset={videoAsset}
          businessDomains={businessDomains}
          stackValues={stackValues}
          showHeading
          styleVariant="heroVideo"
          controls={controls}
          autoPlay={autoPlay}
          loop={loop}
          muted={muted}
          caseStudyHref={caseStudyHref}
          ariaLabel={`Open featured case study for ${featuredObject.title}`}
        />
      </div>
    </Tag>
  );
};

export default HeroVideo;
