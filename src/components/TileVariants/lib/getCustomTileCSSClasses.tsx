import clsx from 'clsx';
import { CTL_CSSClassesPropsType } from './types';

export const getCustomTileCSSClasses = ({
  layoutStyle,
  linksTo,
  linkIsExternal,
  modalIsAvailable,
  iconIsOnDisplay,
  imageIsOnDisplay,
  pictogramIsOnDisplay,
}: CTL_CSSClassesPropsType) =>
  clsx('enj-CustomTile', `enj-CustomTile--${layoutStyle}`, {
    'enj-CustomTile--has-link': linksTo,
    'enj-CustomTile--has-link-external': linkIsExternal,
    'enj-CustomTile--has-modal': modalIsAvailable,
    'enj-CustomTile--has-icon': iconIsOnDisplay,
    'enj-CustomTile--has-img': imageIsOnDisplay,
    'enj-CustomTile--has-pictogram': pictogramIsOnDisplay,
  });
