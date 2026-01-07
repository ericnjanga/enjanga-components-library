import { PGL_LinkTargetType } from './types';

// Type-safe validation ...
// Trows an error if the rule doesn't apply
// Rule: ...
export function validatePGL_propsType({
  linksTo,
  linkTarget,
  modalIsAvailable,
}: {
  linksTo?: string;
  linkTarget?: PGL_LinkTargetType;
  modalIsAvailable?: boolean;
}) {
  if (linksTo && linkTarget && modalIsAvailable === true) {
    throw new Error(
      `Invalid props: **PictogramTile cannot be both a link and a modal trigger. Use either "modalIsAvailable" OR "linksTo", never both.`
    );
  }
}