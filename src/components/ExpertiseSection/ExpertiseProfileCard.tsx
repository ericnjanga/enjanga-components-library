import clsx from 'clsx';
import { ArrowUpRight } from '@carbon/icons-react';
import type { ExpertiseProfileCardProps } from './libs/types';
import { ExpertiseModal } from './ExpertiseModal';

const ProfileMark = () => (
  <svg viewBox="0 0 48 48" aria-hidden="true">
    <circle cx="24" cy="15" r="9" />
    <path d="M9 43c0-11 6-17 15-17s15 6 15 17M24 23l2.4 4.7 5.2.8-3.8 3.7.9 5.2-4.7-2.5-4.7 2.5.9-5.2-3.8-3.7 5.2-.8z" />
  </svg>
);

export const ExpertiseProfileCard = ({
  className,
  statement,
  imageSrc,
  imageAlt,
  modal,
}: ExpertiseProfileCardProps) => (
  <ExpertiseModal
    label={modal?.label}
    heading={modal?.heading ?? 'About my experience'}
    body={modal?.body}
  >
    {(open) => (
      <button
        type="button"
        className={clsx('enj-expertiseProfile', className)}
        onClick={open}
        aria-label="Learn more about my experience"
      >
        <ProfileMark />
        <span className="enj-expertiseProfile__statement">{statement}</span>
        <span className="enj-expertiseProfile__media">
          <img src={imageSrc} alt={imageAlt} />
          <span className="enj-expertiseProfile__action" aria-hidden="true">
            <ArrowUpRight size={24} />
          </span>
        </span>
      </button>
    )}
  </ExpertiseModal>
);
