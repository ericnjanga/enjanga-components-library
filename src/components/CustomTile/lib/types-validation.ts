import { CTL_LinkTargetType } from './types';

/**
 * Props validations rules
 * ----------
 * CustomTile must be either:
 * - A link (provide 'linksTo' and optionally 'linkTarget')
 * - A modal trigger (provide 'modalIsAvailable')
 * But cannot be both at the same time
 */
type ErrorMessage<T extends string> = `🚨 Prop Validation Error: ${T}`;

interface LinkProps {
  linksTo: string;
  linkTarget?: CTL_LinkTargetType;
  modalIsAvailable?: ErrorMessage<"Component cannot be both a link and a modal - remove either 'modalIsAvailable' or 'linksTo'">;
}

interface ModalProps {
  modalIsAvailable: boolean;
  linksTo?: ErrorMessage<"Modal version cannot have 'linksTo' - remove this prop">;
  linkTarget?: ErrorMessage<"Modal version cannot have 'linkTarget' - remove this prop">;
}

export type CTL_propsType1Validation = LinkProps | ModalProps;
