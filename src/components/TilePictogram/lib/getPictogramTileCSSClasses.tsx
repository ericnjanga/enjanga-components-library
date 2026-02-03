import clsx from 'clsx';
import { PGL_CSSClassesPropsType } from './types';

export const getPictogramTileCSSClasses = ({
  modal,
  iconIsOnDisplay
}: PGL_CSSClassesPropsType) =>
  clsx('enj-PictogramTile', {
    'enj-PictogramTile--has-modal': !!modal,
    'enj-PictogramTile--has-icon': iconIsOnDisplay,
  });
