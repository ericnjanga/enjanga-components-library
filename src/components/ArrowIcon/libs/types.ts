// Arrow Icon props type
// ----------------

export const AIC_nameOpt = ['Right', 'UpRight'] as const;
export type AIC_nameOptPropsType = (typeof AIC_nameOpt)[number]; // Creating union type 'Right' | 'UpRight' | ...

export interface AIC_propsType {
  className?: string;
  title: string;
  name: AIC_nameOptPropsType;
}
