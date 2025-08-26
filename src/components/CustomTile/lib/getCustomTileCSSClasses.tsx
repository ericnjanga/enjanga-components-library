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
  linkTarget,
  modalIsAvailable,
}: CTL_CSSClassesPropsType) =>
  clsx('enj-CustomTile', `enj-CustomTile--${layoutStyle}`, {
    'enj-CustomTile--link': linksTo, // Indicates that component opens a link
    'enj-CustomTile--link-external': linksTo && linkTarget === '_blank', // the link is external
    'enj-CustomTile--modal': modalIsAvailable, // Indicates that component triggers a modal
  });
