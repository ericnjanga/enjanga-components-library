// Heading props type
// ----------------

export const HDG_levelOpt = [1, 2, 3, 4, 5, 6] as const;
export type HDG_levelPropsType = (typeof HDG_levelOpt)[number]; // Creating union type 1 | 2 | 3 | ...

export type HDG_propsType = {
  className?: string;
  level?: HDG_levelPropsType;
  children?: React.ReactNode;
};
