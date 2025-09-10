/**
 * Contentful Rich Text Renderer
 *
 * Recursively converts Contentful rich text JSON into React elements.
 * Handles all standard Contentful block types, inline nodes, and text marks.
 *
 * @module renderContentfulNode
 * @param {Node} node - Contentful rich text node to render
 * @param {string} key - Unique React key for the element
 * @returns {JSX.Element|null} - Rendered React element or null for unsupported nodes
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
} from '@contentful/rich-text-types';
import React from 'react';

type Asset = {
  sys: { id: string };
  url: string;
  title: string;
  description?: string;
};

type RenderOptions = {
  assets?: Record<string, Asset>;
};

// ✅ Helper: check if a link is external
const isExternalLink = (url: string): boolean => {
  const appDomain = 'enjanga.com';
  return (
    (url.startsWith('http://') && !url.includes('localhost')) ||
    (url.startsWith('https://') && !url.includes(appDomain))
  );
};

/**
 * Recursive renderer for Contentful Rich Text
 */
export const renderContentfulNode = (
  node: Node,
  key: string,
  options: RenderOptions = {}
): JSX.Element | null => {
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
    case BLOCKS.HEADING_3: {
      const HeadingTag =
        node.nodeType === BLOCKS.HEADING_1
          ? 'h1'
          : node.nodeType === BLOCKS.HEADING_2
          ? 'h2'
          : 'h3';
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
      const assetId = (node.data?.target?.sys?.id as string) || '';
      const asset = options.assets?.[assetId];
      if (!asset) return null;

      return (
        <figure key={key}>
          <img src={asset.url} alt={asset.description || asset.title} />
          {asset.title && <figcaption>{asset.title}</figcaption>}
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
          target={isExternal ? '_blank' : '_self'}
          rel={isExternal ? 'noopener noreferrer' : undefined}
        >
          {link.content.map((child, i) =>
            renderContentfulNode(child, `${key}-link-${i}`, options)
          )}
        </a>
      );
    }

    case 'text': {
      const textNode = node as Text;
      let textElement: React.ReactNode = textNode.value;

      // Handle line breaks
      if (typeof textElement === 'string' && textElement.includes('\n')) {
        const parts = textElement.split('\n');
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

    default:
      return null;
  }
};
