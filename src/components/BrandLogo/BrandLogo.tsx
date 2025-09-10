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

// ...
const BrandLogoString = ({ style, className, value }: BL_propsType) => {
  return (
    <span
      style={style}
      className={clsx('enj-BrandLogo', 'enj-BrandLogo--text', className)}
    >
      {value}
    </span>
  );
};

// ...
const BrandLogoComponents = ({
  style,
  className,
  value,
  alt,
}: BL_propsType) => {
  // Type guard to ensure value is a ReactElement
  if (!React.isValidElement(value)) {
    return (
      <BrandLogoFallback style={style} className={className} value={value} />
    );
  }

  const element = value as React.ReactElement<{
    className?: string;
    style?: React.CSSProperties;
    alt?: string;
  }>;

  // Safely access props with defaults
  const elementProps = element.props || {};
  const elementType = element.type;

  return React.cloneElement(element, {
    className: clsx('enj-BrandLogo', elementProps.className, className),
    style: { ...elementProps.style, ...style },
    ...(elementType === 'img' ? { alt } : {}), // Add alt text if it's an image
  });
};

// ...
const BrandLogoFallback = ({ style, className, value }: BL_propsType) => {
  return React.cloneElement(
    <span style={style} className={clsx('enj-BrandLogo', className)}>
      {value}
    </span>
  );
};

const BrandLogo = ({
  value,
  className = '',
  style = {},
  alt = 'Brand Logo',
}: BL_propsType) => {
  // Handle string (text content)
  if (typeof value === 'string') {
    return (
      <BrandLogoString className={className} style={style} value={value} />
    );
  }

  // Handle React elements (Components, SVG, etc ...)
  if (React.isValidElement(value)) {
    return (
      <BrandLogoComponents
        className={className}
        style={style}
        value={value}
        alt={alt}
      />
    );
  }

  // Fallback for other cases (numbers, null, etc.)
  return (
    <BrandLogoFallback className={className} style={style} value={value} />
  );
};

export default BrandLogo;
