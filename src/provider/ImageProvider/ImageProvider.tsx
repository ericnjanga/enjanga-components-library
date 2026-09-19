'use client';

import { createContext, useContext, type ComponentType, type ImgHTMLAttributes, type ReactNode } from 'react';

/** Framework-neutral image contract. Adapters must preserve styling and accessibility. */
export interface ImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'width' | 'height'> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}
const ImageContext = createContext<ComponentType<ImageProps> | undefined>(undefined);

/** Supply an application image renderer; standalone consumers use a native image. */
export function ImageProvider({ component, children }: { component: ComponentType<ImageProps>; children: ReactNode }) {
  return <ImageContext.Provider value={component}>{children}</ImageContext.Provider>;
}

export function LibraryImage(props: ImageProps) {
  const Image = useContext(ImageContext);
  return Image ? <Image {...props} /> : <img {...props} />;
}
