import React from 'react';

const NextImage = ({ fill, width, height, src, alt, ...rest }: any) => {
  

  if (fill && (width || height)) {
    console.warn(
      'NextImage mock: `fill` cannot be used with `width` or `height`'
    );
  }

  // Just render a normal img for Storybook
  return <img src={typeof src === 'string' ? src : ''} alt={alt} {...rest} />;
};

export default NextImage;
