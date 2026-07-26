/**
 * Contact Modal:
 * ----------------
 * The ContactModal is a modal dialog that provides users with a quick way to submit their name, email, and a message. It combines the Carbon Design System’s Modal, Form, TextInput, and TextArea components into a prebuilt contact form.
 */

import { Modal, TextInput, TextArea, Form, Stack } from "@carbon/react";
import { ContactM_propsType } from "./libs/types";
import { useId, useRef } from "react";

const ContactModal = ({
  isOpen,
  setIsOpen,
  modalLabel,
  modalHeading,
  modalSubHeading,
  modalPrimaryButtonText,
  modalSecondaryButtonText,
}: ContactM_propsType) => {
  const formId = useId();
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <Modal
      open={isOpen}
      modalLabel={modalLabel}
      modalHeading={modalHeading}
      primaryButtonText={modalPrimaryButtonText}
      secondaryButtonText={modalSecondaryButtonText}
      onRequestClose={() => setIsOpen(false)}
      onRequestSubmit={() => {
        if (!formRef.current?.reportValidity()) return;
        setIsOpen(false);
      }}
    >
      <p style={{ marginBottom: "1rem" }}>{modalSubHeading}</p>
      <Form ref={formRef}>
        <Stack gap={5}>
          <TextInput
            id={`${formId}-name`}
            name="name"
            autoComplete="name"
            labelText="Name"
            placeholder="Enter your name"
            required
          />
          <TextInput
            id={`${formId}-email`}
            name="email"
            autoComplete="email"
            labelText="Email"
            placeholder="Enter your email"
            required
            type="email"
          />
          <TextArea
            id={`${formId}-message`}
            name="message"
            autoComplete="off"
            labelText="Message"
            placeholder="Enter your message"
            required
            rows={4}
          />
        </Stack>
      </Form>
    </Modal>
  );
};

export default ContactModal;
