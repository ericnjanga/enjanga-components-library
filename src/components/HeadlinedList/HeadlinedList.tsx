/**
 * HeadlinedList:
 * --------------
 * ...
 */

import clsx from 'clsx';
import List from '../List/List';
import { Heading } from '../Heading';
import { HDL_propsType } from './libs/types';

const HeadlinedList = ({
  wrapper = { tag: 'div', cssClass: '' },
  heading = { content: undefined, level: 3, cssClass: '' },
  list,
}: HDL_propsType) => {
  const Wrapper = wrapper.tag; // Dynamically creating the wrapper tag

  return (
    <Wrapper className={clsx('enj-HeadlinedList', wrapper.cssClass)}>
      <Heading level={heading.level} className={heading.cssClass}>
        {heading.content}
      </Heading>

      {/** A list receiving no params will render a skeleton animation */}
      {list?.content?.length ? <List {...list} /> : <List />}
    </Wrapper>
  );
};

export default HeadlinedList;
