import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  ComposedModal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "@carbon/react";
import { PlayFilledAlt, StarFilled } from "@carbon/icons-react";
import clsx from "clsx";
import { ArrowIcon } from "@/components/ArrowIcon/ArrowIcon";
import { useContainerSize } from "@/libs/useContainerSize";
import { VT_propsType } from "./libs/types";

const formatDuration = (durationInSeconds?: number): string => {
  if (
    !durationInSeconds ||
    Number.isNaN(durationInSeconds) ||
    durationInSeconds <= 0
  ) {
    return "00:00";
  }

  const roundedSeconds = Math.floor(durationInSeconds);
  const hours = Math.floor(roundedSeconds / 3600);
  const minutes = Math.floor((roundedSeconds % 3600) / 60);
  const seconds = roundedSeconds % 60;

  if (hours > 0) {
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}:${String(seconds).padStart(2, "0")}`;
  }

  return `${String(minutes).padStart(2, "0")} min ${String(seconds).padStart(
    2,
    "0"
  )} sec`;
};

const isSafariBrowser = () => {
  if (typeof navigator === "undefined") return false;
  return /^((?!chrome|chromium|android).)*safari/i.test(navigator.userAgent);
};

const VideoThumbnail = ({
  title,
  hasPosterImage,
  hasVideo,
  posterAsset,
  videoAsset,
  businessDomains = [],
  stackValues = [],
  showHeading = false,
  styleVariant = "tilePost",
  controls = true,
  autoPlay = true,
  loop = false,
  muted = false,
  caseStudyHref,
  ariaLabel,
}: VT_propsType) => {
  const { containerRef, activeBreakpoint } = useContainerSize<HTMLElement>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoDuration, setVideoDuration] = useState<string>("00:00");
  const modalVideoRef = useRef<HTMLVideoElement | null>(null);
  const modalOpenTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const resolvedAriaLabel =
    ariaLabel || `Play case study preview for ${title}`;

  const handleLoadedMetadata: React.ReactEventHandler<HTMLVideoElement> = (
    event
  ) => {
    const duration = event.currentTarget.duration;
    setVideoDuration(formatDuration(duration));
  };

  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  const attemptPlay = (videoElement: HTMLVideoElement, retryMuted = true) => {
    const playPromise = videoElement.play();
    if (playPromise && typeof playPromise.catch === "function") {
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
    if (!caseStudyHref || typeof window === "undefined") return;
    window.location.assign(caseStudyHref);
  };

  useEffect(() => {
    if (!isModalOpen || !hasVideo || !autoPlay) {
      return;
    }

    const openDelay = isSafariBrowser() ? 150 : 350;
    let videoElement: HTMLVideoElement | null = null;
    let handleCanPlay: (() => void) | undefined;

    const startPlayback = (mountAttempt = 0) => {
      videoElement = modalVideoRef.current;
      if (!videoElement) {
        if (mountAttempt < 10) {
          modalOpenTimerRef.current = setTimeout(
            () => startPlayback(mountAttempt + 1),
            50
          );
        }
        return;
      }

      videoElement.load();

      if (videoElement.readyState >= 2) {
        attemptPlay(videoElement);
        return;
      }

      handleCanPlay = () => {
        if (videoElement) attemptPlay(videoElement);
      };

      videoElement.addEventListener("canplay", handleCanPlay, {
        once: true,
      });
    };

    modalOpenTimerRef.current = setTimeout(startPlayback, openDelay);

    return () => {
      if (modalOpenTimerRef.current) {
        clearTimeout(modalOpenTimerRef.current);
        modalOpenTimerRef.current = null;
      }
      if (videoElement && handleCanPlay) {
        videoElement.removeEventListener("canplay", handleCanPlay);
      }
    };
  }, [autoPlay, hasVideo, isModalOpen]);

  return (
    <>
      <article
        ref={containerRef}
        className={`enj-VideoThumbnail-featuredObject enj-VideoThumbnail--${styleVariant}`}
      >
        <div
          className={clsx("enj-VideoThumbnail-card", {
            "enj-postTile": styleVariant === "tilePost",
            "enj-postTile--card": styleVariant === "tilePost",
            "enj-postTile--has-link": styleVariant === "tilePost",
            "enj-postTile--has-icon": styleVariant === "tilePost",
            [`enj-postTile-${activeBreakpoint}`]: styleVariant === "tilePost",
          })}
          onClick={handleCardClick}
        >
          {showHeading && (
            <h3 className="enj-VideoThumbnail-featuredObject-title">
              <StarFilled aria-hidden="true" />
              FEATURED CASE STUDY
            </h3>
          )}

          {styleVariant === "tilePost" && (
            <h3 className="enj-VideoThumbnail-featuredTitle enj-postTile-title">
              {title}
            </h3>
          )}

          {styleVariant === "tilePost" && (
            <div className="enj-postTile-icon-wrapper">
              <ArrowIcon
                className="enj-postTile-icon"
                title={title}
                name="Right"
              />
            </div>
          )}

          <div className="enj-VideoThumbnail-media">
            {hasPosterImage ? (
              <img
                className="enj-VideoThumbnail-image"
                src={posterAsset.url}
                alt={posterAsset.description || posterAsset.title || title}
                width={posterAsset.width}
                height={posterAsset.height}
                loading={styleVariant === "heroVideo" ? "eager" : "lazy"}
                fetchPriority={
                  styleVariant === "heroVideo" ? "high" : undefined
                }
                decoding="async"
              />
            ) : hasVideo ? (
              <video
                className="enj-VideoThumbnail-video"
                muted
                playsInline
                preload="metadata"
                aria-label={title || "Featured video preview"}
                poster={posterAsset.url}
                onLoadedMetadata={handleLoadedMetadata}
              >
                <source
                  src={videoAsset.url}
                  type={videoAsset.contentType ?? "video/mp4"}
                />
              </video>
            ) : null}

            <span className="enj-VideoThumbnail-playIcon" aria-hidden="true">
              <PlayFilledAlt />
            </span>

            {videoDuration !== "00:00" && (
              <span
                className="enj-VideoThumbnail-duration"
                aria-label={`Video duration ${videoDuration}`}
              >
                {videoDuration}
              </span>
            )}
          </div>

          {styleVariant === "heroVideo" && (
            <h3 className="enj-VideoThumbnail-featuredTitle">{title}</h3>
          )}

          {(businessDomains.length > 0 || stackValues.length > 0) && (
            <div className="enj-VideoThumbnail-meta">
              {businessDomains.length > 0 && (
                <div className="enj-VideoThumbnail-metaGroup">
                  <ul
                    className="enj-VideoThumbnail-metaList"
                    aria-label="Business domains"
                  >
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
                  <ul
                    className="enj-VideoThumbnail-metaList"
                    aria-label="Tech stack"
                  >
                    {stackValues.map((stackValue) => (
                      <li
                        key={stackValue}
                        className="enj-VideoThumbnail-metaChip"
                      >
                        {stackValue}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          <button
            type="button"
            className="enj-VideoThumbnail-action"
            aria-label={resolvedAriaLabel}
            aria-haspopup="dialog"
            aria-expanded={isModalOpen}
          />
        </div>
      </article>

      <ComposedModal
        open={isModalOpen}
        onClose={handleModalClose}
        size="md"
        className="enj-VideoThumbnail-modal"
      >
        <ModalHeader
          title="Featured Case Study"
          closeModal={handleModalClose}
        />

        <ModalBody>
          <div className="enj-VideoThumbnail-modalBody">
            {hasVideo && (
              <video
                key={videoAsset.url}
                ref={modalVideoRef}
                className="enj-VideoThumbnail-modalVideo"
                controls={controls}
                loop={loop}
                muted={muted}
                playsInline
                preload="metadata"
                poster={posterAsset.url}
                aria-label={title || "Featured video"}
                onLoadedMetadata={handleLoadedMetadata}
              >
                <source
                  src={videoAsset.url}
                  type={videoAsset.contentType ?? "video/mp4"}
                />
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
          {caseStudyHref && (
            <Button onClick={handleReadFullCaseStudy}>
              Read full case study
            </Button>
          )}
        </ModalFooter>
      </ComposedModal>
    </>
  );
};

export default VideoThumbnail;
