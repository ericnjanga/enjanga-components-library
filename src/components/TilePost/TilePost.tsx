/**
 * TilePost (renamed from PostTile)
 */
import React from "react";
import { Tile } from "@carbon/react";
import {
  getPostTileCSSClasses,
  getIconContent,
  getLinkWrapper,
  getTileContent,
} from "./lib/utilities";
import { PTL_propsType } from "./lib/types";
import { useContainerSize } from "@/libs/useContainerSize";
import { getHeadingContent } from "./lib/getHeadingContent";

const TilePost = ({
  className,
  featuredText,
  mediaImage,
  linksTo,
}: PTL_propsType) => {
  const componentTitle = getHeadingContent(featuredText);

  const LinkWrapper = getLinkWrapper({
    heading: componentTitle,
    linksTo,
  });

  const wrapperClassNames = getPostTileCSSClasses();

  const iconContent = getIconContent({
    title: getHeadingContent(featuredText),
    iconName: "Right",
  });

  const tileContent = getTileContent({
    featuredText,
    mediaImage,
    iconContent,
  });

  const { containerRef, activeBreakpoint } = useContainerSize<HTMLDivElement>();

  return (
    <div className="enj-postTile-wrapper" ref={containerRef}>
      <Tile
        className={`${wrapperClassNames} ${className} enj-postTile-${activeBreakpoint}`}
        aria-label={`${componentTitle} tile`}
        role="article"
      >
        {React.cloneElement(LinkWrapper, {}, tileContent)}
      </Tile>
    </div>
  );
};

export default TilePost;
