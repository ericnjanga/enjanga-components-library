import { CTL_LayoutStyleType } from './types';
/**
 * Getting the component's role:
 * ----------------
 *
 * When layoutStyle="banner":
 * -------
 * 👉 role="region" (with a label): Why? because this component is meant to be used inside <main> or repeated (not unique).
 *
 * When layoutStyle="card":
 * -------
 * There’s no role="card", so pick based on semantics:
 * If it represents standalone content (like an article, news item, product):
 * 👉 Use role="article" (or <article> if you can).   <----- (WE WILL STICK WITH THIS OPTION)
 * If it’s a group of related UI controls (like a product tile with a button, price, etc.):
 * 👉 Use role="group" and add aria-label or aria-labelledby.
 * If it’s purely presentational:
 * 👉 No role at all (default <div> semantics).
 * @param param0
 */
export const get_CTL_role = ({
  layoutStyle,
}: {
  layoutStyle: CTL_LayoutStyleType;
}) => {
  return `${layoutStyle === 'banner' ? 'region' : 'article'}`;
};
