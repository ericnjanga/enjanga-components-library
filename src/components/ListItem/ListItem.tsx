/**
 * List Item:
 * --------------
 * Note: In the case where the list of items grows in complexity (e.g., icons, nested elements)
 * - Allows to pass children down
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
