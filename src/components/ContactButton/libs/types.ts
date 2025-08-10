// contactButton props type
// ----------------
export interface CBNN_propsType {
  btnText: string;
  btnIcon?: 'Email' | 'Chat' | 'CustomerService' | 'CommunicationUnified';
  btnKind?: 'primary' | 'secondary';
  btnSize?: 'sm' | 'md';
  modalLabel: string;
  modalHeading: string;
  modalSubHeading: string;
  modalPrimaryButtonText: string;
  modalSecondaryButtonText: string;
}

// Options (opts)
export const CB_Icons_opts = [
  'Email',
  'Chat',
  'CustomerService',
  'CommunicationUnified',
] as const;
export const CB_kind_opts = ['primary', 'secondary'] as const;
export const CB_size_opts = ['sm', 'md'] as const;
