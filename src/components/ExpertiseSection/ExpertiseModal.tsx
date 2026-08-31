import { useState, type ReactNode } from 'react';
import { ContentModal } from '../ContentModal/ContentModal';

interface ExpertiseModalProps {
  children: (open: () => void) => ReactNode;
  label?: string;
  heading: string;
  body?: ReactNode;
}

export const ExpertiseModal = ({
  children,
  label = 'Expertise',
  heading,
  body,
}: ExpertiseModalProps) => {
  const [isOpen, setIsOpen] = useState<boolean | undefined>(false);

  return (
    <>
      {children(() => setIsOpen(true))}
      <ContentModal
        isOpen={Boolean(isOpen)}
        setIsOpen={setIsOpen}
        modalLabel={label}
        modalHeading={heading}
        modalSecondaryButtonText="Close"
      >
        {body ?? (
          <p>
            This is placeholder content for {heading}. Replace it with the
            Contentful rich-text response when integrating the portfolio.
          </p>
        )}
      </ContentModal>
    </>
  );
};
