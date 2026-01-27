import { ValidRoute, ExternalLink } from './types';

type LinkTo = ValidRoute | ExternalLink;

export const isValidLinkTo = (value: string | undefined): value is LinkTo =>
  value
    ? value.startsWith('/') ||
      value.startsWith('https://') ||
      value.startsWith('http://')
    : false;
