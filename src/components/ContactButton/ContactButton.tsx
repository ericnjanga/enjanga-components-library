/**
 * Contact Button:
 * ----------------
 * This button ships with a "contact" feature giving users communication access with the admin.
 * The process for now is a contact form modal.
 */
import { useState } from 'react';
import { Button } from '@carbon/react';
import {
  CarbonIconType,
  Email,
  Chat,
  CustomerService,
  CommunicationUnified,
} from '@carbon/icons-react';
import { ContactModal } from '../ContactModal';
import { CBNN_propsType, CB_Icons_opts } from './libs/types';

// Create a type-safe mapping between icon names and components
type IconName = (typeof CB_Icons_opts)[number];
const iconComponents: Record<IconName, CarbonIconType> = {
  Email,
  Chat,
  CustomerService,
  CommunicationUnified,
};

const ContactButton = ({
  btnText = 'Contact',
  btnIcon = 'Email',
  btnKind = 'primary',
  btnSize = 'md',
  modalLabel = 'Contact',
  modalHeading = 'Hello',
  modalSubHeading = '...',
  modalPrimaryButtonText = 'Submit',
  modalSecondaryButtonText = 'Cancel',
}: CBNN_propsType) => {
  const [isOpen, setIsOpen] = useState(false);

  // Getting the corresponding icon component
  const IconComponent = iconComponents[btnIcon];

  return (
    <>
      <Button
        renderIcon={IconComponent}
        kind={btnKind}
        size={btnSize}
        onClick={() => setIsOpen(true)}
      >
        {btnText}
      </Button>

      <ContactModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        modalLabel={modalLabel}
        modalHeading={modalHeading}
        modalSubHeading={modalSubHeading}
        modalPrimaryButtonText={modalPrimaryButtonText}
        modalSecondaryButtonText={modalSecondaryButtonText}
      />
    </>
  );
};

export default ContactButton;
