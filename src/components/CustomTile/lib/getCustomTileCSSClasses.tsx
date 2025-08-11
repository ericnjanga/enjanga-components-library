import clsx from 'clsx';
import { CTL_CSSClassesPropsType } from './ct-types';

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
}: CTL_CSSClassesPropsType) =>
  clsx('enj-CustomTile', `enj-CustomTile--${layoutStyle}`, {
    'enj-CustomTile--link': linksTo,
    'enj-CustomTile--external': linksTo && linkTarget === '_blank', // Only apply if link exists
  });
