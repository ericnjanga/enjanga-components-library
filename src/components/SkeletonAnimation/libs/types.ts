// SkeletonAnimation props type
// ----------------

export interface Sk_propsType {
  className?: string;
  part: Sk_partType;
}

export const Sk_partOpt = ['heading', 'body', 'list'] as const;
export type Sk_partType = (typeof Sk_partOpt)[number]; // Creating union type 'aaa' | 'bbb' | '...
