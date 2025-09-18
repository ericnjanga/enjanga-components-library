// types/storybook.d.ts
declare module '@storybook/react' {
  import type { FC } from 'react';

  export interface StorybookConfig {
    stories?: string[];
    addons?: string[];
    framework?: {
      name: string;
      options?: Record<string, unknown>;
    };
    webpackFinal?: (config: any) => any;
    typescript?: any;
    staticDirs?: string[] | { from: string; to: string }[];
    docs?: any;
  }

  export const configure: any;
  export const addDecorator: any;
  export const addParameters: any;
  export const storiesOf: any;

  declare const _default: StorybookConfig;
  export default _default;
}
