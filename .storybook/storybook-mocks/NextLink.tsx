// .storybook/storybook-mocks/NextLink.tsx
import React from 'react';

const Link = ({ href, children, ...rest }: any) => {
  return <a href={href} {...rest}>{children}</a>;
};

export default Link;
export { Link };
