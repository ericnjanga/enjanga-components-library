import { PGL_LinkTargetType, PGL_valid_linkTo } from './types';

/**
 * Props validations rules
 * ----------
 * PictogramTile must be either:
 * - A link (provide 'linksTo' and optionally 'linkTarget')
 * - A modal trigger (provide 'modalIsAvailable')
 * But cannot be both at the same time
 */
type ErrorMessage<T extends string> = `🚨 Prop Validation Error: ${T}`;

/** Normal link props (default case, modalIsAvailable omitted or false) */
interface LinkProps {
  linksTo?: PGL_valid_linkTo;
  linkTarget?: PGL_LinkTargetType;
  modalIsAvailable?: false; // explicitly false or absent
}

/** Strict modal props (only when true) */
interface ModalProps {
  modalIsAvailable: true;
  linksTo?: ErrorMessage<"Modal version cannot have 'linksTo' - remove this prop">;
  linkTarget?: ErrorMessage<"Modal version cannot have 'linkTarget' - remove this prop">;
}

export type PGL_propsType1Validation = LinkProps | ModalProps;