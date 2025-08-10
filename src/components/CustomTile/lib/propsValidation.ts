import { CTL_LinkTargetType } from './ct-types';

// Type-safe validation ...
// Trows an error if the rule doesn't apply
// Rule: ...
export function validateCTL_propsType({
  linksTo,
  linkTarget,
  showsModal,
}: {
  linksTo?: string;
  linkTarget?: CTL_LinkTargetType['name'];
  showsModal?: boolean;
}) {
  if (linksTo && linkTarget && showsModal !== undefined) {
    throw new Error(
      `Invalid props: CustomTile cannot be both a link and a modal trigger. Use either "showsModal" OR "linksTo", never both.`
    );
  }
}
