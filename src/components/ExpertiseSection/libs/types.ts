import type { ReactNode } from 'react';

export interface ExpertiseModalContent {
  label?: string;
  heading?: string;
  body?: ReactNode;
}

export interface ExpertiseItemData {
  id: string;
  title: string;
  description: string;
  modal?: ExpertiseModalContent;
}

export interface ExpertiseIntroProps {
  className?: string;
  eyebrow?: string;
  heading: string;
  description: string;
}

export interface ExpertiseItemProps extends ExpertiseItemData {
  className?: string;
}

export interface ExpertiseProfileCardProps {
  className?: string;
  statement: string;
  imageSrc: string;
  imageAlt: string;
  modal?: ExpertiseModalContent;
}

export interface ExpertiseSectionProps {
  className?: string;
  eyebrow?: string;
  heading: string;
  description: string;
  items: ExpertiseItemData[];
  profile: Omit<ExpertiseProfileCardProps, 'className'>;
}
