import React from 'react';

const NextImage = ({ src, alt, ...rest }: any) => {
  // Just render a normal img for Storybook
  return <img src={typeof src === 'string' ? src : ''} alt={alt} {...rest} />;
};

export default NextImage;
