/**
 * List:
 * --------------
 * Can be ordered or unordered
 * Each item of the list is rendered by an external component
 *
 * Loading presentation is intentionally owned by the consuming application.
 */
import clsx from "clsx";
import { ListItem } from "../ListItem";
import { LST_propsType } from "./libs/types";
import { LIT_propsType } from "@/components/ListItem/libs/types";

const List = ({ type = "unordered", className, content }: LST_propsType) => {
  const ListWrapper = type === "unordered" ? "ul" : "ol"; // Dynamically creating the list tag

  if (!content || content.length < 1) {
    return null;
  }

  return (
    <ListWrapper className={clsx("enj-list", className)}>
      {content.map((item: LIT_propsType) => {
        return (
          <ListItem
            key={item.id || `${content}-${item.href?.slice(0, 8)}`}
            content={item.content}
            href={item.href}
            className={item.className}
          >
            {item.children}
          </ListItem>
        );
      })}
    </ListWrapper>
  );
};

export default List;
