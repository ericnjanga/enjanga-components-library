import clsx from 'clsx';
import { ArrowUpRight } from '@carbon/icons-react';
import type { ExpertiseItemProps } from './libs/types';
import { ExpertiseModal } from './ExpertiseModal';

export const ExpertiseItem = ({
  className,
  title,
  description,
  modal,
}: ExpertiseItemProps) => (
  <ExpertiseModal
    label={modal?.label}
    heading={modal?.heading ?? title}
    body={modal?.body}
  >
    {(open) => (
      <button
        type="button"
        className={clsx('enj-expertiseItem', className)}
        onClick={open}
        aria-label={`Learn more about ${title}`}
      >
        <span className="enj-expertiseItem__icon" aria-hidden="true">
          <ArrowUpRight size={18} />
        </span>
        <span className="enj-expertiseItem__content">
          <strong>{title}</strong>
          <span>{description}</span>
        </span>
      </button>
    )}
  </ExpertiseModal>
);
