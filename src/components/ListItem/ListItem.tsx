/**
 * List Item:
 * --------------
 * The ListItem component represents a single item within a list. It can display text, links, or custom child elements. It ensures consistent styling and provides a skeleton loader when content is not available.
 */
import clsx from 'clsx';
import { LIT_propsType } from './libs/types';
import { SkeletonAnimation } from '../SkeletonAnimation';

const ListItem = ({ content, href, className, children }: LIT_propsType) => {
  if (content === undefined) {
    return <SkeletonAnimation part="list-item" />;
  }

  return (
    <li className={clsx(className)}>
      {href ? <a href={href}>{content}</a> : content}
      {children}
    </li>
  );
};

export default ListItem;
