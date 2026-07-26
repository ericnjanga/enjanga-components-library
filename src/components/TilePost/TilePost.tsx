/**
 * TilePost (renamed from PostTile)
 */
import React from "react";
import { Tile } from "@carbon/react";
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
        className={`${wrapperClassNames} ${className} enj-postTile-${activeBreakpoint}`}
        aria-label={`${componentTitle} tile`}
        role="article"
        onClick={onClick}
      >
        {tileContent}
      </Tile>
    </div>
  );
};

export default TilePost;
