/**
 * Contact Modal:
 * ----------------
 * This modal contains a contact form
 * NOTE: This component IS NOT exported (Because the consumer app doesn't need to use it directly)
 */

import {
  Modal,
  TextInput,
  TextArea,
  Form,
  FormGroup,
  Stack,
} from '@carbon/react';
export interface ContactModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  modalLabel: string;
  modalHeading: string;
  modalSubHeading: string;
  modalPrimaryButtonText: string;
  modalSecondaryButtonText: string;
}

const ContactModal = ({
  isOpen,
  setIsOpen,
  modalLabel,
  modalHeading,
  modalSubHeading,
  modalPrimaryButtonText,
  modalSecondaryButtonText,
}: ContactModalProps) => {
  return (
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
  );
};

export default ContactModal;
