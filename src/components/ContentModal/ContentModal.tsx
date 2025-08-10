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
import { ContentM_propsType } from './libs/types';

/**
 * Props for the ContentModal component
 */

export const ContentModal = ({
  isOpen,
  setIsOpen,
  modalLabel,
  modalHeading,
  modalSubHeading,
  modalSecondaryButtonText,
  onSecondaryButtonClick,
  children,
}: ContentM_propsType) => {
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {setIsOpen !== undefined && (
        <ComposedModal
          open={isOpen}
          onClose={handleClose}
          size="md" // Medium-sized modal (options: 'xs' | 'sm' | 'md' | 'lg')
        >
          <ModalHeader
            label={modalLabel}
            title={modalHeading}
            closeModal={handleClose}
          />

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
