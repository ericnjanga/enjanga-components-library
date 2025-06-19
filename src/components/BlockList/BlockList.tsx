import styles from './_blockList.module.scss';
import clsx from 'clsx';

interface BlockListProps {
  title: string;
  h: 'h1' | 'h2' | 'h3' | 'h4';
  list: {
    name: string;
    href?: string;
  }[];
}

const BlockList = ({ title, h, list }: BlockListProps) => {
  return (
    <section className={clsx('enj-BlockList', 'block-list')}>
      {h === 'h1' && <h1>{title}</h1>}
      {h === 'h2' && <h2>{title}</h2>}
      {h === 'h3' && <h3>{title}</h3>}
      {h === 'h4' && <h4>{title}</h4>}

      <ul>
        {list.map((item, index) => {
          return (
            <li key={index}>
              {item.href ? <a href={item.href}>{item.name}</a> : item.name}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default BlockList;
