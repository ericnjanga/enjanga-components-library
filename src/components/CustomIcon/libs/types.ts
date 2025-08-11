// CustomIcon props type
// ----------------

export const CI_nameOpt = ['Hills', 'App Developer', 'Leadership'] as const;
export const CI_sizeOpt = ['sm', 'md', 'lg', 'xl'] as const;
export type CI_nameType = (typeof CI_nameOpt)[number]; // Creating union type 'aaa' | 'bbb' | '...
export type CI_sizeType = (typeof CI_sizeOpt)[number]; // Creating union type 'sm' | 'md' | '...

export interface CI_propsType {
  name: CI_nameType;
  size?: CI_sizeType;
  className?: string;
}

export type CI_sizeDimensions = {
  sizeWidth: number;
  sizeHeight: number;
};
