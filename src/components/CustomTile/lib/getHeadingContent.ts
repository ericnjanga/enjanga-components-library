import { FTX_propsType } from '@/components/FeatureText/libs/types';
import React from 'react';

/**
 *
 * @param featuredText
 * @returns string
 */
export const getHeadingContent = (featuredText: FTX_propsType) =>
  stripNonAlphanumeric(featuredText?.heading?.children);

/**
 * Extracts and sanitizes text content from React nodes, removing all non-alphanumeric characters.
 *
 * This function recursively processes React elements, fragments, and strings to extract
 * all textual content, then filters out any characters that are not letters (a-z, A-Z),
 * numbers (0-9), or whitespace characters.
 *
 * @param prop - The React node or string to process. Can be a string, number, boolean,
 *               React element, fragment, or array of React nodes.
 *
 * @returns A sanitized string containing only alphanumeric characters and whitespace.
 *          All HTML tags, emojis, symbols, and other non-alphanumeric content is removed.
 *
 * @example
 * // Returns "Liquorice liquorice fruitcake  tiramisu sesame snaps "
 * extractAlphanumericText(
 *   <>
 *     Liquorice <a href="#">liquorice fruitcake </a> tiramisu
 *     <span>🔔</span>
 *     sesame snaps
 *   </>
 * );
 *
 * @example
 * // Returns "Hello World 123"
 * extractAlphanumericText("Hello, World! 123 🎉");
 *
 * @note This function preserves whitespace between words but removes all other
 *       non-alphanumeric characters including punctuation, emojis, and special symbols.
 *       Useful for text processing, search indexing, or content sanitization.
 */
export const stripNonAlphanumeric = (
  prop: string | React.ReactNode
): string => {
  const extractTextFromNode = (node: React.ReactNode): string => {
    if (typeof node === 'string') {
      return node;
    }

    if (typeof node === 'number' || typeof node === 'boolean') {
      return String(node);
    }

    if (React.isValidElement(node)) {
      // Handle React elements by recursively processing their children
      if (node.props.children) {
        if (Array.isArray(node.props.children)) {
          return node.props.children.map(extractTextFromNode).join('');
        }
        return extractTextFromNode(node.props.children);
      }
      return '';
    }

    if (Array.isArray(node)) {
      return node.map(extractTextFromNode).join('');
    }

    return '';
  };

  // Extract all text content from the JSX fragment
  const fullText = extractTextFromNode(prop);

  // Remove non-alphanumeric characters (keep only letters and numbers)
  return fullText.replace(/[^a-zA-Z0-9\s]/g, '');
};
