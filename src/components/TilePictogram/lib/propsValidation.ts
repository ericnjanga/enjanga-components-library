import { PGL_LinkTargetType, PGL_modalPropsType } from './types';

// Validate mutually exclusive props: `linksTo` and `modal` cannot both be set to make
// a component both a link and a modal trigger.
export function validatePGL_propsType({
  linksTo,
  linkTarget,
  modal,
}: {
  linksTo?: string;
  linkTarget?: PGL_LinkTargetType;
  modal?: PGL_modalPropsType;
}) {
  if (linksTo && linkTarget && modal) {
    throw new Error(
      `Invalid props: TilePictogram cannot be both a link and a modal trigger. Use either "modal" OR "linksTo", never both.`
    );
  }
}
