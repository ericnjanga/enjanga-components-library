// CustomPictogram props type
// ----------------

export const CP_nameOpt = [
  'Hills',
  'App Developer',
  'Leadership',
  'DevicePairing',
  'CodeExplanation',
  'MagicWand',
  'Question',
  'User',
  'UserInterface',
  'Collaboration',
  'Presentation',
  'Transform_01',
  'Networking_04',
  'Goals',
  'TransactionalTrust',
  'Teacher',
] as const;
export const CP_sizeOpt = ['sm', 'md', 'lg', 'xl'] as const;
export type CP_nameType = (typeof CP_nameOpt)[number]; // Creating union type 'aaa' | 'bbb' | '...
export type CP_sizeType = (typeof CP_sizeOpt)[number]; // Creating union type 'sm' | 'md' | '...

export interface CP_propsType {
  name: CP_nameType;
  size?: CP_sizeType;
  className?: string;
}

export type CP_sizeDimensions = {
  sizeWidth: number;
  sizeHeight: number;
};
