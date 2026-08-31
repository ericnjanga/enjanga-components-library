/**
 * Contentful Rich Text Renderer
 *
 * Recursively converts Contentful rich text JSON into React elements.
 * Handles all standard Contentful block types, inline nodes, and text marks.
 *
 * @module renderContentfulNode
 * @param {Node} node - Contentful rich text node to render
 * @param {string} key - Unique React key for the element
 * @returns {React.JSX.Element|null} - Rendered React element or null for unsupported nodes
 *
 * @example
 * // Basic usage
 * const richText = // Contentful rich text JSON
 * richText.content.map((node, i) =>
 *   renderContentfulNode(node, `node-${i}`)
 * );
 *
 * @example
 * // With custom components
 * const customRenderers = {
 *   [BLOCKS.HEADING_1]: (node, key) => (
 *     <h1 key={key} className="title">
 *       {node.content.map(renderContentfulNode)}
 *     </h1>
 *   )
 * };
 */

import {
  BLOCKS,
  INLINES,
  MARKS,
  Text,
  Node,
  Block,
  Inline,
} from "@contentful/rich-text-types";
import React from "react"; 
import Image from 'next/image';

type Asset = {
  sys: { id: string };
  url: string;
  title: string;
  description?: string;
  width: number;
  height: number;
};

type EntryLink = {
  sys: { id: string };
  __typename: string;
  slug: string;
};

type RenderOptions = {
  assets?: Record<string, Asset>;
  entries?: Record<string, EntryLink>;
};

// ✅ Helper: map Contentful __typename to app route
const entryTypeToPath = (typename: string, slug: string): string | null => {
  const type = typename.toLowerCase();
  if (type === 'blogpost' || type === 'project' || type === 'casestudy') {
    return `/case-studies/${slug}`;
  }
  if (type === 'organization') {
    return `/experience/${slug}`;
  }
  return null;
};

// ✅ Helper: extract entry id from a Contentful resource URN
// URN format: crn:contentful:::content:spaces/{spaceId}/entries/{entryId}
const extractEntryIdFromUrn = (urn: string): string | null => {
  const match = urn.match(/\/entries\/([^/]+)$/);
  return match ? match[1] : null;
};

// ✅ Helper: check if a link is external
const isExternalLink = (url: string): boolean => {
  const appDomain = "enjanga.com";
  return (
    (url.startsWith("http://") && !url.includes("localhost")) ||
    (url.startsWith("https://") && !url.includes(appDomain))
  );
};

/**
 * Recursive renderer for Contentful Rich Text
 */
export const renderContentfulNode = (
  node: Node,
  key: string,
  options: RenderOptions = {}
): React.JSX.Element | null => {
  switch (node.nodeType) {
    case BLOCKS.PARAGRAPH: {
      const paragraph = node as Block;
      return (
        <p key={key}>
          {paragraph.content.map((child, i) =>
            renderContentfulNode(child, `${key}-p-${i}`, options)
          )}
        </p>
      );
    }

    case BLOCKS.HEADING_1:
    case BLOCKS.HEADING_2:
    case BLOCKS.HEADING_3:
    case BLOCKS.HEADING_4: {
      const HeadingTag =
        node.nodeType === BLOCKS.HEADING_1
          ? "h1"
          : node.nodeType === BLOCKS.HEADING_2
          ? "h2"
          : node.nodeType === BLOCKS.HEADING_3
          ? "h3"
          : "h4";
      const heading = node as Block;
      return (
        <HeadingTag key={key}>
          {heading.content.map((child, i) =>
            renderContentfulNode(child, `${key}-h-${i}`, options)
          )}
        </HeadingTag>
      );
    }

    case BLOCKS.UL_LIST: {
      const list = node as Block;
      return (
        <ul key={key}>
          {list.content.map((child, i) =>
            renderContentfulNode(child, `${key}-ul-${i}`, options)
          )}
        </ul>
      );
    }

    case BLOCKS.OL_LIST: {
      const list = node as Block;
      return (
        <ol key={key}>
          {list.content.map((child, i) =>
            renderContentfulNode(child, `${key}-ol-${i}`, options)
          )}
        </ol>
      );
    }

    case BLOCKS.LIST_ITEM: {
      const listItem = node as Block;
      return (
        <li key={key}>
          {listItem.content.map((child, i) =>
            renderContentfulNode(child, `${key}-li-${i}`, options)
          )}
        </li>
      );
    }

    case BLOCKS.QUOTE: {
      const blockquote = node as Block;
      return (
        <blockquote key={key}>
          {blockquote.content.map((child, i) =>
            renderContentfulNode(child, `${key}-quote-${i}`, options)
          )}
        </blockquote>
      );
    }

    case BLOCKS.HR:
      return <hr key={key} />;

    case BLOCKS.EMBEDDED_ASSET: {
      const assetId = (node.data?.target?.sys?.id as string) || "";
      const asset = options.assets?.[assetId];
      if (!asset?.url) return null;

      const isVideo = asset.url.match(/\.(mp4|webm|ogg)$/i);
      const w = asset.width ?? 16;
      const h = asset.height ?? 9;

      const caption = asset.title || asset.description;
      const imageAlt = asset.description || asset.title || "";

      return (
        <figure key={key}>
          {isVideo ? (
            <>
              <video
                controls
                playsInline
                preload="metadata"
                style={{ maxWidth: "100%", height: "auto" }}
                aria-label={asset.title || "Embedded video"}
                aria-describedby={asset.description ? `asset-desc-${assetId}` : undefined}
              >
                <source src={asset.url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {asset.description && (
                <p id={`asset-desc-${assetId}`} className="sr-only">
                  {asset.description}
                </p>
              )}
            </>
          ) : (
            <div
              className="asset-image-wrapper"
              style={{
                aspectRatio: `${w} / ${h}`,
                position: "relative",
                width: "100%",
                marginBottom: "1rem",
              }}
            >
              <Image
                className="asset-image"
                fill
                sizes="100vw"
                style={{ objectFit: "cover" }}
                src={asset.url}
                alt={imageAlt}
              />
            </div>
          )}

          {caption && <figcaption>{caption}</figcaption>}
        </figure>
      );
    }

    case INLINES.HYPERLINK: {
      const link = node as Inline;
      const uri = link.data.uri;
      const isExternal = isExternalLink(uri);
      return (
        <a
          key={key}
          href={uri}
          target={isExternal ? "_blank" : "_self"}
          rel={isExternal ? "noopener noreferrer" : undefined}
        >
          {link.content.map((child, i) =>
            renderContentfulNode(child, `${key}-link-${i}`, options)
          )}
        </a>
      );
    }

    case INLINES.ENTRY_HYPERLINK: {
      const inline = node as Inline;
      const entryId = inline.data?.target?.sys?.id as string | undefined;
      const entry = entryId ? options.entries?.[entryId] : undefined;
      const children = inline.content.map((child, i) =>
        renderContentfulNode(child, `${key}-entry-link-${i}`, options)
      );

      if (entry) {
        const href = entryTypeToPath(entry.__typename, entry.slug);
        if (href) {
          return <a key={key} href={href}>{children}</a>;
        }
      }

      // Fallback: render text so it never disappears
      return <span key={key}>{children}</span>;
    }

    case INLINES.RESOURCE_HYPERLINK: {
      const inline = node as Inline;
      const urn = inline.data?.target?.sys?.urn as string | undefined;
      const entryId = urn ? extractEntryIdFromUrn(urn) : undefined;
      const entry = entryId ? options.entries?.[entryId] : undefined;
      const children = inline.content.map((child, i) =>
        renderContentfulNode(child, `${key}-resource-link-${i}`, options)
      );

      if (entry) {
        const href = entryTypeToPath(entry.__typename, entry.slug);
        if (href) {
          return <a key={key} href={href}>{children}</a>;
        }
      }

      // Fallback: render text so it never disappears
      return <span key={key}>{children}</span>;
    }

    case "text": {
      const textNode = node as Text;
      let textElement: React.ReactNode = textNode.value;

      // Handle line breaks
      if (typeof textElement === "string" && textElement.includes("\n")) {
        const parts = textElement.split("\n");
        textElement = parts.flatMap((part, i) =>
          i < parts.length - 1 ? [part, <br key={`${key}-br-${i}`} />] : part
        );
      }

      // Marks (bold, italic, underline)
      if (textNode.marks?.length) {
        textNode.marks.forEach((mark) => {
          switch (mark.type) {
            case MARKS.BOLD:
              textElement = <strong key={`${key}-bold`}>{textElement}</strong>;
              break;
            case MARKS.ITALIC:
              textElement = <em key={`${key}-italic`}>{textElement}</em>;
              break;
            case MARKS.UNDERLINE:
              textElement = <u key={`${key}-underline`}>{textElement}</u>;
              break;
          }
        });
      }

      return <span key={key}>{textElement}</span>;
    }

    
    // --- TABLE SUPPORT ---
    case BLOCKS.TABLE: {
      const table = node as Block;
      return (
        <table key={key}>
          <tbody>
            {table.content.map((row, i) =>
              renderContentfulNode(row, `${key}-table-row-${i}`, options)
            )}
          </tbody>
        </table>
      );
    }

    case BLOCKS.TABLE_ROW: {
      const row = node as Block;
      return (
        <tr key={key}>
          {row.content.map((cell, i) =>
            renderContentfulNode(cell, `${key}-table-cell-${i}`, options)
          )}
        </tr>
      );
    }

    case BLOCKS.TABLE_HEADER_CELL: {
      const th = node as Block;
      return (
        <th key={key}>
          {th.content.map((child, i) =>
            renderContentfulNode(child, `${key}-th-${i}`, options)
          )}
        </th>
      );
    }

    case BLOCKS.TABLE_CELL: {
      const td = node as Block;
      return (
        <td key={key}>
          {td.content.map((child, i) =>
            renderContentfulNode(child, `${key}-td-${i}`, options)
          )}
        </td>
      );
    } 
    // --- TABLE SUPPORT ---

    default:
      return null;
  }
};
