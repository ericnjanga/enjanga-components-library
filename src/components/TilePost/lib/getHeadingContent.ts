import { FTX_propsType } from '@/components/FeatureText/libs/types';
import React from 'react';

export const getHeadingContent = (featuredText: FTX_propsType) =>
  stripNonAlphanumeric(featuredText?.heading?.children);

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

    if (React.isValidElement<{ children?: React.ReactNode }>(node)) {
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

  const fullText = extractTextFromNode(prop);
  return fullText.replace(/[^a-zA-Z0-9\s]/g, '');
};
