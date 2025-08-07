import { LinkTargetType } from './../parts/ct-types';

// Type-safe validation ...
// Trows an error if the rule doesn't apply
// Rule: ...
export function validateCustomTileProps({
  linksTo,
  linkTarget,
  showsModal,
}: {
  linksTo?: string;
  linkTarget?: LinkTargetType['name'];
  showsModal?: boolean;
}) {
  if (linksTo && linkTarget && showsModal !== undefined) {
    throw new Error(
      `Invalid props: CustomTile cannot be both a link and a modal trigger. Use either "showsModal" OR "linksTo", never both.`
    );
  }
}
