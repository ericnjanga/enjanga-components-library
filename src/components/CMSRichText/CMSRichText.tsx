/**
 * CMSRichText
 * ---------------------------------------------
 * A presentational React component that renders Contentful Rich Text JSON content
 * into HTML elements using a custom node renderer (`renderContentfulNode`).
 *
 * Typically used when pulling rich text content from a CMS like Contentful,
 * and you need to display it in a styled, accessible, and structured manner.
 *
 * If `data` is not provided (e.g., while content is loading), the component
 * displays a loading skeleton (`CMSRichTextSkeleton`) as a placeholder.
 *
 * @component
 *
 * @param {Object} props - Component props
 * @param {string} [props.className] - Optional custom CSS class to style the wrapper `<article>`
 * @param {Object} [props.data] - Contentful rich text data
 * @param {Object} props.data.json - Rich text JSON structure
 * @param {Array<Node>} props.data.json.content - Array of Contentful rich text nodes
 *
 * @returns {JSX.Element} A rendered block of Contentful rich text or a skeleton placeholder.
 *
 * @example
 * <CMSRichText
 *   className="custom-style"
 *   data={{
 *     json: {
 *       content: [
 *         { nodeType: 'paragraph', content: [{ value: 'Hello world', nodeType: 'text' }] }
 *       ]
 *     }
 *   }}
 * />
 */

import { renderContentfulNode } from '@/utils/renderContentfulNode';
import CMSRichTextSkeleton from './parts/CMSRichTextSkeleton';
import type { Node } from '@contentful/rich-text-types';
import clsx from 'clsx';

interface CMSRichTextProps {
  className?: string;
  data?: { json: { content: Node[] } };
}

const CMSRichText = ({ data, className }: CMSRichTextProps) => {
  // Getting the currently active locale...
  const activeLang = 'en'; // (soon)

  if (!data) {
    return <CMSRichTextSkeleton />;
  }

  return (
    <article className={clsx('enj-CMSRichText', className)}>
      {data.json?.content?.map((node: Node, index: number) =>
        renderContentfulNode(node, `node-${index}`)
      )}
    </article>
  );
};

export default CMSRichText;
