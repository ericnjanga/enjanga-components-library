import clsx from 'clsx';
import { TBN_CSSClassesPropsType } from './types';

export const getCustomTileCSSClasses = ({
  linksTo,
  iconIsOnDisplay,
}: TBN_CSSClassesPropsType) =>
  clsx('enj-TileBanner', 'enj-TileBanner--banner', {
    'enj-TileBanner--has-icon': iconIsOnDisplay,
  });
