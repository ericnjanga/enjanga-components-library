/**
 * BrandLogo:
 * ---------------
 * The BrandLogo can either render a text, an SVG, an image, or a custom component.
 */

import clsx from 'clsx';
// Styles are imported globally

interface BrandLogoProps {
  value: string | React.ReactNode;
}

const BrandLogo = ({ value }: BrandLogoProps) => {
  const mockData = {
    BrandLogo: '## Brand Name **',
  };

  return (
    <>
      {typeof value === 'string' && (
        <span className={clsx('enj-BrandLogo')}>{value}</span>
      )}
    </>
  );
};

export default BrandLogo;
