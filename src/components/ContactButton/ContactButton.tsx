/**
 * Contact Button:
 * ----------------
 * This button ships with a "contact" feature giving users communication access with the admin.
 * The process for now is a contact form modal.
 */
import { useState } from 'react';
import {
  Button,
  Modal,
  TextInput,
  TextArea,
  Form,
  FormGroup,
  Stack,
} from '@carbon/react';
import type { CarbonIconType } from '@carbon/icons-react';
import {
  Email,
  Chat,
  CustomerService,
  CommunicationUnified,
} from '@carbon/icons-react';

export interface ContactButtonProps {
  btnText: string;
  btnIcon?: 'Email' | 'Chat' | 'CustomerService' | 'CommunicationUnified';
  btnKind?: 'primary' | 'secondary';
  btnSize?: 'sm' | 'md';
  modalLabel: string;
  modalHeading: string;
  modalSubHeading: string;
  modalPrimaryButtonText: string;
  modalSecondaryButtonText: string;
}

export const contactButtonIconsList = [
  'Email',
  'Chat',
  'CustomerService',
  'CommunicationUnified',
] as const;
export const contactButtonKindProps = ['primary', 'secondary'] as const;
export const contactButtonSizeProps = ['sm', 'md'] as const;

// Create a type-safe mapping between icon names and components
type IconName = (typeof contactButtonIconsList)[number];
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
}: ContactButtonProps) => {
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

      <Modal
        open={isOpen}
        modalLabel={modalLabel}
        modalHeading={modalHeading}
        primaryButtonText={modalPrimaryButtonText}
        secondaryButtonText={modalSecondaryButtonText}
        onRequestClose={() => setIsOpen(false)}
        onRequestSubmit={() => {
          console.log('Form submitted');
          setIsOpen(false);
        }}
      >
        <p style={{ marginBottom: '1rem' }}>{modalSubHeading}</p>
        <Form>
          <Stack gap={5}>
            <FormGroup legendText="">
              <TextInput
                id="name"
                labelText="Name"
                placeholder="Enter your name"
                required
              />
            </FormGroup>
            <FormGroup legendText="">
              <TextInput
                id="email"
                labelText="Email"
                placeholder="Enter your email"
                required
                type="email"
              />
            </FormGroup>
            <FormGroup legendText="">
              <TextArea
                id="message"
                labelText="Message"
                placeholder="Enter your message"
                required
                rows={4}
              />
            </FormGroup>
          </Stack>
        </Form>
      </Modal>
    </>
  );
};

export default ContactButton;
