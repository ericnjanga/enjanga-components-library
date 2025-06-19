declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

// SVG type declaration 
declare module '*.svg' {
  const content: string;
  export default content;
}


// type declaration file for MDX modules:
declare module '*.mdx' {
  const MDXComponent: (props: any) => JSX.Element;
  export default MDXComponent;
}