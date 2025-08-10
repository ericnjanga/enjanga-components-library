// ContactModal props type
// ----------------

export interface ContactM_propsType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  modalLabel: string;
  modalHeading: string;
  modalSubHeading: string;
  modalPrimaryButtonText: string;
  modalSecondaryButtonText: string;
}
