export { LinkContext, LinkProvider, type LinkProps } from './LinkProvider';
// Compatibility names share one context. The nearest provider applies to all links.
export {
  LinkProvider as ButtonLinkProvider,
  LinkProvider as AnchorLinkProvider,
  LinkContext as ButtonLinkContext,
  LinkContext as AnchorLinkContext,
  type LinkProps as ButtonLinkProps,
  type LinkProps as AnchorLinkProps,
} from './LinkProvider';
