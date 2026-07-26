/**
 * List Item:
 * --------------
 * The ListItem component represents a single item within a list. It can display text, links, or custom child elements.
 */
import clsx from "clsx";
import { LIT_propsType } from "./libs/types";

const ListItem = ({ content, href, className, children }: LIT_propsType) => {
  if (content === undefined && children === undefined) {
    return null;
  }

  return (
    <li className={clsx(className)}>
      {content !== undefined ? (
        href ? (
          <a href={href}>{content}</a>
        ) : (
          content
        )
      ) : null}
      {children}
    </li>
  );
};

export default ListItem;
