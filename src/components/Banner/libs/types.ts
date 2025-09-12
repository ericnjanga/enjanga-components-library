// Banner props type
// ----------------
import { FTX_propsType } from '@/components/FeatureText/libs/types';

export const BNN_roleOpt = ['banner', 'presentation', 'none'] as const;
export type BNN_roleOptPropsType = (typeof BNN_roleOpt)[number]; // Creating union type 'Right' | 'presentation' | ...

export interface BNN_propsType {
  className?: string;
  featuredText: FTX_propsType;

  // Local propsType ...
  isHuge?: boolean;
  role?: BNN_roleOptPropsType;
}
