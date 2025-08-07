import { CustomTileDescriptionProps } from './../parts/ct-types';
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

// (If I ever decide to use compile-time props validation)
// // 1. Stronger type definition with compile-time validation
// type CustomTileDescriptionProps =
//   | { plainDescription: string; richDescription?: never }
//   | { richDescription: { json: { content: Node[] } }; plainDescription?: never }
//   | { plainDescription?: never; richDescription?: never }; // Optional empty state

// Type-safe validation ...
// Rule: both properties cannot be displayed at the same time
export function validateDescriptionProps({
  plainDescription,
  richDescription,
}: CustomTileDescriptionProps) {
  if (plainDescription && richDescription) {
    throw new Error(
      'Invalid props: Use either "plainDescription" OR "richDescription", never both.'
    );
  }

  if (!plainDescription && !richDescription) {
    throw new Error(
      'Missing content: You must provide either "plainDescription" OR "richDescription"'
    );
  }
}
