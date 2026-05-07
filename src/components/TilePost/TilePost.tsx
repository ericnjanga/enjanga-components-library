/**
 * TilePost (renamed from PostTile)
 */
import React from "react";
import { Link } from "enjanga-core-setup/next";
import { Tile } from "@carbon/react";
import * as CarbonIcons from "@carbon/icons-react";
import {
  getPostTileCSSClasses,
  getIconContent,
  getTileContent,
} from "./lib/utilities";
import { PTL_propsType } from "./lib/types";
import { useContainerSize } from "@/libs/useContainerSize";
import { getHeadingContent } from "./lib/getHeadingContent";

const TilePost = ({
  className,
  featuredText,
  onClick,
  orgTitle,
  orgSlug,
  orgPictogramName,
}: PTL_propsType) => {
  const componentTitle = getHeadingContent(featuredText);

  const wrapperClassNames = getPostTileCSSClasses();

  const iconContent = getIconContent({
    title: getHeadingContent(featuredText),
    iconName: "Right",
  });

  const tileContent = getTileContent({
    featuredText,
    iconContent,
  });

  const { containerRef, activeBreakpoint } = useContainerSize<HTMLDivElement>();

  return (
    <div className="enj-postTile-wrapper" ref={containerRef}>
      <Tile
        className={`${wrapperClassNames} ${className} enj-postTile-anchor-tag enj-postTile-${activeBreakpoint}`}
        aria-label={`${componentTitle} tile`}
        role="article"
        onClick={onClick}
      >
        <Link
          href={`/experience/${orgSlug}`}
          className="xxxx"
          aria-label={`Navigate to ${orgTitle}`}
        >
          {(() => { const Icon = CarbonIcons[orgPictogramName as keyof typeof CarbonIcons] as React.ComponentType<React.SVGProps<SVGSVGElement>>; return Icon ? <Icon width="1.5rem" height="1.5rem" aria-hidden="true" /> : null; })()}
          <span>{orgTitle}</span>
        </Link>

          {tileContent}
      </Tile>
    </div>
  );
};

export default TilePost;
