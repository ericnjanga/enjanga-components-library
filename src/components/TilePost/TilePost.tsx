/**
 * TilePost (renamed from PostTile)
 */
import React from "react";
import { ClickableTile, Tile } from "@carbon/react";
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
  linksTo,
  linkTarget = "_self",
  onClick,
}: PTL_propsType) => {
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
  const isAction = Boolean(onClick) && !linksTo;
  const classNames = `${wrapperClassNames} ${
    className ?? ""
  } enj-postTile-${activeBreakpoint}`;

  if (linksTo) {
    const opensNewTab = linkTarget === "_blank";

    return (
      <div className="enj-postTile-wrapper" ref={containerRef}>
        <ClickableTile
          className={classNames}
          href={linksTo}
          aria-label={`Open ${componentTitle}${
            opensNewTab ? " in a new tab" : ""
          }`}
          rel={opensNewTab ? "noopener noreferrer" : undefined}
          {...({
            target: linkTarget,
          } as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {tileContent}
        </ClickableTile>
      </div>
    );
  }

  return (
    <div className="enj-postTile-wrapper" ref={containerRef}>
      <Tile
        className={classNames}
        aria-label={isAction ? `Open ${componentTitle}` : undefined}
        role={isAction ? "button" : "article"}
        tabIndex={isAction ? 0 : undefined}
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
