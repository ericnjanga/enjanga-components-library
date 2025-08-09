// SkeletonAnimation types
// ----------------

export interface Sk_propsTypes {
  className?: string;
  part: Sk_partType;
}

export const Sk_partOpt = ['heading', 'body', 'list'] as const;
// Creating union type 'heading' | 'body' | 'list' | ...
export type Sk_partType = (typeof Sk_partOpt)[number];
