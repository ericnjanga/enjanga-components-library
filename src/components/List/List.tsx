/**
 * List:
 * --------------
 * Can be ordered or unordered
 * Each item of the list is rendered by an external component
 *
 * ### Performance Optimization
 * - Use `MemoizedList` if the component re-renders frequently with the same props.
 * - Use `List` (default) if props change often or memoization isn't needed.
 */
import clsx from 'clsx';
import { ListItem } from '../ListItem';
import { LST_propsType } from './libs/types';
import { SkeletonAnimation } from '../SkeletonAnimation';

const List = ({ type = 'unordered', cssClass, content }: LST_propsType) => {
  const ListWrapper = type === 'unordered' ? 'ul' : 'ol'; // Dynamically creating the list tag

  if (!content || content.length < 1) {
    return <SkeletonAnimation part="list" />;
  }

  return (
    <ListWrapper className={clsx('enj-list', cssClass)}>
      {content.map(({ id, name, href }) => {
        return (
          <ListItem
            key={id || `${name}-${href?.slice(0, 8)}`}
            name={name}
            href={href}
          />
        );
      })}
    </ListWrapper>
  );
};

export default List;
