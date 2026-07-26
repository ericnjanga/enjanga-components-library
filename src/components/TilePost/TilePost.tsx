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

const TilePost = ({ className, featuredText, onClick }: PTL_propsType) => {
  const componentTitle = getHeadingContent(featuredText);

  const wrapperClassNames = getPostTileCSSClasses();

  const iconContent = getIconContent({
    title: componentTitle,
    iconName: "Right",
  });

  const tileContent = getTileContent({
    featuredText,
    iconContent,
  });

  const { containerRef, activeBreakpoint } = useContainerSize<HTMLDivElement>();
  const isInteractive = Boolean(onClick);

  return (
    <div className="enj-postTile-wrapper" ref={containerRef}>
      <Tile
        className={`${wrapperClassNames} ${className} enj-postTile-${activeBreakpoint}`}
        aria-label={isInteractive ? `Open ${componentTitle}` : undefined}
        role={isInteractive ? "button" : "article"}
        tabIndex={isInteractive ? 0 : undefined}
        onClick={onClick}
        onKeyDown={(event) => {
          if (!onClick || (event.key !== "Enter" && event.key !== " ")) return;
          event.preventDefault();
          event.currentTarget.click();
        }}
      >
        {tileContent}
      </Tile>
    </div>
  );
};

export default TilePost;
