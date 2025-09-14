// BrandLogo props type
// ----------------

export const BL_roleOpt = ['img', 'presentation', 'none'] as const;
export type BL_roleOptPropsType = (typeof BL_roleOpt)[number]; // Creating union type 'Right' | 'presentation' | ...

export interface BL_propsType {
  value: string | React.ReactNode | React.ReactElement;
  className?: string;
  style?: React.CSSProperties;
  alt?: string;
  role?: BL_roleOptPropsType;
}
