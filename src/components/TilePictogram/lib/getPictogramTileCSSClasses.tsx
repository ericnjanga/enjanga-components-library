import clsx from 'clsx';
import { PGL_CSSClassesPropsType } from './types';

export const getPictogramTileCSSClasses = ({
  modal,
  iconIsOnDisplay,
  pictogramIsOnDisplay,
}: PGL_CSSClassesPropsType) =>
  clsx('enj-PictogramTile', 'enj-PictogramTile--card', {
    'enj-PictogramTile--has-modal': !!modal,
    'enj-PictogramTile--has-icon': iconIsOnDisplay,
    'enj-PictogramTile--has-pictogram': pictogramIsOnDisplay,
  });
