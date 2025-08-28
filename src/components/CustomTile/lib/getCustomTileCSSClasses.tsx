import clsx from 'clsx';
import { CTL_CSSClassesPropsType } from './types';

// Component's CSS classes
/**
 * APPLY ONLY HOVER CLASS WHEN:
 * 1) THE COMPONENT NEEDS AN ARTIFICIAL HOVER STATE
 * 2) THERE IS VALID REASON TO CLICK
 *
 * ..... enj-CustomTile-has-hover-effect
 */
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
    'enj-CustomTile--has-link': linksTo, // Indicates that component opens a link
    'enj-CustomTile--has-link-external': linkIsExternal, // the link is external
    'enj-CustomTile--has-modal': modalIsAvailable, // Indicates that component triggers a modal
    'enj-CustomTile--has-icon': iconIsOnDisplay,
    'enj-CustomTile--has-img': imageIsOnDisplay,
    'enj-CustomTile--has-pictogram': pictogramIsOnDisplay,
  });
