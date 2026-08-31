import clsx from 'clsx';
import type { ExpertiseIntroProps } from './libs/types';

export const ExpertiseIntro = ({
  className,
  eyebrow = 'Expertise',
  heading,
  description,
}: ExpertiseIntroProps) => (
  <header className={clsx('enj-expertiseIntro', className)}>
    <span className="enj-expertiseIntro__eyebrow">
      <span aria-hidden="true" />
      {eyebrow}
    </span>
    <h2>{heading}</h2>
    <p>{description}</p>
  </header>
);
