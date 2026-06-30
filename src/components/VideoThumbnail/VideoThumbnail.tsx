import React from 'react';
import { PlayFilledAlt, StarFilled } from '@carbon/icons-react';
import { VT_propsType } from './libs/types';

const VideoThumbnail = ({
  title,
  hasPosterImage,
  hasVideo,
  posterAsset,
  videoAsset,
  videoDuration = '00:00',
  businessDomains,
  stackValues,
  onClick,
  ariaLabel,
}: VT_propsType) => {
  const resolvedAriaLabel = ariaLabel || `Open featured case study for ${title}`;

  return (
    <section className="enj-VideoThumbnail-featuredObject">
      <button
        type="button"
        className="enj-VideoThumbnail-card"
        onClick={onClick}
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
            >
              <source src={videoAsset.url} type={videoAsset.contentType ?? 'video/mp4'} />
            </video>
          ) : null}

          <span className="enj-VideoThumbnail-playIcon" aria-hidden="true">
            <PlayFilledAlt />
          </span>

          {videoDuration !== '00:00' && (
            <span className="enj-VideoThumbnail-duration" aria-label={`Video duration ${videoDuration}`}>
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
  );
};

export default VideoThumbnail;
