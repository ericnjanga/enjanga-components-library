import clsx from 'clsx';
import { PGL_CSSClassesPropsType } from './types';

// Component's CSS classes
/**
 * APPLY ONLY HOVER CLASS WHEN:
 * 1) THE COMPONENT NEEDS AN ARTIFICIAL HOVER STATE
 * 2) THERE IS VALID REASON TO CLICK
 *
 * ..... enj-PictogramTile-has-hover-effect
 */
export const getPictogramTileCSSClasses = ({
  layoutStyle,
  linksTo,
  linkIsExternal,
  modalIsAvailable,
  iconIsOnDisplay,
  imageIsOnDisplay,
  pictogramIsOnDisplay,
}: PGL_CSSClassesPropsType) =>
  clsx('enj-PictogramTile', `enj-PictogramTile--${layoutStyle}`, {
    'enj-PictogramTile--has-link': linksTo, // Indicates that component opens a link
    'enj-PictogramTile--has-link-external': linkIsExternal, // the link is external
    'enj-PictogramTile--has-modal': modalIsAvailable, // Indicates that component triggers a modal
    'enj-PictogramTile--has-icon': iconIsOnDisplay,
    'enj-PictogramTile--has-img': imageIsOnDisplay,
    'enj-PictogramTile--has-pictogram': pictogramIsOnDisplay,
  });