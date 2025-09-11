/**
 * CMSRichText
 * ---------------------------------------------
 * ...
 *
 * @component
 *
 * @param {string} [className] - Optional custom CSS class to style the wrapper `<article>`
 * @param {data.json} [className] - ...
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
import clsx from 'clsx';
import type { Node } from '@contentful/rich-text-types';
import { CRT_propsType } from './libs/types';

const CMSRichText = ({ data, className }: CRT_propsType) => {
  // Getting the currently active locale...
  const activeLang = 'en'; // (soon)

  if (!data) {
    return <CMSRichTextSkeleton />;
  }

  // 🔑 Build asset lookup map
  const assetsMap: Record<
    string,
    { sys: { id: string }; url: string; title: string; description?: string }
  > = {};

  data.links?.assets.block.forEach((asset) => {
    assetsMap[asset.sys.id] = asset;
  });

  return (
    <article className={clsx('enj-CMSRichText', className)}>
      {data.json?.content?.map((node: Node, index: number) =>
        renderContentfulNode(node, `node-${index}`, { assets: assetsMap })
      )}
    </article>
  );
};

export default CMSRichText;
