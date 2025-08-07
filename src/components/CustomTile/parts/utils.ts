import { CustomTileDescriptionProps } from './ct-types';

// (If I ever decide to use compile-time props validation)
// // 1. Stronger type definition with compile-time validation
// type CustomTileDescriptionProps =
//   | { plainDescription: string; richDescription?: never }
//   | { richDescription: { json: { content: Node[] } }; plainDescription?: never }
//   | { plainDescription?: never; richDescription?: never }; // Optional empty state

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
