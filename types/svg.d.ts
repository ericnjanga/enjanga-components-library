// enjanga-components-library/types/svg.d.ts
declare module '*.svg' {
  const content: string;
  export default content;
}


// 🚨 FAKE ERROR: This should make TS scream if it's reading the file
type Foo = DoesNotExist;