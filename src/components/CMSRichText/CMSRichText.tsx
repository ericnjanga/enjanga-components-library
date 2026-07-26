/**
 * CMSRichText
 * ---------------------------------------------
 * ...
 *
 * @component
 *
 * @param {string} [className] - Optional custom CSS class to style the wrapper `<article>`
 * @param {data.json} [className] - ...
 * @returns {JSX.Element | null} A rendered block of Contentful rich text.
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

import { renderContentfulNode } from "@/utils/renderContentfulNode";
import clsx from "clsx";
import type { Node } from "@contentful/rich-text-types";
import { CRT_propsType } from "./libs/types";

const CMSRichText = ({ data, className }: CRT_propsType) => {
  // Getting the currently active locale...
  const activeLang = "en"; // (soon)

  if (!data) {
    return null;
  }

  // 🔑 Build asset lookup map
  const assetsMap: Record<
    string,
    {
      sys: { id: string };
      url: string;
      title: string;
      description?: string;
      width: number;
      height: number;
    }
  > = {};

  data.links?.assets?.block?.forEach((asset) => {
    assetsMap[asset.sys.id] = asset;
  });

  // Build entry lookup map for all inline entry link variants.
  const entriesMap: Record<
    string,
    { sys: { id: string }; __typename: string; slug: string }
  > = {};

  data.links?.entries?.inline?.forEach((entry) => {
    entriesMap[entry.sys.id] = entry;
  });

  data.links?.entries?.hyperlink?.forEach((entry) => {
    entriesMap[entry.sys.id] = entry;
  });

  data.links?.entries?.resourceHyperlink?.forEach((entry) => {
    entriesMap[entry.sys.id] = entry;
  });

  return (
    <article className={clsx("enj-CMSRichText", className)}>
      {data.json?.content?.map((node: Node, index: number) =>
        renderContentfulNode(node, `node-${index}`, {
          assets: assetsMap,
          entries: entriesMap,
        })
      )}
    </article>
  );
};

export default CMSRichText;
