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
import { ContactM_propsType } from './libs/types';

const ContactModal = ({
  isOpen,
  setIsOpen,
  modalLabel,
  modalHeading,
  modalSubHeading,
  modalPrimaryButtonText,
  modalSecondaryButtonText,
}: ContactM_propsType) => {
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
