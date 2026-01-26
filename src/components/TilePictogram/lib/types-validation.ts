import { PGL_LinkTargetType, PGL_valid_linkTo } from './types';

type ErrorMessage<T extends string> = `🚨 Prop Validation Error: ${T}`;

interface LinkProps {
  linksTo?: PGL_valid_linkTo;
  linkTarget?: PGL_LinkTargetType;
}

export type PGL_propsType1Validation = LinkProps;
