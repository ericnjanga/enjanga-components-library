import React, { useEffect, useMemo, useRef, useState } from 'react';
import clsx from 'clsx';
import { Button, ComposedModal, ModalBody, ModalFooter, ModalHeader } from '@carbon/react';
import { PlayFilledAlt, StarFilled } from '@carbon/icons-react';
import { CMSRichText } from '@/components/CMSRichText';
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

const formatDuration = (durationInSeconds?: number): string => {
  if (!durationInSeconds || Number.isNaN(durationInSeconds) || durationInSeconds <= 0) {
    return '00:00';
  }

  const roundedSeconds = Math.floor(durationInSeconds);
  const hours = Math.floor(roundedSeconds / 3600);
  const minutes = Math.floor((roundedSeconds % 3600) / 60);
  const seconds = roundedSeconds % 60;

  if (hours > 0) {
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(
      seconds
    ).padStart(2, '0')}`;
  }

  return `${String(minutes).padStart(2, '0')} min ${String(seconds).padStart(2, '0')} sec`;
};

const isSafariBrowser = () => {
  if (typeof navigator === 'undefined') return false;
  return /^((?!chrome|chromium|android).)*safari/i.test(navigator.userAgent);
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoDuration, setVideoDuration] = useState<string>('00:00');
  const modalVideoRef = useRef<HTMLVideoElement | null>(null);
  const modalOpenTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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

  const handleLoadedMetadata: React.ReactEventHandler<HTMLVideoElement> = (event) => {
    const duration = event.currentTarget.duration;
    setVideoDuration(formatDuration(duration));
  };

  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  const attemptPlay = (videoElement: HTMLVideoElement, retryMuted = true) => {
    const playPromise = videoElement.play();
    if (playPromise && typeof playPromise.catch === 'function') {
      playPromise.catch(() => {
        // Safari can reject autoplay if not considered a direct user gesture.
        if (retryMuted && !videoElement.muted) {
          videoElement.muted = true;
          attemptPlay(videoElement, false);
        }
      });
    }
  };

  const handleModalClose = () => {
    if (modalOpenTimerRef.current) {
      clearTimeout(modalOpenTimerRef.current);
      modalOpenTimerRef.current = null;
    }

    if (modalVideoRef.current) {
      modalVideoRef.current.pause();
      modalVideoRef.current.currentTime = 0;
    }

    setIsModalOpen(false);
  };

  const handleReadFullCaseStudy = () => {
    if (typeof window !== 'undefined') {
      window.location.assign(caseStudyHref);
    }
  };

  useEffect(() => {
    if (!isModalOpen || !hasVideo) {
      return;
    }

    const videoElement = modalVideoRef.current;
    if (!videoElement) {
      return;
    }

    // Force the media element to re-read source metadata; Safari can require this on some MP4s.
    videoElement.load();

    const openDelay = isSafariBrowser() ? 0 : 500;

    modalOpenTimerRef.current = setTimeout(() => {
      const latestVideoElement = modalVideoRef.current;
      if (!latestVideoElement) {
        return;
      }

      if (latestVideoElement.readyState >= 2) {
        attemptPlay(latestVideoElement);
        return;
      }

      const handleCanPlay = () => {
        attemptPlay(latestVideoElement);
      };

      latestVideoElement.addEventListener('canplay', handleCanPlay, { once: true });
    }, 500);

    return () => {
      if (modalOpenTimerRef.current) {
        clearTimeout(modalOpenTimerRef.current);
        modalOpenTimerRef.current = null;
      }
    };
  }, [hasVideo, isModalOpen]);

  return (
    <>
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
          <section className="enj-HeroVideo-featuredObject">
            <button
              type="button"
              className="enj-HeroVideo-card"
              onClick={handleCardClick}
              aria-label={`Open featured case study for ${featuredObject.title}`}
            >
              <h3 className="enj-HeroVideo-featuredObject-title">
                <StarFilled aria-hidden="true" />
                FEATURED CASE STUDY
              </h3>
              <div className="enj-HeroVideo-media">
                {hasPosterImage ? (
                  <img
                    className="enj-HeroVideo-image"
                    src={posterAsset.url}
                    alt={posterAsset.description || posterAsset.title || featuredObject.title}
                    width={posterAsset.width}
                    height={posterAsset.height}
                    loading="lazy"
                  />
                ) : hasVideo ? (
                  <video
                    className="enj-HeroVideo-video"
                    muted
                    playsInline
                    preload="metadata"
                    aria-label={featuredObject.title || 'Featured video preview'}
                    poster={posterAsset.url}
                  >
                    <source src={videoAsset.url} type={videoAsset.contentType ?? 'video/mp4'} />
                  </video>
                ) : null}

                <span className="enj-HeroVideo-playIcon" aria-hidden="true">
                  <PlayFilledAlt />
                </span>

                {videoDuration !== '00:00' && (
                  <span
                    className="enj-HeroVideo-duration"
                    aria-label={`Video duration ${videoDuration}`}
                  >
                    {videoDuration}
                  </span>
                )}
              </div>

              <h3 className="enj-HeroVideo-featuredTitle">{featuredObject.title}</h3>

              {(businessDomains.length > 0 || stackValues.length > 0) && (
                <div className="enj-HeroVideo-meta">
                  {businessDomains.length > 0 && (
                    <div className="enj-HeroVideo-metaGroup">
                      {/* <span className="enj-HeroVideo-metaLabel">Business domain</span> */}
                      <ul className="enj-HeroVideo-metaList" aria-label="Business domains">
                        {businessDomains.map((domain) => (
                          <li key={domain} className="enj-HeroVideo-metaChip">
                            {domain}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {stackValues.length > 0 && (
                    <div className="enj-HeroVideo-metaGroup">
                      {/* <span className="enj-HeroVideo-metaLabel">Tech stack</span> */}
                      <ul className="enj-HeroVideo-metaList" aria-label="Tech stack">
                        {stackValues.map((stackValue) => (
                          <li key={stackValue} className="enj-HeroVideo-metaChip">
                            {stackValue}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </button>
          </section>
        </div>
      </Tag>

      <ComposedModal
        open={isModalOpen}
        onClose={handleModalClose}
        size="md"
        className="enj-HeroVideo-modal"
      >
        <ModalHeader title="Featured Case Study" closeModal={handleModalClose} />

        <ModalBody>
          <div className="enj-HeroVideo-modalBody">
            {hasVideo && (
              <video
                key={videoAsset.url}
                ref={modalVideoRef}
                className="enj-HeroVideo-modalVideo"
                controls={controls}
                autoPlay={autoPlay}
                loop={loop}
                muted={muted}
                playsInline
                preload="metadata"
                poster={posterAsset.url}
                aria-label={featuredObject.title || 'Featured video'}
                onLoadedMetadata={handleLoadedMetadata}
              >
                <source src={videoAsset.url} type={videoAsset.contentType ?? 'video/mp4'} />
                Your browser does not support the video tag.
              </video>
            )}

            <h2 className="enj-HeroVideo-modalTitle">{featuredObject.title}</h2>
          </div>
        </ModalBody>

        <ModalFooter>
          <Button kind="secondary" onClick={handleModalClose}>
            Done
          </Button>
          <Button onClick={handleReadFullCaseStudy}>Read full case study</Button>
        </ModalFooter>
      </ComposedModal>
    </>
  );
};

export default HeroVideo;
