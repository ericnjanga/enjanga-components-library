import { LinkTargetType } from './ct-types';

/**
 * Props validations rules
 * ----------
 * CustomTile must be either:
 * - A link (provide 'linksTo' and optionally 'linkTarget')
 * - A modal trigger (provide 'showsModal')
 * But cannot be both at the same time
 */
type ErrorMessage<T extends string> = `🚨 Prop Validation Error: ${T}`;

interface LinkProps {
  linksTo: string;
  linkTarget?: LinkTargetType['name'];
  showsModal?: ErrorMessage<"Component cannot be both a link and a modal - remove either 'showsModal' or 'linksTo'">;
}

interface ModalProps {
  showsModal: boolean;
  linksTo?: ErrorMessage<"Modal version cannot have 'linksTo' - remove this prop">;
  linkTarget?: ErrorMessage<"Modal version cannot have 'linkTarget' - remove this prop">;
}

export type CustomTileProps1Validation = LinkProps | ModalProps;
