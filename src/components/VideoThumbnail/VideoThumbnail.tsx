import React, { useEffect, useRef, useState } from 'react';
import { Button, ComposedModal, ModalBody, ModalFooter, ModalHeader } from '@carbon/react';
import { PlayFilledAlt, StarFilled } from '@carbon/icons-react';
import { VT_propsType } from './libs/types';

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

const VideoThumbnail = ({
  title,
  hasPosterImage,
  hasVideo,
  posterAsset,
  videoAsset,
  businessDomains,
  stackValues,
  controls = true,
  autoPlay = false,
  loop = false,
  muted = false,
  caseStudyHref,
  ariaLabel,
}: VT_propsType) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoDuration, setVideoDuration] = useState<string>('00:00');
  const modalVideoRef = useRef<HTMLVideoElement | null>(null);
  const modalOpenTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const resolvedAriaLabel = ariaLabel || `Open featured case study for ${title}`;

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
    if (!caseStudyHref || typeof window === 'undefined') return;
    window.location.assign(caseStudyHref);
  };

  useEffect(() => {
    if (!isModalOpen || !hasVideo) {
      return;
    }

    const videoElement = modalVideoRef.current;
    if (!videoElement) {
      return;
    }

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
    }, openDelay);

    return () => {
      if (modalOpenTimerRef.current) {
        clearTimeout(modalOpenTimerRef.current);
        modalOpenTimerRef.current = null;
      }
    };
  }, [hasVideo, isModalOpen]);

  return (
    <>
      <section className="enj-VideoThumbnail-featuredObject">
        <button
          type="button"
          className="enj-VideoThumbnail-card"
          onClick={handleCardClick}
          aria-label={resolvedAriaLabel}
        >
          <h3 className="enj-VideoThumbnail-featuredObject-title">
            <StarFilled aria-hidden="true" />
            FEATURED CASE STUDY
          </h3>

          <div className="enj-VideoThumbnail-media">
            {hasPosterImage ? (
              <img
                className="enj-VideoThumbnail-image"
                src={posterAsset.url}
                alt={posterAsset.description || posterAsset.title || title}
                width={posterAsset.width}
                height={posterAsset.height}
                loading="lazy"
              />
            ) : hasVideo ? (
              <video
                className="enj-VideoThumbnail-video"
                muted
                playsInline
                preload="metadata"
                aria-label={title || 'Featured video preview'}
                poster={posterAsset.url}
                onLoadedMetadata={handleLoadedMetadata}
              >
                <source src={videoAsset.url} type={videoAsset.contentType ?? 'video/mp4'} />
              </video>
            ) : null}

            <span className="enj-VideoThumbnail-playIcon" aria-hidden="true">
              <PlayFilledAlt />
            </span>

            {videoDuration !== '00:00' && (
              <span
                className="enj-VideoThumbnail-duration"
                aria-label={`Video duration ${videoDuration}`}
              >
                {videoDuration}
              </span>
            )}
          </div>

          <h3 className="enj-VideoThumbnail-featuredTitle">{title}</h3>

          {(businessDomains.length > 0 || stackValues.length > 0) && (
            <div className="enj-VideoThumbnail-meta">
              {businessDomains.length > 0 && (
                <div className="enj-VideoThumbnail-metaGroup">
                  <ul className="enj-VideoThumbnail-metaList" aria-label="Business domains">
                    {businessDomains.map((domain) => (
                      <li key={domain} className="enj-VideoThumbnail-metaChip">
                        {domain}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {stackValues.length > 0 && (
                <div className="enj-VideoThumbnail-metaGroup">
                  <ul className="enj-VideoThumbnail-metaList" aria-label="Tech stack">
                    {stackValues.map((stackValue) => (
                      <li key={stackValue} className="enj-VideoThumbnail-metaChip">
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

      <ComposedModal
        open={isModalOpen}
        onClose={handleModalClose}
        size="md"
        className="enj-VideoThumbnail-modal"
      >
        <ModalHeader title="Featured Case Study" closeModal={handleModalClose} />

        <ModalBody>
          <div className="enj-VideoThumbnail-modalBody">
            {hasVideo && (
              <video
                key={videoAsset.url}
                ref={modalVideoRef}
                className="enj-VideoThumbnail-modalVideo"
                controls={controls}
                autoPlay={autoPlay}
                loop={loop}
                muted={muted}
                playsInline
                preload="metadata"
                poster={posterAsset.url}
                aria-label={title || 'Featured video'}
                onLoadedMetadata={handleLoadedMetadata}
              >
                <source src={videoAsset.url} type={videoAsset.contentType ?? 'video/mp4'} />
                Your browser does not support the video tag.
              </video>
            )}

            <h2 className="enj-VideoThumbnail-modalTitle">{title}</h2>
          </div>
        </ModalBody>

        <ModalFooter>
          <Button kind="secondary" onClick={handleModalClose}>
            Done
          </Button>
          {caseStudyHref && <Button onClick={handleReadFullCaseStudy}>Read full case study</Button>}
        </ModalFooter>
      </ComposedModal>
    </>
  );
};

export default VideoThumbnail;
