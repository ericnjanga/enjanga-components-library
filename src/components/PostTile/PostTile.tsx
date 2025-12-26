/**
 * PostTile:
 * ---------------------------------------------
 */
import React from "react";
import { Tile } from "@carbon/react";
import {
  getPostTileCSSClasses,
  getIconContent,
  getLinkWrapper,
  getTileContent
} from "./lib/utilities";
import { PTL_propsType } from "./lib/types";
import { useContainerSize } from "@/libs/useContainerSize";
import { getHeadingContent } from "./lib/getHeadingContent";

const PostTile = ({
  className,
  featuredText,
  mediaImage,
  linksTo,
}: PTL_propsType) => {
  // Getting heading stripped from any JSX ...
  const componentTitle = getHeadingContent(featuredText);

  // [*] Generate the anchor that that wrapps around the content
  // (If it applies)
  // ----------------------------
  const LinkWrapper = getLinkWrapper({
    heading: componentTitle,
    linksTo,
  });

  // [*] Get the CSS classes that will dictate the layout's styling ...
  // ----------------------------
  const wrapperClassNames = getPostTileCSSClasses();

  // [*] Generate the icon content ...
  // ----------------------------
  const iconContent = getIconContent({
    title: getHeadingContent(featuredText),
    iconName: "Right",
  });

  // [*] Generate the content
  // ----------------------------
  const tileContent = getTileContent({
    featuredText,
    mediaImage,
    iconContent,
  });

  // [*] Activate container size responsiveness
  // ----------------------------
  const {
    containerRef, // Reference to component wrapper
    activeBreakpoint, // Closest possible breakpoint to wrapper's width
  } = useContainerSize<HTMLDivElement>();

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

export default PostTile;
