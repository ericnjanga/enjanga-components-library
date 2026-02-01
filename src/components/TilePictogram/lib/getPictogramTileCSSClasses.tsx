import clsx from 'clsx';
import { PGL_CSSClassesPropsType } from './types';

export const getPictogramTileCSSClasses = ({
  layoutStyle,
  linksTo,
  linkIsExternal,
  iconIsOnDisplay,
  pictogramIsOnDisplay,
}: PGL_CSSClassesPropsType) =>
  clsx('enj-PictogramTile', `enj-PictogramTile--${layoutStyle}`, {
    'enj-PictogramTile--has-link': linksTo,
    'enj-PictogramTile--has-link-external': linkIsExternal,
    'enj-PictogramTile--has-icon': iconIsOnDisplay,
    'enj-PictogramTile--has-pictogram': pictogramIsOnDisplay,
  });
