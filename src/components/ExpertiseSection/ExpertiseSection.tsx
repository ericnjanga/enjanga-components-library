import clsx from 'clsx';
import type { ExpertiseSectionProps } from './libs/types';
import { ExpertiseIntro } from './ExpertiseIntro';
import { ExpertiseItem } from './ExpertiseItem';
import { ExpertiseProfileCard } from './ExpertiseProfileCard';

export const ExpertiseSection = ({
  className,
  eyebrow,
  heading,
  description,
  items,
  profile,
}: ExpertiseSectionProps) => {
  const leftItems = items.slice(0, 2);
  const rightItems = items.slice(2);

  return (
    <section className={clsx('enj-expertiseSection', className)}>
      <div className="enj-expertiseSection__left">
        <ExpertiseIntro
          eyebrow={eyebrow}
          heading={heading}
          description={description}
        />
        <div className="enj-expertiseSection__items">
          {leftItems.map((item) => <ExpertiseItem key={item.id} {...item} />)}
        </div>
      </div>
      <ExpertiseProfileCard {...profile} />
      <div className="enj-expertiseSection__right">
        {rightItems.map((item) => <ExpertiseItem key={item.id} {...item} />)}
      </div>
    </section>
  );
};
