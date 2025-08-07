import { SmartTextProps } from './types';

// (If I ever decide to use compile-time props validation)
// // 1. Stronger type definition with compile-time validation
// type SmartTextProps =
//   | { plainText: string; richText?: never }
//   | { richText: { json: { content: Node[] } }; plainText?: never }
//   | { plainText?: never; richText?: never }; // Optional empty state

// Type-safe validation ...
// Rule: both properties cannot be displayed at the same time
export function propsValidation({ plainText, richText }: SmartTextProps) {
  if (plainText && richText) {
    throw new Error(
      'Invalid props: Use either "plainText" OR "richText", never both.'
    );
  }

  if (!plainText && !richText) {
    throw new Error(
      'Missing content: You must provide either "plainText" OR "richText"'
    );
  }
}
