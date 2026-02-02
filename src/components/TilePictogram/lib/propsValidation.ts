import { PGL_modalPropsType } from './types';

// With link support removed, validation only ensures modal shape if present.
export function validatePGL_propsType({
  modal,
}: {
  modal?: PGL_modalPropsType;
}) {
  // no-op for now — kept for API parity and future validations
  return;
}
