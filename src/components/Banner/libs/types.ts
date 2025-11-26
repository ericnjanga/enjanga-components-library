// Banner props type
// ----------------
import { FTX_propsType } from '@/components/FeatureText/libs/types';

export const BNN_roleOpt = ['banner', 'presentation', 'none'] as const;
export type BNN_roleOptPropsType = (typeof BNN_roleOpt)[number]; // Creating union type 'Right' | 'presentation' | ...

export interface BNN_propsType {
  id?: string;
  style?: React.CSSProperties;
  className?: string;
  featuredText: FTX_propsType;

  // Local propsType ...
  imgBgUrl?: string | null;
  isHuge?: boolean;
  role?: BNN_roleOptPropsType;
}
