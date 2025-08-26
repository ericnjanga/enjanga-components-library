// Arrow Icon props type
// ----------------

export const AIC_orientOpt = ['Right', 'UpRight'] as const;
export type AIC_orientOptPropsType = (typeof AIC_orientOpt)[number]; // Creating union type 'Right' | 'UpRight' | ...

export interface AIC_propsType {
  className?: string;
  title: string;
  orientation: AIC_orientOptPropsType;
}
