import clsx from 'clsx';
import { TBN_CSSClassesPropsType } from './types';

export const getCustomTileCSSClasses = ({
  linksTo,
  linkIsExternal,
  iconIsOnDisplay,
}: TBN_CSSClassesPropsType) =>
  clsx('enj-TileBanner', 'enj-TileBanner--banner', {
    'enj-TileBanner--has-link': linksTo,
    'enj-TileBanner--has-link-external': linkIsExternal,
    'enj-TileBanner--has-icon': iconIsOnDisplay,
  });
