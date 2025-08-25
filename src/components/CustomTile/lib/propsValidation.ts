import { CTL_LinkTargetType } from './types';

// Type-safe validation ...
// Trows an error if the rule doesn't apply
// Rule: ...
export function validateCTL_propsType({
  linksTo,
  linkTarget,
  modalIsAvailable,
}: {
  linksTo?: string;
  linkTarget?: CTL_LinkTargetType;
  modalIsAvailable?: boolean;
}) {
  if (linksTo && linkTarget && modalIsAvailable === true) {
    throw new Error(
      `Invalid props: **CustomTile cannot be both a link and a modal trigger. Use either "modalIsAvailable" OR "linksTo", never both.`
    );
  }
}
