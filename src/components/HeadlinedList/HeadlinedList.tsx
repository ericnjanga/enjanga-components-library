/**
 * HeadlinedList:
 * --------------
 * ...
 */

import clsx from 'clsx';
import List, { ListType } from '../List/List';

export interface HeadlinedListProps {
  wrapper?: {
    tag: 'div' | 'section';
    cssClass?: string;
  };
  heading: {
    content: string;
    h: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    cssClass?: string;
  };
  list?: {
    type?: ListType;
    cssClass?: string;
    content: {
      name: string;
      href?: string;
      id?: string; // For better key props
      cssClass?: string;
    }[];
  };
}

const HeadlinedList = ({
  wrapper = { tag: 'div', cssClass: '' },
  heading = { content: '', h: 'h3', cssClass: '' },
  list,
}: HeadlinedListProps) => {
  // Dynamically creating ...
  const Wrapper = wrapper.tag; // Wrapper tag
  const Heading = heading.h; // Heading

  return (
    <Wrapper className={clsx('enj-HeadlinedList', wrapper.cssClass)}>
      <Heading className={clsx(heading.cssClass)}>{heading.content}</Heading>
      {list?.content?.length ? <List {...list} /> : null}
    </Wrapper>
  );
};

export default HeadlinedList;
