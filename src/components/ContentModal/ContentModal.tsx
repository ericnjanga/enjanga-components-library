/**
 * ContentModal Component
 *
 * A controlled modal dialog that displays content with a single secondary action button.
 * Built using Carbon's ComposedModal for consistent styling and behavior.
 *
 * @example
 * // Basic usage
 * <ContentModal
 *   isOpen={isOpen}
 *   setIsOpen={setIsOpen}
 *   modalHeading="Confirmation"
 *   modalSecondaryButtonText="Cancel"
 * >
 *   <p>Are you sure you want to proceed?</p>
 * </ContentModal>
 *
 * @example
 * // With all props
 * <ContentModal
 *   isOpen={isOpen}
 *   setIsOpen={setIsOpen}
 *   modalLabel="System Alert"
 *   modalHeading="Delete Item?"
 *   modalSubHeading="This action cannot be undone"
 *   modalSecondaryButtonText="Confirm Delete"
 *   onSecondaryButtonClick={handleDelete}
 * >
 *   <div className="confirmation-content">
 *     <p>You are about to delete: <strong>Important Document.pdf</strong></p>
 *   </div>
 * </ContentModal>
 */

import {
  ComposedModal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from '@carbon/react';

/**
 * Props for the ContentModal component
 */
export interface ContentModalProps {
  /** Controls whether the modal is visible */
  isOpen: boolean;
  /** State setter for modal visibility (Component won't be rendered is prop is not provided) */
  setIsOpen: React.Dispatch<React.SetStateAction<boolean | undefined>>;
  /** Optional label text displayed above the title */
  modalLabel?: string;
  /** Main modal heading/title */
  modalHeading: string;
  /** Optional subheading text */
  modalSubHeading?: string;
  /** Text for the secondary action button */
  modalSecondaryButtonText: string;
  /** Callback when secondary button is clicked */
  onSecondaryButtonClick?: () => void;
  /** Modal content children */
  children?: React.ReactNode;
}

export const ContentModal = ({
  isOpen,
  setIsOpen,
  modalLabel,
  modalHeading,
  modalSubHeading,
  modalSecondaryButtonText,
  onSecondaryButtonClick,
  children,
}: ContentModalProps) => {
  return (
    <>
      {setIsOpen !== undefined && (
        <ComposedModal
          open={isOpen}
          onClose={() => setIsOpen(false)}
          size="md" // Medium-sized modal (options: 'xs' | 'sm' | 'md' | 'lg')
        >
          <ModalHeader label={modalLabel} title={modalHeading} />

          <ModalBody>
            {modalSubHeading && (
              <p style={{ marginBottom: '1rem' }}>{modalSubHeading}</p>
            )}
            {children}
          </ModalBody>

          <ModalFooter>
            <Button
              kind="secondary"
              onClick={() => {
                onSecondaryButtonClick?.();
                setIsOpen(false);
              }}
            >
              {modalSecondaryButtonText}
            </Button>
          </ModalFooter>
        </ComposedModal>
      )}
    </>
  );
};

export default ContentModal;
