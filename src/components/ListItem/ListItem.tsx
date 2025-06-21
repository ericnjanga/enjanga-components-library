/**
 * List item:
 * --------------
 * Note: In the case where the list of items grows in complexity (e.g., icons, nested elements)
 * - Allows to pass children down
 */
import clsx from 'clsx';

interface ListItemProps {
  name: string;
  href?: string;
  id?: string;
  cssClass?: string;
  children?: React.ReactNode;
}

const ListItem = ({ name, href, cssClass, children }: ListItemProps) => {
  return (
    <li className={clsx(cssClass)}>
      {href ? <a href={href}>{name}</a> : name}
      {children}
    </li>
  );
};

export default ListItem;
