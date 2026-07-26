/**
 * Banner:
 * ---------------
 * A flexible and reusable header component that functions as either a compact banner or a jumbotron-style hero section.
 *
 * Features:
 * - Accepts custom CSS classes via `className`
 * - Inherits features from FeatureText component
 * - Container-based responsiveness
 * - Supports both plain text and rich text descriptions
 * - Height can be increased (`isHuge`)
 *
 * Props:
 * -------
 * @param {boolean} [isHuge=false]
 *   - Enables jumbotron styling with a larger and more prominent visual appearance.
 *   - Default is `false`, rendering a standard banner.
 *
 * @param {FeatureText} [featuredText]
 *   - Featured text component properties
 *
 * @param {string} [className]
 *   - Additional custom CSS classes to apply to the banner container.
 */

import React from "react";
import clsx from "clsx";
import { BNN_propsType } from "./libs/types";
import { FeatureText } from "../FeatureText";
import { useContainerSize } from "@/libs/useContainerSize";

const TEXT_WRAPPER_STYLE: Record<string, React.CSSProperties> = {
  sm: { maxWidth: "300px" },
  md: { maxWidth: "500px" },
  lg: { maxWidth: "550px" },
  xlg: { maxWidth: "630px" },
  max: { maxWidth: "730px" },
};

const Banner = ({
  id,
  style,
  className,
  featuredText,
  imgBgUrl,
  isHuge = false,
  role = "banner",
}: BNN_propsType) => {
  const { containerRef, activeBreakpoint } = useContainerSize<HTMLDivElement>();

  const hasBgImage = isValidImageUrl(imgBgUrl);
  const cssClasses = clsx("enj-Banner", className, {
    "enj-Banner--isHuge": isHuge,
    "enj-Banner--hasBgImage": hasBgImage,
  });
  const Tag = role === "banner" ? "header" : "div";
  const wrapperStyle = {
    ...style,
    ["--banner-bg-image" as any]: imgBgUrl ? `url(${imgBgUrl})` : undefined,
  };

  const textStyle = TEXT_WRAPPER_STYLE[activeBreakpoint] ?? undefined;

  return (
    <Tag
      id={id}
      className={`${cssClasses} enj-Banner-${activeBreakpoint}`}
      style={wrapperStyle}
      ref={containerRef}
      role={role}
    >
      <div className="enj-container">
        <div className="enj-container-txt-wrapper" style={textStyle}>
          <FeatureText {...featuredText} />
        </div>
        {imgBgUrl && <div className="enj-Banner-bgimg" aria-hidden="true" />}
      </div>
    </Tag>
  );
};

export default Banner;

const isValidImageUrl = (url: string | null | undefined) => {
  if (!url) return false;
  const trimmed = url.trim();
  return (
    trimmed.length > 0 &&
    (trimmed.startsWith("http") ||
      trimmed.startsWith("/") ||
      trimmed.startsWith("data:"))
  );
};
