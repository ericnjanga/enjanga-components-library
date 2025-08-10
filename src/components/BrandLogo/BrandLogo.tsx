/**
 * BrandLogo:
 * ---------------
 * ✨ Multiple rendering modes:
 *  ✔️ Text (for performance)
 *  ✔️ Image/SVG (for brand fidelity)
 *  ✔️ Custom component (for edge cases)
 */
import React from 'react';
import clsx from 'clsx';
import { BL_propsType } from './libs/types';
// Styles are imported globally

const BrandLogo = ({
  value,
  className = '',
  style = {},
  alt = 'Brand Logo',
}: BL_propsType) => {
  // Handle string (text content)
  if (typeof value === 'string') {
    return (
      <span
        style={style}
        className={clsx('enj-BrandLogo', 'enj-BrandLogo--text', className)}
      >
        {value}
      </span>
    );
  }

  // Handle React elements (Components, SVG, etc ...)
  if (React.isValidElement(value)) {
    return React.cloneElement(
      value as React.ReactElement<{
        // Clarifying the cloned element's props to TypeScript
        className?: string;
        style?: React.CSSProperties;
        alt?: string;
      }>,
      {
        className: clsx('enj-BrandLogo', value.props?.className, className),
        style: { ...value.props?.style, ...style },
        ...(value.type === 'img' ? { alt } : {}), // Add alt text if it's an image
      }
    );
  }

  // Fallback for other cases (numbers, null, etc.)
  return (
    <span style={style} className={clsx('enj-BrandLogo', className)}>
      {value}
    </span>
  );
};

export default BrandLogo;
