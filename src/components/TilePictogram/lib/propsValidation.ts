import { PGL_LinkTargetType } from './types';

// Type-safe validation (modal support removed)
export function validatePGL_propsType({
  linksTo,
  linkTarget,
}: {
  linksTo?: string;
  linkTarget?: PGL_LinkTargetType;
}) {
  // No-op for now — previously validated mutual exclusivity with modal
}
